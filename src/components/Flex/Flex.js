import './Flex.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('Flex');

export default function Flex (props) {
  const items = [].concat(props.children).filter(a => !!a);

  return (
    <div
      className={classnames(baseClassNames, props.className)}
      style={{
        ...props.style,
        alignItems: props.align,
        justifyContent: props.justify
      }}
      {...removeObjectKeys(props, ['className', 'style', 'alignment', 'align', 'justify'])}
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
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string
};
