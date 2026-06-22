import { useMemo, useState } from 'react'
import { Star, ShoppingCart, ImageOff } from 'lucide-react'
import { PRODUCTS } from '../../data/products'
import { SITE } from '../../config/site'

const CATEGORIES = ['All', 'Laptops', 'Desktops', 'Cameras', 'Accessories']

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export default function Products() {
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () =>
      active === 'All'
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active]
  )

  return (
    <section id="products" className="relative scroll-mt-20 py-24 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
            Shop
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Premium Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            Browse our curated range of laptops, desktops, cameras and
            accessories from the brands you trust.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-transparent bg-gradient-to-r from-brand-500 to-cyan-500 text-white shadow-glow'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const { name, category, price, oldPrice, rating, badge, image, specs } =
    product
  const [status, setStatus] = useState('loading')

  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null

  const enquireUrl = `${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi CloudTech, I'm interested in the ${name} (${inr.format(price)}).`
  )}`

  return (
    <div className="glass-card group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {status !== 'loaded' && (
          <div className="absolute inset-0 flex items-center justify-center">
            {status === 'error' ? (
              <ImageOff className="h-9 w-9 text-slate-500" />
            ) : (
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-300" />
            )}
          </div>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          {badge && (
            <span className="rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
              {badge}
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-cyan-300">
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-amber-300">
            <Star className="h-3.5 w-3.5 fill-amber-300" />
            {rating}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold text-white">{name}</h3>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {specs.map((spec) => (
            <li
              key={spec}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
            >
              {spec}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white">
              {inr.format(price)}
            </span>
            {oldPrice && (
              <span className="text-sm text-slate-500 line-through">
                {inr.format(oldPrice)}
              </span>
            )}
          </div>
          <a
            href={enquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-cyan"
          >
            <ShoppingCart className="h-4 w-4" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  )
}
