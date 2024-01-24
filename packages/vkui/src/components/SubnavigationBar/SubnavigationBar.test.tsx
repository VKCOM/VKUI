import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { SubnavigationButton } from '../SubnavigationButton/SubnavigationButton';
import { SubnavigationBar } from './SubnavigationBar';

describe('SubnavigationBar', () => {
  baselineComponent(SubnavigationBar);

  it('Does not render falsy children', () => {
    const falseCondition = false;
    const trueCondition = true;
    render(
      <SubnavigationBar mode="fixed">
        <SubnavigationButton>Сканировать</SubnavigationButton>
        {null}
        {trueCondition && <SubnavigationButton>Добавить</SubnavigationButton>}
        {false}
        {falseCondition && <SubnavigationButton>Удалить</SubnavigationButton>}
      </SubnavigationBar>,
    );

    expect(screen.getAllByRole('listitem').length).toEqual(2);
  });
});
