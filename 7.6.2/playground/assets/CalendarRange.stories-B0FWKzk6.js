import{j as g}from"./iframe-DdjuqQRP.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CRFgikhO.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CwTjvdbG.js";import{C as s}from"./CalendarRange-DVKLrhm4.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-CY-tJQn6.js";import"./DisplayTitle-B4Kr5g-Q.js";import"./education_12-BuBtu880.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-5xVdaabW.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BrYIPFio.js";import"./Clickable-CMjmakJq.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DQHFk4OZ.js";import"./VisuallyHidden-DYNTcNls.js";import"./Footnote-BRLGHUUX.js";import"./CustomSelect-DWPx6nTC.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3c2Rm3u.js";import"./children-C7QEwmfw.js";import"./dropdown_20-5Fs_qo-o.js";import"./chevron_up_24-lCdC9jQy.js";import"./CustomSelectDropdown-DDhqwrMM.js";import"./CustomScrollView-DQ0fV1r2.js";import"./Popper-CQiNpR-Y.js";import"./useReferenceHiddenChangeCallback-CpFVkuG8.js";import"./AppRootPortal-9OX03cZM.js";import"./useColorScheme-CYrptSaC.js";import"./createPortal-DlGqdrzK.js";import"./ColorSchemeProvider-Dc6luGdy.js";import"./ConfigProviderOverride-CI3Q5Goh.js";import"./FloatingArrow-Bqx-gDMR.js";import"./usePlacementChangeCallback-BojqPjpp.js";import"./floating-ui.react-dom-BBiLDifA.js";import"./Spinner-CywFefQr.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-I8i5aAO-.js";import"./Paragraph-MmTEWjmH.js";import"./NativeSelect-DLfmliXD.js";import"./FormField-DmeZQKFa.js";import"./useFocusWithin-BBPiXwue.js";import"./Select.module-DX6LcA9c.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B3vqP3ir.js";import"./cancel_16-CpUU2xC2.js";import"./useStateWithPrev-CIMqjGqU.js";import"./chevron_left_outline_20-BFaOXy4j.js";import"./useEnsuredControl-CdHy4ml_.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
