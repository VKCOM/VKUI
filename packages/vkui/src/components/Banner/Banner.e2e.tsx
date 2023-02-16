import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { Banner, BannerProps } from './Banner';

describe('Banner', () => {
  describeScreenshotFuzz(
    (props: BannerProps) => (
      <Banner
        before={<Image size={96} src="" />}
        header="Баста в Ледовом"
        subheader="Большой концерт"
        asideMode="dismiss"
        actions={<Button>Подробнее</Button>}
        {...props}
      />
    ),
    [
      {
        asideMode: [undefined, 'dismiss', 'expand'],
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
        header: ['Мои достижения'],
        subheader: ['Разблокировано 9 из 36'],
        background: [<div key="img-bg" style={{ backgroundColor: '#222222' }} />],
        before: [undefined],
        asideMode: [undefined],
        actions: [
          <Button key="btn" appearance="overlay">
            Подробнее
          </Button>,
        ],
      },
    ],
  );
});
