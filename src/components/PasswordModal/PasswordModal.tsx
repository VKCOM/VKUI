import * as React from 'react';
import ModalPage, { ModalPageProps } from '../ModalPage/ModalPage';
import ModalPageHeader from '../ModalPageHeader/ModalPageHeader';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import Separator from '../Separator/Separator';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Div } from '../Div/Div';
import Caption from '../Typography/Caption/Caption';
import { NavIdProps } from '../../lib/getNavId';

import './PasswordModal.css';

export interface PasswordModalProps extends ModalPageProps, NavIdProps {
  height?: number;
  nav?: string;
}

const PasswordModal: React.FC<PasswordModalProps> = ({nav}) =>  {
  const [activeModal, setActiveModal] = React.useState(null);
  const [password, setPassword] = React.useState('Password');

  const closeModal = () => {
    setActiveModal(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    setPassword(value);
  }

  return (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalPage
        nav={nav}
        className="vkuiPasswordModal"
        style={{ padding: 8 }}
        header={
          <ModalPageHeader>
            Введите пароль
          </ModalPageHeader>
        }
        id="validate_password"
      >
        <Separator style={{marginBottom: 15.5}}/>
        <Caption level="1" weight="regular" className="vkuiGroup__description Group__description vkuiPasswordModal__caption">Для продолжения введите ваш<br/>текущий пароль от аккаунта VK ID</Caption>
        <Div className="vkuiPasswordModal__container">
          <Input value={password} onChange={handlePasswordChange} type="password" placeholder="Введите пароль"/>
        </Div>
        {/* <Cell className="vkuiPasswordModal__button">Забыли пароль?</Cell> */}
        <Separator style={{marginTop: 12, marginBottom: 12}}/>
        <footer vkuiClass="PasswordModal__actions">
          <Button className="PasswordModal__button" onClick={closeModal} appearance="neutral">Отменить</Button>
          <Button className="PasswordModal__button" disabled={password.length === 0} appearance="accent">Продолжить</Button>
        </footer>
        <div style={{height: 24}}/>
      </ModalPage>
    </ModalRoot>
  );
};

PasswordModal.defaultProps = {};

// eslint-disable-next-line import/no-default-export
export default PasswordModal;
