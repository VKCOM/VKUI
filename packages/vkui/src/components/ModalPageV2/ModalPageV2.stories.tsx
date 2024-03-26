import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon24Dismiss } from '@vkontakte/icons';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import { usePlatform } from '../../hooks/usePlatform';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getRandomUsers } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { CellButton } from '../CellButton/CellButton';
import { FormItem } from '../FormItem/FormItem';
import { Group } from '../Group/Group';
import { Header } from '../Header/Header';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { ModalPageContent } from '../ModalPageContent/ModalPageContent';
import { ModalPageFooter } from '../ModalPageFooter/ModalPageFooter';
import { ModalPageHeader } from '../ModalPageHeader/ModalPageHeader';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { Textarea } from '../Textarea/Textarea';
import { ModalPageRoot as ModalPageV2 } from './ModalPageRoot';
import type { ModalPageV2Props } from './types';

const story: Meta<ModalPageV2Props> = {
  title: 'Experimental/ModalPageV2',
  component: ModalPageV2,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalPageV2Props>;

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

    const handleModalClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button onClick={() => setOpen((prev) => !prev)}>Открыть модалку</Button>
        <ModalPageV2
          id="test"
          keepMounted
          open={open}
          onClose={handleModalClose}
          // settlingHeight={75}
        >
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
            <FormItem>
              <Textarea placeholder="Some text" />
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
            <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
            pain was born and I will give you a complete account of the system, and expound the
            {expanded && (
              <div>
                actual teachings of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone who
                loves or pursues or desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But who has any right to
                find fault with a man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no resultant pleasure? But I
                must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone who
                loves or pursues or desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But who has any right to
                find fault with a man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no resultant pleasure? But I
                must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone who
                loves or pursues or desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But who has any right to
                find fault with a man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no resultant pleasure? But I
                must explain to you how all this mistaken idea of denouncing pleasure and praising
                pain was born and I will give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                pleasure, but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone who
                loves or pursues or desires to obtain pain of itself, because it is pain, but
                because occasionally circumstances occur in which toil and pain can procure him some
                great pleasure. To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But who has any right to
                find fault with a man who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces no resultant pleasure?
              </div>
            )}
          </ModalPageContent>
          <ModalPageFooter>
            <Button stretched>Button</Button>
          </ModalPageFooter>
        </ModalPageV2>
      </div>
    );
  },
};
