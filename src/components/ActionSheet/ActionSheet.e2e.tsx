import React from 'react';
import ActionSheet, { ActionSheetProps } from './ActionSheet';
import ActionSheetItem from '../ActionSheetItem/ActionSheetItem';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import withPlatform from '../../hoc/withPlatform';

describe('ActionSheet', () => {
  const cancel = <ActionSheetItem mode="cancel">Отменить</ActionSheetItem>;
  describeScreenshotFuzz(withPlatform((props: ActionSheetProps) => (
    <ActionSheet
      {...props}
      iosCloseItem={props.platform === 'ios' && cancel}
      style={{ position: 'relative' }}
    />
  )), [{
    children: [[
      <ActionSheetItem key="1">Элемент</ActionSheetItem>,
      <ActionSheetItem key="2">Второй элемент</ActionSheetItem>,
    ]],
    header: [undefined, 'Заголовок'],
  }], {});
});
