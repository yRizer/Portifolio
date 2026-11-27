import { Nav } from './components/Nav'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Featured } from './components/Featured'
import { Projects } from './components/Projects'
import { PhoneShowcase } from './components/PhoneShowcase'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { profile } from './data/content'
import { useScrollEffects } from './hooks/useScrollEffects'

const Rule = () => <div className="wrap"><div className="rule" /></div>

export default function App() {
  useScrollEffects()
  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Nav />
      <main>
        <Intro />
        <About />
        <Rule />
        <Featured />
        <Rule />
        <Projects />
        <PhoneShowcase />
        <Rule />
        <Timeline />
        <Contact />
      </main>
      <footer>
        <div className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></div>
      </footer>
    </>
  )
}
