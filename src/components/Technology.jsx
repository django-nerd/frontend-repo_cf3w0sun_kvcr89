import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Layer 1 — Tag: Visitor Forensics',
    points: [
      'Device fingerprinting with privacy-respecting hashing',
      'Bot behavior modeling and anomaly detection',
      'Latency, scroll and focus telemetry',
    ],
  },
  {
    title: 'Layer 2 — Tag: Session Integrity',
    points: [
      'Source validation and click-path reconstruction',
      'Invisible challenge flows (no UX friction)',
      'Geo, ISP and proxy intelligence',
    ],
  },
  {
    title: 'Layer 3 — Platform Tracking',
    points: [
      'Direct API integrations across Google, Microsoft, Meta',
      'Real-time invalid click suppression',
      'Budget reallocation and audience exclusions',
    ],
  },
]

function Card({ title, points }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0A2240]/40 p-6">
      <h3 className="text-white font-medium">{title}</h3>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-slate-300/90 text-sm">
            <CheckCircle2 className="text-emerald-400 shrink-0" size={16} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Technology() {
  return (
    <section id="technology" className="bg-[#071629] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">A three-layer defense with automatic protection</h2>
            <p className="mt-3 text-slate-300/90">Two lightweight on-site tags work in concert with platform-side tracking. Findings are actioned automatically to protect budgets and outcomes.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((s) => (
                <Card key={s.title} {...s} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B2A52] to-[#091C34] p-6">
            <div className="text-slate-300 text-sm leading-relaxed">
              <p>Our protection engine continuously correlates signals across tags and platforms. When risk is detected, actions are taken instantly:</p>
              <ul className="mt-4 space-y-2">
                {['Block abusive IPs and device fingerprints','Trigger smart challenges for suspicious sessions','Exclude audiences and adjust bids on the fly','Generate regulator-ready incident logs'].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
