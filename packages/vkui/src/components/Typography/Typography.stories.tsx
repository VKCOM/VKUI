import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { Playground as Caption, WithCaps as CaptionWithCaps } from './Caption/Caption.stories';
import { Playground as Footnote, WithCaps as FootnoteWithCaps } from './Footnote/Footnote.stories';
import { Playground as Headline } from './Headline/Headline.stories';
import { Playground as Paragraph } from './Paragraph/Paragraph.stories';
import { Playground as Subhead } from './Subhead/Subhead.stories';
import { Playground as Text } from './Text/Text.stories';
import { Playground as Title } from './Title/Title.stories';

interface TypographyOverview {
  weight: '1' | '2' | '3';
}

const story: Meta<TypographyOverview> = {
  title: 'Typography',
  parameters: CanvasFullLayout,
  argTypes: {
    weight: {
      control: 'inline-radio',
      options: ['1', '2', '3'],
    },
  },
  decorators: [withCartesian],
};

export default story;

const TypographyWrapper = ({ children }: { children?: React.ReactNode }) => {
  return <div style={{ margin: 5 }}>{children}</div>;
};

const Template: Story<TypographyOverview> = (args) => {
  return (
    <div>
      <TypographyWrapper>
        <Title {...Title.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Headline {...Headline.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Text {...Text.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Paragraph {...Paragraph.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Subhead {...Subhead.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Footnote {...Footnote.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <FootnoteWithCaps {...FootnoteWithCaps.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <Caption {...Caption.args} {...args} />
      </TypographyWrapper>
      <TypographyWrapper>
        <CaptionWithCaps {...CaptionWithCaps.args} {...args} />
      </TypographyWrapper>
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {};
