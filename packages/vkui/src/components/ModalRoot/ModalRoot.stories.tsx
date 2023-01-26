import React from 'react';
import { Meta } from '@storybook/react';
import { ModalRoot, ModalRootProps } from './ModalRootAdaptive';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { ModalPage } from '../ModalPage/ModalPage';
import { useModalRootContext } from './useModalRootContext';
import { Spinner } from '../Spinner/Spinner';
import { Placeholder } from '../Placeholder/Placeholder';
import { Input } from '../Input/Input';
import { SplitCol } from '../SplitCol/SplitCol';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Modals/ModalRoot',
  component: ModalRoot,
  parameters: {
    ...CanvasFullLayout,
    ...getFigmaPage('ModalPage'),
    ...DisableCartesianParam,
  },
} as Meta<ModalRootProps>;

const MODAL_PAGE_DYNAMIC = 'modal-page-dynamic';
const MODAL_ROOT_WITH_AUTO_FOCUS = 'modal-root-with-auto-focus';
const MODAL_PAGE_WITH_AUTO_FOCUS = 'modal-page-with-auto-focus';

export const ModalDynamicHeight = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { updateModalHeight } = useModalRootContext();

  const fetchItems = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(fetchItems, []);

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
};

export const ModalRootAutoFocus = () => {
  const [activeModal, setActiveModal] = React.useState<string | null>(MODAL_ROOT_WITH_AUTO_FOCUS);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOpen = React.useCallback((id) => {
    if (id === MODAL_ROOT_WITH_AUTO_FOCUS && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)} onOpened={handleOpen}>
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
};

export const ModalPageAutoFocus = () => {
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
};
