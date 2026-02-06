import{j as e}from"./iframe-ChnjXsIu.js";import{w as T}from"./withCartesian-Dj7W7GjQ.js";import{C as S}from"./constants-DdkjnEgz.js";import{c as m}from"./createStoryParameters-CcwS40kl.js";import{Playground as a,WithCaps as p}from"./Caption.stories-CMTOx6J1.js";import{P as t}from"./EllipsisText.stories-B4hwFvkU.js";import{Playground as s,WithCaps as y}from"./Footnote.stories-BU_MOPPP.js";import{Playground as i}from"./Headline.stories-69RWLTcn.js";import{Playground as g}from"./Paragraph.stories-x_jsEbz0.js";import{Playground as d}from"./Subhead.stories-BBQgMxEz.js";import{Playground as l}from"./Text.stories-LAfIqGjS.js";import{Playground as h}from"./Title.stories-DX7r026s.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DTswF5wb.js";import"./children-CZfmS9px.js";import"./Footnote-a8vRHGoF.js";import"./Headline-jnvlDnhz.js";import"./Paragraph-CrOm9mYb.js";import"./Subhead-4jBJxz3c.js";import"./Title-ufKZcuLl.js";const q={title:"Typography/Typography",parameters:m("Typography",S),argTypes:{weight:{control:"inline-radio",options:["1","2","3"]},accent:{control:"boolean"}},decorators:[T],tags:["Типографика"]},o=({children:r})=>e.jsx("div",{style:{margin:5},children:r}),n={render:r=>e.jsxs("div",{children:[e.jsx(o,{children:h.render({...h.args,...r})}),e.jsx(o,{children:i.render({...i.args,...r})}),e.jsx(o,{children:l.render({...l.args,...r})}),e.jsx(o,{children:t.render({...t.args,...r})}),e.jsx(o,{children:g.render({...g.args,...r})}),e.jsx(o,{children:d.render({...d.args,...r})}),e.jsx(o,{children:s.render({...s.args,...r})}),e.jsx(o,{children:y.render({...y.args,...r})}),e.jsx(o,{children:a.render({...a.args,...r})}),e.jsx(o,{children:p.render({...p.args,...r})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
