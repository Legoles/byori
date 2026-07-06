import { onMounted, onBeforeUnmount } from 'vue'

let observer: IntersectionObserver | null = null

const ensureObserver = () => {
  if (observer || import.meta.server) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  return observer
}

export const useReveal = () => {
  const els: Element[] = []

  onMounted(() => {
    const obs = ensureObserver()
    if (!obs) return
    document.querySelectorAll('.reveal').forEach((el) => {
      obs.observe(el)
      els.push(el)
    })
  })

  onBeforeUnmount(() => {
    els.forEach((el) => observer?.unobserve(el))
  })
}
