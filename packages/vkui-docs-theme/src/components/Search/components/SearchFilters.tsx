import { SelectionControl, Switch } from '@vkontakte/vkui';
import type { SearchFilterProp } from '../types';
import styles from '../Search.module.css';

interface SearchFiltersProps {
  filters: SearchFilterProp[];
  activeFilters: string[];
  toggleFilter: (value: string) => void;
}

export function SearchFilters({ filters, activeFilters, toggleFilter }: SearchFiltersProps) {
  if (!filters.length) {
    return null;
  }
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <SelectionControl key={filter.value}>
          <SelectionControl.Label>{filter.label}</SelectionControl.Label>
          <Switch
            checked={activeFilters.includes(filter.value)}
            onChange={() => toggleFilter(filter.value)}
          />
        </SelectionControl>
      ))}
    </div>
  );
}
