import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { createPageMetadata, getPageDetails, SITE_URL } from '../../lib/metadata';
import { useMDXComponents as mdxComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
  }>;
}>;

const Wrapper = mdxComponents().wrapper!;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  if (metadata.other?.hidden) {
    notFound();
  }
  return createPageMetadata(metadata, params.mdxPath);
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata, sourceCode } = result;

  if (metadata.other?.hidden) {
    notFound();
  }

  const { title, description, url, image } = getPageDetails(metadata, params.mdxPath);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    image,
    inLanguage: 'ru',
    isPartOf: { '@type': 'WebSite', name: 'VKUI', url: SITE_URL },
  };

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
