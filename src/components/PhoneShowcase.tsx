import { useEffect, useState } from 'react'
import { pinhalTour } from '../data/content'

const layers = Array.from({ length: 11 }, (_, i) => i + 1)

export function PhoneShowcase() {
  const { screens } = pinhalTour
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % screens.length)
    }, 3500)
    return () => clearInterval(id)
  }, [paused, screens.length])

  return (
    <section className="block" id="mobile">
      <div className="wrap">
        <div className="mobile">
          <div className="copy fx">
            <span className="label">Também no celular · 2025</span>
            <h3>PinhalTour</h3>
            <p className="desc">
              Plataforma de turismo inteligente de Espírito Santo do Pinhal, feita em trio. O app traça rotas como a do
              Café e do Vinho com Mapbox e lê QR codes dos totens. Um painel web cadastra pontos e mostra métricas de visitação.
            </p>
            <span className="label" style={{ textTransform: 'none', letterSpacing: 0 }}>
              React Native · Expo · Mapbox · Node.js · painel em React
            </span>
            <div className="links"><a href={pinhalTour.repo} target="_blank" rel="noopener">Código ↗</a></div>
          </div>
          <div className="phone-stage fx" data-tilt onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="phone" role="group" aria-roledescription="carrossel" aria-label="Telas do app PinhalTour">
              {layers.map((i) => <span key={i} className="layer" style={{ ['--i' as string]: i }} />)}
              <div className="screen">
                {screens.map((s, i) => (
                  <img key={s.src} src={s.src} alt={s.caption} className={i === index ? 'on' : undefined}
                    aria-hidden={i !== index} loading="lazy" />
                ))}
              </div>
            </div>
            <div className="dots">
              {screens.map((s, i) => (
                <button key={s.src} type="button" aria-label={`Mostrar: ${s.caption}`} aria-current={i === index}
                  onClick={() => { setIndex(i); setPaused(true) }} />
              ))}
            </div>
            <p className="screen-caption" aria-live="polite">{screens[index].caption}</p>
          </div>
        </div>
        <div className="dash fx">
          <div className="browser">
            <div className="bar"><i /><i /><i /><span className="url">Painel administrativo · PinhalTour</span></div>
            <img className="shot" src={pinhalTour.dashboard} width={1400} height={1031} loading="lazy"
              alt="Painel administrativo com visitas mensais, QR codes escaneados, gráfico de visitas e locais mais populares" />
          </div>
          <p className="note">O painel web acompanha visitas, leituras de QR code e os locais mais populares, e permite cadastrar novos pontos turísticos.</p>
        </div>
      </div>
    </section>
  )
}
