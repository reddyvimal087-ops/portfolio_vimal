import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import Section from './Section'
import { profile } from '../data'

const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-electric focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const key = import.meta.env.VITE_WEB3FORMS_KEY

    if (!key) {
      setStatus({ type: 'error', msg: `The form isn’t connected yet. Please email me directly at ${profile.email}.` })
      return
    }
    setStatus({ type: 'loading', msg: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, access_key: key, from_name: 'Portfolio website' }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus({ type: 'success', msg: 'Message sent. Thank you, I’ll reply soon.' })
        form.reset()
      } else {
        throw new Error(json.message)
      }
    } catch {
      setStatus({ type: 'error', msg: `Couldn’t send the message. Please email me at ${profile.email}.` })
    }
  }

  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: 'linkedin.com/in/vimalreddy-pannala', href: profile.linkedin },
    { icon: Github, label: 'github.com/reddyvimal087-ops', href: profile.github },
  ]

  return (
    <Section id="contact" title="Contact" subtitle="Hiring for a Python, Django, React.js or backend role? Send me a message.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-4">
          {items.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass flex items-center gap-4 p-4 text-slate-200 transition hover:bg-white/10">
                <Icon size={20} className="shrink-0 text-electric" /> <span className="break-all">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="glass space-y-4 p-6" noValidate={false}>
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-1 block text-sm text-slate-300">Name</label><input id="name" name="name" required className={field} placeholder="Your name" autoComplete="name" /></div>
            <div><label htmlFor="email" className="mb-1 block text-sm text-slate-300">Email</label><input id="email" name="email" type="email" required className={field} placeholder="you@company.com" autoComplete="email" /></div>
          </div>
          <div><label htmlFor="subject" className="mb-1 block text-sm text-slate-300">Subject</label><input id="subject" name="subject" required className={field} placeholder="Role or opportunity" /></div>
          <div><label htmlFor="message" className="mb-1 block text-sm text-slate-300">Message</label><textarea id="message" name="message" required rows={5} className={field} placeholder="How can I help?" /></div>
          <button type="submit" disabled={status.type === 'loading'} className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:brightness-110 disabled:opacity-60">
            <Send size={18} /> {status.type === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          <p role="status" aria-live="polite" className={`flex items-start gap-2 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-amber-300'}`}>
            {status.type === 'success' && <CheckCircle2 size={18} className="shrink-0" />}
            {status.type === 'error' && <AlertCircle size={18} className="shrink-0" />}
            {status.msg}
          </p>
        </form>
      </div>
    </Section>
  )
}
