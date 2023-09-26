import { useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Div } from '../Div/Div';
import { Popper, PopperProps } from './Popper';

const story: Meta<PopperProps> = {
  title: 'Poppers/Popper',
  component: Popper,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<PopperProps>;

export const Playground: Story = {
  render: function Render(args) {
    const [shown, setShown] = useState(false);
    const buttonRef = useRef(null);

    return (
      <>
        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
          {shown ? 'Закрыть' : 'Открыть'}
        </Button>
        {shown && (
          <Popper forcePortal={false} offsetDistance={8} {...args} targetRef={buttonRef}>
            <Div>Привет</Div>
          </Popper>
        )}
      </>
    );
  },
};
