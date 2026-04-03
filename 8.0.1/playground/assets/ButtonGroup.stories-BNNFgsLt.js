import{n as e,r as t}from"./chunk-BneVvdWh.js";import{On as n,Vi as r,ai as i,yo as a}from"./iframe-DYi3TMGx.js";import{n as o,t as s}from"./Button-YAibZjS6.js";import{n as c,t as l}from"./ButtonGroup-D4MXQMGK.js";import{i as u,t as d}from"./constants-DdtDghDm.js";import{n as f,t as p}from"./createStoryParameters-cWWuDqBQ.js";import{n as m,t as h}from"./src-CCfyPkEG.js";var g=t({NestedButtonGroup:()=>w,Playground:()=>S,__namedExportsOrder:()=>T,default:()=>v}),_,v,y,b,x,S,C,w,T,E=e((()=>{h(),n(),u(),f(),o(),c(),_=a(),v={title:`Layout/ButtonGroup`,component:l,parameters:p(`ButtonGroup`,d),decorators:[m],tags:[`Раскладка`]},y=`Button`,b=`Button (stretched)`,x=`Кнопка с иконкой`,S={args:{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,children:y}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,stretched:!0,children:b}),(0,_.jsx)(s,{size:`m`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x}),(0,_.jsx)(s,{size:`m`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x,stretched:!0}),(0,_.jsx)(s,{size:`s`,appearance:`accent`,before:(0,_.jsx)(r,{}),"aria-label":x}),(0,_.jsx)(s,{size:`s`,appearance:`accent`,before:(0,_.jsx)(r,{}),"aria-label":x,stretched:!0})]})}},C={border:`2px dotted tomato`,boxSizing:`border-box`},w={...S,args:{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l,{mode:`horizontal`,gap:`m`,stretched:!0,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,stretched:!0,children:b}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x})]}),(0,_.jsxs)(l,{mode:`horizontal`,gap:`m`,stretched:!0,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,children:y}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x})]}),(0,_.jsxs)(l,{mode:`horizontal`,gap:`m`,stretched:!1,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,children:y}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x})]}),(0,_.jsxs)(l,{mode:`horizontal`,gap:`m`,stretched:!0,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,children:y}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,stretched:!0,children:b}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,children:y})]}),(0,_.jsxs)(l,{mode:`vertical`,gap:`m`,stretched:!1,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,stretched:!0,children:b}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x,stretched:!0}),(0,_.jsxs)(l,{mode:`horizontal`,stretched:!0,style:C,children:[(0,_.jsx)(s,{size:`l`,appearance:`accent`,before:(0,_.jsx)(i,{}),"aria-label":x}),(0,_.jsx)(s,{size:`l`,appearance:`accent`,stretched:!0,children:b})]})]})]})},decorators:[(e,t)=>(0,_.jsx)(e,{args:t.args})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
        <Button size="l" appearance="accent" stretched>
          {StretchedButtonText}
        </Button>
        <Button size="m" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
        <Button size="m" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} stretched />
        <Button size="s" appearance="accent" before={<Icon16Add />} aria-label={ButtonWithIconLabel} />
        <Button size="s" appearance="accent" before={<Icon16Add />} aria-label={ButtonWithIconLabel} stretched />
      </>
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    children: <>
        <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent" stretched>
            {StretchedButtonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched={false} style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
          <Button size="l" appearance="accent" stretched>
            {StretchedButtonText}
          </Button>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
        </ButtonGroup>

        <ButtonGroup mode="vertical" gap="m" stretched={false} style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent" stretched>
            {StretchedButtonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} stretched />
          <ButtonGroup mode="horizontal" stretched style={ButtonGroupHighlightStyles}>
            <Button size="l" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
            <Button size="l" appearance="accent" stretched>
              {StretchedButtonText}
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </>
  },
  decorators: [(Component, context) => <Component args={context.args} />]
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`NestedButtonGroup`]}));export{S as n,E as r,g as t};