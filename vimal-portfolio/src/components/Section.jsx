import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>}
          <div className="mt-10">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}
