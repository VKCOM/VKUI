import { Button } from '@vkontakte/vkui';
import { actionButtonProps, type ActionIcon } from '../actionButtonProps';

export function ActionLink({
  label,
  href,
  Icon,
  external = false,
}: {
  label: string;
  href: string;
  Icon: ActionIcon;
  external?: boolean;
}) {
  return (
    <Button
      {...actionButtonProps}
      before={<Icon />}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {label}
    </Button>
  );
}
