import { useState } from 'react'
import { motion } from 'framer-motion'

const symbols = ['∑', '∫', 'π', 'Δ', '∞', 'λ', 'Ω', 'σ', 'μ', 'θ']

export default function MathCard({ title, icon, variant = 'default', children, delay = 0 }) {
  const [hovered, setHovered] = useState(false)
  const variants = {
    default: { border: 'rgba(46,80,119,0.6)', glow: 'rgba(69,123,157,0.1)' },
    blue: { border: 'rgba(69,123,157,0.5)', glow: 'rgba(69,123,157,0.15)' },
    green: { border: 'rgba(42,157,143,0.5)', glow: 'rgba(42,157,143,0.15)' },
    yellow: { border: 'rgba(255,209,102,0.4)', glow: 'rgba(255,209,102,0.1)' },
    purple: { border: 'rgba(109,89,122,0.5)', glow: 'rgba(109,89,122,0.15)' },
    red: { border: 'rgba(230,57,70,0.4)', glow: 'rgba(230,57,70,0.1)' },
    orange: { border: 'rgba(239,131,84,0.4)', glow: 'rgba(239,131,84,0.1)' },
    pink: { border: 'rgba(224,122,154,0.4)', glow: 'rgba(224,122,154,0.1)' },
  }
  const titleColors = {
    default: 'text-chalk-white', blue: 'text-chalk-blue-light', green: 'text-chalk-green',
    yellow: 'text-chalk-yellow', purple: 'text-chalk-purple', red: 'text-chalk-red',
    orange: 'text-chalk-orange', pink: 'text-chalk-pink',
  }
  const c = variants[variant] || variants.default
  const sym = symbols[Math.floor(Math.random() * symbols.length)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="board-card p-5 relative overflow-hidden cursor-default"
      style={{
        border: `1px solid ${hovered ? c.border : 'rgba(46,80,119,0.4)'}`,
        boxShadow: hovered ? `0 8px 32px ${c.glow}` : '0 2px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
      }}
    >
      {hovered && (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.06 }}
          className="absolute top-2 right-3 text-6xl font-math text-chalk-white pointer-events-none select-none">
          {sym}
        </motion.span>
      )}
      {title && (
        <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-board-border/50 relative z-10">
          {icon && <motion.span whileHover={{ rotate: 15, scale: 1.2 }} className="text-lg">{icon}</motion.span>}
          <h4 className={`text-[14px] font-semibold ${titleColors[variant]}`}>{title}</h4>
        </div>
      )}
      <div className="text-[13px] text-chalk-cream/70 leading-relaxed relative z-10">{children}</div>
    </motion.div>
  )
}
