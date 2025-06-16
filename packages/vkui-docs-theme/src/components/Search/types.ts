export interface PagefindResultProps {
  excerpt: string;
  meta: {
    title: string;
  };
  raw_url: string;
  sub_results: Array<{
    excerpt: string;
    title: string;
    url: string;
  }>;
  url: string;
  weighted_locations: Array<{
    weight: number;
    score: number;
  }>;
}

export interface PagefindAPIProps {
  options: (config: { baseUrl: string; excerptLength: number }) => Promise<void>;
  debouncedSearch: (query: string) => Promise<{
    results: Array<{ data: () => Promise<PagefindResultProps> }>;
  } | null>;
}
