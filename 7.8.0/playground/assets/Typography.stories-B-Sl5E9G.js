import{j as e}from"./iframe-F_0bvJrc.js";import{w as T}from"./withCartesian-DmH2k9Od.js";import{C as S}from"./constants-DdkjnEgz.js";import{c as m}from"./createStoryParameters-CcwS40kl.js";import{Playground as a,WithCaps as p}from"./Caption.stories-BHismuhR.js";import{P as t}from"./EllipsisText.stories-C8jSwdmS.js";import{Playground as s,WithCaps as y}from"./Footnote.stories-BIMWy4cs.js";import{Playground as i}from"./Headline.stories-D-2f6iqJ.js";import{Playground as g}from"./Paragraph.stories-Bt4WKGG8.js";import{Playground as d}from"./Subhead.stories-Jr5SwkST.js";import{Playground as l}from"./Text.stories-B2-olXNB.js";import{Playground as h}from"./Title.stories-BA0BJFdI.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DLbzsWHi.js";import"./children-CfV6Kr3n.js";import"./Footnote-DfPFidfa.js";import"./Headline-B-xJiW6B.js";import"./Paragraph-DpqDuxuA.js";import"./Subhead-CtWFTcAD.js";import"./Title-BNzhyC_D.js";const q={title:"Typography/Typography",parameters:m("Typography",S),argTypes:{weight:{control:"inline-radio",options:["1","2","3"]},accent:{control:"boolean"}},decorators:[T],tags:["Типографика"]},o=({children:r})=>e.jsx("div",{style:{margin:5},children:r}),n={render:r=>e.jsxs("div",{children:[e.jsx(o,{children:h.render({...h.args,...r})}),e.jsx(o,{children:i.render({...i.args,...r})}),e.jsx(o,{children:l.render({...l.args,...r})}),e.jsx(o,{children:t.render({...t.args,...r})}),e.jsx(o,{children:g.render({...g.args,...r})}),e.jsx(o,{children:d.render({...d.args,...r})}),e.jsx(o,{children:s.render({...s.args,...r})}),e.jsx(o,{children:y.render({...y.args,...r})}),e.jsx(o,{children:a.render({...a.args,...r})}),e.jsx(o,{children:p.render({...p.args,...r})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <TypographyWrapper>
          {/* <Пока нет способа адекватно переиспользовать стори */}
          {/* @ts-expect-error: TS2554 https://github.com/storybookjs/storybook/issues/15954 */}
          {TitleStory.render!({
          ...TitleStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {HeadlineStory.render!({
          ...HeadlineStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {TextStory.render!({
          ...TextStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {EllipsisTextStory.render!({
          ...EllipsisTextStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {ParagraphStory.render!({
          ...ParagraphStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {SubheadStory.render!({
          ...SubheadStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {FootnoteStory.render!({
          ...FootnoteStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {FootnoteWithCapsStory.render!({
          ...FootnoteWithCapsStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {CaptionStory.render!({
          ...CaptionStory.args,
          ...args
        })}
        </TypographyWrapper>
        <TypographyWrapper>
          {/* @ts-expect-error: TS2554 см. TitleStory  */}
          {CaptionWithCapsStory.render!({
          ...CaptionWithCapsStory.args,
          ...args
        })}
        </TypographyWrapper>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const z=["Playground"];export{n as Playground,z as __namedExportsOrder,q as default};
