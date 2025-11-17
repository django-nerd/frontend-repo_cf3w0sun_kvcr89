import Spline from '@splinetool/react-spline'
import { ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden bg-[#071629]">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <ShieldCheck size={14} className="text-emerald-400" />
              Enterprise-grade ad fraud protection
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              Ads Defender
              <span className="block text-slate-300 font-normal">Invalidate the invalid. Protect every paid click.</span>
            </h1>
            <p className="mt-6 text-slate-300/90 max-w-2xl">
              Built for banks, finance and global enterprises. Privacy-first architecture, a unique three-layer detection stack, and automated remediation across Google, Microsoft and Meta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
              <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-emerald-400 transition-colors">Book a demo</a>
              <a href="#technology" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">How it works</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#071629]/40 to-[#071629]" />
    </section>
  )
}
