import type { Meta, StoryObj } from '@storybook/react';
import { Icon16MoreHorizontal, Icon28AddOutline, Icon28DeleteOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { getAvatarUrl } from '../../../testing/mock';
import { Button } from '../../Button/Button';
import { CellButton } from '../../CellButton/CellButton';
import { Popover } from '../../Popover/Popover';
import { ImageBase } from '../ImageBase';
import { ImageBaseFloatElement, type ImageBaseFloatElementProps } from './ImageBaseFloatElement';

const ContextMenu = () => {
  return (
    <Popover
      noStyling
      trigger="click"
      role="dialog"
      content={({ onClose }) => (
        <div
          style={{
            backgroundColor: 'var(--vkui--color_background_modal_inverse)',
            borderRadius: 8,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CellButton role="menuitem" before={<Icon28AddOutline />} onClick={onClose}>
            Добавить
          </CellButton>
          <CellButton
            role="menuitem"
            before={<Icon28DeleteOutline />}
            appearance="negative"
            onClick={onClose}
          >
            Удалить
          </CellButton>
        </div>
      )}
    >
      <Button mode="primary" after={<Icon16MoreHorizontal />}></Button>
    </Popover>
  );
};

const story: Meta<ImageBaseFloatElementProps> = {
  title: 'Data Display/ImageBase/ImageBaseFloatElement',
  component: ImageBaseFloatElement,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};
export default story;

export const Playground: StoryObj<ImageBaseFloatElementProps> = (
  props: ImageBaseFloatElementProps,
) => (
  <ImageBase size={96} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
    <ImageBase.FloatElement {...props} />
  </ImageBase>
);

Playground.args = {
  placement: 'top-start',
  blockIndent: '5%',
  inlineIndent: '5%',
  children: <ContextMenu />,
};
