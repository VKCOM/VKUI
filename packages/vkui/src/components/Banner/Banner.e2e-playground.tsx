import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Div } from '../Div/Div';
import { Image } from '../Image/Image';
import { Banner, type BannerProps } from './Banner';

export const BannerPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          after: [undefined, 'dismiss', 'chevron'],
          size: ['s', 'm'],
          actions: [undefined],
        },
        {
          size: ['s', 'm'],
          before: [undefined],
          actions: [
            undefined,
            <ButtonGroup mode="vertical" gap="m" key="fragment">
              <Button mode="primary">Попробовать сейчас</Button>
              <Button mode="secondary">Напомнить позже</Button>
            </ButtonGroup>,
          ],
        },
        {
          mode: ['image'],
          imageTheme: ['dark'],
          title: ['Мои достижения'],
          subtitle: ['Разблокировано 9 из 36'],
          background: [<div key="img-bg" style={{ backgroundColor: '#222222' }} />],
          before: [undefined],
          after: [undefined],
          actions: [
            <Button key="btn" appearance="overlay">
              Подробнее
            </Button>,
          ],
        },
        {
          mode: ['image'],
          after: ['dismiss', 'chevron'],
          imageTheme: ['light'],
          title: ['Мои достижения'],
          subtitle: ['Разблокировано 9 из 36'],
        },
        {
          mode: ['image'],
          after: ['dismiss', 'chevron'],
          imageTheme: ['dark'],
          title: ['Мои достижения'],
          subtitle: ['Разблокировано 9 из 36'],
          background: [<div key="img-bg" style={{ backgroundColor: '#222222' }} />],
        },
        {
          title: ['Header'],
          subtitle: ['Subheader'],
          extraSubtitle: ['Extra Subhead'],
          actions: [<Button key="btn">Button</Button>],
        },
      ]}
    >
      {(props: BannerProps) => (
        <Div>
          <Banner
            before={<Image size={96} src="" />}
            title="Баста в Ледовом"
            subtitle="Большой концерт"
            after="dismiss"
            actions={<Button>Подробнее</Button>}
            {...props}
          />
        </Div>
      )}
    </ComponentPlayground>
  );
};
