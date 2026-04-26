import { motion } from 'framer-motion'

export default function LiveDemo({ title, children }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
      className="board-card overflow-hidden hover:border-chalk-green/40 transition-colors duration-300">
      <div className="flex items-center gap-2 px-4 py-2 bg-board-dark/50 border-b border-board-border">
        <span className="text-chalk-green text-sm">∑</span>
        <span className="text-[11px] text-chalk-gray">{title || 'Output'}</span>
      </div>
      <div className="p-5">{children}</div>
    </motion.div>
  )
}
