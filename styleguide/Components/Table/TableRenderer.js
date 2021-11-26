import React, { useEffect, useRef, useState } from 'react';
import { Text, classNames, useAdaptivity, ViewWidth, useAppearance } from '@vkui';
import './Table.css';
import { throttle } from '@vkontakte/vkjs';

export const TableRenderer = ({
  columns,
  rows,
  getRowKey,
}) => {
  const { viewWidth } = useAdaptivity();
  const [hasLeft, setHasLeft] = useState(viewWidth <= ViewWidth.MOBILE);
  const [hasRight, setHasRight] = useState(viewWidth <= ViewWidth.MOBILE);
  const appearance = useAppearance();
  const tableRef = useRef();
  const tableWidth = useRef(0);
  const tableInRef = useRef();
  const tableInWidth = useRef(0);

  function updateBorders() {
    tableWidth.current = tableRef.current.offsetWidth;
    tableInWidth.current = tableInRef.current.offsetWidth;

    setHasLeft(tableInRef.current.scrollLeft > 0);
    setHasRight(tableWidth.current - tableInRef.current.scrollLeft > tableInWidth.current);
  }

  useEffect(updateBorders, [viewWidth]);

  return (
    <div className={classNames('Table', {
      'Table--hasLeft': hasLeft,
      'Table--hasRight': hasRight,
    }, `Table--${appearance}`)}>
      <div className="Table__in" onScroll={throttle(updateBorders, 50)} ref={tableInRef}>
        <table className="Table__main" ref={tableRef}>
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
    </div>
  );
};

export default TableRenderer;
