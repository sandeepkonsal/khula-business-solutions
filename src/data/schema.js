import { SITE, SERVICES } from './site.js';
export const org = {
  '@context': 'https://schema.org', '@type': ['ProfessionalService', 'Organization'], '@id': SITE.url + '/#org',
  name: SITE.name, url: SITE.url, logo: SITE.url + '/assets/logo.png', image: SITE.url + '/assets/og-image.jpg',
  description: 'Durban-based people-transformation consultancy offering tailored corporate training, NLP-based coaching, change management, project management and behaviour transformation.',
  slogan: 'Learning to Live, Living to Learn', telephone: SITE.tel, email: SITE.email, priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Durban', addressRegion: 'KwaZulu-Natal', addressCountry: 'ZA' },
  areaServed: [{ '@type': 'City', name: 'Durban' }, { '@type': 'AdministrativeArea', name: 'KwaZulu-Natal' }, { '@type': 'Country', name: 'South Africa' }],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '16:00' }],
  founder: { '@type': 'Person', name: 'Thilo Nagiah' },
};
export const crumbs = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c[0], item: SITE.url + c[1] })) });
export const faq = (f) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: f.map((q) => ({ '@type': 'Question', name: q[0], acceptedAnswer: { '@type': 'Answer', text: q[1] } })) });
