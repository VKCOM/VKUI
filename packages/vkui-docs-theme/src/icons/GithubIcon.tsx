import { SvgIcon, type SvgIconProps } from './SvgIcon';

export function GithubIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1.8a8.4 8.4 0 0 0-2.6 16.4c.4 0 .5-.2.5-.4v-1.6c-2.3.5-2.8-1-2.8-1-.4-1-1-1.2-1-1.2-.7-.5.1-.5.1-.5.9 0 1.3.8 1.3.8.8 1.3 2 1 2.5.7 0-.5.3-.9.5-1-1.9-.3-3.8-1-3.8-4.2 0-1 .3-1.7.8-2.3 0-.2-.3-1 .1-2.2 0 0 .7-.2 2.3.8a8 8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8a3 3 0 0 1 0 2.2c.6.6 1 1.3 1 2.3 0 3.2-2 3.9-3.9 4.1.3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4a8.4 8.4 0 0 0 5.7-8c0-4.6-3.7-8.4-8.3-8.4Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
}
