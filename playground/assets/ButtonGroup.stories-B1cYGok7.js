import{j as e}from"./iframe-Db0SwwYs.js";import{w as h}from"./withCartesian-De4XxxrF.js";import{C as B}from"./constants-DdkjnEgz.js";import{c as m}from"./createStoryParameters-CcwS40kl.js";import{B as t}from"./Button-DKPWjiCT.js";import{B as a}from"./ButtonGroup-Dvhwwxyu.js";import{I as r}from"./add_24-C82FM1cV.js";import{I as i}from"./add_16-C9r-1wAa.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Dy7IzRwA.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Tappable-DPDNr6uV.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./InputUtils-DU65P5CC.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";const O={title:"Layout/ButtonGroup",component:a,parameters:m("ButtonGroup",B),decorators:[h],tags:["Раскладка"]},c="Button",s="Button (stretched)",n="Кнопка с иконкой",l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"m",appearance:"accent",before:e.jsx(r,{}),"aria-label":n}),e.jsx(t,{size:"m",appearance:"accent",before:e.jsx(r,{}),"aria-label":n,stretched:!0}),e.jsx(t,{size:"s",appearance:"accent",before:e.jsx(i,{}),"aria-label":n}),e.jsx(t,{size:"s",appearance:"accent",before:e.jsx(i,{}),"aria-label":n,stretched:!0})]})}},o={border:"2px dotted tomato",boxSizing:"border-box"},p={...l,args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!1,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n})]}),e.jsxs(a,{mode:"horizontal",gap:"m",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",children:c}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",children:c})]}),e.jsxs(a,{mode:"vertical",gap:"m",stretched:!1,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s}),e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n,stretched:!0}),e.jsxs(a,{mode:"horizontal",stretched:!0,style:o,children:[e.jsx(t,{size:"l",appearance:"accent",before:e.jsx(r,{}),"aria-label":n}),e.jsx(t,{size:"l",appearance:"accent",stretched:!0,children:s})]})]})]})},decorators:[(u,d)=>e.jsx(u,{args:d.args})]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const R=["Playground","NestedButtonGroup"];export{p as NestedButtonGroup,l as Playground,R as __namedExportsOrder,O as default};
