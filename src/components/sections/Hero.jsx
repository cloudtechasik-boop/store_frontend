import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Cpu,
  BadgeIndianRupee,
  Headphones,
  Sparkles,
} from 'lucide-react'

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Genuine Products' },
  { icon: Cpu, label: 'Expert Repairs' },
  { icon: BadgeIndianRupee, label: 'Affordable Pricing' },
  { icon: Headphones, label: 'Customer Support' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* ===== Background ===== */}
      <HeroBackground />

      {/* ===== Content ===== */}
      <div className="container-px relative z-10 mx-auto w-full max-w-3xl">
        <div className="glass-card glass-ring rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-cyan-200 shadow-inner backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Your Trusted Technology Partner
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cloud<span className="text-gradient">Tech</span>
            <span className="mt-3 block bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl lg:text-3xl">
              Computer Sales • Repairs • Accessories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            Buy quality laptops, desktops, cameras and accessories — and get
            professional, reliable repair services from certified experts.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-cyan sm:w-auto"
            >
              View Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="glass flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-200 sm:w-auto"
            >
              <Wrench className="h-5 w-5" />
              Book Service
            </a>
          </div>

          {/* Trust Badges */}
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center backdrop-blur transition-colors hover:border-cyan-300/30 hover:bg-white/[0.1]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/30 to-cyan-500/30 text-cyan-200 shadow-inner">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-slate-200 lg:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Animated gradient base */}
      <div className="absolute inset-0 bg-[#070b18]" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(1200px 600px at 70% 10%, rgba(26,92,245,0.20), transparent 60%), radial-gradient(900px 500px at 15% 80%, rgba(6,182,212,0.18), transparent 60%)',
        }}
      />

      {/* Aurora blobs (static) */}
      <div className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-brand-600/25 blur-[120px]" />
      <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Circuit-board grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 75%)',
        }}
      />

      {/* Bottom fade to page bg */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070b18] to-transparent" />
    </div>
  )
}

