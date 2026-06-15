export interface ShowcaseItem {
  name: string;
  slug: string;
  group: string;
  direction?: 'row' | 'column';
  wrapper?: string;
  description?: string;
  code: string;
  docsUrl: string;
}

export interface ShowcaseGroup {
  key: string;
  title: string;
  items: ShowcaseItem[];
}

export interface ShowcaseData {
  generatedAt: string;
  groups: ShowcaseGroup[];
}
