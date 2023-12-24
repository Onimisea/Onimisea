const disableBodyScroll = (mobileNav: boolean) => {
  const scrollPosition = window.scrollY;

  if (mobileNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

export default disableBodyScroll;
