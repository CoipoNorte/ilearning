import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, language = 'python', title }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className="board-card overflow-hidden hover:border-chalk-blue/50 transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-2 bg-board-dark/50 border-b border-board-border">
        <div className="flex items-center gap-2">
          <span className="text-chalk-yellow text-xs">{'>'}_</span>
          <span className="text-[11px] text-chalk-gray font-code">{title || language}</span>
        </div>
        <motion.button whileTap={{ scale: 0.85 }} onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-board-hover text-chalk-gray hover:text-chalk-white transition-colors">
          {copied ? <Check size={13} className="text-chalk-green" /> : <Copy size={13} />}
        </motion.button>
      </div>
      <div className="p-4 overflow-x-auto bg-board-dark grid-paper">
        <pre className="font-code text-[13px] leading-relaxed">
          <code className="text-chalk-cream/90">{code.trim()}</code>
        </pre>
      </div>
    </motion.div>
  )
}
