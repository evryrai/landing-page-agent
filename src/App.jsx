import Hero from './components/Hero'
import Agents from './components/Agents'
import OurStory from './components/OurStory'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Hero />
      <Agents />
      <OurStory />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default App
