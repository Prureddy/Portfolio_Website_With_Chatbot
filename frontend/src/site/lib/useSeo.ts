import { useEffect } from 'react';

// Live domain — keep in sync with index.html canonical + sitemap.xml.
export const SITE_URL = 'https://pruthvis.online';

type SeoInput = {
  title: string;
  description?: string;
  /** path starting with "/", e.g. "/blog" */
  path?: string;
  type?: 'website' | 'article' | 'profile';
};

function upsertMeta(attr: 'name' | 'property', key: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Sets per-page title, description, canonical, and OG/Twitter tags. */
export function useSeo({ title, description, path = '/', type = 'website' }: SeoInput) {
  useEffect(() => {
    const url = SITE_URL + path;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertCanonical(url);
  }, [title, description, path, type]);
}
