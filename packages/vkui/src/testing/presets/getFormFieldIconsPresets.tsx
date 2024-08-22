import { Icon16Clear, Icon28MessageOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { IconButton } from '../../components/IconButton/IconButton';
import { createFieldWithPresets } from './createFieldWithPresets';

export const getFormFieldIconsPresets = () => {
  return createFieldWithPresets({
    iconSizes: ['12', '16', '20', '24', '28'],
    additionalPresets: {
      MessageButton: (
        <IconButton onClick={noop} label="Сообщения">
          <Icon28MessageOutline />
        </IconButton>
      ),
      DeleteIconButton: (
        <IconButton onClick={noop} label="Очистить">
          <Icon16Clear />
        </IconButton>
      ),
    },
  });
};
