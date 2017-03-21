import './Flex.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('Flex');

export default function Flex (props) {
  const items = [].concat(props.children).filter(a => !!a);

  return (
    <div
      className={classnames(baseClassNames, props.className)}
      style={props.style}
      {...removeObjectKeys(props, ['className', 'style', 'alignment'])}
    >
      {items.map((item, i) => (
        <div className="Flex__item" key={item.key || item.props.id || `flex-item-${i}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

Flex.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
};
