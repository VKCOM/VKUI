import * as React from 'react';
import { baselineComponent } from '../../testing/utils';
import { Table } from '../Table/Table';
import { TableBody } from '../TableBody/TableBody';
import { TableFooter } from '../TableFooter/TableFooter';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from './TableCell';

describe(TableCell, () => {
  baselineComponent((props) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell {...props}>Header 1</TableCell>
          <TableCell>Header 1</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell asHeader scope="row">
            Column 1
          </TableCell>
          <TableCell>Column 2</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ));

  baselineComponent(
    (props) => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 1</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell asHeader scope="row" {...props}>
              Column 1
            </TableCell>
            <TableCell>Column 2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    ),
    undefined,
    'baseline (with asHeader prop)',
  );
});
