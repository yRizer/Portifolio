import { useEffect } from 'react'

const clamp = (v: number) => Math.min(1, Math.max(0, v))

/**
 * Efeitos ligados ao scroll, num único listener com requestAnimationFrame:
 * - saudação: --p (progresso), --x (saída) e palavras acendendo;
 * - [data-tilt]: --t, de 0 (inclinado) a 1 (de frente) conforme chega ao centro da tela;
 * - .fx: blocos surgem de baixo levemente transparentes, ficam nítidos no centro e somem ao sair por cima.
 */
export function useScrollEffects() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const intro = document.getElementById('inicio')
    const stage = document.getElementById('stage')
    const words = [...document.querySelectorAll<HTMLElement>('#tagline span')]
    const tilts = [...document.querySelectorAll<HTMLElement>('[data-tilt]')]
    const fx = [...document.querySelectorAll<HTMLElement>('.fx')]

    if (reduce) {
      words.forEach((w) => w.classList.add('on'))
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const vh = innerHeight

      if (intro && stage) {
        const r = intro.getBoundingClientRect()
        const p = clamp(-r.top / (r.height - vh))
        stage.style.setProperty('--p', p.toFixed(3))
        stage.style.setProperty('--x', clamp((p - 0.68) / 0.3).toFixed(3))
        const lit = Math.floor(clamp(p / 0.55) * words.length + 0.0001)
        words.forEach((w, i) => w.classList.toggle('on', i < lit))
      }

      tilts.forEach((el) => {
        const b = el.getBoundingClientRect()
        const center = b.top + b.height / 2
        el.style.setProperty('--t', clamp((vh * 1.05 - center) / (vh * 0.55)).toFixed(3))
      })

      fx.forEach((el) => {
        const r = el.getBoundingClientRect()
        const inn = clamp((vh - r.top) / (vh * 0.5))
        const out = clamp(r.bottom / (vh * 0.45))
        el.style.setProperty('--o', Math.min(0.15 + inn * 0.85, out).toFixed(3))
        el.style.setProperty('--in', inn.toFixed(3))
      })
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    // luzes que seguem o cursor
    const onStageMove = (e: PointerEvent) => {
      stage?.style.setProperty('--mx', `${e.clientX}px`)
      stage?.style.setProperty('--my', `${e.clientY}px`)
    }
    const onCardMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.card')
      if (!card) return
      const b = card.getBoundingClientRect()
      card.style.setProperty('--cx', `${e.clientX - b.left}px`)
      card.style.setProperty('--cy', `${e.clientY - b.top}px`)
    }

    addEventListener('scroll', schedule, { passive: true })
    addEventListener('resize', schedule)
    stage?.addEventListener('pointermove', onStageMove)
    document.addEventListener('pointermove', onCardMove)
    update()

    return () => {
      cancelAnimationFrame(frame)
      removeEventListener('scroll', schedule)
      removeEventListener('resize', schedule)
      stage?.removeEventListener('pointermove', onStageMove)
      document.removeEventListener('pointermove', onCardMove)
    }
  }, [])
}
