import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp } from '../hooks/useScrollAnimation'

function Footer() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <footer className="relative px-6 py-16">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Indra's Agents
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          A personal AI agent ecosystem built on{' '}
          <a
            href="https://openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
          >
            OpenClaw
          </a>
          . Self-hosted, always learning, always available.
        </p>

        <div className="flex items-center justify-center gap-6 text-gray-600 text-xs">
          <span>Built by Indra</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Powered by OpenClaw</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href="https://github.com/evryrai/landing-page-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
