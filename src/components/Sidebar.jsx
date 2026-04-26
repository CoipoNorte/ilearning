import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const topicsByTab = {
  bi: [
    { id: 'bi-intro', label: 'Qué es BI', icon: '📖' },
    { id: 'bi-concepts', label: 'Conceptos clave', icon: '🔑' },
    { id: 'bi-etl', label: 'ETL', icon: '🔄' },
    { id: 'bi-warehouse', label: 'Data Warehouse', icon: '🏗️' },
    { id: 'bi-kpi', label: 'KPIs y métricas', icon: '🎯' },
    { id: 'bi-tools', label: 'Herramientas', icon: '🧰' },
  ],
  data: [
    { id: 'da-intro', label: 'Qué es Data Analysis', icon: '📖' },
    { id: 'da-process', label: 'Proceso analítico', icon: '🔄' },
    { id: 'da-stats', label: 'Estadística básica', icon: '📊' },
    { id: 'da-viz', label: 'Visualización', icon: '📉' },
    { id: 'da-excel', label: 'Excel avanzado', icon: '📗' },
    { id: 'da-sql', label: 'SQL para análisis', icon: '🗄️' },
  ],
  python: [
    { id: 'py-intro', label: 'Python para datos', icon: '🐍' },
    { id: 'py-numpy', label: 'NumPy', icon: '🔢' },
    { id: 'py-pandas', label: 'Pandas', icon: '🐼' },
    { id: 'py-matplotlib', label: 'Matplotlib', icon: '📈' },
    { id: 'py-seaborn', label: 'Seaborn', icon: '🎨' },
    { id: 'py-project', label: 'Proyecto final', icon: '🏆' },
  ],
}

const tabActive = {
  bi: 'text-chalk-blue-light bg-chalk-blue/15',
  data: 'text-chalk-green bg-chalk-green/15',
  python: 'text-chalk-yellow bg-chalk-yellow/15',
}
const tabLabel = { bi: '📊 BI', data: '📈 Data', python: '🐍 Python' }

export default function Sidebar({ activeTab, activeTopic, setActiveTopic, collapsed, setCollapsed }) {
  const topics = topicsByTab[activeTab] || []
  const isMobile = () => window.innerWidth < 1024
  const handleSelect = (id) => { setActiveTopic(id); if (isMobile()) setCollapsed(true) }

  return (
    <>
      <AnimatePresence>
        {!collapsed && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setCollapsed(true)} />}
      </AnimatePresence>
      <motion.aside animate={{ width: collapsed ? (window.innerWidth >= 1024 ? 48 : 0) : 220 }}
        transition={{ duration: 0.3 }}
        className="fixed top-12 left-0 bottom-0 z-40 border-r border-board-border overflow-hidden flex flex-col"
        style={{ background: 'rgba(31,58,92,0.95)', backdropFilter: 'blur(12px)' }}>
        {!collapsed && (
          <div className="px-4 py-3 border-b border-board-border/50">
            <p className="text-[11px] text-chalk-gray font-semibold uppercase tracking-widest">{tabLabel[activeTab]}</p>
          </div>
        )}
        <div className="flex-1 overflow-y-auto py-1">
          {!collapsed && topics.map((topic, i) => (
            <motion.button key={topic.id}
              initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ x: 4 }}
              onClick={() => handleSelect(topic.id)}
              className={`w-full text-left px-4 py-2.5 flex items-center gap-2.5 text-[13px] font-medium transition-all ${
                activeTopic === topic.id ? `${tabActive[activeTab]} rounded-lg mx-1` : 'text-chalk-gray hover:text-chalk-cream'
              }`}>
              <span className="text-sm">{topic.icon}</span>
              <span className="truncate">{topic.label}</span>
            </motion.button>
          ))}
          {collapsed && topics.map(topic => (
            <button key={topic.id}
              onClick={() => { setActiveTopic(topic.id); if (!isMobile()) setCollapsed(false) }}
              className={`hidden lg:block w-full py-2.5 text-center text-sm transition-all ${
                activeTopic === topic.id ? tabActive[activeTab] : 'text-chalk-gray hover:text-chalk-cream'
              }`} title={topic.label}>{topic.icon}</button>
          ))}
        </div>
        <button onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center py-3 border-t border-board-border/50 text-chalk-gray hover:text-chalk-blue-light transition-colors">
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </motion.aside>
    </>
  )
}
