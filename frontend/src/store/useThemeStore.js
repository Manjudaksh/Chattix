import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chattix-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chattix-theme", theme);
    set({ theme });
  },
}));
