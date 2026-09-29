import { ActionSheetItem, type ActionSheetItemProps } from '../../../src';
import { ActionSheetDropdownSheet } from '../../../src/components/ActionSheet/ActionSheetDropdownSheet';

const items: ActionSheetItemProps[] = [
  { children: 'Сохранить в закладках' },
  { children: 'Закрепить запись' },
  { children: 'Выключить комментирование' },
  { children: 'Закрепить запись' },
  { mode: 'destructive', children: 'Удалить запись' },
];

export const ActionSheetPreview = () => {
  return (
    <ActionSheetDropdownSheet closing={false} toggleRef={{ current: null }} disabled={true}>
      {items.map(({ children, ...rest }, index) => (
        <ActionSheetItem key={index} {...rest}>
          {children}
        </ActionSheetItem>
      ))}
    </ActionSheetDropdownSheet>
  );
};
