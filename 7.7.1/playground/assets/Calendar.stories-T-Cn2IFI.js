import{j as T}from"./iframe-dTlwAXGa.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-B7fDfGt2.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-CsOpvylv.js";import{C as n}from"./Calendar-DRWlUZfB.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-BzXaktSd.js";import"./DisplayTitle-aMmikIvR.js";import"./education_12-EMycFQZE.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DenjwXRS.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-qMfTC7Pz.js";import"./Clickable-Dl5F7aV_.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./VisuallyHidden-JumwXwcS.js";import"./Footnote-DJb5ZlwN.js";import"./CustomSelect-5O-5zJIf.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DRrJjLse.js";import"./children-D0xCpVZl.js";import"./dropdown_20-C8wjrFR7.js";import"./chevron_up_24-DqFSca-V.js";import"./CustomSelectDropdown-C2FxpssM.js";import"./CustomScrollView-B2P9khg7.js";import"./Popper-9kOPaZ6u.js";import"./useReferenceHiddenChangeCallback-Igx7JX9x.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./FloatingArrow-VZsTDbup.js";import"./usePlacementChangeCallback-dDt_8z3X.js";import"./floating-ui.react-dom-BpBaiSJG.js";import"./Spinner-Ct1kmwhu.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Q9m2fwZ6.js";import"./Paragraph-wFT21Q39.js";import"./NativeSelect-B43sQZ1R.js";import"./FormField-BOxFfK3i.js";import"./useFocusWithin-kuId0kJs.js";import"./Select.module-CyAaI_1P.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-MYG7es_8.js";import"./cancel_16-DMYQqNM0.js";import"./useStateWithPrev-D3vzbcDP.js";import"./chevron_left_outline_20-BbvxQo3n.js";import"./useEnsuredControl-De_YF1Cc.js";import"./Button-Bf3MOszz.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render({
    value,
    minDateTime,
    maxDateTime,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
    const updateValue = (newDate: Date | undefined) => {
      updateArgs({
        value: newDate?.getTime()
      });
    };
    return <Calendar value={parsedValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} onChange={updateValue} />;
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
