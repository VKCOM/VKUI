import * as React from "react";
import { ModalPageProps} from "../ModalPage/ModalPage";
import Button from '../Button/Button';
import { ModalCardBase } from '../ModalCardBase/ModalCardBase';

export interface PasswordModalProps extends ModalPageProps {
  height?: number;
}

const PasswordModal: React.FunctionComponent<ModalPageProps> = () => {
  return (
    <ModalCardBase
    style={{ width: 344, height: 296 }}
    header="Введите пароль"
    subheader="Для продолжения введите ваш текущий пароль от аккаунта VK ID"
    actions={[
      <Button size="s" mode="primary" key="button" appearance='neutral'>
        Отменить
      </Button>,
      <Button size="s" mode="primary" key="button" appearance='accent'>
        Продолжить
      </Button>,
      ]
   }
    />
  );
};

PasswordModal.defaultProps = {
};

// eslint-disable-next-line import/no-default-export
export default React.memo(PasswordModal);
