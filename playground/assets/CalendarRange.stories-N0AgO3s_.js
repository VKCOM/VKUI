import{j as g}from"./iframe-DvsMcRqO.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-BaNDQFGP.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-D2snfMZd.js";import{C as s}from"./CalendarRange-BI6svzlZ.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-B-wss8fo.js";import"./DisplayTitle-ahCZLCY8.js";import"./education_12-DK0430eY.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CPqm_p48.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-Dogw4jpa.js";import"./Clickable-DquLH6Yl.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./VisuallyHidden-BGLO0lAS.js";import"./Footnote-BnZcEJ_G.js";import"./CustomSelect-1vjnerGs.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-BXloRob2.js";import"./children-lVZQ7uKR.js";import"./dropdown_20-sKIK8g5d.js";import"./chevron_up_24-CmLqw_px.js";import"./CustomSelectDropdown-C_9I92nh.js";import"./CustomScrollView-DrQcp-qz.js";import"./Popper-DFzyr9iY.js";import"./useReferenceHiddenChangeCallback-Bv5Zofim.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./FloatingArrow-DvhJwnsr.js";import"./usePlacementChangeCallback-Cny6Wdhd.js";import"./floating-ui.react-dom-C6Zv4JyC.js";import"./Spinner-Nh-MMopi.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CZMNFeZM.js";import"./Paragraph-DEhxRJq2.js";import"./NativeSelect-B9dFQ-T0.js";import"./FormField-BWWKEzde.js";import"./useFocusWithin-Bvi6Sdqy.js";import"./Select.module-DXV2W0OJ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B-myA0wM.js";import"./cancel_16-CzV7BKaB.js";import"./useStateWithPrev-ygQuy9i4.js";import"./chevron_left_outline_20-yZ80JCLp.js";import"./useEnsuredControl-DpBtXUVf.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
