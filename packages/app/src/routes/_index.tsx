import { Carousel, GoldDust, MetallicLink, ShinyText } from '../components/ui'
import { useTranslation } from '../contexts/LanguageContext'
import { asset } from '../lib/asset'
import type { Route } from './+types/_index'

// biome-ignore lint/correctness/noEmptyPattern: this is boilerplate code!
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Dance United - Home' },
    { name: 'description', content: 'Welcome to Dance United - Your dance community platform' },
  ]
}

export const links: Route.LinksFunction = () => [
  { rel: 'preload', href: asset('/img/hero-1.webp'), as: 'image' }, // Preload LCP candidate
]

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      <GoldDust />
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden pt-16 pb-8 text-white sm:min-h-[700px]">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel
            images={[asset('/img/hero-1.webp'), asset('/img/hero-2.webp'), asset('/img/hero-3.webp')]}
            className="h-full w-full opacity-60"
            autoPlayInterval={5000}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl px-4 text-center">
          <ShinyText
            as="h1"
            variant="title"
            className="mb-6 text-2xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {t('HOME_HERO_TITLE')}
          </ShinyText>
          <ShinyText as="p" variant="body" className="mb-12 text-gray-200 text-xl">
            {t('HOME_HERO_SUBTITLE')}
          </ShinyText>
        </div>
        {/* CTA Buttons */}
        <div className="relative z-20 w-full max-w-4xl px-4 text-center">
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MetallicLink
              to="/schedule"
              variant="primary"
              className="w-full max-w-[280px] rounded-lg border-2 px-8 py-3 text-lg sm:w-auto"
            >
              {t('HOME_CTA_SCHEDULE')}
            </MetallicLink>
            <MetallicLink
              to="/contact"
              variant="primary"
              className="w-full max-w-[280px] rounded-lg border-2 px-8 py-3 text-lg sm:w-auto"
            >
              {t('HOME_CTA_CONTACT')}
            </MetallicLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-amber-900/20 border-t bg-gray-950 px-4 py-16">
        <div className="section-container">
          <ShinyText as="h2" variant="title" className="section-title text-3xl">
            {t('HOME_FEATURES_TITLE')}
          </ShinyText>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card">
              <div className="mb-4 text-4xl">💃</div>
              <ShinyText as="h3" variant="title" className="mb-2 font-semibold text-xl">
                {t('HOME_FEATURE_1_TITLE')}
              </ShinyText>
              <ShinyText variant="body">{t('HOME_FEATURE_1_DESC')}</ShinyText>
            </div>
            <div className="feature-card">
              <div className="mb-4 text-4xl">👥</div>
              <ShinyText as="h3" variant="title" className="mb-2 font-semibold text-xl">
                {t('HOME_FEATURE_2_TITLE')}
              </ShinyText>
              <ShinyText variant="body">{t('HOME_FEATURE_2_DESC')}</ShinyText>
            </div>
            <div className="feature-card">
              <div className="mb-4 text-4xl">📅</div>
              <ShinyText as="h3" variant="title" className="mb-2 font-semibold text-xl">
                {t('HOME_FEATURE_3_TITLE')}
              </ShinyText>
              <ShinyText variant="body">{t('HOME_FEATURE_3_DESC')}</ShinyText>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Programs Section */}
      <section className="border-amber-900/20 border-t bg-gray-900/30 px-4 py-20">
        <div className="section-container">
          <div className="mb-14 text-center">
            <ShinyText as="h2" variant="title" className="mb-4 text-3xl sm:text-4xl">
              {t('STYLES_SECTION_TITLE')}
            </ShinyText>
            <ShinyText variant="body" className="mx-auto max-w-2xl text-gray-400 text-lg">
              {t('STYLES_SECTION_SUBTITLE')}
            </ShinyText>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card 1: Ballroom & Social Dance */}
            <div className="relative flex flex-col justify-between rounded-xl border border-amber-900/30 bg-gray-900/60 p-6 shadow-xl transition-all duration-300 hover:border-gold/50 sm:p-8">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-900/40 bg-amber-950/40 text-3xl">
                    💃
                  </div>
                  <div>
                    <ShinyText as="h3" variant="title" className="font-semibold text-2xl">
                      {t('STYLES_CARD_1_TITLE')}
                    </ShinyText>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-amber-900/20 bg-gray-950/50 p-4">
                    <h4 className="font-medium text-base text-gold">{t('STYLES_CARD_1_STANDARD_TITLE')}</h4>
                    <p className="mt-1 text-gray-300 text-sm leading-relaxed">{t('STYLES_CARD_1_STANDARD_DESC')}</p>
                  </div>

                  <div className="rounded-lg border border-amber-900/20 bg-gray-950/50 p-4">
                    <h4 className="font-medium text-base text-gold">{t('STYLES_CARD_1_LATIN_TITLE')}</h4>
                    <p className="mt-1 text-gray-300 text-sm leading-relaxed">{t('STYLES_CARD_1_LATIN_DESC')}</p>
                  </div>

                  <div className="rounded-lg border border-amber-900/20 bg-gray-950/50 p-4">
                    <h4 className="font-medium text-base text-gold">{t('STYLES_CARD_1_SOCIAL_TITLE')}</h4>
                    <p className="mt-1 text-gray-300 text-sm leading-relaxed">{t('STYLES_CARD_1_SOCIAL_DESC')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-amber-900/20 border-t pt-4">
                <MetallicLink to="/schedule" variant="primary" className="block w-full text-center">
                  {t('HOME_CTA_SCHEDULE')}
                </MetallicLink>
              </div>
            </div>

            {/* Card 2: Classical Ballet */}
            <div className="relative flex flex-col justify-between rounded-xl border border-amber-900/30 bg-gray-900/60 p-6 shadow-xl transition-all duration-300 hover:border-gold/50 sm:p-8">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-900/40 bg-amber-950/40 text-3xl">
                    🩰
                  </div>
                  <div>
                    <ShinyText as="h3" variant="title" className="font-semibold text-2xl">
                      {t('STYLES_CARD_2_TITLE')}
                    </ShinyText>
                    <span className="font-medium text-gold/80 text-xs uppercase tracking-wider">
                      {t('STYLES_CARD_2_SUBTITLE')}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-amber-900/20 bg-gray-950/50 p-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('STYLES_CARD_2_DESC')}</p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_2_POINT_1')}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_2_POINT_2')}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_2_POINT_3')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-amber-900/20 border-t pt-4">
                <MetallicLink to="/schedule" variant="primary" className="block w-full text-center">
                  {t('HOME_CTA_SCHEDULE')}
                </MetallicLink>
              </div>
            </div>

            {/* Card 3: First Wedding Dance */}
            <div className="relative flex flex-col justify-between rounded-xl border border-amber-900/30 bg-gray-900/60 p-6 shadow-xl transition-all duration-300 hover:border-gold/50 sm:p-8">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber-900/40 bg-amber-950/40 text-3xl">
                    💍
                  </div>
                  <div>
                    <ShinyText as="h3" variant="title" className="font-semibold text-2xl">
                      {t('STYLES_CARD_3_TITLE')}
                    </ShinyText>
                    <span className="font-medium text-gold/80 text-xs uppercase tracking-wider">
                      {t('STYLES_CARD_3_SUBTITLE')}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-amber-900/20 bg-gray-950/50 p-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{t('STYLES_CARD_3_DESC')}</p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_3_POINT_1')}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_3_POINT_2')}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <span className="text-gold">✦</span>
                      <span>{t('STYLES_CARD_3_POINT_3')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-amber-900/20 border-t pt-4">
                <MetallicLink to="/contact" variant="primary" className="block w-full text-center">
                  {t('HOME_CTA_CONTACT')}
                </MetallicLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="scroll-mt-16 border-amber-900/20 border-t bg-gray-950 px-4 py-16 text-center text-white"
      >
        <div className="container mx-auto">
          <ShinyText as="h2" variant="title" className="mb-12 text-4xl sm:text-5xl">
            {t('ABOUT_TITLE')}
          </ShinyText>

          <div className="mx-auto max-w-4xl space-y-6 text-lg">
            <ShinyText as="p" variant="body" className="text-gray-300 leading-relaxed">
              {t('ABOUT_P1')}
            </ShinyText>
            <ShinyText as="p" variant="body" className="text-gray-300 leading-relaxed">
              {t('ABOUT_P2')}
            </ShinyText>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-amber-900/20 border-y bg-gray-900/30 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <ShinyText as="h3" variant="title" className="mb-8 text-3xl">
            {t('ABOUT_MISSION_TITLE')}
          </ShinyText>
          <ShinyText as="p" variant="body" className="text-gray-300 text-xl italic leading-relaxed">
            {t('ABOUT_MISSION_TEXT')}
          </ShinyText>
        </div>
      </section>

      {/* Founder Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-amber-900/30 shadow-2xl">
              <img src={asset('/img/founder.webp')} alt="Wiktoria - Founder" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <ShinyText as="h3" variant="title" className="text-3xl">
                  {t('ABOUT_FOUNDER_NAME')}
                </ShinyText>
                <ShinyText as="p" variant="body" className="font-cinzel text-gold text-sm uppercase tracking-widest">
                  {t('ABOUT_FOUNDER_ROLE')}
                </ShinyText>
              </div>
            </div>
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <ShinyText as="h3" variant="title" className="mb-6 text-4xl">
              {t('ABOUT_FOUNDER_TITLE')}
            </ShinyText>
            <ShinyText as="p" variant="body" className="mb-6 text-gray-300 text-lg leading-relaxed">
              {t('ABOUT_FOUNDER_DESC')}
            </ShinyText>
            <div className="flex justify-center gap-4 md:justify-start">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Socials Section */}
      <section className="border-amber-900/20 border-t bg-black px-4 py-16">
        <div className="container mx-auto">
          <ShinyText as="h3" variant="title" className="mb-12 text-center text-4xl">
            {t('ABOUT_VISIT_TITLE')}
          </ShinyText>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <div className="h-[400px] w-full overflow-hidden rounded-xl border border-amber-900/30 bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=aleja+Grunwaldzka+225,+80-266+Gdańsk&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Dance United Location"
                className="transition-opacity duration-500 hover:opacity-90"
              />
            </div>

            {/* Address & Socials Box */}
            <div className="flex h-[400px] flex-col justify-center space-y-6 rounded-xl border border-amber-900/20 bg-gray-900/40 p-10 text-left backdrop-blur-sm">
              <div>
                <ShinyText as="h4" variant="title" className="mb-4 font-cinzel font-semibold text-3xl text-gold">
                  {t('ABOUT_ADDRESS_TITLE')}
                </ShinyText>
                <div className="space-y-2">
                  <ShinyText as="p" variant="body" className="font-medium text-gray-200 text-xl">
                    ul. ALEJA GRUNWALDZKA 225/---
                  </ShinyText>
                  <ShinyText as="p" variant="body" className="text-gray-400 text-lg">
                    80-266 GDAŃSK
                  </ShinyText>
                  <ShinyText as="p" variant="body" className="text-gray-400 text-lg">
                    POMORSKIE
                  </ShinyText>
                </div>
              </div>

              {/* Divider */}
              <div className="my-2 h-px w-full bg-gradient-to-r from-amber-900/50 via-amber-500/50 to-amber-900/50" />

              <div>
                <ShinyText as="h4" variant="title" className="mb-4 font-cinzel font-semibold text-3xl text-gold">
                  {t('ABOUT_FOLLOW_US')}
                </ShinyText>
                <div className="flex gap-6">
                  <a
                    href="https://www.facebook.com/danceunitedgdansk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-[#1877F2] transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/danceunitedgdansk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#instagram-gradient-home)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <defs>
                        <linearGradient id="instagram-gradient-home" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#833AB4" />
                          <stop offset="50%" stopColor="#E1306C" />
                          <stop offset="100%" stopColor="#F77737" />
                        </linearGradient>
                      </defs>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
