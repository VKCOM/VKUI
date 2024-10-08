import React, { createContext, Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Icon20HideOutline, Icon20ViewOutline } from '@vkontakte/icons';
import { noop, throttle } from '@vkontakte/vkjs';
import { classNames, Text, useColorScheme } from '@vkui';
import NameRenderer from '../Name/NameRenderer';
import TogglePropsButton from '../TogglePropsButton';
import './Table.css';

const TableContext = createContext({ getRowKey: noop, columns: [] });

const TableRows = ({ rows }) => {
  const { columns, getRowKey } = useContext(TableContext);

  return (
    <Fragment>
      {rows.map((row) => (
        <tr key={getRowKey(row)} className="Table__tr">
          {columns.map(({ render }, index) => (
            <td key={index} className="Table__td">
              {index > 0 && render(row)}
              {index <= 0 && (
                <NameRenderer deprecated={!!row.tags?.deprecated} required={row.required}>
                  {row.name}
                </NameRenderer>
              )}
            </td>
          ))}
        </tr>
      ))}
    </Fragment>
  );
};

export const TableRenderer = ({ columns, rows, getRowKey }) => {
  const [hasLeft, setHasLeft] = useState(false);
  const [hasRight, setHasRight] = useState(false);
  const colorScheme = useColorScheme();
  const tableRef = useRef(null);
  const tableWidth = useRef(0);
  const tableInRef = useRef(null);
  const tableInWidth = useRef(0);
  const [expanded, toggleExpanded] = React.useState(false);

  function updateBorders() {
    tableWidth.current = tableRef.current.offsetWidth;
    tableInWidth.current = tableInRef.current.offsetWidth;

    setHasLeft(tableInRef.current.scrollLeft > 0);
    setHasRight(tableWidth.current - tableInRef.current.scrollLeft > tableInWidth.current);
  }
  useEffect(updateBorders, [expanded]);

  // react-docgen-typescript сортирует пропсы:
  // - по обязательности
  // - по алфавиту
  // здесь мы вытаскиваем вверх еще и пропсы vkui,
  // а пропсы из node_modules сохраняем отдельным списком
  const nodeModulesRows = [];
  const vkuiRows = [];

  rows.forEach((prop) => {
    if (prop.fromNodeModules) {
      nodeModulesRows.push(prop);
    } else {
      vkuiRows.push(prop);
    }
  });

  return (
    <div
      className={classNames(
        'Table',
        hasLeft && 'Table--hasLeft',
        hasRight && 'Table--hasRight',
        `Table--${colorScheme}`,
      )}
    >
      <div className="Table__in" onScroll={throttle(updateBorders, 50)} ref={tableInRef}>
        <table className="Table__main" ref={tableRef}>
          <thead className="Table__head">
            <tr className="Table__tr Table__tr--head">
              {columns.map(({ caption }) => (
                <th key={caption} className="Table__th">
                  <Text>{caption}</Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="Table__body">
            <TableContext.Provider value={{ columns, getRowKey }}>
              <TableRows rows={vkuiRows} />
              {!!nodeModulesRows.length && (
                <tr className="Table__tr">
                  <td className="Table__td" colSpan={columns.length}>
                    <TogglePropsButton
                      before={expanded ? <Icon20HideOutline /> : <Icon20ViewOutline />}
                      onClick={() => toggleExpanded(!expanded)}
                    >
                      {expanded ? (
                        <span>Скрыть дополнительные свойства</span>
                      ) : (
                        <span>Показать все свойства</span>
                      )}
                    </TogglePropsButton>
                  </td>
                </tr>
              )}
              {expanded && <TableRows rows={nodeModulesRows} />}
            </TableContext.Provider>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableRenderer;
