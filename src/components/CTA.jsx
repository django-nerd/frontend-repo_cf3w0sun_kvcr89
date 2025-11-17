export default function CTA() {
  return (
    <section id="contact" className="bg-[#071629] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-8 sm:p-10">
          <div className="max-w-2xl">
            <h3 className="text-white text-2xl font-semibold">See how Ads Defender protects your spend</h3>
            <p className="mt-2 text-slate-300/90">Request a live walkthrough with a security specialist. We’ll map your risk and outline an action plan in under 30 minutes.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="col-span-1 sm:col-span-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Work email" />
              <input className="col-span-1 sm:col-span-1 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Company" />
              <button type="button" className="col-span-1 w-full rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-emerald-400 transition-colors">Book a demo</button>
            </form>
            <p className="mt-3 text-xs text-slate-400">By submitting, you agree to our privacy policy and consent to be contacted.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
