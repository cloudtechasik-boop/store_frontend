import { useId } from 'react'
import { SITE } from '../../config/site'

/**
 * CloudTech brand logo.
 *
 * Renders the laptop logomark (inline SVG so it scales crisply and inherits
 * brand gradients) with an optional wordmark and tagline.
 *
 * @param {object}  props
 * @param {boolean} [props.showWordmark=true]  Show the "CloudTech" text.
 * @param {boolean} [props.showTagline=false]  Show the "Sales • Service • Repair" tagline.
 * @param {string}  [props.className]          Extra classes for the root element.
 */
export default function Logo({
  showWordmark = true,
  showTagline = false,
  className = '',
}) {
  return (
    <span className={`group relative flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-white lg:text-xl">
            Cloud
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Tech
            </span>
          </span>
          {showTagline && (
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
              {SITE.tagline}
            </span>
          )}
        </span>
      )}
    </span>
  )
}

/** The standalone laptop logomark. */
export function LogoMark({ className = '' }) {
  // Unique gradient id so multiple logos on one page don't collide.
  const gradientId = useId()

  return (
    <span className={`relative ${className}`}>
      <span className="absolute inset-0 -z-10 rounded-2xl bg-violet-500/40 blur-lg transition-all duration-500 group-hover:bg-indigo-400/60 group-hover:blur-xl" />
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-[0_0_40px_-10px_rgba(139,92,246,0.65)] ring-1 ring-white/25">
        {/* Glossy top highlight */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="CloudTech logo"
          className="relative h-7 w-7"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="10"
              y1="12"
              x2="38"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#ede9fe" />
            </linearGradient>
          </defs>

          {/* Laptop screen */}
          <rect
            x="13"
            y="12"
            width="22"
            height="15"
            rx="2.5"
            fill={`url(#${gradientId})`}
          />
          <rect x="16" y="15" width="16" height="9" rx="1" fill="#6d28d9" />

          {/* Laptop base */}
          <path
            d="M9 31h30l1.6 3.2a1.5 1.5 0 0 1-1.34 2.17H8.74A1.5 1.5 0 0 1 7.4 34.2L9 31Z"
            fill={`url(#${gradientId})`}
          />
        </svg>
      </span>
    </span>
  )
}
