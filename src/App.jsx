import Hero from './components/Hero'
import Agents from './components/Agents'
import HowItWorks from './components/HowItWorks'
import MockTerminal from './components/MockTerminal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Hero />
      <MockTerminal />
      <Agents />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default App
