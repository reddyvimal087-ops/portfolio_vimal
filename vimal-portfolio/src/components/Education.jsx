import { GraduationCap } from 'lucide-react'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="ml-4 border-l-2 border-white/15 pl-8">
        <li className="relative">
          <span className="absolute -left-[2.85rem] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet to-electric text-white"><GraduationCap size={16} /></span>
          <div className="glass p-6">
            <h3 className="text-xl font-semibold text-white">Bachelor of Technology (B.Tech)</h3>
            <p className="text-slate-200">Computer Science and Engineering · Specialization: Artificial Intelligence and Machine Learning</p>
            <p className="text-slate-300">Vaagdevi Engineering College, Warangal, Telangana</p>
            <p className="mt-2 text-sm text-slate-400">September 2023 – March 2027</p>
            <p className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">CGPA: 8.10</p>
          </div>
        </li>
      </ol>
    </Section>
  )
}
