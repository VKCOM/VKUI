import {
  Icon16MessageHeart,
  Icon16MoreVertical,
  Icon20DocumentTextOutline,
  Icon20HeadphonesSupportOutline,
  Icon24MessageOutline,
  Icon28MessageOutline,
} from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { IconButton, type IconButtonProps } from './IconButton';

export const IconButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [
            <Icon28MessageOutline key="icon-w28" />,
            <Icon24MessageOutline key="icon-w24" />,
            <Icon16MessageHeart key="icon-w16" />,
            <Icon16MoreVertical key="icon-w08" />,
          ],
          $adaptivity: 'y',
        },
        {
          children: [<Icon28MessageOutline key="icon-w28" />],
          href: ['https://vk.ru'],
        },
      ]}
    >
      {(props: IconButtonProps) => (
        <IconButton
          label="Тест-кнопка"
          style={{ backgroundColor: 'var(--vkui--color_transparent--active)' }}
          {...props}
        />
      )}
    </ComponentPlayground>
  );
};

export const IconButtonGeometryPlayground = ({
  platform,
  colorScheme,
}: ComponentPlaygroundProps) => (
  <ConfigProvider platform={platform} colorScheme={colorScheme}>
    {(['regular', 'compact', undefined] as const).map((density) => (
      <AdaptivityProvider key={density ?? 'none'} density={density}>
        <IconButton label={`${density ?? 'none'} document`}>
          <Icon20DocumentTextOutline />
        </IconButton>
        <IconButton label={`${density ?? 'none'} support`} href="https://vk.ru">
          <Icon20HeadphonesSupportOutline />
        </IconButton>
      </AdaptivityProvider>
    ))}
  </ConfigProvider>
);
