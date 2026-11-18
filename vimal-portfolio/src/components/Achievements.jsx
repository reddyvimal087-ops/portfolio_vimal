import { Trophy } from 'lucide-react'
import Section from './Section'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="glass flex max-w-3xl items-start gap-5 border-violet/40 p-6 shadow-[0_0_40px_rgba(124,58,237,0.2)] md:p-8">
        <span className="rounded-xl bg-gradient-to-br from-violet to-electric p-3 text-white"><Trophy size={28} /></span>
        <div>
          <p className="text-sm text-slate-400">NASA Space Apps Challenge 2024</p>
          <h3 className="mt-1 text-2xl font-bold text-white">“Galactic Problem Solver”</h3>
          <p className="mt-3 text-slate-300">Recognized at a national-level hackathon hosted at Chandigarh University.</p>
        </div>
      </div>
    </Section>
  )
}
