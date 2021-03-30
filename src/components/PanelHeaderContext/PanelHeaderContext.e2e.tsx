import { describeScreenshotFuzz } from '../../testing/e2e';
import PanelHeaderContext, { PanelHeaderContextProps } from './PanelHeaderContext';
import PanelHeader from '../PanelHeader/PanelHeader';
import List from '../List/List';
import SimpleCell from '../SimpleCell/SimpleCell';
import { Fragment } from 'react';

describe('PanelHeaderContext', () => {
  describeScreenshotFuzz<PanelHeaderContextProps>((p) => (
    <Fragment>
      <PanelHeader>Заголовок</PanelHeader>
      <PanelHeaderContext opened style={{ minHeight: '300px' }} {...p}>
        <List>
          <SimpleCell>Item 1</SimpleCell>
          <SimpleCell>Item 2</SimpleCell>
        </List>
      </PanelHeaderContext>
    </Fragment>
  ), [{}]);
});
