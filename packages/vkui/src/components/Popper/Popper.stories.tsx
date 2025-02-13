import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { Div } from '../Div/Div';
import { Popper, type PopperProps } from './Popper';

const story: Meta<PopperProps> = {
  title: 'Poppers/Popper',
  component: Popper,
  parameters: createStoryParameters('Popper', CanvasFullLayout, DisableCartesianParam),
};

export default story;

type Story = StoryObj<PopperProps>;

export const Playground: Story = {
  render: function Render(args) {
    const [shown, setShown] = React.useState(false);
    const buttonRef = React.useRef(null);

    return (
      <React.Fragment>
        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
          {shown ? 'Закрыть' : 'Открыть'}
        </Button>
        {shown && (
          <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>
            <Div>Привет</Div>
          </Popper>
        )}
      </React.Fragment>
    );
  },
};
