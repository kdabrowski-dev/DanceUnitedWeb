import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from 'react-router'

import type { Route } from './+types/root'
import { Footer } from './components/Footer'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MobileNav, ShinyText } from './components/ui'
import { LanguageProvider, useTranslation } from './contexts/LanguageContext'
import { asset } from './lib/asset'
import './app.css'

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: asset('/favicon.ico') },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'style',
    href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

function AppContent() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <header className="relative z-50 flex-none border-amber-900/20 border-b bg-gray-950">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2 xl:gap-3">
            <img src={asset('/logos/logo-transparent.webp')} alt="Dance United" className="h-11 w-auto xl:h-14" />
            <ShinyText as="span" variant="title" className="shrink-0 whitespace-nowrap text-lg xl:text-2xl">
              {t('BRAND_NAME')}
            </ShinyText>
          </Link>

          {/* Desktop Navigation */}
          <div className="mx-4 hidden max-w-2xl flex-1 items-center justify-evenly lg:flex xl:mx-8">
            <Link to="/team" className="px-3.5 py-2 transition-transform duration-200 hover:scale-105">
              <ShinyText
                variant="body"
                className="whitespace-nowrap font-medium text-base uppercase tracking-wider transition-colors hover:text-gold xl:text-lg"
              >
                {t('NAV_TEAM')}
              </ShinyText>
            </Link>
            <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
            <Link to="/pricing" className="px-3.5 py-2 transition-transform duration-200 hover:scale-105">
              <ShinyText
                variant="body"
                className="whitespace-nowrap font-medium text-base uppercase tracking-wider transition-colors hover:text-gold xl:text-lg"
              >
                {t('NAV_PRICING')}
              </ShinyText>
            </Link>
            <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
            <Link to="/schedule" className="px-3.5 py-2 transition-transform duration-200 hover:scale-105">
              <ShinyText
                variant="body"
                className="whitespace-nowrap font-medium text-base uppercase tracking-wider transition-colors hover:text-gold xl:text-lg"
              >
                {t('NAV_SCHEDULE')}
              </ShinyText>
            </Link>
            <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
            <Link to="/contact" className="px-3.5 py-2 transition-transform duration-200 hover:scale-105">
              <ShinyText
                variant="body"
                className="whitespace-nowrap font-medium text-base uppercase tracking-wider transition-colors hover:text-gold xl:text-lg"
              >
                {t('NAV_CONTACT')}
              </ShinyText>
            </Link>
            <div className="h-7 w-[1px] bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
            <Link to="/gallery" className="px-3.5 py-2 transition-transform duration-200 hover:scale-105">
              <ShinyText
                variant="body"
                className="whitespace-nowrap font-medium text-base uppercase tracking-wider transition-colors hover:text-gold xl:text-lg"
              >
                {t('NAV_GALLERY')}
              </ShinyText>
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <LanguageSwitcher />
            <MobileNav />
          </div>
        </nav>
      </header>
      <main className="flex-1 bg-gray-950">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto bg-gray-950 p-4 pt-16">
      <ShinyText as="h1" variant="title" className="mb-4 text-4xl">
        {message}
      </ShinyText>
      <ShinyText as="p" variant="body" className="mb-4 text-lg">
        {details}
      </ShinyText>
      {stack && (
        <pre className="w-full overflow-x-auto rounded-lg border border-amber-900/20 bg-gray-900/30 p-4 text-gold text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
