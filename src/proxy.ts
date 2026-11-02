import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, localeCookie } from './lib/i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split('/')[1];
  const saved = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(segment) ? segment : saved && isLocale(saved) ? saved : 'en';

  if (['/', '/projects', '/contact', '/private-repo'].includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' || pathname === '/contact' ? '' : pathname}`;
    if (pathname === '/contact') url.hash = 'contact';
    const response = NextResponse.redirect(url);
    response.headers.set('Cache-Control', 'private, no-store');
    response.headers.set('Vary', 'Cookie');
    return response;
  }

  const headers = new Headers(request.headers);
  headers.set('x-site-locale', locale);
  const response = NextResponse.next({ request: { headers } });
  if (
    isLocale(segment) &&
    !request.headers.has('next-router-prefetch') &&
    request.headers.get('purpose') !== 'prefetch'
  ) {
    response.cookies.set(localeCookie, locale, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
      secure: request.nextUrl.protocol === 'https:',
    });
  }
  return response;
}

export const config = {
  matcher: [
    '/',
    '/projects',
    '/contact',
    '/private-repo',
    '/en/:path*',
    '/es/:path*',
    '/((?!api|_next|assets|icons|.*\\.).*)',
  ],
};
