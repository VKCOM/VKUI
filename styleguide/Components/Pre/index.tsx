import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from '@rsg-components/Styled';
import prismTheme from '../prismTheme';
import './Pre.css';

const styles = ({ color }) => ({
  pre: {
    ...prismTheme({ color }),
  },
});

export interface PreProps {
  className?: string;
  children: React.ReactNode;
}

type PrePropsWithClasses = JssInjectedProps & PreProps;

export const PreRenderer: React.FunctionComponent<PrePropsWithClasses> = ({
  classes,
  className,
  children,
}) => {
  const classNames = cx(className, classes.pre);

  const isHighlighted = className && className.indexOf('lang-') !== -1;
  if (isHighlighted && children) {
    return <div className={classNames}>
      <pre className="Pre" dangerouslySetInnerHTML={{ __html: children.toString() }} />
    </div>;
  }
  return <div className={classNames}>
    <pre className="Pre">{children}</pre>
  </div>;
};

PreRenderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Styled<PrePropsWithClasses>(styles)(PreRenderer);
