import Head from 'next/head';
import { organizationSchema } from '../schema';

interface SEOProps {
  title: string;
  description: string;
  url: string;
}

export default function SEO({ title, description, url }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </Head>
  );
}
