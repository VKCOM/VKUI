import { Icon24Add, Icon28AddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Avatar } from '../Avatar/Avatar';
import { Image } from '../Image/Image';
import { CellButton, type CellButtonProps } from './CellButton';

export const CellButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      componentStateHeight={{
        android: 125,
        ios: 125,
        vkcom: 110,
      }}
      propSets={[
        {
          centered: [undefined, true],
          children: ['Создать что-нибудь'],
          before: [<Icon24Add key="add" />],
        },
        {
          appearance: ['neutral', 'negative'],
          before: [<Icon28AddOutline key="icon" />],
          children: ['Создать что-нибудь'],
        },
        {
          before: [
            undefined,
            <Avatar key={40} size={40}>
              <Icon24Add />
            </Avatar>,
            <Avatar key={48} size={48}>
              <Icon28AddOutline />
            </Avatar>,
            <Image key={72} size={72}>
              <Icon28AddOutline />
            </Image>,
          ],
          children: ['Создать что-нибудь'],
        },
      ]}
    >
      {(props: CellButtonProps) => <CellButton {...props} />}
    </ComponentPlayground>
  );
};
