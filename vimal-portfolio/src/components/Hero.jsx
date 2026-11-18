import { motion } from 'framer-motion'
import { Download, ArrowRight, Mail, Github, Linkedin, MapPin, User } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="glass inline-flex items-center gap-2 px-4 py-1.5 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to junior developer roles
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hi, I’m <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-100 md:text-2xl">Python Full Stack Developer | AI/ML Enthusiast</p>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            Building responsive web applications, developing backend systems, and exploring AI-powered solutions to solve real-world problems.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> {profile.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resume} download className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:brightness-110">
              <Download size={18} /> Download Resume
            </a>
            <a href="#projects" className="glass inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="glass p-3 text-slate-200 transition hover:text-white"><Linkedin size={20} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="glass p-3 text-slate-200 transition hover:text-white"><Github size={20} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex justify-center">
          <div className="rounded-full bg-gradient-to-br from-violet to-electric p-1 shadow-[0_0_60px_rgba(99,102,241,0.35)]">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-64 w-64 rounded-full object-cover md:h-72 md:w-72" />
            ) : (
              <div role="img" aria-label="Profile photo placeholder" className="flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-full bg-navy-2 text-slate-400 md:h-72 md:w-72">
                <User size={64} />
                <span className="text-sm">Profile photo</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
