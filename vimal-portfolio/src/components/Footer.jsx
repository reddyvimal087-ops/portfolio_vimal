import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
    </footer>
  )
}
