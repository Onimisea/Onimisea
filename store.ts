import { create } from "zustand";

interface AppState {
  mobileNav: boolean;
  toggleMobileNav: (open: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  mobileNav: false,
  toggleMobileNav: (open) => set((state) => ({ mobileNav: open })),
}));
