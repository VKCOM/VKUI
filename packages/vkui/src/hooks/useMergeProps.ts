import { type AllHTMLAttributes } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getMergedSameEventsByProps } from '../helpers/getMergedSameEventsByProps.ts';
import { mergeStyle } from '../helpers/mergeStyle.ts';
import { type HasRootRef } from '../types.ts';
import { useExternRef } from './useExternRef.ts';

type BaseProps<T extends HTMLElement = HTMLElement> = HasRootRef<T> &
  Pick<AllHTMLAttributes<T>, 'className' | 'style'>;

export const useMergeProps = <T extends BaseProps = BaseProps>(
  originalProps: T,
  slotProps?: T,
): T => {
  const originalSlotGetRef = originalProps.getRootRef;
  const rootSlotGetRef = slotProps?.getRootRef;

  const getRootRef = useExternRef(originalSlotGetRef, rootSlotGetRef);

  if (!slotProps) {
    return originalProps;
  }

  const { className: rootSlotClassName, style: rootSlotStyle, ...rootSlotsProps } = slotProps || {};

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
    rootSlotsProps,
  );

  const resolvedProps: T = {
    ...originalRestProps,
    ...rootSlotsProps,
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

  return resolvedProps;
};
