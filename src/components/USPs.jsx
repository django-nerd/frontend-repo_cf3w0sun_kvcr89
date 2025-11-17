import { ShieldCheck, FileCheck, Database, Layers3, LockKeyhole, BookOpen } from 'lucide-react'

const Item = ({ icon: Icon, title, description }) => (
  <div className="group rounded-xl border border-white/10 bg-[#0A2240]/40 p-6 hover:border-emerald-500/40 transition-colors">
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-md bg-emerald-500/10 p-2 text-emerald-400">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="mt-2 text-slate-300/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

export default function USPs() {
  return (
    <section id="privacy" className="bg-[#071629] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Privacy, technology and research at the core</h2>
          <p className="mt-3 text-slate-300/90">Engineered for the strictest compliance requirements, powered by a proprietary three-layer monitoring system, and driven by continuous research.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Item icon={LockKeyhole} title="On-premise capable" description="Deploy to isolated environments with strict data residency and access controls." />
          <Item icon={FileCheck} title="Independent legal docs" description="Comprehensive, regulator-ready legal documentation and DPAs." />
          <Item icon={Database} title="Isolated processing" description="Segregated pipelines with automatic PII minimization and tokenization." />
          <Item icon={Layers3} title="Three-layer monitoring" description="Two on-site tags + platform-side tracking for unmatched coverage." />
          <Item icon={ShieldCheck} title="Automatic protection" description="Blocklists, smart CAPTCHAs and budget allocation adjustments applied in real-time." />
          <Item icon={BookOpen} title="Peer-reviewed research" description="Regular publications on attack vectors, detection methods and industry insights." />
        </div>
      </div>
    </section>
  )
}
