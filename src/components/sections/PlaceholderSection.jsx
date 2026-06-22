import { motion } from 'framer-motion'

/**
 * Generic, animated content section used for the Products/Services/Offers/About
 * placeholders until real content is wired in.
 */
export default function PlaceholderSection({
  id,
  eyebrow,
  title,
  description,
  alt = false,
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-24 lg:py-32 ${
        alt ? 'bg-white/[0.02]' : ''
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
            {eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
