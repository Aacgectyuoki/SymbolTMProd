export const site = {
    name: 'SymbolTM',
    url: 'https://symboltm.com',
    logo: '/logo192.png',
    description: 'SymbolTM is a Phoenix-based design and branding studio offering flexible and scalable design solutions.'
  };
  
  export const serviceTemplates = {
    discovery: {
      title: 'Brand Discovery | SymbolTM',
      description: 'Discovery to reveal brand strengths, weaknesses, and customer value drivers.',
    },
    strategy: {
      title: 'Brand Strategy | SymbolTM',
      description: 'Align every aspect of the brand with a single actionable plan.',
    },
    identity: {
      title: 'Brand Identity | SymbolTM',
      description: 'Logos, typography, tone and visual systems that present a recognizable promise.',
    },
    management: {
      title: 'Brand Management | SymbolTM',
      description: 'Ongoing brand analysis and execution to maximize brand value.',
    },
  };
  
  export const projectMeta = (name, slug) => ({
    title: `${name} | Portfolio | SymbolTM`,
    description: `Branding and strategy work for ${name} by SymbolTM.`,
    url: `${site.url}/projects/${slug}`
  });
  
  export const breadcrumbs = (segments) =>
    segments.map((name, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name,
      item: idx === 0 ? site.url : `${site.url}/${segments.slice(1, idx + 1).join('/')}`
    }));