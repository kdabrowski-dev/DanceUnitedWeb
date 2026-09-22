import { Link } from 'react-router'
import { useTranslation } from '../contexts/LanguageContext'
import { asset } from '../lib/asset'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="flex-none border-amber-900/20 border-t bg-gray-950 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 text-gray-400 text-xs md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={asset('/logos/logo-transparent.webp')} alt="Dance United" className="h-7 w-auto opacity-90" />
            <span className="font-bold font-title text-gold uppercase tracking-wider">{t('BRAND_NAME')}</span>
          </div>
          <p className="leading-relaxed opacity-70">{t('FOOTER_DESCRIPTION')}</p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-gold uppercase tracking-wider">{t('FOOTER_COMPANY')}</h3>
          <ul className="space-y-0.5 leading-snug">
            <li>DANCE UNITED SP. Z O.O.</li>
            <li>ul. ALEJA GRUNWALDZKA 225/---</li>
            <li>80-266 GDAŃSK</li>
            <li>POMORSKIE</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-gold uppercase tracking-wider">{t('FOOTER_LEGAL')}</h3>
          <ul className="space-y-0.5 leading-snug">
            <li>NIP: 7792455144</li>
            <li>KRS: 0000654614</li>
            <li>REGON: 365803012</li>
            <li>
              <Link to="/terms" target="_blank" className="transition-colors hover:text-gold">
                {t('FOOTER_TERMS')}
              </Link>
            </li>
            <li>
              <Link to="/privacy" target="_blank" className="transition-colors hover:text-gold">
                {t('FOOTER_PRIVACY')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-semibold text-gold uppercase tracking-wider">{t('FOOTER_CONTACT')}</h3>
          <ul className="space-y-0.5 leading-snug">
            <li>
              <a href="mailto:info@danceunited.pl" className="transition-colors hover:text-gold">
                info@danceunited.pl
              </a>
            </li>
            <li>
              <a href="tel:797797078" className="transition-colors hover:text-gold">
                797 797 078
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-amber-900/10 border-t pt-6 text-center text-[11px] opacity-50">
        &copy; {new Date().getFullYear()} DANCE UNITED SP. Z O.O. {t('FOOTER_RIGHTS')}
      </div>
    </footer>
  )
}
