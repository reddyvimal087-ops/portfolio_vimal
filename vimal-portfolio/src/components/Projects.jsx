import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, ExternalLink, Check } from 'lucide-react'
import Section from './Section'
import { projects } from '../data'

function LinkButton({ href, icon: Icon, label }) {
  if (!href) {
    return <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/15 px-4 py-2 text-sm text-slate-500"><Icon size={16} /> {label} coming soon</span>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
      <Icon size={16} /> {label}
    </a>
  )
}

export default function Projects() {
  const [current, setCurrent] = useState(projects[0].id)
  const p = projects.find((x) => x.id === current)

  return (
    <Section id="projects" title="Projects" subtitle="Three projects across web development and machine learning. Select one to see the details.">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <div role="tablist" aria-label="Projects" className="flex gap-2 overflow-x-auto lg:flex-col">
          {projects.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === current}
              onClick={() => setCurrent(x.id)}
              className={`whitespace-nowrap rounded-xl px-4 py-3 text-left font-medium transition ${x.id === current ? 'btn-primary text-white' : 'glass text-slate-300 hover:text-white'}`}
            >
              {x.short}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={p.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="glass p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-white">{p.title}</h3>
            <p className="mt-3 text-slate-300">{p.description}</p>

            <h4 className="mt-6 font-semibold text-white">Key features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-slate-200"><Check size={18} className="mt-0.5 shrink-0 text-electric" /> {f}</li>
              ))}
            </ul>

            <h4 className="mt-6 font-semibold text-white">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{t}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={p.github} icon={Github} label="GitHub repository" />
              <LinkButton href={p.demo} icon={ExternalLink} label="Live demo" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  )
}
