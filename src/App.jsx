import './App.css'
import PageLayout from './components/layout/PageLayout.jsx'
import HeroSection from './components/organisms/HeroSection.jsx'
import TestimonialsSection from './components/organisms/TestimonialsSection.jsx'
import ServicesSection from './components/organisms/ServicesSection.jsx'
import CasesSection from './components/organisms/CasesSection.jsx'
import CatalogSection from './components/organisms/CatalogSection.jsx'
import AboutSection from './components/organisms/AboutSection.jsx'
import BlogSection from './components/organisms/BlogSection.jsx'
import ContactSection from './components/organisms/ContactSection.jsx'
import Footer from './components/organisms/Footer.jsx'

export default function App() {
  return (
    <PageLayout>
      <HeroSection />
      <TestimonialsSection />
      <ServicesSection />
      <CasesSection />
      <CatalogSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </PageLayout>
  )
}
