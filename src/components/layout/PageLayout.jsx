import Navbar from '../organisms/Navbar.jsx'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
