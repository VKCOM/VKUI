import React from 'react';
import './Table.css';
import { Text } from '../../../src';

interface TableProps {
  columns: {
    caption: string;
    render(row: any): React.ReactNode;
  }[];
  rows: any[];
  getRowKey(row: any): string;
}

export const TableRenderer: React.FunctionComponent<TableProps> = ({
  columns,
  rows,
  getRowKey,
}) => {
  return (
    <div className="Table">
      <table className="Table__main">
        <thead className="Table__head">
          <tr className="Table__tr Table__tr--head">
            {columns.map(({ caption }) => (
              <th key={caption} className="Table__th">
                <Text weight="regular">{caption}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="Table__body">
        {rows.map(row => (
          <tr key={getRowKey(row)} className="Table__tr">
            {columns.map(({ render }, index) => (
              <td key={index} className="Table__td">
                {render(row)}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRenderer;
