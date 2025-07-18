import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useStableCallback } from '../../hooks/useStableCallback';
import { type TabsProps } from './Tabs';

/* eslint-disable jsdoc/require-jsdoc */
export type TabsControllerProps = {
  onChange: (id: string) => void;
  selectedTab: string;
};
/* eslint-enable jsdoc/require-jsdoc */

export const useTabsController = ({
  selectedId,
  defaultSelectedId,
  onSelectedIdChange: onSelectedIdChangeProp,
}: Pick<
  TabsProps,
  'selectedId' | 'defaultSelectedId' | 'onSelectedIdChange'
>): TabsControllerProps | null => {
  const onSelectedIdChange = useStableCallback(
    (id: string | undefined) => id && onSelectedIdChangeProp?.(id),
  );

  const [value, onChange] = useCustomEnsuredControl<string | undefined>({
    onChange: onSelectedIdChange,
    value: selectedId,
    defaultValue: defaultSelectedId,
  });

  if ((!selectedId && !defaultSelectedId) || !value) {
    return null;
  }
  return {
    onChange,
    selectedTab: value,
  };
};
