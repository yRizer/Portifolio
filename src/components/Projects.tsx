import { projects } from '../data/content'
import { LineDetectorDemo } from './LineDetectorDemo'

export function Projects() {
  return (
    <section className="block" id="projetos">
      <div className="wrap">
        <div className="head fx">
          <span className="label">Projetos</span>
          <h2>IA aplicada ao acervo e outros trabalhos.</h2>
          <p>Os três primeiros formam um pipeline: encontrar as linhas, ler o manuscrito e responder perguntas sobre ele.</p>
        </div>
        <LineDetectorDemo />
        <div className="grid fx">
          {projects.map((p) => (
            <article key={p.title} className={p.half ? 'card half' : 'card'}>
              <div className="top"><span className="label">{p.kicker}</span>{p.metric && <span className="tech">{p.metric}</span>}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="tech">{p.tech}</span>
              {p.link && (
                <div className="links"><a href={p.link.href} target="_blank" rel="noopener">{p.link.label} ↗</a></div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
