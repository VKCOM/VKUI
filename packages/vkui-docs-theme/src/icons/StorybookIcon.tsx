import { SvgIcon, type SvgIconProps } from './SvgIcon';

export function StorybookIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.6 2.2 13.5 4c0 .1.1.1.2 0l.7-.5.6.5a.1.1 0 0 0 .2-.1L15 2.1 16 2a.8.8 0 0 1 .8.8v14.4a.8.8 0 0 1-.8.8l-10.7-.5a.8.8 0 0 1-.8-.8L4 3.5c0-.4.3-.8.8-.8l8.8-.5Zm-2 5.8c0 .3 2 .2 2.3 0 0-2.2-1.1-3.3-3.2-3.3S7.4 6 7.4 7.6s1.3 2.4 2.4 3c.9.5 1.6 1 1.6 1.6 0 .5-.2.7-.7.7-.6 0-.9-.3-.9-1.4 0-.2-2.4-.3-2.5 0-.2 2.7 1.5 3.5 3.4 3.5s3.3-1 3.3-2.8c0-1.9-1.4-2.6-2.5-3.2-.8-.5-1.5-.8-1.5-1.5 0-.6.4-.7.7-.7.3 0 .9 0 .8 1.2Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
}
