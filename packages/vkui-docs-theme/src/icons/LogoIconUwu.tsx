import { classNames } from '@vkontakte/vkjs';
import Image from 'next/image';
import logo from './LogoIconUwu.svg';

export function LogoIconUwu(props: Partial<React.ComponentProps<typeof Image>>) {
  return (
    <Image
      width={59}
      height={36}
      className={classNames(props.className, 'yes-uwu')}
      src={logo}
      alt=""
      aria-hidden
    />
  );
}
