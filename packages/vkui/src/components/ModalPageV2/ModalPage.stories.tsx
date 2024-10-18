import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Icon24Dismiss } from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { cities, getRandomUsers } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Div } from '../Div/Div';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { Input } from '../Input/Input';
import { ModalPageContent } from '../ModalPageContent/ModalPageContent';
import { ModalPageFooter } from '../ModalPageFooter/ModalPageFooter';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { Textarea } from '../Textarea/Textarea';
import { ModalPage } from './ModalPage';
import type { CloseEventPayload, ModalPageProps } from './types';

const story: Meta<ModalPageProps> = {
  title: 'Experimental/ModalPage',
  component: ModalPage,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalPageProps>;

const AndroidCloseButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return <PanelHeaderClose className={className} onClick={onClick} />;
};

const IosCloseButton = ({ className, onClick }: { className?: string; onClick?: () => void }) => {
  return (
    <PanelHeaderButton onClick={onClick} className={className}>
      <Icon24Dismiss />
    </PanelHeaderButton>
  );
};

export const DynamicModalPage: Story = {
  render: function Render() {
    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();
    const [open, setOpen] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const commonFriends = React.useMemo(() => getRandomUsers(30), []);
    const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

    const handleModalClose = (event?: CloseEventPayload) => {
      // eslint-disable-next-line no-console
      console.log(event?.reason);
      setOpen(false);
    };

    return (
      <div>
        <Button onClick={() => setOpen((prev) => !prev)}>Открыть модалку</Button>
        <ModalPage id="test" open={open} onClose={handleModalClose} settlingHeight={100}>
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === 'android' && (
                <AndroidCloseButton
                  className={sizeX.compact.className}
                  onClick={handleModalClose}
                />
              )
            }
            after={
              sizeX.compact &&
              platform === 'ios' && (
                <IosCloseButton className={sizeX.compact.className} onClick={handleModalClose} />
              )
            }
          >
            Dynamic modal
          </ModalPageHeader>
          <ModalPageContent>
            <form action="">
              <FormItem>
                <Textarea name="1" placeholder="Some text" />
              </FormItem>
              <Group header={<Header mode="secondary">Недавние</Header>}>
                <HorizontalScroll>
                  <div style={{ display: 'flex' }}>
                    {commonFriends.map((item) => {
                      return (
                        <HorizontalCell key={item.id} header={item.first_name}>
                          <Avatar size={56} src={item.photo_200} />
                        </HorizontalCell>
                      );
                    })}
                  </div>
                </HorizontalScroll>
              </Group>
              <FormItem>
                <CustomSelect
                  options={cities}
                  placeholder="forceDropdownPortal={false}"
                  forceDropdownPortal={false}
                />
              </FormItem>
              {/* <FormItem>
                <CustomSelect
                  options={cities}
                  placeholder="forceDropdownPortal={true}"
                  forceDropdownPortal={true}
                />
              </FormItem> */}
              <Div>
                But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising pain was born and I will give you a complete account of the system, and
                expound the
              </Div>
              <CellButton onClick={toggle}>{expanded ? 'Show more' : 'Hide more'}</CellButton>
              {expanded && (
                <Div>
                  actual teachings of the great explorer of the truth, the master-builder of human
                  happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                  pleasure, but because those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again is there anyone who
                  loves or pursues or desires to obtain pain of itself, because it is pain, but
                  because occasionally circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage from it? But who has
                  any right to find fault with a man who chooses to enjoy a pleasure that has no
                  annoying consequences, or one who avoids a pain that produces no resultant
                  pleasure? But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete account of the
                  system, and expound the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                  itself, because it is pleasure, but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain of itself, because
                  it is pain, but because occasionally circumstances occur in which toil and pain
                  can procure him some great pleasure. To take a trivial example, which of us ever
                  undertakes laborious physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault with a man who chooses to enjoy a pleasure
                  that has no annoying consequences, or one who avoids a pain that produces no
                  resultant pleasure? But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give you a complete
                  account of the system, and expound the actual teachings of the great explorer of
                  the truth, the master-builder of human
                  <FormItem>
                    <Input name="2" placeholder="Some text" />
                  </FormItem>
                  happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                  pleasure, but because those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again is there anyone who
                  loves or pursues or desires to obtain pain of itself, because it is pain, but
                  because occasionally circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage from it? But who has
                  any right to find fault with a man who chooses to enjoy a pleasure that has no
                  annoying consequences, or one who avoids a pain that produces no resultant
                  pleasure? But I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a complete account of the
                  system, and expound the actual teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                  itself, because it is pleasure, but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain of itself, because
                  it is pain, but because occasionally circumstances occur in which toil and pain
                  can procure him some great pleasure. To take a trivial example, which of us ever
                  undertakes laborious physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault with a man who chooses to enjoy a pleasure
                  that has no annoying consequences, or one who avoids a pain that produces no
                  resultant pleasure?
                </Div>
              )}
              <FormItem>
                <Textarea name="3" placeholder="Some text" />
              </FormItem>
            </form>
          </ModalPageContent>
          <ModalPageFooter>
            <Button stretched>Button</Button>
          </ModalPageFooter>
        </ModalPage>
      </div>
    );
  },
};
