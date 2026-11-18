import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" subtitle="Technologies I use to build and ship applications.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon: Icon, items }) => (
          <div key={title} className="glass p-6 transition hover:border-violet/60">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-lg bg-gradient-to-br from-violet to-electric p-2 text-white"><Icon size={20} /></span>
              <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
