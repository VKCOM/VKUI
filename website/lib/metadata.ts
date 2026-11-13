import type { Metadata } from 'next';

export const SITE_URL = 'https://vkui.io';
export const SITE_TITLE = 'VKUI – React UI Kit';
export const SITE_DESCRIPTION =
  'VKUI — библиотека адаптивных React-компонентов для создания мобильных и веб-приложений.';
export const SITE_IMAGE = '/blog/new-docs-2025.png';

type PageMetadata = Metadata & { image?: string };

export function getPageDetails(metadata: PageMetadata, mdxPath: string[] = []) {
  const titleMetadata = metadata.title;
  const title =
    typeof titleMetadata === 'string'
      ? titleMetadata
      : titleMetadata && 'absolute' in titleMetadata
        ? titleMetadata.absolute
        : titleMetadata && 'default' in titleMetadata
          ? titleMetadata.default
          : SITE_TITLE;
  const basePath = process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH || '';
  const url = new URL(`${basePath}/${mdxPath.join('/')}${mdxPath.length ? '/' : ''}`, SITE_URL);
  const image = metadata.image || SITE_IMAGE;
  const imageUrl = new URL(image, SITE_URL);
  if (image.startsWith('/')) {
    imageUrl.pathname = `${basePath}${imageUrl.pathname}`;
  }

  return {
    title,
    description: metadata.description || SITE_DESCRIPTION,
    url: url.toString(),
    image: imageUrl.toString(),
  };
}

export function createPageMetadata(metadata: PageMetadata, mdxPath?: string[]): Metadata {
  const { title, description, url, image } = getPageDetails(metadata, mdxPath);

  return {
    ...metadata,
    description,
    openGraph: {
      type: 'website',
      siteName: 'VKUI',
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
      ...metadata.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image, alt: title }],
      ...metadata.twitter,
    },
  };
}
