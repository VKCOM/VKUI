import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { StyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassNames = getClassName('Div');

export interface DivProps extends StyleObject, HasChildren, HasRef<HTMLDivElement> {}

export default function Div ({ className, children, getRootRef, ...restProps }: DivProps) {
  return (
    <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
      {children}
    </div>
  );
}

Div.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  getRootRef: PropTypes.func
};
