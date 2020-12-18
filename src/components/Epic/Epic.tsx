import React, { HTMLAttributes, ReactNode, FC, useEffect } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren } from '../../types';
import usePlatform from '../../hooks/usePlatform';
import { AdaptivityProps } from 'index';
import withAdaptivity, { ViewWidth } from '../../hoc/withAdaptivity';

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, HasChildren, AdaptivityProps {
  tabbar?: ReactNode;
  activeStory: string;
}

export const Epic: FC<EpicProps> = (props) => {
  const platform = usePlatform();
  const { className, activeStory, tabbar, children, viewWidth, ...restProps } = props;

  useEffect(() => {
    if (!tabbar && viewWidth < ViewWidth.SMALL_TABLET) {
      console.warn('[Epic] Using Epic without tabbar is not recommended on mobile');
    }
  }, [viewWidth]);

  return (
    <div {...restProps} className={classNames(getClassName('Epic', platform), className)}>
      {React.Children.toArray(children).find((item: React.ReactElement) => item.props.id === activeStory)}
      {tabbar}
    </div>
  );
};

export default withAdaptivity(Epic, {
  viewWidth: true,
});
