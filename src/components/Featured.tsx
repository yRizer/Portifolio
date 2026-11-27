import { ahp } from '../data/content'

export function Featured() {
  return (
    <section className="block" id="destaque">
      <div className="wrap">
        <div className="case">
          <div className="copy fx">
            <div>
              <span className="label">Projeto principal · desde 2022</span>
              <h3 style={{ marginTop: '.8rem' }}>Arquivo Histórico Pinhalense</h3>
              <p className="desc">
                Plataforma dos cursos de História e Engenharia de Computação da Unipinhal que digitaliza e publica o
                acervo histórico de Espírito Santo do Pinhal e região. Novos documentos entram toda semana.
              </p>
              <div className="figs">
                {ahp.figures.map((f) => (
                  <div key={f.value}><b>{f.value}</b><span>{f.label}</span></div>
                ))}
              </div>
              <div className="links" style={{ marginTop: '1.4rem' }}>
                <a href={ahp.url} target="_blank" rel="noopener">Ver o site ↗</a>
              </div>
            </div>
            <dl className="specs">
              {ahp.specs.map((s) => (
                <div key={s.k} style={{ display: 'contents' }}><dt>{s.k}</dt><dd>{s.v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="stage3d fx" data-tilt>
            <div className="browser">
              <div className="bar"><i /><i /><i /><span className="url">{ahp.host}</span></div>
              <img className="shot" src={ahp.screenshot} width={1400} height={755} loading="lazy"
                alt="Página inicial do Arquivo Histórico Pinhalense, com logo, menu e texto de apresentação sobre fundo de documentos antigos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
