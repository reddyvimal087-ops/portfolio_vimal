import { Users } from 'lucide-react'
import Section from './Section'

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership and activities">
      <div className="glass max-w-3xl p-6">
        <div className="flex items-start gap-4">
          <span className="rounded-lg bg-gradient-to-br from-violet to-electric p-2 text-white"><Users size={20} /></span>
          <div>
            <h3 className="text-xl font-semibold text-white">Core Member</h3>
            <p className="text-slate-300">VIBA (Vaagdevi Incubation And Business Accelerator)</p>
            <p className="text-sm text-slate-400">June 2024 – January 2025</p>
          </div>
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
          <li>Co-organized technical workshops, hackathons, and campus engagement activities.</li>
          <li>Led cross-departmental technical initiatives.</li>
          <li>Mentored peers in foundational programming concepts.</li>
        </ul>
      </div>
    </Section>
  )
}
