import * as React from 'react';
import ModalPage, { ModalPageProps } from '../ModalPage/ModalPage';
import { Icon20Info, Icon24Dismiss } from '@vkontakte/icons';
import { MiniInfoCell } from '../MiniInfoCell/MiniInfoCell';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { IOS } from '../../lib/platform';
import { SplitCol } from '../SplitCol/SplitCol';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import ModalPageHeader from '../ModalPageHeader/ModalPageHeader';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { usePlatform } from '../../hooks/usePlatform';
import View from '../View/View';
import Group from '../Group/Group';
import { Panel } from '../Panel/Panel';
import Separator from '../Separator/Separator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import Placeholder from '../Placeholder/Placeholder';

export interface PasswordModalProps extends ModalPageProps {
  height?: number;
}

function PasswordModal() {
  const platform = usePlatform();
  const [activeModal, setActiveModal] = React.useState(null);
  const handleExtendedInfoClick = () => {
    // @ts-ignore
    setActiveModal('validate_password');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalPage
        style={{padding: 8}}
        header={
          <ModalPageHeader
            right={
              platform === IOS && (
                <PanelHeaderButton onClick={closeModal}>
                  <Icon24Dismiss/>
                </PanelHeaderButton>
              )
            }
          >
            Введите пароль
          </ModalPageHeader>
        }
        id="validate_password"
      >
        <Separator style={{marginBottom: 15.5}}/>
        <Placeholder>Для продолжения введите ваш текущий пароль от аккаунта VK ID</Placeholder>
        <Input type="password"/>
        <CellButton>Забыли пароль?</CellButton>
        <Separator style={{marginTop: 12, marginBottom: 12}}/>
          <Button appearance="neutral">Отменить</Button>
          <Button appearance="accent">Продолжить</Button>
        <div style={{height: 24}}/>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="information_cell">
          <Panel id="information_cell">
            <Group>
              <MiniInfoCell
                before={<Icon20Info/>}
                mode="more"
                onClick={handleExtendedInfoClick}
              >
                Открыть модальное окно
              </MiniInfoCell>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

PasswordModal.defaultProps = {};

// eslint-disable-next-line import/no-default-export
export default React.memo(PasswordModal);
