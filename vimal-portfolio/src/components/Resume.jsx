import { FileText, Download } from 'lucide-react'
import Section from './Section'
import { profile } from '../data'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="glass flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center md:p-8">
        <div className="flex items-center gap-4">
          <span className="rounded-xl bg-white/10 p-3 text-white"><FileText size={28} /></span>
          <div>
            <h3 className="text-lg font-semibold text-white">Vimal Reddy Pannala: Resume (PDF)</h3>
            <p className="text-sm text-slate-400">Education, skills, internship, projects and achievements on one page.</p>
          </div>
        </div>
        <a href={profile.resume} download className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:brightness-110">
          <Download size={18} /> Download Resume
        </a>
      </div>
    </Section>
  )
}
