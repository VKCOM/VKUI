import { Icon24Cancel, Icon24Dismiss, Icon24Done } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ModalContext } from '../../context/ModalContext';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { ModalPageHeader, type ModalPageHeaderProps } from './ModalPageHeader';

const renderModalPageHeaderWithModalRoot = (props: ModalPageHeaderProps) => (
  <ModalContext.Provider value="test">
    <ModalPageHeader {...props} />
  </ModalContext.Provider>
);

const children = ['Заголовок', 'Невероятно длинный заголовок выезжает за шапку даже на десктопе'];

const cancel = (
  <PanelHeaderButton>
    <Icon24Cancel />
  </PanelHeaderButton>
);

const done = (
  <PanelHeaderButton>
    <Icon24Done />
  </PanelHeaderButton>
);

export const ModalPageHeaderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children,
          before: [null, cancel],
          after: [null, done],
        },
      ]}
    >
      {renderModalPageHeaderWithModalRoot}
    </ComponentPlayground>
  );
};

const dismiss = (
  <PanelHeaderButton>
    <Icon24Dismiss />
  </PanelHeaderButton>
);

const dismissText = <PanelHeaderButton>Готово</PanelHeaderButton>;

export const ModalPageHeaderIOSPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children,
          before: [null, cancel],
          after: [dismiss, dismissText],
        },
      ]}
    >
      {renderModalPageHeaderWithModalRoot}
    </ComponentPlayground>
  );
};
