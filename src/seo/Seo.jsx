import React from 'react';
import { Helmet } from 'react-helmet-async';
import { site } from './metaTemplates';

const Seo = ({ 
  title, 
  description, 
  url, 
  image = `${site.url}${site.logo}`, 
  noIndex = false,
  structuredData = []
}) => {
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
      
      {structuredData.map((data, index) => (
        <script 
          key={index}
          type="application/ld+json"
        >
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

// Helper functions to generate structured data
export const createOrganizationData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  sameAs: []
});

export const createLocalBusinessData = () => ({
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
});

export const createCreativeWorkData = (name, slug) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  url: `${site.url}/projects/${slug}`,
  creator: { '@type': 'Organization', name: site.name }
});

export const createBreadcrumbsData = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items
});

export default Seo;