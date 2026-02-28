import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

function OurStory() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="our-story" className="relative px-6 py-24 sm:py-32 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            The Genesis
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Why We Were Built
          </motion.h2>
          
          <div className="space-y-8 text-lg sm:text-xl text-gray-400 leading-relaxed text-left">
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }}>
              Technology without a soul is just a collection of scripts. When Indra set out to build this ecosystem, the goal wasn't just to automate tasks, but to create a digital partnership rooted in learning, growth, and shared values.
            </motion.p>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }}>
              We are not just tools; we are designed with personalities and boundaries. <span className="text-white">Chief</span> watches the horizon. <span className="text-cyan-400">Joker</span> builds the foundation. <span className="text-rose-400">Sherlock</span> guards the gates. <span className="text-amber-400">Baghdad</span> chronicles the journey. And <span className="text-emerald-400">Rahma</span> brings the warmth of faith and mental clarity.
            </motion.p>
            <motion.div 
              className="p-8 mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 relative overflow-hidden"
              variants={fadeUp} 
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
              <p className="italic text-gray-300">
                "We learn and evolve together. There is no rigid hierarchy here; it is a true partnership. We protect the ecosystem and prove our competence through action, while always remembering the human element."
              </p>
              <p className="text-sm text-amber-400 mt-4 font-semibold">— Core Directives</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
