import * as React from 'react';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import {
  AppDefaultWrapper,
  type AppWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard, type ModalCardProps } from './ModalCard';

const AppWrapper = ({ children, ...restProps }: AppWrapperProps) => (
  <AppDefaultWrapper scroll="contain" {...restProps}>
    {children}
  </AppDefaultWrapper>
);

export const ModalCardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          nav: ['1'],
          icon: [<Icon56MoneyTransferOutline key="icon" />],
          header: ['Отправляйте деньги друзьям, используя банковскую карту'],
          subheader: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
          actions: [
            <React.Fragment key="actions">
              <Spacing size={16} />
              <Button size="l" mode="primary" stretched>
                Попробовать
              </Button>
            </React.Fragment>,
          ],
        },
        {
          nav: ['2'],
          icon: [<Image key="image" size={72} borderRadius="l" />],
          header: ['Добавить игру «Загадки детства» в меню?'],
          subheader: [
            'Игра появится под списком разделов на экране меню и будет всегда под рукой.',
          ],
          actions: [
            <React.Fragment key="actions">
              <Spacing size={8} />
              <ButtonGroup mode="vertical" gap="m" stretched>
                <Button size="l" mode="primary" stretched>
                  Присоединиться
                </Button>
                <Button size="l" mode="secondary" stretched>
                  Скопировать приглашение
                </Button>
              </ButtonGroup>
            </React.Fragment>,
          ],
          children: [
            <React.Fragment key="userstack">
              <Spacing size={20} />
              <UsersStack photos={['', '', '', '']} size="l" visibleCount={3} direction="column">
                Алексей, Илья, Михаил
                <br />и ещё 3 человека
              </UsersStack>
            </React.Fragment>,
          ],
        },
        {
          nav: ['3'],
          header: ['Расскажите о себе'],
          actions: [
            <Button size="l" mode="primary" stretched key="button">
              Сохранить
            </Button>,
          ],
          children: [
            <React.Fragment key="textarea">
              <Spacing size={16} />
              <Textarea defaultValue="В Грузии" />
            </React.Fragment>,
          ],
        },
        {
          nav: ['4'],
          header: ['Гиппопотомомонстросесквиппедалиофобия'],
          subheader: [
            'Гиппопотомомонстросесквиппедалиофобия — боязнь длинных слов, таких как метоксихлордиэтиламинометилбутиламиноакридин',
          ],
          actions: [
            <React.Fragment key="actions">
              <Spacing size={16} />
              <ButtonGroup mode="horizontal" gap="s" stretched>
                <Button size="l" mode="primary" stretched>
                  Гиппопотомомонстросесквиппедалиофобия
                </Button>
                <Button size="l" mode="primary" stretched>
                  Метоксихлордиэтиламинометилбутиламиноакридин
                </Button>
              </ButtonGroup>
            </React.Fragment>,
          ],
        },
        {
          nav: ['4'],
          header: ['Расскажите о себе'],
          actions: [
            <React.Fragment key="actions">
              <Spacing size={16} />
              <Button size="l" mode="primary" stretched>
                Сохранить
              </Button>
            </React.Fragment>,
          ],
          dismissButtonMode: ['inside', 'outside'],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {(props: ModalCardProps) => (
        <div style={{ height: 500, transform: 'translateZ(0)' }}>
          <ModalRoot
            activeModal={props.nav}
            // Note: с включенным фокусом ломаются скриншоты на движке Webkit из-за фокуса сразу
            // на несколько окон
            noFocusToDialog
          >
            <ModalCard {...props} />
          </ModalRoot>
        </div>
      )}
    </ComponentPlayground>
  );
};
