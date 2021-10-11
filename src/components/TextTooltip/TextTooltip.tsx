import * as React from 'react';
import { HoverPopper, HoverPopperProps } from '../HoverPopper/HoverPopper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import { prefixClass } from '../../lib/prefixClass';
import './TextTooltip.css';

export interface TextTooltipProps extends HoverPopperProps {
  /**
   * @ignore
   * Можно было бы использовать Omit, но react-docgen-typescript в таком случае выкидывает из документации все свойства наследуемого интерфейса
   * https://github.com/styleguidist/react-docgen-typescript/issues/335
   */
  content?: React.ReactNode;
  /**
   * @ignore
   */
  arrow?: HoverPopperProps['arrow'];
  /**
   * @ignore
   */
  arrowClassName?: HoverPopperProps['arrowClassName'];
  text?: React.ReactNode;
  header?: React.ReactNode;
}

export const TextTooltip: React.FC<TextTooltipProps> = ({ children, text, header, ...popperProps }: TextTooltipProps) => {
  const platform = usePlatform();

  return (
    <HoverPopper
      vkuiClass={getClassName('TextTooltip', platform)}
      arrow
      arrowClassName={prefixClass('TextTooltip__arrow')}
      content={
        <React.Fragment>
          {hasReactNode(header) && <Subhead Component="span" weight="medium" vkuiClass="TextTooltip__header">{header}</Subhead>}
          {hasReactNode(text) && <Subhead Component="span" weight="regular" vkuiClass="TextTooltip__text">{text}</Subhead>}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
