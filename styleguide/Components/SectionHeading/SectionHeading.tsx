import React, { FC } from 'react';
import Heading from '../Heading';
import { classNames } from '@vkui';
import './SectionHeading.css';

export const SectionHeading: FC = ({ children, className, level = 2, ...restProps }) => {
  return <Heading {...restProps} level={level} className={classNames('SectionHeading', className)}>{ children }</Heading>
}
