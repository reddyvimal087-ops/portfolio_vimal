import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1024]/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="text-lg font-bold text-white">
          Vimal<span className="grad-text"> Reddy</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-white ${active === id ? 'bg-white/10 text-white' : 'text-slate-400'}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-lg p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-[#0A1024] px-5 pb-4 lg:hidden">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-slate-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
