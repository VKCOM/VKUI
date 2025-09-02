import{j as e}from"./iframe-WscSQxk_.js";import{w as g}from"./withCartesian-DBsVLigS.js";import{C as j}from"./constants-DdkjnEgz.js";import{c as f}from"./createStoryParameters-CcwS40kl.js";import{B as t}from"./Button-C7Wah6LB.js";import{B as a}from"./ButtonGroup-DudUbA-j.js";import{I as r}from"./add_24-Cq9A2i7R.js";import{I as i}from"./add_16-BfE-lkhC.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BOd2c3oA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-uW7N7P-s.js";import"./Tappable-4pvQI-9h.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";const J={title:"Layout/ButtonGroup",component:a,parameters:f("ButtonGroup",j),decorators:[g],tags:["Раскладка"]},c="Button",s="Button (stretched)",n="Кнопка с иконкой",l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"m",appearance:"accent",before:e.jsx(r,{}),"aria-label":n}),e.jsx(t,{size:"m",appearance:"accent",before:e.jsx(r,{}),"aria-label":n,stretched:!0}),e.jsx(t,{size:"s",appearance:"accent",before:e.jsx(i,{}),"aria-label":n}),e.jsx(t,{size:"s",appearance:"accent",before:e.jsx(i,{}),"aria-label":n,stretched:!0})]})}},o={border:"2px dotted tomato",boxSizing:"border-box"},p={...l,args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!1,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",children:c})]}),e.jsxs(a,{mode:"vertical",gap:"m",stretched:!1,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n,stretched:!0}),e.jsxs(a,{mode:"horizontal",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s})]})]})]})},decorators:[(b,z)=>e.jsx(b,{args:z.args})]};var u,d,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var B,m,x;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(m=p.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const K=["Playground","NestedButtonGroup"];export{p as NestedButtonGroup,l as Playground,K as __namedExportsOrder,J as default};
