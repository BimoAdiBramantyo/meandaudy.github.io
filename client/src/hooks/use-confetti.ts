import { useCallback } from "react";

export function useConfetti() {
  return useCallback(() => {
    if (typeof window !== 'undefined' && window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#e8b4a0', '#ef6c75']
      });
    }
  }, []);
}
