import * as React from 'react';
import { Icon20More, Icon56MoneyTransferOutline } from '@vkontakte/icons';
import {
  AppDefaultWrapper,
  type AppDefaultWrapperProps,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { ModalOutsideButton } from '../ModalOutsideButton/ModalOutsideButton';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard } from './ModalCard';
import type { ModalCardProps } from './types';

const AppWrapper = ({ children, ...restProps }: AppDefaultWrapperProps) => (
  <AppDefaultWrapper scroll="contain" disablePortal {...restProps}>
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
          title: ['Отправляйте деньги друзьям, используя банковскую карту'],
          description: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
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
          title: ['Добавить игру «Загадки детства» в меню?'],
          description: [
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
              <UsersStack
                photos={['', '', '', '']}
                size="l"
                visibleCount={3}
                avatarsPosition="block-start"
              >
                Алексей, Илья, Михаил
                <br />и ещё 3 человека
              </UsersStack>
            </React.Fragment>,
          ],
        },
        {
          nav: ['3'],
          title: ['Расскажите о себе'],
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
          title: ['Гиппопотомомонстросесквиппедалиофобия'],
          description: [
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
          title: ['Расскажите о себе'],
          actions: [
            <React.Fragment key="actions">
              <Spacing size={16} />
              <Button size="l" mode="primary" stretched>
                Сохранить
              </Button>
            </React.Fragment>,
          ],
          dismissButtonMode: ['inside', 'outside', 'none'],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {(props: ModalCardProps) => (
        <div style={{ height: 500, overflow: 'hidden', transform: 'translateZ(0)' }}>
          <ModalCard
            open
            // Note: с включенным фокусом ломаются скриншоты на движке Webkit из-за фокуса сразу
            // на несколько окон
            noFocusToDialog
            {...props}
          />
        </div>
      )}
    </ComponentPlayground>
  );
};

export const ModalCardOutsideButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          nav: ['1'],
          title: ['Расскажите о себе'],
          actions: [
            <Button key="action" size="l" mode="primary" stretched>
              Сохранить
            </Button>,
          ],
          dismissButtonMode: ['inside', 'outside', 'none'],
          outsideButtons: [
            <ModalOutsideButton aria-label="More" key="outside">
              <Icon20More />
            </ModalOutsideButton>,
          ],
        },
      ]}
      AppWrapper={AppWrapper}
    >
      {(props: ModalCardProps) => (
        <div style={{ height: 300, overflow: 'hidden', transform: 'translateZ(0)' }}>
          <ModalCard
            open
            // Note: с включенным фокусом ломаются скриншоты на движке Webkit из-за фокуса сразу
            // на несколько окон
            noFocusToDialog
            {...props}
          />
        </div>
      )}
    </ComponentPlayground>
  );
};
