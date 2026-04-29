import { SvgIcon, type SvgIconProps } from './SvgIcon.tsx';

export function CodeSandboxIcon(props: SvgIconProps) {
  return (
    <SvgIcon width={20} height={20} fill="currentColor" {...props}>
      <path d="M10 2.5 16.5 6.3v7.4L10 17.5 3.5 13.7V6.3L10 2.5Zm0 1.6L5.3 6.8v6.4l4.7 2.7 4.7-2.7V6.8L10 4.1Zm0 .9 3.3 1.9L10 8.8 6.7 6.9 10 5Zm-4.1 3 3.3 1.9v3.8l-3.3-1.9V8Zm8.2 0v3.8l-3.3 1.9V9.9l3.3-1.9Z" />
    </SvgIcon>
  );
}
