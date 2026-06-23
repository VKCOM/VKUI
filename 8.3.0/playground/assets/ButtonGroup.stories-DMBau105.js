import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Di as i,lr as a,n as o}from"./dist-Ddx9HyIL.js";import{n as s,t as c}from"./Button-DxjiUwvt.js";import{n as l,t as u}from"./ButtonGroup-C_kHHlTS.js";import{i as d,t as f}from"./constants-cjed6ZWB.js";import{n as p,t as m}from"./createStoryParameters-CMHckkzt.js";import{r as h,t as g}from"./src-Baqpfbsn.js";var _=e({NestedButtonGroup:()=>T,Playground:()=>w,__namedExportsOrder:()=>E,default:()=>C}),v,y,b,x,S,C,w,T,E,D=t((()=>{g(),o(),d(),p(),s(),l(),v=n(r(),1),y={border:`2px dotted tomato`,boxSizing:`border-box`},b=`Button`,x=`Button (stretched)`,S=`Кнопка с иконкой`,C={title:`Layout/ButtonGroup`,component:u,parameters:m(`ButtonGroup`,f,{liveCodeEditor:{scope:{ButtonText:b,StretchedButtonText:x,ButtonWithIconLabel:S,ButtonGroupHighlightStyles:y}}}),decorators:[h],tags:[`Раскладка`]},w=e=>(0,v.jsxs)(u,{...e,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,children:b}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,stretched:!0,children:x}),(0,v.jsx)(c,{size:`m`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S}),(0,v.jsx)(c,{size:`m`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S,stretched:!0}),(0,v.jsx)(c,{size:`s`,appearance:`accent`,before:(0,v.jsx)(i,{}),"aria-label":S}),(0,v.jsx)(c,{size:`s`,appearance:`accent`,before:(0,v.jsx)(i,{}),"aria-label":S,stretched:!0})]}),T=e=>(0,v.jsxs)(u,{...e,children:[(0,v.jsxs)(u,{mode:`horizontal`,gap:`m`,stretched:!0,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,stretched:!0,children:x}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S})]}),(0,v.jsxs)(u,{mode:`horizontal`,gap:`m`,stretched:!0,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,children:b}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S})]}),(0,v.jsxs)(u,{mode:`horizontal`,gap:`m`,stretched:!1,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,children:b}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S})]}),(0,v.jsxs)(u,{mode:`horizontal`,gap:`m`,stretched:!0,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,children:b}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,stretched:!0,children:x}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,children:b})]}),(0,v.jsxs)(u,{mode:`vertical`,gap:`m`,stretched:!1,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,stretched:!0,children:x}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S,stretched:!0}),(0,v.jsxs)(u,{mode:`horizontal`,stretched:!0,style:y,children:[(0,v.jsx)(c,{size:`l`,appearance:`accent`,before:(0,v.jsx)(a,{}),"aria-label":S}),(0,v.jsx)(c,{size:`l`,appearance:`accent`,stretched:!0,children:x})]})]})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(props: ButtonGroupProps) => <ButtonGroup {...props}>
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
  </ButtonGroup>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(props: ButtonGroupProps) => {
  return <ButtonGroup {...props}>
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
    </ButtonGroup>;
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`NestedButtonGroup`]}));export{w as n,D as r,_ as t};