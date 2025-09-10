'use client';

import * as React from 'react';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { Button, type ButtonProps, type VKUIButtonProps } from '../Button/Button';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';

interface FileModernProps
  extends Omit<ButtonProps, 'onChange'>,
    HasRootRef<HTMLElement>,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'onChange' | 'disabled' | 'accept'> {
  /**
   *
   */
  slotsProps: {
    input: Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'type' | 'size' | 'name' | 'onChange' | 'disabled' | 'accept'
    > &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

interface FileLegacyProps
  extends VKUIButtonProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {
  /**
   *
   */
  slotsProps?: undefined;
}

export type FileProps = FileModernProps | FileLegacyProps;

const useProps = (
  props: Omit<
    FileProps,
    | 'children'
    | 'align'
    | 'size'
    | 'mode'
    | 'appearance'
    | 'stretched'
    | 'before'
    | 'loading'
    | 'after'
    | 'className'
    | 'style'
    | 'getRootRef'
  >,
): [ButtonProps, VisuallyHiddenProps<HTMLInputElement>] => {
  return React.useMemo<[ButtonProps, VisuallyHiddenProps<HTMLInputElement>]>(() => {
    if (props.slotsProps) {
      const {
        slotsProps: { input: userSlotsInputProps = {} },
        name,
        onChange,
        disabled,
        accept,
        ...rootProps
      } = props as Omit<FileModernProps, 'size' | 'type'>;
      return [rootProps, { ...userSlotsInputProps, name, onChange, disabled, accept }];
    } else {
      const { getRef, ...inputProps } = props as Omit<FileLegacyProps, 'size'>;
      const resInputProps: VisuallyHiddenProps<HTMLInputElement> = {
        ...inputProps,
        getRootRef: getRef,
      };
      return [{}, resInputProps];
    }
  }, [props]);
};

/**
 * @see https://vkui.io/components/file
 */
export const File = ({
  children = 'Выберите файл',
  align = 'left',
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  className,
  style,
  getRootRef,
  appearance,
  ...restProps
}: FileProps): React.ReactNode => {
  const [rootProps, inputProps] = useProps(restProps);
  return (
    <Button
      Component="label"
      align={align}
      className={className}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      size={size}
      before={before}
      after={after}
      loading={loading}
      style={style}
      getRootRef={getRootRef}
      disabled={inputProps.disabled}
      {...rootProps}
    >
      <VisuallyHidden title="" {...inputProps} Component="input" type="file" />
      {children}
    </Button>
  );
};
