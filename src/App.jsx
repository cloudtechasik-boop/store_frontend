import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Products from './components/sections/Products'
import PlaceholderSection from './components/sections/PlaceholderSection'
import ScrollProgress from './components/ui/ScrollProgress'
import FloatingActions from './components/ui/FloatingActions'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070b18] text-slate-100">
      <ScrollProgress />
      <Header />

      <main>
        <Hero />

        <Products />
        <PlaceholderSection
          id="services"
          eyebrow="Repair Lab"
          title="Professional Services"
          description="Certified technicians for laptop, desktop, camera repair, data recovery, software installation and hardware upgrades."
          alt
        />
        <PlaceholderSection
          id="offers"
          eyebrow="Deals"
          title="Latest Offers"
          description="Seasonal discounts and bundle deals on top tech — refreshed every week."
        />
        <PlaceholderSection
          id="about"
          eyebrow="Who We Are"
          title="About CloudTech"
          description="Your neighbourhood technology partner in Jhumpura, Keonjhar — delivering genuine products and expert service since day one."
          alt
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  )
}
