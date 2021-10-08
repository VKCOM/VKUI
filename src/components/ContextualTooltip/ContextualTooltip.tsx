import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import './ContextualTooltip.css';

export interface ContextualTooltipProps extends Omit<HoverPopperProps, 'content'> {
  text?: React.ReactNode;
  header?: React.ReactNode;
}

export const ContextualTooltip: React.FC<ContextualTooltipProps> = ({ children, text, header, ...popperProps }: ContextualTooltipProps) => {
  const platform = usePlatform();

  return (
    <HoverPopper
      vkuiClass={getClassName('ContextualTooltip', platform)}
      arrow
      arrowClassName="ContextualTooltip__arrow"
      content={
        <React.Fragment>
          {hasReactNode(header) && <Subhead Component="span" weight="medium" vkuiClass="ContextualTooltip__header">{header}</Subhead>}
          {hasReactNode(text) && <Subhead Component="span" weight="regular" vkuiClass="ContextualTooltip__text">{text}</Subhead>}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
