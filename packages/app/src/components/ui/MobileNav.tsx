import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from '../../contexts/LanguageContext'
import { ShinyText } from './index'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const toggle = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: t('NAV_TEAM'), href: '/team' },
    { label: t('NAV_PRICING'), href: '/pricing' },
    { label: t('NAV_SCHEDULE'), href: '/schedule' },
    { label: t('NAV_CONTACT'), href: '/contact' },
    { label: t('NAV_GALLERY'), href: '/gallery' },
  ]

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggle}
        className="relative z-50 cursor-pointer rounded-full border border-amber-500/20 bg-gray-900/50 p-2 text-amber-400 transition-colors hover:bg-amber-500/10 hover:text-amber-300"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={toggle}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 transform border-amber-900/30 border-l bg-gray-950 px-8 py-16 shadow-2xl transition-transform duration-300 ease-in-out sm:w-80 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Main Menu Links */}
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <div key={item.href} className="w-full">
              <Link to={item.href} onClick={toggle} className="block py-4">
                <ShinyText
                  variant="body"
                  className="block font-medium text-2xl uppercase tracking-wider transition-colors hover:text-gold"
                >
                  {item.label}
                </ShinyText>
              </Link>
              {index < menuItems.length - 1 && (
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
