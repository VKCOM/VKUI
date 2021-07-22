import React from 'react';
import './Table.css';
import { Text } from '@vkui';

export const TableRenderer = ({
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
          {rows.map((row) => (
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
