import { Briefcase } from 'lucide-react'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="ml-4 border-l-2 border-white/15 pl-8">
        <li className="relative">
          <span className="absolute -left-[2.85rem] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet to-electric text-white"><Briefcase size={16} /></span>
          <div className="glass p-6">
            <h3 className="text-xl font-semibold text-white">AI/ML Intern</h3>
            <p className="text-slate-300">UptoSkills · New Delhi, India</p>
            <p className="text-sm text-slate-400">May 2026 – August 2026</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
              <li>Contributed to the design and development of real-world AI-driven solutions and web applications.</li>
              <li>Collaborated with cross-functional teams to develop project features and improve workflows.</li>
              <li>Gained hands-on experience in software development, problem-solving, and agile practices.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              <span className="font-semibold text-white">Internship project:</span> OLMS, the Offer Letter Management System.
            </p>
          </div>
        </li>
      </ol>
    </Section>
  )
}
