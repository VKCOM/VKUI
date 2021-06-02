import React  from 'react';
import Heading from '../Heading/index';
import { classNames } from '@vkui';
import { Icon16Linked } from '@vkontakte/icons';
import './SectionHeading.css';

export const SectionHeading = ({ children, className, level = 2, href, ...restProps }) => {
  return (
    <Heading {...restProps} level={level} className={classNames('SectionHeading', className)}>
      {href && <a className="SectionHeading__link" href={href}><Icon16Linked /></a>}
      {href && <a className="SectionHeading__anchor" id={href.replace('#', '')}></a>}
      <span className="SectionHeading__text">{children}</span>
    </Heading>
  );
}
