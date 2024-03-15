import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getRandomInt, getRandomString } from '@vkontakte/vkjs';
import { Placeholder } from '../../storybook/Placeholder';
import { DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl, getRandomUser } from '../../testing/mock';
import { Badge } from '../Badge/Badge';
import { Checkbox } from '../Checkbox/Checkbox';
import { Image } from '../Image/Image';
import { TableBody } from '../TableBody/TableBody';
import { TableCell } from '../TableCell/TableCell';
import { TableFooter } from '../TableFooter/TableFooter';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableHeaderLabel } from '../TableHeaderLabel/TableHeaderLabel';
import { TableRow } from '../TableRow/TableRow';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Text } from '../Typography/Text/Text';
import { UsersStack } from '../UsersStack/UsersStack';
import { Table, type TableProps } from './Table';

const story: Meta<TableProps> = {
  title: 'Layout/Table',
  component: Table,
  parameters: { layout: 'fullscreen', ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<TableProps>;

export const Mock: Story = {
  render: function Mock({ padding, enableZebraStripes, ...restProps }) {
    const someUser = React.useMemo(() => getRandomUser(), []);
    const [sort, setSort] = React.useState<'ascending' | 'descending'>('ascending');
    const [rows, setRows] = React.useState(() =>
      new Array(30).fill(undefined).map((_, index) => {
        return {
          id: index,
          checked: false,
        };
      }),
    );
    const rowSelected = React.useMemo(
      () => rows.reduce((acc, row) => (row.checked ? acc + 1 : acc), 0),
      [rows],
    );

    const handleClickToSelectAllCells = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRows((prevRows) =>
        prevRows.map((row) => {
          row.checked = event.target.checked;
          return row;
        }),
      );
    };

    const handleCellSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
      const idRaw = event.target.dataset.id;
      if (typeof idRaw === 'string') {
        const id = Number(idRaw);
        setRows((prevRows) =>
          prevRows.map((row, index) => {
            if (id === index) {
              row.checked = event.target.checked;
            }
            return row;
          }),
        );
      }
    };

    const handleClickToSort = () => {
      if (sort === 'descending') {
        setRows((prevRows) => prevRows.reverse());
        setSort('ascending');
      } else {
        setRows((prevRows) => prevRows.reverse());
        setSort('descending');
      }
    };

    return (
      <Table
        style={{ minWidth: 650 }}
        aria-label="simple table"
        padding={padding}
        enableZebraStripes={enableZebraStripes}
        {...restProps}
      >
        <TableHeader isSticky>
          <TableRow>
            <TableCell align="right" noPadding width={48}>
              <Checkbox
                aria-label="Выбрать всё"
                indeterminate={rowSelected > 0 && rowSelected < rows.length}
                onChange={handleClickToSelectAllCells}
              />
            </TableCell>
            <TableCell aria-sort={sort}>
              <TableHeaderLabel sort={sort} helpText="hello world" onClick={handleClickToSort}>
                <Text>Text</Text>
              </TableHeaderLabel>
            </TableCell>
            <TableCell>
              <Text>Text</Text>
            </TableCell>
            <TableCell align="right">
              <Text>Text</Text>
            </TableCell>
            <TableCell align="right">
              <Text>Text</Text>
            </TableCell>
            <TableCell align="right">
              <Text>Text</Text>
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} id={String(row.id)}>
              <TableCell align="right" noPadding>
                <Checkbox
                  data-id={row.id}
                  aria-labelledBy={row.id}
                  checked={row.checked}
                  onChange={handleCellSelected}
                />
              </TableCell>
              <TableCell asHeader scope="row" width={200} align={row.id === 0 ? 'right' : 'left'}>
                <div>
                  <Footnote>Text</Footnote>
                  <Caption>Subscription</Caption>
                </div>
              </TableCell>
              <TableCell width={220}>
                {row.id === 0 ? (
                  <UsersStack photos={[someUser.photo_100]}>
                    Следующим людям понравилось: {someUser.first_name} {someUser.last_name}
                  </UsersStack>
                ) : (
                  <Placeholder />
                )}
              </TableCell>
              <TableCell align="right">
                <Headline>Text ({row.id})</Headline>
              </TableCell>
              <TableCell align="right">
                <Headline>Text ({row.id})</Headline>
              </TableCell>
              <TableCell align="right">
                <Headline>Text ({row.id})</Headline>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter isSticky>
          <TableRow>
            <TableCell />
            <TableCell>
              <Text>Всего</Text>
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell align="right">
              <Text>Text</Text>
            </TableCell>
            <TableCell align="right">
              <Text>Text</Text>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

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

const styleContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
};

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

export const Example: Story = {
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
