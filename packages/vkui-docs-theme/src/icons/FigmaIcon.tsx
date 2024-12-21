import { SvgIcon, type SvgIconProps } from './SvgIcon';

export function FigmaIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fill="#E8E8E8"
        d="M7.67 18c1.47 0 2.66-1.2 2.66-2.67v-2.66H7.67a2.67 2.67 0 0 0 0 5.33Z"
      />
      <path fill="#fff" d="M5 10c0-1.47 1.2-2.67 2.67-2.67h2.66v5.34H7.67A2.67 2.67 0 0 1 5 10Z" />
      <path fill="#F6F6F6" d="M5 4.67C5 3.19 6.2 2 7.67 2h2.66v5.33H7.67A2.67 2.67 0 0 1 5 4.67Z" />
      <path fill="#fff" d="M10.33 2H13a2.67 2.67 0 0 1 0 5.33h-2.67V2Z" />
      <path fill="#F6F6F6" d="M15.67 10a2.67 2.67 0 1 1-5.34 0 2.67 2.67 0 0 1 5.34 0Z" />
    </SvgIcon>
  );
}
