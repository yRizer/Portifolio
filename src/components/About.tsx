import { stack } from '../data/content'

export function About() {
  return (
    <section className="block" id="sobre">
      <div className="wrap">
        <div className="head fx"><span className="label">Sobre</span><h2>Do banco de dados à interface.</h2></div>
        <div className="about fx">
          <p className="big">
            Há mais de quatro anos mantenho a plataforma do <b>Arquivo Histórico Pinhalense</b> em <b>PHP e MySQL</b>.
            Nesse caminho fui além: hoje construo aplicações em <b>React, Node.js e TypeScript</b> e modelos
            de <b>IA em Python</b> que leem e pesquisam manuscritos de séculos atrás.
          </p>
          <div className="stack">
            {stack.map((s) => (
              <div key={s.group}>
                <span className="label">{s.group}</span>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
