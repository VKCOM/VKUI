import { forwardRef } from 'react';

export const tooltipContainerAttr = 'data-tooltip-container';
export const TooltipContainer = forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement> & { fixed?: boolean }
>(function TooltipContainer({ fixed = false, ...props }, ref) {
  (props as any)[tooltipContainerAttr] = fixed ? 'fixed' : 'true';
  return <div {...props} ref={ref} />;
});
