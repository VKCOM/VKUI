import Avatar from '../Avatar/Avatar';
import Banner, { BannerProps } from './Banner';
import Button from '../Button/Button';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Banner', () => {
  describeScreenshotFuzz((props: BannerProps ) => (
    <Banner
      before={<Avatar size={96} mode="image" src="" />}
      header="Баста в Ледовом"
      subheader="Большой концерт"
      asideMode="dismiss"
      actions={<Button>Подробнее</Button>}
      {...props}
    />), [{
    size: ['s', 'm'],
  }]);
});
