'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { dictionaries, type Locale } from '@/lib/i18n';
import { Arrow } from './icons';

export function Navigation({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector('a')?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !menu.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  const links = [
    ['services', t.services],
    ['work', t.work],
    ['about', t.about],
  ];
  return (
    <header className="site-header" id="top">
      <div className="nav-shell container">
        <a className="wordmark" href={`/${locale}`} aria-label={t.home}>
          Silvina<span>.Dev</span>
          <span className="brand-star" aria-hidden="true">
            ✳
          </span>
        </a>
        <nav aria-label={t.label} className="navigation">
          <div
            ref={menu}
            className={`nav-menu${open ? ' is-open' : ''}`}
            id="navigation-menu"
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                event.relatedTarget !== toggle.current
              )
                setOpen(false);
            }}
          >
            {links.map(([id, title]) => (
              <a key={id} href={`/${locale}#${id}`} onClick={() => setOpen(false)}>
                {title}
              </a>
            ))}
            <a className="nav-contact" href={`/${locale}#contact`} onClick={() => setOpen(false)}>
              {t.contact}
              <Arrow diagonal />
            </a>
          </div>
          <div className="language-switch" aria-label={t.language} role="group">
            {(['en', 'es'] as const).map((language) => (
              <a
                key={language}
                href={pathname.replace(/^\/(en|es)(?=\/|$)/, `/${language}`)}
                lang={language}
                hrefLang={language}
                aria-label={language === 'en' ? 'English' : 'Español'}
                aria-current={language === locale ? 'true' : undefined}
                onClick={(event) => {
                  event.currentTarget.href += window.location.hash;
                }}
              >
                {language.toUpperCase()}
              </a>
            ))}
          </div>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation-menu"
            aria-label={open ? t.close : t.open}
            onClick={() => setOpen(!open)}
          >
            <span className={open ? 'menu-lines open' : 'menu-lines'}>
              <span />
              <span />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
