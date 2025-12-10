import { Image } from '../../../src';
import { getAvatarUrl } from '../../../src/testing/mock';
import { type ComponentConfigData } from '../config';

export const ImageDecorator: ComponentConfigData['decorator'] = ({ children }) => {
  return (
    <Image size={96} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
      {children}
    </Image>
  );
};
