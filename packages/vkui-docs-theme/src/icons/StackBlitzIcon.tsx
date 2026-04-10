import { SvgIcon, type SvgIconProps } from './SvgIcon.tsx';

export function StackBlitzIcon(props: SvgIconProps) {
  return (
    <SvgIcon width={20} height={20} fill="currentColor" {...props}>
      <path d="M5.5 3h9l-4 5h3.5L5.5 17l2-5.5H4.5l5-8.5z" />
    </SvgIcon>
  );
}
