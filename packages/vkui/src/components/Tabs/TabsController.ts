import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useStableCallback } from '../../hooks/useStableCallback';
import { type TabsProps } from './Tabs';

/* eslint-disable jsdoc/require-jsdoc */
export type TabsController = {
  onChange: (id: string) => void;
  selectedTab: string;
};
/* eslint-enable jsdoc/require-jsdoc */

export const useTabsController = ({
  selectedTabId,
  defaultSelectedTabId,
  onSelectedTabChanged: onSelectedTabChangedProp,
}: Pick<
  TabsProps,
  'selectedTabId' | 'defaultSelectedTabId' | 'onSelectedTabChanged'
>): TabsController | null => {
  const onSelectedTabChanged = useStableCallback(
    (id: string | undefined) => id && onSelectedTabChangedProp?.(id),
  );

  const [value, onChange] = useCustomEnsuredControl<string | undefined>({
    onChange: onSelectedTabChanged,
    value: selectedTabId,
    defaultValue: defaultSelectedTabId,
  });

  if ((!selectedTabId && !defaultSelectedTabId) || !value) {
    return null;
  }
  return {
    onChange,
    selectedTab: value,
  };
};
