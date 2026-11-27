import { timeline } from '../data/content'

export function Timeline() {
  return (
    <section className="block" id="trajetoria">
      <div className="wrap">
        <div className="head fx"><span className="label">Trajetória</span><h2>Experiência e formação.</h2></div>
        <ol className="timeline fx">
          {timeline.map((t) => (
            <li key={t.title}>
              <span className="when">{t.when}</span>
              <div>
                <h3>{t.title} <span className="org">· {t.org}</span></h3>
                <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
