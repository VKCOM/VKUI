import { Button } from '@vkontakte/vkui';
import { GithubIcon } from '../icons';
import { type DocsThemeConfig } from '../types';

export function ProjectButton({ projectLink }: Pick<DocsThemeConfig, 'projectLink'>) {
  return (
    <Button
      before={
        <GithubIcon
          width="24"
          height="24"
          viewBox="0 0 20 20"
          verticalAlign="middle"
          color="medium"
        />
      }
      href={projectLink}
      appearance="neutral"
      mode="secondary"
      rel="noreferrer"
      target="_blank"
      size="l"
    />
  );
}
