import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export const useLenis = () => {
  const start = () => {
    if (import.meta.server) return
    if (lenisInstance) return lenisInstance

    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false
    })

    const raf = (time: number) => {
      lenisInstance?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return lenisInstance
  }

  return { start, instance: () => lenisInstance }
}
