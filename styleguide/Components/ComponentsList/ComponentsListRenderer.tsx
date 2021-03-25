import React from 'react';
import { SimpleCell } from '../../../src';

export default ({ items }) => {
  return <div>
    {items.map((item) => {
      return (
        <React.Fragment key={item.visibleName}>
          <SimpleCell href={item.href}>{item.visibleName}</SimpleCell>
          {item.content}
        </React.Fragment>
      )
    })}
  </div>
}
