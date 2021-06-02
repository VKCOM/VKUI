import Avatar from '../Avatar/Avatar';
import Banner, { BannerProps } from './Banner';
import Button from '../Button/Button';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';

describe('Banner', () => {
  describeScreenshotFuzz((props: BannerProps ) => (
    <Banner
      before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg" />}
      header="Баста в Ледовом"
      subheader="Большой концерт"
      asideMode="dismiss"
      actions={<Button>Подробнее</Button>}
      {...props}
    />), [{
    size: ['s', 'm'],
  }]);
});
