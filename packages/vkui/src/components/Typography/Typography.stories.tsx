import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import type { HasChildren } from '../../types';
import {
  Playground as CaptionStory,
  WithCaps as CaptionWithCapsStory,
} from './Caption/Caption.stories';
import { Playground as EllipsisTextStory } from './EllipsisText/EllipsisText.stories';
import {
  Playground as FootnoteStory,
  WithCaps as FootnoteWithCapsStory,
} from './Footnote/Footnote.stories';
import { Playground as HeadlineStory } from './Headline/Headline.stories';
import { Playground as ParagraphStory } from './Paragraph/Paragraph.stories';
import { Playground as SubheadStory } from './Subhead/Subhead.stories';
import { Playground as TextStory } from './Text/Text.stories';
import { Playground as TitleStory } from './Title/Title.stories';

interface TypographyOverview {
  weight: '1' | '2' | '3';
  accent: true;
}

const story: Meta<TypographyOverview> = {
  title: 'Typography/Typography',
  parameters: createStoryParameters('Typography', CanvasFullLayout),
  argTypes: {
    weight: {
      control: 'inline-radio',
      options: ['1', '2', '3'],
    },
    accent: { control: 'boolean' },
  },
  decorators: [withCartesian],
};

export default story;

type Story = StoryObj<TypographyOverview>;

const TypographyWrapper = ({ children }: HasChildren) => {
  return <div style={{ margin: 5 }}>{children}</div>;
};

export const Playground: Story = {
  render: (args) => {
    return (
      <div>
        <TypographyWrapper>
          {/* <Пока нет способа адекватно переиспользовать стори */}
          {/* @ts-expect-error: TS2554 https://github.com/storybookjs/storybook/issues/15954 */}
          {TitleStory.render!({ ...TitleStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {HeadlineStory.render!({ ...HeadlineStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {TextStory.render!({ ...TextStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {EllipsisTextStory.render!({ ...EllipsisTextStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {ParagraphStory.render!({ ...ParagraphStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {SubheadStory.render!({ ...SubheadStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {FootnoteStory.render!({ ...FootnoteStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {FootnoteWithCapsStory.render!({ ...FootnoteWithCapsStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {CaptionStory.render!({ ...CaptionStory.args, ...args })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {CaptionWithCapsStory.render!({ ...CaptionWithCapsStory.args, ...args })}
        </TypographyWrapper>
      </div>
    );
  },
};
