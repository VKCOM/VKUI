import { type AllHTMLAttributes } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getMergedSameEventsByProps } from '../helpers/getMergedSameEventsByProps';
import { mergeStyle } from '../helpers/mergeStyle';
import { filterObject } from '../lib/object';
import { type HasRootRef } from '../types';
import { useExternRef } from './useExternRef';

type BaseProps<T extends HTMLElement = HTMLElement> = HasRootRef<T> &
  Pick<AllHTMLAttributes<T>, 'className' | 'style'>;

const filterProps = <T extends BaseProps = BaseProps>(props: T) => {
  return filterObject(props, (value) => value !== undefined);
};

export const useMergeProps = <T extends BaseProps = BaseProps>(
  originalProps: T,
  slotProps?: T,
): T => {
  const originalSlotGetRef = originalProps.getRootRef;
  const rootSlotGetRef = slotProps?.getRootRef;

  const getRootRef = useExternRef(originalSlotGetRef, rootSlotGetRef);

  if (!slotProps) {
    return filterProps(originalProps);
  }

  const { className: rootSlotClassName, style: rootSlotStyle, ...rootSlotProps } = slotProps || {};

  const {
    className: originalClassName,
    style: originalSlotStyle,
    ...originalRestProps
  } = originalProps;

  const resolvedClassName =
    originalClassName || rootSlotClassName
      ? classNames(originalClassName, rootSlotClassName)
      : undefined;
  const resolvedStyle =
    originalSlotStyle || rootSlotStyle ? mergeStyle(originalSlotStyle, rootSlotStyle) : undefined;

  const mergedEventsByInjectProps: any = getMergedSameEventsByProps(
    originalRestProps,
    rootSlotProps,
  );

  const resolvedProps: T = {
    ...originalRestProps,
    ...rootSlotProps,
    ...mergedEventsByInjectProps,
  };

  if (resolvedClassName) {
    resolvedProps.className = resolvedClassName;
  }
  if (resolvedStyle) {
    resolvedProps.style = resolvedStyle;
  }
  if (rootSlotGetRef || originalSlotGetRef) {
    resolvedProps.getRootRef = getRootRef;
  }

  return filterProps(resolvedProps);
};
