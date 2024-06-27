import {render, screen} from "@testing-library/react";
import { baselineComponent } from '../../testing/utils';
import {Cell} from "../Cell/Cell";
import { List } from './List';

describe('List', () => {
  baselineComponent(List);

  it('should have style gap', async () => {
    render(
      <List data-testid="list" gap={20}>
        <Cell key='1' style={{ height: 50 }} >
          First Item
        </Cell>
        <Cell key='2' style={{ height: 50 }} >
          Second Item
        </Cell>
      </List>
    );
    expect(screen.getByTestId('list')).toHaveStyle('gap: 20px');
  })
});
