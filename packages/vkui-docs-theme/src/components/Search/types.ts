export interface SearchResultProps {
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

export interface PagefindModuleProps {
  options: (config: { baseUrl: string; excerptLength: number }) => Promise<void>;
  debouncedSearch: (
    query: string,
    options?: object,
  ) => Promise<{
    results: Array<{ data: () => Promise<SearchResultProps> }>;
  } | null>;
}

export interface SearchFilterProp {
  label: string;
  value: string;
}
