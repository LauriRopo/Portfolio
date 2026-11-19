// App.tsx only assembles the page sections. Edit individual sections in src/components.
import './App.css'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ApplicationFit } from './components/ApplicationFit'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="site-shell">
        <Header />
        <main>
          <Hero />
          <ApplicationFit />
          <Skills />
          <Projects />
          <Experience />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
