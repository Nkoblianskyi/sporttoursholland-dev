import Link from 'next/link'
import { MapPin, Mail, Phone, Globe } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-kraft border-t-4 border-foreground/10 mt-20">
      {/* Torn top edge */}
      <div
        className="h-4 -mt-0 bg-background"
        style={{
          clipPath:
            'polygon(0 0, 2% 100%, 5% 20%, 8% 80%, 12% 10%, 15% 90%, 19% 30%, 22% 70%, 26% 15%, 29% 85%, 33% 40%, 36% 60%, 40% 20%, 43% 80%, 47% 10%, 50% 90%, 54% 30%, 57% 70%, 61% 5%, 64% 95%, 68% 35%, 71% 65%, 75% 10%, 78% 90%, 82% 40%, 85% 60%, 89% 15%, 92% 85%, 96% 30%, 98% 70%, 100% 0)',
        }}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="font-serif text-base font-bold text-foreground">SportToursHolland</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kleinschalige auteurstours door Nederland en heel Europa. We organiseren unieke ervaringen met persoonlijke begeleiding, focus op natuur en beleving.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/tours', label: 'Alle reizen' },
                { href: '/tips', label: 'Reisgids' },
                { href: '/about', label: 'Over ons' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy', label: 'Privacybeleid' },
                { href: '/cookies', label: 'Cookiebeleid' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  K.C. NTOMATA LIMITED<br />
                  Stylianou Lena, 24 Christiana Court<br />
                  Flat/Office 202, Strovolos<br />
                  2019 Nicosia, Cyprus
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-primary" />
                <a href="mailto:info@sporttoursholland.com" className="hover:text-primary transition-colors">
                  info@sporttoursholland.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="shrink-0 text-primary" />
                <span>sporttoursholland.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} SportToursHolland – K.C. NTOMATA LIMITED. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
