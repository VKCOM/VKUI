import{j as g}from"./iframe-7s0T-F6L.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField--U1wSDVq.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-B62FvRd2.js";import{C as s}from"./CalendarRange-DPy4RWn9.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-COQCwN-F.js";import"./DisplayTitle-X6e5YmJo.js";import"./education_12-DG8XqpmA.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CJ2eXZuQ.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BPO49mNS.js";import"./Clickable-LGVh7luH.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./VisuallyHidden-CNF1CStS.js";import"./Footnote-BCofusdy.js";import"./CustomSelect-CrjvJvEm.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DBS9PTip.js";import"./children-DpgARscT.js";import"./dropdown_20-BTbvNgad.js";import"./chevron_up_24-CFc4xg2b.js";import"./CustomSelectDropdown-CKmnj90d.js";import"./CustomScrollView-DyDN-q5E.js";import"./Popper-D9qLyBtu.js";import"./useReferenceHiddenChangeCallback-DCB56tXG.js";import"./AppRootPortal-8JJCRvIt.js";import"./useColorScheme-BL2QEz1W.js";import"./createPortal-BLAX00_m.js";import"./ColorSchemeProvider-ftW5T2o8.js";import"./ConfigProviderOverride-CXr_UxnZ.js";import"./FloatingArrow-CMttNlxp.js";import"./usePlacementChangeCallback-Cqx7bnT2.js";import"./floating-ui.react-dom-sf4yENU9.js";import"./Spinner-DyPdKfog.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-QcLSq0wY.js";import"./Paragraph-tkvECuzn.js";import"./NativeSelect-CpwH-hf4.js";import"./FormField-B-roU3a7.js";import"./useFocusWithin-DluxB-SI.js";import"./Select.module-Fl8wtk8V.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CH48s9Wj.js";import"./cancel_16-BwTGakTO.js";import"./useStateWithPrev-D9zVD1D1.js";import"./chevron_left_outline_20-BuU6DaOs.js";import"./useEnsuredControl-yAfZICsK.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
