import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Uploader.module.css';

const Border = () => (
  <svg
    className={styles['Uploader__border']}
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    aria-hidden
  >
    <rect
      className={styles['Uploader__borderRect']}
      fill="none"
      strokeLinecap="round"
      strokeDasharray="4 6"
      x="0"
      y="0"
      width="100%"
      height="100%"
    ></rect>
  </svg>
);

export type UploaderProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/Uploader
 */
export const Uploader = ({ onDragEnter, onDragLeave, children, ...props }: UploaderProps) => {
  const [active, setActive] = React.useState(false);

  const onDragEnterLocal: React.DragEventHandler<HTMLDivElement> = () => {
    setActive(true);
  };

  const onDragLeaveLocal: React.DragEventHandler<HTMLDivElement> = () => {
    setActive(false);
  };

  return (
    <RootComponent
      baseClassName={classNames(styles['Uploader'], active && styles['Uploader--active'])}
      onDragEnter={callMultiple(onDragEnterLocal, onDragEnter)}
      onDragLeave={callMultiple(onDragLeaveLocal, onDragLeave)}
      {...props}
    >
      <Border />
      {children}
    </RootComponent>
  );
};
