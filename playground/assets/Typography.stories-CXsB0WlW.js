import{j as e}from"./iframe-qoTtUH8h.js";import{w as c}from"./withCartesian-CgmRx60J.js";import{C as u}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{Playground as a,WithCaps as p}from"./Caption.stories-DDgVlgUn.js";import{P as t}from"./EllipsisText.stories-DY_KqwKV.js";import{Playground as s,WithCaps as y}from"./Footnote.stories-CfetGAsR.js";import{Playground as i}from"./Headline.stories-CVFrODMW.js";import{Playground as g}from"./Paragraph.stories-BJPxor9r.js";import{Playground as d}from"./Subhead.stories-Bu9U6p10.js";import{Playground as l}from"./Text.stories-B8dim7_g.js";import{Playground as h}from"./Title.stories-DqL7kdhB.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-bIdYMpTC.js";import"./children-Tz7yKUE7.js";import"./Footnote-DrM4b0WC.js";import"./Headline-BOHGExn8.js";import"./Paragraph-Dx2jmIL9.js";import"./Subhead-B5MAyB6Q.js";import"./Title-ksxyfi6H.js";const B={title:"Typography/Typography",parameters:x("Typography",u),argTypes:{weight:{control:"inline-radio",options:["1","2","3"]},accent:{control:"boolean"}},decorators:[c],tags:["Типографика"]},o=({children:r})=>e.jsx("div",{style:{margin:5},children:r}),n={render:r=>e.jsxs("div",{children:[e.jsx(o,{children:h.render({...h.args,...r})}),e.jsx(o,{children:i.render({...i.args,...r})}),e.jsx(o,{children:l.render({...l.args,...r})}),e.jsx(o,{children:t.render({...t.args,...r})}),e.jsx(o,{children:g.render({...g.args,...r})}),e.jsx(o,{children:d.render({...d.args,...r})}),e.jsx(o,{children:s.render({...s.args,...r})}),e.jsx(o,{children:y.render({...y.args,...r})}),e.jsx(o,{children:a.render({...a.args,...r})}),e.jsx(o,{children:p.render({...p.args,...r})})]})};var T,S,m;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(m=(S=n.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};const D=["Playground"];export{n as Playground,D as __namedExportsOrder,B as default};
