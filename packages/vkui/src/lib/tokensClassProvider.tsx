import { Children, cloneElement, isValidElement } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { generateVKUITokensClassName } from '../helpers/generateVKUITokensClassName';

export interface TokensClassProviderProps {
  children: React.ReactNode;
  platform: string;
  appearance: string;
}

export const TokensClassProvider = ({
  children,
  platform,
  appearance,
}: TokensClassProviderProps) => {
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement<{ className?: string }>(child)) {
          return cloneElement(child, {
            className: classNames(
              child.props.className,
              generateVKUITokensClassName(platform, appearance),
            ),
          });
        }
        return child;
      })}
    </>
  );
};
