/**
 * jest-runners-groups
 * @group e2e
 */

import * as React from 'react';
import { Icon24Filter } from '@vkontakte/icons';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Counter } from '../Counter/Counter';
import { SubnavigationBar } from '../SubnavigationBar/SubnavigationBar';
import { SubnavigationButton, SubnavigationButtonProps } from './SubnavigationButton';

describe('SubnavigationButton', () => {
  describeScreenshotFuzz(
    (props: SubnavigationButtonProps) => (
      <SubnavigationBar>
        <SubnavigationButton {...props} />
      </SubnavigationBar>
    ),
    [
      {
        expandable: [undefined, true],
        selected: [undefined, true],
        before: [undefined, <Icon24Filter key="icon" />],
        after: [
          undefined,
          <Counter key="counter" size="s">
            3
          </Counter>,
        ],
        children: ['Фильтры'],
      },
      {
        after: [
          <Counter key="counter" mode="prominent" size="s">
            3
          </Counter>,
        ],
        children: ['Новинки'],
      },
      {
        size: ['l'],
        textLevel: ['1', '2', '3'],
        children: ['Сканировать QR'],
      },
      {
        size: ['l', 'm', 's'],
        children: ['Сканировать QR'],
        $adaptivity: true,
      },
      {
        expandable: [true],
        selected: [undefined, true],
        before: [<Icon24Filter key="icon" />],
        mode: ['primary', 'outline', 'tertiary'],
        after: [
          <Counter key="counter" size="s">
            3
          </Counter>,
        ],
        children: ['Фильтры'],
      },
    ],
  );
});
