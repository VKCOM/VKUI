import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
  }>;
}>;
// eslint-disable-next-line react-hooks/rules-of-hooks
const Wrapper = useMDXComponents().wrapper!;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);

  const siteUrl = 'https://vkui.io/';
  // Копируем массив сегментов и удаляем "index" в конце, если есть
  const segments = Array.isArray(params.mdxPath) ? [...params.mdxPath] : [];
  if (segments.length > 0 && segments[segments.length - 1] === 'index') {
    segments.pop();
  }

  // Собираем путь: пустой -> '/', иначе '/a/b'
  const pathname = segments.length === 0 ? '/' : `/${segments.join('/')}`;

  const canonicalUrl = new URL(pathname, siteUrl).href;

  return {
    ...metadata,
    alternates: {
      ...(metadata.alternates ?? {}),
      canonical: canonicalUrl,
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata, sourceCode } = result;

  if (!params.mdxPath) {
    redirect('/overview/about');
  }

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
