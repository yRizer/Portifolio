import { useTheme } from '../hooks/useTheme'

const links = [
  ['#sobre', 'Sobre'],
  ['#destaque', 'Destaque'],
  ['#projetos', 'Projetos'],
  ['#trajetoria', 'Trajetória'],
  ['#contato', 'Contato'],
] as const

export function Nav() {
  const toggle = useTheme()
  return (
    <nav className="nav" aria-label="Seções">
      <div className="wrap">
        <a className="logo" href="#inicio">taynan</a>
        <div className="right">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <button className="theme" type="button" onClick={toggle} aria-label="Alternar tema claro e escuro" title="Alternar tema">
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
            </svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
