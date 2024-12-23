import { Button } from '@vkontakte/vkui';
import { type DocsThemeConfig } from '../types';

export function ProjectButton({ icon, link }: Pick<DocsThemeConfig, 'project'>['project']) {
  return (
    <Button
      before={icon}
      href={link}
      appearance="neutral"
      mode="secondary"
      rel="noreferrer"
      target="_blank"
      size="l"
    />
  );
}
