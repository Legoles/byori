import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import gsap from 'gsap'

export const useMagnetic = (target: Ref<HTMLElement | null>, strength = 0.35) => {
  let raf = 0

  const onMove = (e: MouseEvent) => {
    const el = target.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: 'power3.out'
      })
    })
  }

  const onLeave = () => {
    const el = target.value
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' })
  }

  onMounted(() => {
    const el = target.value
    if (!el) return
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
  })

  onBeforeUnmount(() => {
    const el = target.value
    if (!el) return
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
    cancelAnimationFrame(raf)
  })
}
