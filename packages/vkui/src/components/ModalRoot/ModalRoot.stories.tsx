import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { multiplyText } from '../../testing/mock';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Div } from '../Div/Div';
import { Flex } from '../Flex/Flex';
import { Group } from '../Group/Group';
import { Input } from '../Input/Input';
import { ModalPage } from '../ModalPage/ModalPage';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { Placeholder } from '../Placeholder/Placeholder';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spinner } from '../Spinner/Spinner';
import { ModalRoot } from './ModalRoot';
import type { ModalRootProps } from './types';

const story: Meta<ModalRootProps> = {
  title: 'Utils/ModalRoot',
  component: ModalRoot,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalRootProps>;

const MODAL_PAGE_DYNAMIC = 'modal-page-dynamic';
const MODAL_ROOT_WITH_AUTO_FOCUS = 'modal-root-with-auto-focus';
const MODAL_PAGE_WITH_AUTO_FOCUS = 'modal-page-with-auto-focus';

const modalsPayload = {
  1: {
    id: 1 as const,
    title: 'Длинный текст',
    subtitle: 'settlingHeight={50}',
  },
  2: {
    id: 2 as const,
    title: 'Короткий текст',
    subtitle: 'settlingHeight={50}',
  },
  3: {
    id: 3 as const,
    title: 'Длинный текст',
    subtitle: 'dynamicContentHeight',
  },
  4: {
    id: 4 as const,
    title: 'Короткий текст',
    subtitle: 'dynamicContentHeight',
  },
};
const modalIds = [1, 2, 3, 4] as const;

export const Managing: Story = {
  parameters: { centered: false },
  render: function Render() {
    const [withHeader, setWithHeader] = React.useState(false);
    const header = withHeader ? <ModalPageHeader>Header</ModalPageHeader> : null;

    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = event.currentTarget.dataset;
      if (id) {
        setActiveModal(id);
      }
    };

    const renderNavigationCell = (i: 1 | 2 | 3 | 4) => (
      <SimpleCell
        key={i}
        chevron="always"
        data-id={modalsPayload[i].id}
        before={modalsPayload[i].id}
        subtitle={modalsPayload[i].subtitle}
        onClick={handleClick}
        disabled={activeModal === String(i)}
      >
        {modalsPayload[i].title}
      </SimpleCell>
    );

    const renderNavigationButtonGroup = () => (
      <Flex margin="auto" gap={8} justify="space-between">
        {modalIds.map((i) => (
          <Button
            key={i}
            appearance="neutral"
            data-id={modalsPayload[i].id}
            onClick={handleClick}
            disabled={activeModal === String(i)}
          >
            {modalsPayload[i].id}
          </Button>
        ))}
      </Flex>
    );

    return (
      <>
        <Checkbox name="header" onChange={(event) => setWithHeader(event.target.checked)}>
          Включить шапку
        </Checkbox>
        {modalIds.map(renderNavigationCell)}
        <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
          <ModalPage id="1" settlingHeight={50} header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 400)}</Div>
          </ModalPage>
          <ModalPage id="2" settlingHeight={50} header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 5)}</Div>
          </ModalPage>
          <ModalPage id="3" dynamicContentHeight header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 400)}</Div>
          </ModalPage>
          <ModalPage id="4" dynamicContentHeight header={header}>
            {renderNavigationButtonGroup()}
            <Div>{multiplyText('Lorem ipsum', 5)}</Div>
          </ModalPage>
        </ModalRoot>
      </>
    );
  },
};

export const ModalDynamicHeight: Story = {
  render: function Render() {
    const [isLoading, setIsLoading] = React.useState(true);
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    React.useEffect(() => {
      timer.current = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    return (
      <ModalWrapper modalId={MODAL_PAGE_DYNAMIC}>
        <ModalPage id={MODAL_PAGE_DYNAMIC} dynamicContentHeight>
          <div className="SelectModal">
            {isLoading && <Spinner />}
            {!isLoading && <Placeholder>Loaded</Placeholder>}
          </div>
        </ModalPage>
      </ModalWrapper>
    );
  },
};

export const ModalRootAutoFocus: Story = {
  render: function Render() {
    const [activeModal, setActiveModal] = React.useState<string | null>(MODAL_ROOT_WITH_AUTO_FOCUS);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleOpen = React.useCallback((id: string) => {
      if (id === MODAL_ROOT_WITH_AUTO_FOCUS && inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    const onClose = React.useCallback(() => {
      setActiveModal(null);
    }, []);

    const modal = (
      <ModalRoot activeModal={activeModal} onClose={onClose} onOpened={handleOpen}>
        <ModalPage id={MODAL_ROOT_WITH_AUTO_FOCUS}>
          <Group>
            <Input getRef={inputRef} />
          </Group>
        </ModalPage>
      </ModalRoot>
    );

    return (
      <Placeholder stretched>
        <Button onClick={() => setActiveModal(MODAL_ROOT_WITH_AUTO_FOCUS)}>Открыть</Button>
        {modal}
      </Placeholder>
    );
  },
};

export const ModalPageAutoFocus: Story = {
  render: function Render() {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleOpen = React.useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <ModalWrapper modalId={MODAL_PAGE_WITH_AUTO_FOCUS}>
        <ModalPage id={MODAL_PAGE_WITH_AUTO_FOCUS} onOpened={handleOpen}>
          <Group>
            <Input getRef={inputRef} />
          </Group>
        </ModalPage>
      </ModalWrapper>
    );
  },
};
