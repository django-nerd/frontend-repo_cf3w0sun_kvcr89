import Navbar from './components/Navbar'
import Hero from './components/Hero'
import USPs from './components/USPs'
import Technology from './components/Technology'
import Research from './components/Research'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#071629]">
      <Navbar />
      <main>
        <Hero />
        <USPs />
        <Technology />
        <Research />
        <CTA />
      </main>
      <footer className="bg-[#061222] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Ads Defender. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
