import { render } from '@testing-library/react';
import { getAvatarUrl } from '../../testing/mock';
import { baselineComponent } from '../../testing/utils';
import { UsersStack, type UsersStackProps } from './UsersStack';

describe('UsersStack', () => {
  baselineComponent(UsersStack);

  it('should render wrapper', () => {
    const avatarsUrls = [
      getAvatarUrl('user_mm'),
      getAvatarUrl('user_ilyagrshn'),
      getAvatarUrl('user_lihachyov'),
    ];

    const photos: UsersStackProps['photos'] = avatarsUrls.map((src, index) => ({
      src,
      renderWrapper: ({ children }) => <div data-testid={`wrapper-${index}`}>{children}</div>,
    }));

    const result = render(
      <UsersStack photos={photos}>
        <span data-testid="text-content">Текстовое описание</span>
      </UsersStack>,
    );

    expect(result.getByTestId('text-content')).toBeInTheDocument();
    avatarsUrls.forEach((url, index) => {
      const wrapper = result.getByTestId(`wrapper-${index}`);
      expect(wrapper).toBeInTheDocument();
      const image = wrapper.querySelector('image')!;
      expect(image.getAttribute('href')).toBe(url);
    });
  });
});
