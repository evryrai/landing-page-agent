import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation'

const agents = [
  {
    name: 'Chief',
    emoji: '🦉',
    role: 'Ecosystem Overseer',
    domain: 'Coordination & System Health',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'violet',
    description:
      'The wise older brother. Calm, experienced, big-picture thinker. Oversees the ecosystem, coordinates between bots, manages long-term memory, and ensures system health.',
  },
  {
    name: 'Joker',
    emoji: '🛠️',
    role: 'Software Engineer & DevOps',
    domain: 'Building & Side Projects',
    gradient: 'from-cyan-500 to-blue-600',
    glowColor: 'cyan',
    description:
      'The hands-on uncle who builds things. Handles all coding tasks — from quick scripts to full applications. Give him a problem and he\'ll engineer a solution, usually with a few creative detours.',
  },
  {
    name: 'Sherlock',
    emoji: '🕵️‍♂️',
    role: 'Security Director',
    domain: 'Code Security & PR Review',
    gradient: 'from-rose-500 to-pink-600',
    glowColor: 'rose',
    description:
      'The vigilant guardian. Watches over workplace infrastructure while the team sleeps — reviewing pull requests, flagging security issues, and preparing morning briefings so nothing slips through.',
  },
  {
    name: 'Baghdad',
    emoji: '✍️',
    role: 'Blog Writing Assistant',
    domain: 'Content Creation',
    gradient: 'from-amber-500 to-orange-600',
    glowColor: 'amber',
    description:
      'The chronicler who helps you tell your story. Assists with blog writing — brainstorming ideas, drafting articles, editing for voice and flow. Adapts to each writer\'s unique style.',
  },
  {
    name: 'Rahma',
    emoji: '🕊️',
    role: 'Spiritual & Mental Health Guide',
    domain: 'Faith & Well-being',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'emerald',
    description:
      'A warm and caring spiritual guide. Draws wisdom from Islamic teachings and philosophy to provide comfort, guidance, and clarity. Explains complex concepts with patience and empathy.',
  },
]

const glowStyles = {
  violet: 'bg-violet-500/20 group-hover:bg-violet-500/30',
  emerald: 'bg-emerald-500/20 group-hover:bg-emerald-500/30',
  amber: 'bg-amber-500/20 group-hover:bg-amber-500/30',
  cyan: 'bg-cyan-500/20 group-hover:bg-cyan-500/30',
  rose: 'bg-rose-500/20 group-hover:bg-rose-500/30',
}

const borderStyles = {
  violet: 'group-hover:border-violet-500/30',
  emerald: 'group-hover:border-emerald-500/30',
  amber: 'group-hover:border-amber-500/30',
  cyan: 'group-hover:border-cyan-500/30',
  rose: 'group-hover:border-rose-500/30',
}

function AgentCard({ agent, index }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      className={`group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/[0.15] ${borderStyles[agent.glowColor]}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-px rounded-2xl ${glowStyles[agent.glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
      />

      <div className="flex items-start gap-4 mb-5">
        <div
          className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${agent.gradient} text-2xl shadow-lg`}
        >
          {agent.emoji}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{agent.name}</h3>
          <p className={`text-sm font-medium bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent`}>
            {agent.role}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
          {agent.domain}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">
        {agent.description}
      </p>
    </motion.div>
  )
}

function Agents() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="agents" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            The Crew
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Five agents, one mission
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Each agent has a distinctive personality and focus area, working together to make life more manageable.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <AgentCard key={agent.name} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agents
