import { Helmet } from 'react-helmet-async';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AutomataX",
    "url": "https://automataxpro.site",
    "logo": "https://automataxpro.site/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Mr. Singh"
    },
    "sameAs": [
      "https://www.linkedin.com/company/automataxpro",
      "https://twitter.com/automataxpro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-92114-57736",
      "contactType": "sales",
      "areaServed": "IN"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
