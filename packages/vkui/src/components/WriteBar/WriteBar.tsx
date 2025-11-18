'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { useResizeTextarea } from '../Textarea/useResizeTextarea';
import { Headline } from '../Typography/Headline/Headline';
import { Title } from '../Typography/Title/Title';
import type { TypographyProps } from '../Typography/Typography';
import styles from './WriteBar.module.css';

const warn = warnOnce('WriteBar');

export interface WriteBarProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ textArea: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLTextAreaElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `textArea`: свойства для прокидывания в поле ввода.
   */
  slotProps?: {
    root?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
    textArea?: React.TextareaHTMLAttributes<HTMLTextAreaElement> &
      HasRootRef<HTMLTextAreaElement> &
      HasDataAttribute;
  };
  /**
   * Содержимое, отображаемое слева от поля ввода.
   */
  before?: React.ReactNode;
  /**
   * Содержимое, отображаемое поверх поля ввода (актуально для iOS).
   */
  inlineAfter?: React.ReactNode;
  /**
   * Содержимое, отображаемое справа от поля ввода.
   */
  after?: React.ReactNode;
  /**
   * Вызывается при смене высоты поля ввода.
   */
  onHeightChange?: VoidFunction;
  /**
   * Добавляет тень вокруг поля ввода.
   */
  shadow?: boolean;
  /**
   * @deprecated Неиспользуемое свойство.
   */
  children?: never;
}

const WriteBarTypography = (props: TypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Title {...props} level="3" weight="3" />;
  }

  return <Headline weight="3" {...props} />;
};

/**
 * @see https://vkui.io/components/write-bar
 */
export const WriteBar = ({
  className,
  style,
  before,
  inlineAfter,
  after,
  getRootRef,
  getRef,
  onHeightChange,
  shadow = false,

  slotProps,
  ...restProps
}: WriteBarProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ textArea: { getRootRef: ... } }`');
  }

  const platform = usePlatform();

  const rootProps = useMergeProps(
    {
      className,
      getRootRef,
      style,
    },
    slotProps?.root,
  );

  const {
    onChange,
    getRootRef: getTextAreaRef,
    ...textAreaRest
  } = useMergeProps(
    {
      className: styles.textarea,
      getRootRef: getRef,
      ...restProps,
    },
    slotProps?.textArea,
  );

  const [refResizeTextarea, resize] = useResizeTextarea(onHeightChange, true);
  const textareaRef = useExternRef(getTextAreaRef, refResizeTextarea);

  React.useEffect(resize, [resize, platform]);

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        shadow && styles.shadow,
      )}
      {...rootProps}
    >
      <div className={styles.form}>
        {hasReactNode(before) && <div className={styles.before}>{before}</div>}

        <div className={styles.formIn}>
          <WriteBarTypography
            Component="textarea"
            onChange={callMultiple(onChange, resize)}
            getRootRef={textareaRef}
            {...textAreaRest}
          />
          {hasReactNode(inlineAfter) && <div className={styles.inlineAfter}>{inlineAfter}</div>}
        </div>

        {hasReactNode(after) && <div className={styles.after}>{after}</div>}
      </div>
    </RootComponent>
  );
};
