type Option = {
  label?: string;
  [index: string]: any;
};

type GetOptionLabel = (option: Option) => string;

export const defaultFilterFn = (
  query = '',
  option: Option,
  getOptionLabel: GetOptionLabel = (option) => option.label,
) => {
  if (query.length === 0) {
    return true;
  }
  const words = getOptionLabel(option).split(/\s|-/);
  for (const word of words) {
    if (word.toLowerCase().startsWith(query.toLowerCase())) {
      return true;
    }
  }
  return false;
};
