import ModalCard, { ModalCardProps } from './ModalCard';
import Button from '../Button/Button';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import AppRoot from '../AppRoot/AppRoot';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';

describe('ModalCard', () => {
  describeScreenshotFuzz<ModalCardProps>((props) => (
    <div style={{ height: 800 }}>
      <ModalRoot activeModal="test">
        <ModalCard nav="test" {...props} />
      </ModalRoot>
    </div>
  ), [{
    icon: [<Icon56MoneyTransferOutline key="icon" />],
    header: ['Отправляйте деньги друзьям, используя банковскую карту'],
    subheader: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
    actions: [
      <Button size="l" mode="primary" key="button">
        Попробовать
      </Button>,
    ],
  }], {
    Wrapper: AppRoot,
  });
});
