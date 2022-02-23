import * as React from "react";
import ModalPage, { ModalPageProps} from "../ModalPage/ModalPage";

export interface PasswordModalProps extends ModalPageProps {
  height?: number;
}

const PasswordModal: React.FunctionComponent<ModalPageProps> = ({ style,
                                                                    ...restProps
                                                                  }: ModalPageProps) => {
  return <ModalPage  {...restProps} style={{ ...style }} />;
};

PasswordModal.defaultProps = {
};

// eslint-disable-next-line import/no-default-export
export default React.memo(PasswordModal);
