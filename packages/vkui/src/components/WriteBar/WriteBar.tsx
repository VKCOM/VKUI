import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasRef, HasRootRef } from '../../types';
import { useResizeTextarea } from '../Textarea/useResizeTextarea';
import { Headline } from '../Typography/Headline/Headline';
import { Title } from '../Typography/Title/Title';
import type { TypographyProps } from '../Typography/Typography';
import styles from './WriteBar.module.css';

export interface WriteBarProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLTextAreaElement> {
  /**
   * Содержимое, отображаемое слева от поля ввода.
   */
  before?: React.ReactNode;
  /**
   * Содержимое, отображаемое поверх поля ввода (актуально для iOS)
   */
  inlineAfter?: React.ReactNode;
  /**
   * Содержимое, отображаемое справа от поля ввода
   */
  after?: React.ReactNode;
  /**
   * Вызывается при смене высоты поля ввода
   */
  onHeightChange?: VoidFunction;
  /**
   * Добавляет тень вокруг поля ввода
   */
  shadow?: boolean;

  children?: never;
}

const WriteBarTypography = (props: TypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Title {...props} level="3" weight="3" />;
  }

  return <Headline {...props} />;
};

/**
 * @see https://vkcom.github.io/VKUI/#/WriteBar
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
  onChange,
  ...restProps
}: WriteBarProps): React.ReactNode => {
  const platform = usePlatform();

  const [refResizeTextarea, resize] = useResizeTextarea(onHeightChange, true);
  const textareaRef = useExternRef(getRef, refResizeTextarea);

  React.useEffect(resize, [resize, platform]);

  return (
    <div
      ref={getRootRef}
      className={classNames(
        styles['WriteBar'],
        platform === 'ios' && styles['WriteBar--ios'],
        shadow && styles['WriteBar--shadow'],
        className,
      )}
      style={style}
    >
      <div className={styles['WriteBar__form']}>
        {hasReactNode(before) && <div className={styles['WriteBar__before']}>{before}</div>}

        <div className={styles['WriteBar__formIn']}>
          <WriteBarTypography
            {...restProps}
            Component="textarea"
            className={styles['WriteBar__textarea']}
            onChange={callMultiple(onChange, resize)}
            getRootRef={textareaRef}
          />
          {hasReactNode(inlineAfter) && (
            <div className={styles['WriteBar__inlineAfter']}>{inlineAfter}</div>
          )}
        </div>

        {hasReactNode(after) && <div className={styles['WriteBar__after']}>{after}</div>}
      </div>
    </div>
  );
};
