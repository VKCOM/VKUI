import React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { HasChildren, HasComponent } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Scaffold.module.css';

function Wrapper<T extends HasChildren & HasComponent>({ Component = 'div', ...props }: T) {
  return hasReactNode(props.children) ? <Component {...props} /> : null;
}

function TopBar(props: HasChildren) {
  return <Wrapper {...props} />;
}

function Content(props: HasChildren) {
  return <div className={styles['Scaffold__content']} {...props} />;
}

function BottomBar(props: HasChildren) {
  return <Wrapper {...props} />;
}

export interface ScaffoldProps extends HasChildren {
  topBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
}

export const Scaffold = ({ topBar, children, bottomBar, ...restProps }: ScaffoldProps) => {
  return (
    <RootComponent baseClassName={styles['Scaffold__host']} {...restProps}>
      <TopBar>{topBar}</TopBar>
      <Content>{children}</Content>
      <BottomBar>{bottomBar}</BottomBar>
    </RootComponent>
  );
};
