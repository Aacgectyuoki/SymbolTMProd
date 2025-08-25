import React from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from './metaTemplates';

const jsonLdScript = (data) => ({
  type: 'application/ld+json',
  innerHTML: JSON.stringify(data)
});

export const OrganizationJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    sameAs: [
      // add profiles if any
    ]
  };
  return <script {...jsonLdScript(data)} />;
};

export const LocalBusinessJsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    url: site.url,
    image: `${site.url}${site.logo}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7202 North 15th Pl.',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85020',
      addressCountry: 'US'
    },
    telephone: '+1-480-717-0449'
  };
  return <script {...jsonLdScript(data)} />;
};

export const CreativeWorkJsonLd = ({ name, slug }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    url: `${site.url}/projects/${slug}`,
    creator: { '@type': 'Organization', name: site.name },
  };
  return <script {...jsonLdScript(data)} />;
};

export const BreadcrumbsJsonLd = ({ items }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
  return <script {...jsonLdScript(data)} />;
};

const Seo = ({ title, description, url, image = `${site.url}${site.logo}`, noIndex = false, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || site.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Helmet>
  );
};

export default Seo;