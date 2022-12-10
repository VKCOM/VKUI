import React, { Fragment } from 'react';
import Heading from '../Heading/index';
import { classNames } from '@vkui';
import { Icon16Linked } from '@vkontakte/icons';
import './SectionSubheading.css';

export const SectionSubheading = ({ children, className, level = 2, href, ...restProps }) => {
  const id = href ? href.replace(/#?\/.+\?id=(.+)/g, '$1') : undefined;

  return (
    <Heading {...restProps} level={level} className={classNames('SectionSubheading', className)}>
      {href && id && (
        <Fragment>
          <a className="SectionSubheading__link" href={href}>
            <Icon16Linked />
          </a>
          <a className="SectionSubheading__anchor" id={id} />
        </Fragment>
      )}
      <span className="SectionSubheading__text">{children}</span>
    </Heading>
  );
};
