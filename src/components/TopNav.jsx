import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const tabs = [
  { id: 'bi', label: 'BI', icon: '📊', color: 'text-chalk-blue-light bg-chalk-blue/15' },
  { id: 'data', label: 'Data Analysis', icon: '📈', color: 'text-chalk-green bg-chalk-green/15' },
  { id: 'python', label: 'Python/Pandas', icon: '🐍', color: 'text-chalk-yellow bg-chalk-yellow/15' },
]

export default function TopNav({ activeTab, setActiveTab, onToggleSidebar }) {
  return (
    <motion.nav initial={{ y: -60 }} animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-12 border-b border-board-border"
      style={{ background: 'rgba(20,37,61,0.92)', backdropFilter: 'blur(16px)' }}>
      <div className="flex items-center h-full px-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onToggleSidebar}
          className="lg:hidden p-1.5 mr-3 text-chalk-gray hover:text-chalk-blue-light transition-colors">
          <Menu size={18} />
        </motion.button>
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 mr-6">
          <span className="font-math text-xl text-chalk-yellow italic">∑</span>
          <span className="font-semibold text-chalk-blue-light hidden sm:inline">ilearning</span>
        </motion.div>
        <div className="flex items-center gap-1 bg-board-card/50 rounded-full p-0.5 border border-board-border">
          {tabs.map(tab => (
            <motion.button key={tab.id} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                activeTab === tab.id ? tab.color : 'text-chalk-gray hover:text-chalk-cream'
              }`}>
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3 text-chalk-gray/40 text-sm font-math italic">
          <span>f(x)</span><span>∫</span><span>Δ</span><span>π</span>
        </div>
      </div>
    </motion.nav>
  )
}
