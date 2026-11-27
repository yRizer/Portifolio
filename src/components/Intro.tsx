import { profile } from '../data/content'

export function Intro() {
  const words = profile.tagline.split(' ')
  return (
    <section className="intro" id="inicio">
      <div className="stage" id="stage">
        <div className="beam" />
        <div className="grain" />
        <div className="spot" />
        <div className="hello">
          <span className="label">{profile.role}</span>
          <h1>Olá, sou Taynan<span className="dot">.</span></h1>
          <p className="tagline" id="tagline">
            {words.map((w, i) => (
              <span key={i}>{w} </span>
            ))}
          </p>
        </div>
        <div className="cue" aria-hidden="true"><span className="label">role</span><i /></div>
      </div>
    </section>
  )
}
