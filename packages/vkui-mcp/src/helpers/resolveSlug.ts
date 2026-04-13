export interface ResolveNameAndSlugParams {
  name?: string | null;
  slug?: string | null;
}

export interface NameAndSlug {
  name: string;
  slug: string;
}

function toSlugFromName(name: string): string {
  return name
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function resolveSlug({ name, slug }: ResolveNameAndSlugParams): string {
  const normalizedName = name?.trim() ?? '';
  const normalizedSlug = slug?.trim() ?? '';

  if (!normalizedName && !normalizedSlug) {
    throw new Error('Нужно передать хотя бы одно значение: name или slug.');
  }
  return normalizedSlug || toSlugFromName(normalizedName);
}
