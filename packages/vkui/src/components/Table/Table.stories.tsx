import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getRandomInt, getRandomString } from '@vkontakte/vkjs';
import { DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Badge } from '../Badge/Badge';
import { Image } from '../Image/Image';
import { TableBody } from '../TableBody/TableBody';
import { TableCell } from '../TableCell/TableCell';
import { TableFooter } from '../TableFooter/TableFooter';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { Caption } from '../Typography/Caption/Caption';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Table, type TableProps } from './Table';

const story: Meta<TableProps> = {
  title: 'Layout/Table',
  component: Table,
  parameters: { layout: 'fullscreen', ...DisableCartesianParam },
};

export default story;

const numberFormatter = new Intl.NumberFormat('ru-RU');

const currencyFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

const rows = new Array(30).fill(undefined).map(() => {
  return {
    name: getRandomString(getRandomInt(10, 20)),
    status: getRandomInt(0, 1) === 1 ? 'active' : 'disabled',
    budget: getRandomInt(1000, 100000),
    spent: getRandomInt(10, 10000),
    result: getRandomInt(5, 150),
    costOfResult: getRandomInt(50, 100),
  };
});

const getTotalSpent = () => rows.reduce((total, { spent }) => total + spent, 0);

const styleContainer = { display: 'flex', alignItems: 'center', gap: 8 };

const Status = ({ status = 'active', ...restProps }) => {
  switch (status) {
    case 'active':
      return (
        <div style={styleContainer} {...restProps}>
          <Badge mode="new" />
          <Subhead>Действующий</Subhead>
        </div>
      );
    case 'disabled':
      return (
        <div style={styleContainer} {...restProps}>
          <Badge mode="prominent" />
          <Subhead>Неактивный</Subhead>
        </div>
      );
    default:
      return null;
  }
};

type Story = StoryObj<TableProps>;

export const Playground: Story = {
  render(props) {
    return (
      <div>
        <div></div>
        <Table style={{ minWidth: 650 }} aria-label="simple table" {...props}>
          <TableHeader isSticky>
            <TableRow>
              <TableCell>
                <Caption>Название объявления</Caption>
              </TableCell>
              <TableCell>
                <Caption>Статус</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>Бюджет</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>Потрачено</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>Результат</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>Цена за рез-т</Caption>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell asHeader scope="row">
                  <div style={styleContainer}>
                    <Image src={getAvatarUrl()} size={32} alt={row.name} />{' '}
                    <Subhead>{row.name}</Subhead>
                  </div>
                </TableCell>
                <TableCell>
                  <Status status={row.status} />
                </TableCell>
                <TableCell align="right">
                  <Subhead>
                    {numberFormatter.format(row.budget)} <Caption>дневной</Caption>
                  </Subhead>
                </TableCell>
                <TableCell align="right">
                  <Subhead>{currencyFormatter.format(row.spent)}</Subhead>
                </TableCell>
                <TableCell align="right">
                  <Subhead>{row.result}</Subhead> <Caption>установки</Caption>
                </TableCell>
                <TableCell align="right">
                  <Subhead>{currencyFormatter.format(row.costOfResult)}</Subhead>{' '}
                  <Caption>установки</Caption>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter isSticky>
            <TableRow>
              <TableCell>
                <Caption>Всего {rows.length} объявлений</Caption>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Caption>{currencyFormatter.format(getTotalSpent())}</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>ср. 134</Caption>
              </TableCell>
              <TableCell align="right">
                <Caption>ср. 123</Caption>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div></div>
      </div>
    );
  },
};
