import Tabs from './Tabs';
import TabsItem from '../TabsItem/TabsItem';
import Counter from '../Counter/Counter';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import { Fragment } from 'react';
import { IOS } from '../../lib/platform';

describe('Tabs', () => {
  const tabs = (
    <Fragment>
      <TabsItem selected after={<Counter size="s">3</Counter>}>Первый</TabsItem>
      <TabsItem after={<Counter size="m">3</Counter>}>Второй</TabsItem>
    </Fragment>
  );
  describeScreenshotFuzz(Tabs, [{
    mode: ['default', 'buttons'],
    children: [<TabsItem key="" selected>Один</TabsItem>, tabs],
  }]);
  describe('segmented', () => {
    describeScreenshotFuzz(Tabs, [{
      mode: ['segmented'],
      children: [tabs],
    }], {
      platforms: [IOS],
    });
  });
});
