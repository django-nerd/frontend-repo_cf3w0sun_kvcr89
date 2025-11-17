import { FileText, ArrowRight } from 'lucide-react'

const papers = [
  {
    title: 'Anomaly Signatures in Paid Media Clickstreams',
    blurb: 'A longitudinal study on bot-generated click patterns across major ad networks.',
  },
  {
    title: 'Evaluating Proxy Evasion in High-Budget Campaigns',
    blurb: 'Measuring the effectiveness of ISP, ASN and residential proxy detection.',
  },
  {
    title: 'Privacy-First Fingerprints for Ad Fraud Detection',
    blurb: 'Hash-based identification that meets strict compliance standards.',
  },
]

export default function Research() {
  return (
    <section id="research" className="bg-[#071629] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Research and insights</h2>
            <p className="mt-3 text-slate-300/90">We regularly publish peer-reviewed papers and in-depth reports to advance the state of the art in invalid traffic prevention.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            View all publications <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {papers.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-[#0A2240]/40 p-6 hover:border-emerald-500/40">
              <div className="flex items-center gap-2 text-slate-300">
                <FileText size={16} className="text-emerald-400" />
                <span className="text-xs">Research</span>
              </div>
              <h3 className="mt-3 text-white font-medium leading-snug">{p.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{p.blurb}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-emerald-400 group-hover:text-emerald-300">Read paper <ArrowRight size={16} /></button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
