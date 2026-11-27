import { useCallback } from 'react'

type Theme = 'light' | 'dark'

/** Tema segue o sistema do visitante até ele escolher no botão; a escolha fica salva no navegador. */
export function useTheme() {
  return useCallback(() => {
    const root = document.documentElement
    const current: Theme =
      (root.dataset.theme as Theme | undefined) ??
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next: Theme = current === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try {
      localStorage.setItem('tema', next)
    } catch {
      /* navegação privada: segue sem salvar */
    }
  }, [])
}
