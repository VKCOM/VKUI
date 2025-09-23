import { classNames } from '@vkontakte/vkjs';
import { SvgIcon, type SvgIconProps } from './SvgIcon';
import style from './LogoIcon.module.css';

export function LogoIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="73"
      height="36"
      fill="none"
      className={classNames(style.host, props.className, 'no-uwu')}
      {...props}
    >
      <g>
        <path
          fill="#07F"
          d="M0 17.3C0 9 0 5 2.5 2.5 5.1 0 9.1 0 17.3 0h1.4C27 0 31 0 33.5 2.5 36 5.1 36 9.1 36 17.3v1.4c0 8.2 0 12.2-2.5 14.8C30.9 36 26.9 36 18.7 36h-1.4C9 36 5 36 2.5 33.5 0 30.9 0 26.9 0 18.7v-1.4Z"
        />
        <path
          fill="#fff"
          d="M19 26C11 26 6.3 20.4 6 11h4.1c.1 6.9 3.2 9.8 5.6 10.4V11h3.8v6c2.4-.3 4.9-3 5.7-6h4c-.7 3.7-3.4 6.4-5.4 7.5 2 .9 5 3.2 6.2 7.5h-4.2c-1-2.9-3.2-5-6.3-5.4V26h-.4Z"
        />
        <path
          fill="currentColor"
          d="M55.3 29c-1.8 0-3.4-.4-4.8-1.1A8.5 8.5 0 0 1 46 20V7h4v13.1c0 1.7.4 3 1.4 4 1 1 2.3 1.5 3.9 1.5s3-.5 4-1.5 1.4-2.3 1.4-4V7h4v13.1c0 1.7-.5 3.3-1.3 4.6a8.2 8.2 0 0 1-3.3 3.2c-1.4.7-3 1.1-4.8 1.1ZM73 28.7h-4V7h4v21.7Z"
        />
      </g>
    </SvgIcon>
  );
}
