import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { type HasChildren } from '../../types';
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
  tags: ['Типографика'],
};

export default story;

function TypographyWrapper({ children }: HasChildren) {
  return (
    <div
      style={{
        margin: 5,
      }}
    >
      {children}
    </div>
  );
}
function renderStory(
  Story: any,
  storyArgs: Record<string, any> | undefined,
  overrideArgs: TypographyOverview,
) {
  return <Story {...storyArgs} {...overrideArgs} />;
}

export const Playground: StoryFn<TypographyOverview> = (args: TypographyOverview) => {
  return (
    <div>
      <TypographyWrapper>{renderStory(TitleStory, TitleStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>{renderStory(HeadlineStory, HeadlineStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>{renderStory(TextStory, TextStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>
        {renderStory(EllipsisTextStory, EllipsisTextStory.args, args)}
      </TypographyWrapper>
      <TypographyWrapper>
        {renderStory(ParagraphStory, ParagraphStory.args, args)}
      </TypographyWrapper>
      <TypographyWrapper>{renderStory(SubheadStory, SubheadStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>{renderStory(FootnoteStory, FootnoteStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>
        {renderStory(FootnoteWithCapsStory, FootnoteWithCapsStory.args, args)}
      </TypographyWrapper>
      <TypographyWrapper>{renderStory(CaptionStory, CaptionStory.args, args)}</TypographyWrapper>
      <TypographyWrapper>
        {renderStory(CaptionWithCapsStory, CaptionWithCapsStory.args, args)}
      </TypographyWrapper>
    </div>
  );
};

Playground.parameters = {
  liveCodeEditor: {
    scope: {
      TypographyWrapper,
      renderStory,
      TitleStory,
      HeadlineStory,
      TextStory,
      EllipsisTextStory,
      ParagraphStory,
      SubheadStory,
      FootnoteStory,
      FootnoteWithCapsStory,
      CaptionStory,
      CaptionWithCapsStory,
    },
  },
};
