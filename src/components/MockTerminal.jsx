import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp } from '../hooks/useScrollAnimation'

const logs = [
  { agent: 'Sherlock', type: 'system', text: 'Initializing security protocols... OK' },
  { agent: 'Chief', type: 'info', text: 'Ecosystem online. Waiting for instructions.' },
  { agent: 'user', type: 'input', text: 'joker, update the landing page animation' },
  { agent: 'Joker', type: 'action', text: 'Hold my coffee. Building new floating animations...' },
  { agent: 'Joker', type: 'success', text: 'Animations compiled and pushed to branch feat/add-animations' },
  { agent: 'Sherlock', type: 'system', text: 'Reviewing PR #5... No vulnerabilities found. Approved.' },
  { agent: 'Chief', type: 'info', text: 'Merging into main. Deployment triggered.' },
  { agent: 'Baghdad', type: 'action', text: 'Drafting release notes for this update...' },
  { agent: 'Rahma', type: 'info', text: 'Alhamdulillah, another smooth deployment.' }
]

function MockTerminal() {
  const { ref, isInView } = useScrollAnimation()
  const [visibleLogs, setVisibleLogs] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isInView || currentIndex >= logs.length) return

    const timer = setTimeout(() => {
      setVisibleLogs(prev => [...prev, logs[currentIndex]])
      setCurrentIndex(prev => prev + 1)
    }, Math.random() * 800 + 400) // Random delay between 400ms and 1200ms

    return () => clearTimeout(timer)
  }, [currentIndex, isInView])

  return (
    <section className="relative px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="rounded-xl overflow-hidden border border-white/10 bg-[#0d0d12] shadow-2xl shadow-cyan-900/10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-xs text-gray-500 font-mono">
              root@openclaw-vps:~
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm sm:text-base h-80 overflow-y-auto flex flex-col gap-2">
            {visibleLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-3"
              >
                <span className="text-gray-500 shrink-0">
                  {new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}
                </span>
                
                {log.agent === 'user' ? (
                  <span className="text-white">
                    <span className="text-emerald-400">~/workspace $</span> {log.text}
                  </span>
                ) : (
                  <span className="text-gray-300">
                    <span className={`font-semibold mr-2 ${
                      log.agent === 'Joker' ? 'text-cyan-400' :
                      log.agent === 'Sherlock' ? 'text-rose-400' :
                      log.agent === 'Chief' ? 'text-violet-400' :
                      log.agent === 'Baghdad' ? 'text-amber-400' :
                      'text-emerald-400'
                    }`}>
                      [{log.agent}]
                    </span>
                    <span className={`${
                      log.type === 'success' ? 'text-emerald-300' :
                      log.type === 'system' ? 'text-gray-400' :
                      'text-gray-200'
                    }`}>
                      {log.text}
                    </span>
                  </span>
                )}
              </motion.div>
            ))}
            
            {/* Blinking Cursor */}
            {currentIndex < logs.length && (
              <motion.div 
                className="w-2 h-5 bg-white/50 mt-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
            {currentIndex >= logs.length && (
              <div className="flex gap-3 mt-1">
                <span className="text-emerald-400">~/workspace $</span>
                <motion.div 
                  className="w-2 h-5 bg-white/50"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MockTerminal
