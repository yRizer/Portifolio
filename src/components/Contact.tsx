import { useState } from 'react'
import { profile } from '../data/content'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      const el = document.getElementById('email')
      if (el) getSelection()?.selectAllChildren(el)
    }
  }
  return (
    <section className="block contact" id="contato">
      <div className="wrap fx">
        <span className="label">Contato · {profile.availability}</span>
        <h2>Vamos conversar.</h2>
        <div className="mail">
          <a id="email" href={`mailto:${profile.email}`} style={{ textDecoration: 'none' }}><span>{profile.email}</span></a>
          <button className="btn" type="button" onClick={copy}>{copied ? 'copiado' : 'copiar e-mail'}</button>
        </div>
        <div className="links">
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
