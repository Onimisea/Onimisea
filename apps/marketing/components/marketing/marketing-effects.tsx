"use client"

import { useEffect } from "react"

type NodePoint = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: boolean
  ph: number
}

export function MarketingEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const canvasElement = document.getElementById("hc")
    const heroElement = document.getElementById("hero")

    if (!(canvasElement instanceof HTMLCanvasElement) || !heroElement) {
      return
    }

    const context = canvasElement.getContext("2d")
    if (!context) {
      return
    }

    const canvas = canvasElement
    const hero = heroElement
    const ctx = context

    const maxDistance = 175
    let canvasWidth = 0
    let canvasHeight = 0
    let nodes: NodePoint[] = []
    let animationFrame = 0
    let paused = false

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvasWidth = hero.offsetWidth
      canvasHeight = hero.offsetHeight
      canvas.width = Math.floor(canvasWidth * dpr)
      canvas.height = Math.floor(canvasHeight * dpr)
      canvas.style.width = `${canvasWidth}px`
      canvas.style.height = `${canvasHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      const nodeCount = canvasWidth < 640 ? 24 : canvasWidth < 1024 ? 38 : 55

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2.2 + 0.8,
        pulse: Math.random() < 0.14,
        ph: Math.random() * Math.PI * 2,
      }))
    }

    function draw() {
      if (paused) return

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const first = nodes[i]
          const second = nodes[j]
          if (!first || !second) continue

          const dx = first.x - second.x
          const dy = first.y - second.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,127,255,${(1 - distance / maxDistance) * 0.11})`
            ctx.lineWidth = 0.8
            ctx.moveTo(first.x, first.y)
            ctx.lineTo(second.x, second.y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvasWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvasHeight) node.vy *= -1
        node.ph += 0.018

        if (node.pulse) {
          const scale = 1 + Math.sin(node.ph) * 0.45
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r * 6 * scale, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(0,127,255,.035)"
          ctx.fill()
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.r * 3.2 * scale, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(0,127,255,.09)"
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = node.pulse ? "rgba(0,127,255,.92)" : "rgba(0,127,255,.32)"
        ctx.fill()
      })

      const cx = canvasWidth / 2
      const cy = canvasHeight * 0.48
      const time = performance.now() * 0.001
      const fixed = [
        { x: cx - 210, y: cy + 18, r: 4, c: "0,127,255" },
        { x: cx - 92, y: cy - 56, r: 5, c: "0,127,255" },
        { x: cx + 42, y: cy - 22, r: 4, c: "255,181,0" },
        { x: cx + 154, y: cy + 42, r: 5, c: "0,127,255" },
        { x: cx + 235, y: cy - 68, r: 3, c: "34,197,94" },
      ]

      ctx.setLineDash([8, 10])
      ctx.lineDashOffset = -time * 28
      for (let index = 0; index < fixed.length - 1; index += 1) {
        const current = fixed[index]
        const next = fixed[index + 1]
        if (!current || !next) continue

        ctx.beginPath()
        ctx.strokeStyle = index === 1 ? "rgba(255,181,0,.32)" : "rgba(0,127,255,.28)"
        ctx.lineWidth = 1.2
        ctx.moveTo(current.x, current.y)
        ctx.bezierCurveTo(
          current.x + 55,
          current.y - 42,
          next.x - 55,
          next.y + 42,
          next.x,
          next.y
        )
        ctx.stroke()
      }
      ctx.setLineDash([])

      fixed.forEach((point, index) => {
        const scale = 1 + Math.sin(time * 1.8 + index) * 0.28
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r * 6 * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${point.c},.045)`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r * 2.8 * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${point.c},.13)`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${point.c},.9)`
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(draw)
    }

    const onResize = () => {
      cancelAnimationFrame(animationFrame)
      resize()
      init()
      if (!paused) draw()
    }

    const onVisibilityChange = () => {
      paused = document.hidden
      cancelAnimationFrame(animationFrame)
      if (!paused) draw()
    }

    let idleHandle = 0
    let idleTimeout: ReturnType<typeof setTimeout> | undefined

    const startAnimation = () => {
      resize()
      init()
      draw()
    }

    if ("requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(startAnimation, { timeout: 1400 })
    } else {
      idleTimeout = globalThis.setTimeout(startAnimation, 900)
    }

    window.addEventListener("resize", onResize)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      if (idleHandle) window.cancelIdleCallback(idleHandle)
      if (idleTimeout) globalThis.clearTimeout(idleTimeout)
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", onResize)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [])

  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate='reveal']")
    )

    if (animatedElements.length === 0) {
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animatedElements.forEach((element) => {
        element.dataset.revealed = "true"
      })
      return
    }

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((element) => {
        element.dataset.revealed = "true"
      })
      return
    }

    animatedElements.forEach((element) => {
      element.dataset.animatePending = "true"
    })

    function revealElement(element: HTMLElement) {
      delete element.dataset.animatePending
      element.dataset.revealed = "true"
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target instanceof HTMLElement) {
            revealElement(entry.target)
          }
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    )

    animatedElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const navElement = document.getElementById("nav")
    const progressElement = document.getElementById("scroll-progress")
    const topButtonElement = document.getElementById("scroll-top")
    const hamburgerElement = document.getElementById("ham")
    const mobileNavElement = document.getElementById("mob-nav")
    const mobileNavCloseElement = document.getElementById("mob-nav-close")
    const mainElement = document.getElementById("main-content")

    if (
      !navElement ||
      !progressElement ||
      !topButtonElement ||
      !hamburgerElement ||
      !mobileNavElement ||
      !(mobileNavCloseElement instanceof HTMLButtonElement)
    ) {
      return
    }

    const nav = navElement
    const progress = progressElement
    const topButton = topButtonElement
    const hamburger = hamburgerElement
    const mobileNav = mobileNavElement
    const mobileNavClose = mobileNavCloseElement
    const mobileNavFocusables = [
      mobileNavClose,
      ...Array.from(mobileNav.querySelectorAll<HTMLAnchorElement>("a")),
    ]

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.nav-links a[href^="#"], .nav-r a[href^="#"], .mob-nav a[href^="#"]'
      )
    )
    const sectionIds = [
      "hero",
      ...Array.from(
        new Set(
          navLinks.map((link) => link.getAttribute("href")?.slice(1)).filter(Boolean)
        )
      ),
    ]
    const sections = sectionIds
      .map((id) => (id ? document.getElementById(id) : null))
      .filter((section): section is HTMLElement => Boolean(section))
    let ticking = false

    function closeMobileNav({ restoreFocus = false } = {}) {
      mobileNav.dataset.open = "false"
      mobileNav.hidden = true
      hamburger.setAttribute("aria-expanded", "false")
      hamburger.setAttribute("aria-label", "Open menu")
      document.body.style.overflow = ""
      mainElement?.removeAttribute("inert")
      if (restoreFocus) hamburger.focus()
    }

    function setActive(id: string) {
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${id}`
        link.dataset.active = String(active)
        if (active) link.setAttribute("aria-current", "true")
        else link.removeAttribute("aria-current")
      })
    }

    function currentSection() {
      const marker = window.scrollY + Math.max(120, window.innerHeight * 0.34)
      let active = "hero"
      sections.forEach((section) => {
        if (section.offsetTop <= marker) active = section.id
      })
      return active
    }

    function updateScrollUi() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      progress.style.transform = `scaleX(${ratio})`
      nav.dataset.scrolled = String(window.scrollY > 36)
      topButton.dataset.visible = String(window.scrollY > 520)
      setActive(currentSection())
      ticking = false
    }

    function requestScrollUpdate() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateScrollUi)
      }
    }

    const onHamburgerClick = () => {
      const open = mobileNav.dataset.open !== "true"
      mobileNav.dataset.open = String(open)
      mobileNav.hidden = !open
      hamburger.setAttribute("aria-expanded", String(open))
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu")
      document.body.style.overflow = open ? "hidden" : ""
      mainElement?.toggleAttribute("inert", open)
      if (open) mobileNavClose.focus()
    }

    const onMobileNavCloseClick = () => {
      closeMobileNav({ restoreFocus: true })
    }

    const onKeydown = (event: KeyboardEvent) => {
      const isOpen = mobileNav.dataset.open === "true"

      if (event.key === "Escape" && isOpen) {
        closeMobileNav({ restoreFocus: true })
        return
      }

      if (event.key !== "Tab" || !isOpen || mobileNavFocusables.length === 0) return

      const firstFocusable = mobileNavFocusables[0]
      const lastFocusable = mobileNavFocusables.at(-1)
      if (!firstFocusable || !lastFocusable) return

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable.focus()
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable.focus()
      }
    }

    const anchorCleanup = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    ).map((anchor) => {
      const onClick = (event: MouseEvent) => {
        const targetId = anchor.getAttribute("href")
        if (!targetId || targetId === "#") return
        const target = document.querySelector(targetId)
        if (!target) return
        event.preventDefault()
        closeMobileNav()
        setActive(targetId.slice(1))
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        history.replaceState(null, "", targetId)
      }

      anchor.addEventListener("click", onClick)
      return () => anchor.removeEventListener("click", onClick)
    })

    const onTopClick = () => {
      closeMobileNav()
      setActive("hero")
      window.scrollTo({ top: 0, behavior: "smooth" })
      history.replaceState(null, "", "#hero")
    }

    hamburger.addEventListener("click", onHamburgerClick)
    mobileNavClose.addEventListener("click", onMobileNavCloseClick)
    document.addEventListener("keydown", onKeydown)
    topButton.addEventListener("click", onTopClick)
    window.addEventListener("scroll", requestScrollUpdate, { passive: true })
    window.addEventListener("resize", requestScrollUpdate)
    updateScrollUi()

    return () => {
      hamburger.removeEventListener("click", onHamburgerClick)
      mobileNavClose.removeEventListener("click", onMobileNavCloseClick)
      document.removeEventListener("keydown", onKeydown)
      topButton.removeEventListener("click", onTopClick)
      window.removeEventListener("scroll", requestScrollUpdate)
      window.removeEventListener("resize", requestScrollUpdate)
      anchorCleanup.forEach((cleanup) => cleanup())
    }
  }, [])

  return null
}
