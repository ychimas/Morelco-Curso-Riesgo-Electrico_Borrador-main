import create from "zustand";

const useStore = create((set) => ({
  slideIndex: 0,
  setSlideIndex: (index) => set({ slideIndex: index }),
  totalSlides: 0,
  setTotalSlides: (total) => set({ totalSlides: total }),
  currentProgress: 0,
  setCurrentProgress: (progress) => set({ currentProgress: progress }),
  isOnDivisor: false,
  setIsOnDivisor: (bool) => set({ isOnDivisor: bool }),
}));

export default useStore;
