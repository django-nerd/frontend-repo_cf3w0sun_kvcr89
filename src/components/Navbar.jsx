import { useState } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Technology', href: '#technology' },
    { label: 'Privacy & Compliance', href: '#privacy' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-[#071629]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
              <ShieldCheck size={20} />
            </div>
            <span className="font-semibold tracking-tight text-white">Ads Defender</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400 transition-colors">
              Book a demo
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center p-2 text-slate-200">
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#071629]/95">
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <span className="font-semibold tracking-tight text-white">Ads Defender</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 text-slate-200"><X /></button>
          </div>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 text-base py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-400 transition-colors">
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
