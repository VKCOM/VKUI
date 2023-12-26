import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useTokensClassName } from './useTokenClassName';

type ProvidedChildProps = {
  className?: string;
};

type InjectTokenClassNameToChildProps = {
  children: React.ReactElement<ProvidedChildProps>;
};

const InjectTokenClassNameToChild = ({ children }: InjectTokenClassNameToChildProps) => {
  const tokensClassName = useTokensClassName();

  return React.cloneElement(children, {
    className: classNames(tokensClassName, children.props.className),
  });
};

export interface TokensClassProviderProps {
  children: React.ReactNode;
}

export const TokensClassProvider = ({ children }: TokensClassProviderProps) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement<ProvidedChildProps>(child)) {
      return <InjectTokenClassNameToChild>{child}</InjectTokenClassNameToChild>;
    }
    return child;
  });
};
