import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const allTopicsOrdered = [
  { id: 'bi-intro', label: 'Qué es BI', tab: 'bi' },
  { id: 'bi-concepts', label: 'Conceptos clave', tab: 'bi' },
  { id: 'bi-etl', label: 'ETL', tab: 'bi' },
  { id: 'bi-warehouse', label: 'Data Warehouse', tab: 'bi' },
  { id: 'bi-kpi', label: 'KPIs y métricas', tab: 'bi' },
  { id: 'bi-tools', label: 'Herramientas BI', tab: 'bi' },
  { id: 'da-intro', label: 'Qué es Data Analysis', tab: 'data' },
  { id: 'da-process', label: 'Proceso analítico', tab: 'data' },
  { id: 'da-stats', label: 'Estadística básica', tab: 'data' },
  { id: 'da-viz', label: 'Visualización', tab: 'data' },
  { id: 'da-excel', label: 'Excel avanzado', tab: 'data' },
  { id: 'da-sql', label: 'SQL para análisis', tab: 'data' },
  { id: 'py-intro', label: 'Python para datos', tab: 'python' },
  { id: 'py-numpy', label: 'NumPy', tab: 'python' },
  { id: 'py-pandas', label: 'Pandas', tab: 'python' },
  { id: 'py-matplotlib', label: 'Matplotlib', tab: 'python' },
  { id: 'py-seaborn', label: 'Seaborn', tab: 'python' },
  { id: 'py-project', label: 'Proyecto final', tab: 'python' },
]

const tabColors = {
  bi: 'border-bi-blue/30 text-chalk-blue-light',
  data: 'border-data-green/30 text-chalk-green',
  python: 'border-python-yellow/30 text-chalk-yellow',
}

export default function TopicNav({ currentTopic, onNavigate, onTabChange }) {
  const idx = allTopicsOrdered.findIndex(t => t.id === currentTopic)
  if (idx === -1) return null
  const prev = idx > 0 ? allTopicsOrdered[idx - 1] : null
  const next = idx < allTopicsOrdered.length - 1 ? allTopicsOrdered[idx + 1] : null
  const progress = Math.round(((idx + 1) / allTopicsOrdered.length) * 100)

  const handleNav = (topic) => {
    if (topic.tab !== allTopicsOrdered[idx].tab) onTabChange(topic.tab)
    onNavigate(topic.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-10 pt-6 border-t border-board-border">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] text-chalk-gray font-code">{idx + 1}/{allTopicsOrdered.length}</span>
        <div className="flex-1 h-1.5 bg-board-dark rounded-full overflow-hidden border border-board-border">
          <motion.div className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #457b9d, #2a9d8f, #ffd166)' }}
            initial={{ width: 0 }} animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8 }} />
        </div>
        <span className="text-[11px] text-chalk-yellow font-semibold">{progress}%</span>
      </div>
      <div className="flex justify-between gap-3">
        {prev ? (
          <motion.button whileHover={{ x: -3 }} onClick={() => handleNav(prev)}
            className={`flex items-center gap-2 flex-1 text-left px-4 py-3 rounded-xl board-card border ${tabColors[prev.tab]} text-xs transition-all`}>
            <ChevronLeft size={14} />
            <div><div className="text-[10px] text-chalk-gray">← anterior</div><div className="font-semibold">{prev.label}</div></div>
          </motion.button>
        ) : <div className="flex-1" />}
        {next ? (
          <motion.button whileHover={{ x: 3 }} onClick={() => handleNav(next)}
            className={`flex items-center justify-end gap-2 flex-1 text-right px-4 py-3 rounded-xl board-card border ${tabColors[next.tab]} text-xs transition-all`}>
            <div><div className="text-[10px] text-chalk-gray">siguiente →</div><div className="font-semibold">{next.label}</div></div>
            <ChevronRight size={14} />
          </motion.button>
        ) : (
          <div className="flex-1 board-card rounded-xl p-3 text-center border border-chalk-green/30">
            <span className="text-chalk-green text-xs font-semibold">∑ ¡Curso completado! 📊</span>
          </div>
        )}
      </div>
    </div>
  )
}
