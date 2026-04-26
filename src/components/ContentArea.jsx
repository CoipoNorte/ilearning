import { motion, AnimatePresence } from 'framer-motion'
import { biTopics } from '../data/biTopics'
import { dataTopics } from '../data/dataTopics'
import { pythonTopics } from '../data/pythonTopics'
import TopicNav from './ui/TopicNav'

const allTopics = { ...biTopics, ...dataTopics, ...pythonTopics }

export default function ContentArea({ activeTab, activeTopic, setActiveTopic, setActiveTab, sidebarCollapsed }) {
  const TopicComponent = allTopics[activeTopic]
  const info = {
    bi: { icon: '📊', name: 'Business Intelligence', desc: 'Datos para decisiones', color: 'text-chalk-blue-light', sym: '∑' },
    data: { icon: '📈', name: 'Data Analysis', desc: 'Explorar y entender datos', color: 'text-chalk-green', sym: '∫' },
    python: { icon: '🐍', name: 'Python & Pandas', desc: 'Herramientas de análisis', color: 'text-chalk-yellow', sym: 'λ' },
  }
  const t = info[activeTab]

  return (
    <div className={`pt-12 min-h-screen transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-12' : 'lg:pl-[220px]'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {TopicComponent ? (
            <motion.div key={activeTopic}
              initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="board-card p-6 chalk-glow">
              <TopicComponent />
              <TopicNav currentTopic={activeTopic} onNavigate={setActiveTopic} onTabChange={setActiveTab} />
            </motion.div>
          ) : (
            <motion.div key="welcome" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              className="board-card p-16 text-center chalk-glow relative overflow-hidden">
              <motion.span animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-6 right-8 text-7xl font-math text-chalk-white/5 select-none">{t.sym}</motion.span>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-6">{t.icon}</motion.div>
              <h2 className={`text-3xl font-extrabold ${t.color} mb-2`}>{t.name}</h2>
              <p className="text-chalk-gray mb-8">{t.desc}</p>
              <div className="board-card p-4 max-w-sm mx-auto text-left text-[13px] text-chalk-gray">
                <p>👈 Selecciona un tema del sidebar</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
