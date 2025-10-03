import { classNames } from '@vkontakte/vkjs';
import { getMergedSameEventsByProps } from '../helpers/getMergedSameEventsByProps.ts';
import { mergeStyle } from '../helpers/mergeStyle.ts';
import { useExternRef } from './useExternRef.ts';

export const useMergeProps = (originalProps: any, slotProps?: any): any => {
  const {
    className: rootSlotClassName,
    style: rootSlotStyle,
    getRootRef: rootSlotGetRef,
    ...rootSlotsProps
  } = slotProps || {};

  const {
    className: originalClassName,
    style: originalSlotStyle,
    getRootRef: originalSlotGetRef,
    ...originalRestProps
  } = originalProps || {};

  const resolvedClassName =
    originalClassName || rootSlotClassName
      ? classNames(originalClassName, rootSlotClassName)
      : undefined;
  const resolvedStyle =
    originalSlotStyle || rootSlotStyle ? mergeStyle(originalSlotStyle, rootSlotStyle) : undefined;
  const getRootRef = useExternRef(originalSlotGetRef, rootSlotGetRef);

  const mergedEventsByInjectProps = getMergedSameEventsByProps(originalRestProps, rootSlotsProps);

  const resolvedProps = {
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
