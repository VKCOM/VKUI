import{j as g}from"./iframe-CkliH7Ym.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-D7sR0822.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-DpMME8OT.js";import{C as s}from"./CalendarRange-CyAuPwxX.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-XD0QEt-A.js";import"./DisplayTitle-CITDAmpz.js";import"./education_12-CkaFu-n1.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-uSeBNsKw.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-fZc2zE5Y.js";import"./Clickable-D0QQafOF.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./Footnote-CVpuTKzI.js";import"./CustomSelect-BTyDgp7z.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-1hUMhB0U.js";import"./children-B0i547Ke.js";import"./dropdown_20-DFkMJTEQ.js";import"./chevron_up_24-DpNmfOob.js";import"./CustomSelectDropdown-XQHuM8r6.js";import"./CustomScrollView-BfGihvhQ.js";import"./Popper-EuLCrfqJ.js";import"./useReferenceHiddenChangeCallback-CrbKL3K8.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./FloatingArrow-B53s4wIh.js";import"./usePlacementChangeCallback-DQYCmAMk.js";import"./floating-ui.react-dom-DQc45krP.js";import"./Spinner-UdAHfoPk.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CmOc4L65.js";import"./Paragraph-Bj3P3vMD.js";import"./NativeSelect-r2NBdp7L.js";import"./FormField-2Xr44SiQ.js";import"./useFocusWithin-njH6fdIQ.js";import"./Select.module-B9F05EDA.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CSrcIMnc.js";import"./cancel_16-CVLOC4uu.js";import"./useStateWithPrev-BblT4-HP.js";import"./chevron_left_outline_20-BvT7hjfx.js";import"./useEnsuredControl-DPyJ8XQk.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
