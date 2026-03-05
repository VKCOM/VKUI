'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../../hooks/useExternRef';
import { usePlatform } from '../../../hooks/usePlatform';
import { callMultiple } from '../../../lib/callMultiple';
import type { RootComponentProps } from '../../RootComponent/RootComponent';
import { useResizeTextarea } from '../../Textarea/useResizeTextarea';
import { Headline } from '../../Typography/Headline/Headline';
import { Title } from '../../Typography/Title/Title';
import styles from './WriteBarTextarea.module.css';

type WriteBarTextareaProps = RootComponentProps<HTMLTextAreaElement> & {
  /**
   * Вызывается при смене высоты поля ввода.
   */
  onHeightChange?: VoidFunction;
};

export const WriteBarTextarea = ({
  className,
  getRootRef,
  onHeightChange,
  onChange,
  ...restProps
}: WriteBarTextareaProps) => {
  const platform = usePlatform();

  const [refResizeTextarea, resize] = useResizeTextarea(onHeightChange, true);
  const textareaRef = useExternRef(getRootRef, refResizeTextarea);

  React.useEffect(resize, [resize, platform]);

  const props = {
    Component: 'textarea',
    weight: '3',
    className: classNames(className, styles.host, platform === 'ios' && styles.ios),
    getRootRef: textareaRef,
    onChange: callMultiple(onChange, resize),
  } as const;

  if (platform === 'ios') {
    return <Title level="3" {...props} {...restProps} />;
  }

  return <Headline {...props} {...restProps} />;
};
