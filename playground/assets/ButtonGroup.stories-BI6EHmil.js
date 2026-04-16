import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{Nt as n,hn as r,n as i}from"./dist-JE-Gteso.js";import{n as a,t as o}from"./Button-DkR7tdUq.js";import{n as s,t as c}from"./ButtonGroup-Dlc4fR-P.js";import{i as l,t as u}from"./constants-Dj6vOzIh.js";import{n as d,t as f}from"./createStoryParameters-pz1UrWMe.js";import{n as p,t as m}from"./src-13y77QG6.js";var h,g,_,v,y,b,x,S,C,w=e((()=>{m(),i(),l(),d(),a(),s(),h=t(),g={title:`Layout/ButtonGroup`,component:c,parameters:f(`ButtonGroup`,u),decorators:[p],tags:[`Раскладка`]},_=`Button`,v=`Button (stretched)`,y=`Кнопка с иконкой`,b={args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,children:_}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,stretched:!0,children:v}),(0,h.jsx)(o,{size:`m`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y}),(0,h.jsx)(o,{size:`m`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y,stretched:!0}),(0,h.jsx)(o,{size:`s`,appearance:`accent`,before:(0,h.jsx)(r,{}),"aria-label":y}),(0,h.jsx)(o,{size:`s`,appearance:`accent`,before:(0,h.jsx)(r,{}),"aria-label":y,stretched:!0})]})}},x={border:`2px dotted tomato`,boxSizing:`border-box`},S={...b,args:{children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c,{mode:`horizontal`,gap:`m`,stretched:!0,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,stretched:!0,children:v}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y})]}),(0,h.jsxs)(c,{mode:`horizontal`,gap:`m`,stretched:!0,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,children:_}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y})]}),(0,h.jsxs)(c,{mode:`horizontal`,gap:`m`,stretched:!1,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,children:_}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y})]}),(0,h.jsxs)(c,{mode:`horizontal`,gap:`m`,stretched:!0,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,children:_}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,stretched:!0,children:v}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,children:_})]}),(0,h.jsxs)(c,{mode:`vertical`,gap:`m`,stretched:!1,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,stretched:!0,children:v}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y,stretched:!0}),(0,h.jsxs)(c,{mode:`horizontal`,stretched:!0,style:x,children:[(0,h.jsx)(o,{size:`l`,appearance:`accent`,before:(0,h.jsx)(n,{}),"aria-label":y}),(0,h.jsx)(o,{size:`l`,appearance:`accent`,stretched:!0,children:v})]})]})]})},decorators:[(e,t)=>(0,h.jsx)(e,{args:t.args})]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`NestedButtonGroup`]}));export{g as a,w as i,b as n,C as r,S as t};