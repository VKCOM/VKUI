import React, { Fragment } from 'react';
import { Icon16Linked } from '@vkontakte/icons';
import { classNames } from '@vkui';
import Heading from '../Heading/index';
import './SectionSubheading.css';

export const SectionSubheading = ({ children, className, level = 2, href, ...restProps }) => {
  const id = href ? href.replace(/#?\/.+\?id=(.+)/g, '$1') : undefined;

  return (
    <Heading {...restProps} level={level} className={classNames('SectionSubheading', className)}>
      <span className="SectionSubheading__text">{children}</span>
      {href && id && (
        <Fragment>
          <a className="SectionSubheading__link" href={href}>
            <Icon16Linked />
          </a>
          <a className="SectionSubheading__anchor" id={id} />
        </Fragment>
      )}
    </Heading>
  );
};
