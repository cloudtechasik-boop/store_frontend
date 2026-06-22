import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import Logo from '../ui/Logo'
import { NAV_LINKS } from '../../data/navigation'
import { SERVICES } from '../../data/services'
import { SOCIALS } from '../../data/socials'
import { SITE } from '../../config/site'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#05070f]"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-px relative mx-auto max-w-7xl py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Company */}
          <motion.div variants={fadeUp} custom={0}>
            <a href="#home">
              <Logo />
            </a>
            <p className="mt-4 text-sm font-medium text-slate-300">
              {SITE.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Your trusted technology partner for quality laptops, desktops,
              cameras and accessories — backed by certified, affordable repair
              services.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.18, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={1}>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={2}>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={3}>
            <FooterHeading>Contact Information</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span>
                  <span className="font-semibold text-slate-200">
                    {SITE.name}
                  </span>
                  <br />
                  {SITE.address.line1},
                  <br />
                  {SITE.address.city}
                  <br />
                  {SITE.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-cyan-300" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-cyan-300" />
                  {SITE.email}
                </a>
              </li>
            </ul>

            <motion.a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
            >
              Book Service
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-14 h-px origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left"
        >
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            {SITE.tagline} — {SITE.address.city}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function FooterHeading({ children }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
      {children}
    </h3>
  )
}
