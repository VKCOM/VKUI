import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Input } from '../Input/Input';
import { ModalPage } from '../ModalPage/ModalPage';
import { Placeholder } from '../Placeholder/Placeholder';
import { Spinner } from '../Spinner/Spinner';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { ModalRoot } from './ModalRootAdaptive';
import { ModalRootProps } from './types';
import { useModalRootContext } from './useModalRootContext';

const story: Meta<ModalRootProps> = {
  title: 'Modals/ModalRoot',
  component: ModalRoot,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalRootProps>;

const MODAL_PAGE_DYNAMIC = 'modal-page-dynamic';
const MODAL_ROOT_WITH_AUTO_FOCUS = 'modal-root-with-auto-focus';
const MODAL_PAGE_WITH_AUTO_FOCUS = 'modal-page-with-auto-focus';

export const ModalDynamicHeight: Story = {
  render: function Render() {
    const [isLoading, setIsLoading] = React.useState(true);
    const { updateModalHeight } = useModalRootContext();
    const timer = React.useRef<ReturnType<typeof setTimeout>>();

    React.useEffect(() => {
      timer.current = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    // После установки стейта и перерисовки компонента SelectModal сообщим ModalRoot об изменениях
    React.useEffect(() => {
      if (!isLoading) {
        updateModalHeight();
      }
    }, [isLoading, updateModalHeight]);

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

    const handleOpen = React.useCallback((id) => {
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
      <SplitLayout modal={modal}>
        <SplitCol>
          <Placeholder stretched>
            <Button onClick={() => setActiveModal(MODAL_ROOT_WITH_AUTO_FOCUS)}>Открыть</Button>
          </Placeholder>
        </SplitCol>
      </SplitLayout>
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
