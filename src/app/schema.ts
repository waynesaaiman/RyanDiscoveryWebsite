export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Discovery Financial Advisor',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/logo.png',
  sameAs: [
    'https://www.facebook.com/yourpage',
    'https://www.linkedin.com/in/yourprofile',
  ],
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+27-XX-XXXX-XXXX',
    contactType: 'customer service',
    areaServed: 'ZA',
    availableLanguage: ['English'],
  }],
};
