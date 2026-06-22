import { useId } from 'react'
import { SITE } from '../../config/site'

/**
 * CloudTech brand logo.
 *
 * Renders the cloud + circuit logomark (inline SVG so it scales crisply and
 * inherits brand gradients) with an optional wordmark and tagline.
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
            Cloud<span className="text-gradient">Tech</span>
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

/** The standalone cloud + circuit logomark. */
export function LogoMark({ className = '' }) {
  // Unique gradient id so multiple logos on one page don't collide.
  const gradientId = useId()

  return (
    <span className={`relative ${className}`}>
      <span className="absolute inset-0 -z-10 rounded-xl bg-brand-500/40 blur-lg transition-all duration-500 group-hover:bg-cyan-400/60 group-hover:blur-xl" />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 shadow-glow">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="CloudTech logo"
          className="h-6 w-6"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="6"
              y1="9"
              x2="42"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#dbeafe" />
            </linearGradient>
          </defs>

          {/* Cloud body */}
          <path
            d="M15 36a9 9 0 0 1-1.4-17.9A12 12 0 0 1 36.2 21 8 8 0 0 1 35 36H15Z"
            fill={`url(#${gradientId})`}
          />

          {/* Circuit detail */}
          <g
            stroke="#1a5cf5"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          >
            <path d="M18 27h4l2-3h4" />
            <path d="M24 27v4" />
            <path d="M30 24v-3" />
          </g>
          <g fill="#1a5cf5">
            <circle cx="18" cy="27" r="1.8" />
            <circle cx="30" cy="24" r="1.8" />
            <circle cx="24" cy="31" r="1.8" />
            <circle cx="30" cy="21" r="1.6" opacity="0.85" />
          </g>
        </svg>
      </span>
    </span>
  )
}
