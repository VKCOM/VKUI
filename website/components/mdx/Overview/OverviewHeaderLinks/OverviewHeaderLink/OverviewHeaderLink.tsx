import { Link } from '@vkontakte/vkui';
import type { OverviewHeaderLinkProps } from '../types';

export function OverviewHeaderLink({ href, children }: OverviewHeaderLinkProps) {
  return (
    <Link target="_blank" rel="noreferrer" href={href}>
      {children}&nbsp;↗
    </Link>
  );
}
