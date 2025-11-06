import{j as g}from"./iframe-dTlwAXGa.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-B7fDfGt2.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CsOpvylv.js";import{C as s}from"./CalendarRange---RKPg4H.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-BzXaktSd.js";import"./DisplayTitle-aMmikIvR.js";import"./education_12-EMycFQZE.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DenjwXRS.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-qMfTC7Pz.js";import"./Clickable-Dl5F7aV_.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CtGJ0DI4.js";import"./VisuallyHidden-JumwXwcS.js";import"./Footnote-DJb5ZlwN.js";import"./CustomSelect-5O-5zJIf.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DRrJjLse.js";import"./children-D0xCpVZl.js";import"./dropdown_20-C8wjrFR7.js";import"./chevron_up_24-DqFSca-V.js";import"./CustomSelectDropdown-C2FxpssM.js";import"./CustomScrollView-B2P9khg7.js";import"./Popper-9kOPaZ6u.js";import"./useReferenceHiddenChangeCallback-Igx7JX9x.js";import"./AppRootPortal-DvsIiuGf.js";import"./useColorScheme-BL3jX5yR.js";import"./createPortal-HGqhkvd7.js";import"./ColorSchemeProvider-DYm1IVe2.js";import"./ConfigProviderOverride-xMCWz3c3.js";import"./FloatingArrow-VZsTDbup.js";import"./usePlacementChangeCallback-dDt_8z3X.js";import"./floating-ui.react-dom-BpBaiSJG.js";import"./Spinner-Ct1kmwhu.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Q9m2fwZ6.js";import"./Paragraph-wFT21Q39.js";import"./NativeSelect-B43sQZ1R.js";import"./FormField-BOxFfK3i.js";import"./useFocusWithin-kuId0kJs.js";import"./Select.module-CyAaI_1P.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-MYG7es_8.js";import"./cancel_16-DMYQqNM0.js";import"./useStateWithPrev-D3vzbcDP.js";import"./chevron_left_outline_20-BbvxQo3n.js";import"./useEnsuredControl-De_YF1Cc.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    value,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <CalendarRange {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
