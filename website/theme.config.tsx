import { Button } from '@vkontakte/vkui';
import { type DocsThemeConfig, StorybookIcon } from '@vkontakte/vkui-docs-theme';
import { Versions } from './src/components';

const config: DocsThemeConfig = {
  navbar: {
    extraButtons: (
      <Button
        before={
          <StorybookIcon
            width="24"
            height="24"
            viewBox="0 0 20 20"
            verticalAlign="middle"
            color="medium"
          />
        }
        mode="secondary"
        appearance="neutral"
        size="l"
        href="https://vkcom.github.io/VKUI/playground/"
        target="_blank"
        rel="noreferrer"
      />
    ),
    versions: Versions,
  },
  project: {
    link: 'https://github.com/VKCOM/VKUI/',
  },
};

export default config;
