import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ 
  title = '@petarmiodrag2', 
  description = 'Personal website of @petarmiodrag2 - Developer, Creator, and Digital Enthusiast', 
  canonical = 'https://petarmiodrag2.com' 
}: SEOProps) {
  const fullTitle = title === '@petarmiodrag2' ? title : `${title} | @petarmiodrag2`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}