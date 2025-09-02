import{j as g}from"./iframe-WscSQxk_.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-BfZdtNoo.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-1dB4d3uR.js";import{C as s}from"./CalendarRange-BtIuZTUc.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-wyHxTwpV.js";import"./DisplayTitle-q9BY6eoh.js";import"./education_12-p0vWEUAm.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CwdUcKsW.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-4pvQI-9h.js";import"./Clickable-C7ilqGtf.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./VisuallyHidden-uW7N7P-s.js";import"./Footnote-DadQ2vZ3.js";import"./CustomSelect-D-hc13Yt.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B4xVbxJg.js";import"./children-PV0P3fmv.js";import"./dropdown_20-DRkNt1iW.js";import"./chevron_up_24-D5FCKPim.js";import"./CustomSelectDropdown-NUsO1uDu.js";import"./CustomScrollView-xnVnJFD2.js";import"./Popper-yqTBZXtr.js";import"./useReferenceHiddenChangeCallback-DXGV-oHr.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./FloatingArrow-CM5Y14V9.js";import"./usePlacementChangeCallback-BEnhShFW.js";import"./floating-ui.react-dom-DLxqAOSM.js";import"./Spinner-BOd2c3oA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DB_qaMXS.js";import"./Paragraph-DlgzzrFx.js";import"./NativeSelect-DFrjeEHg.js";import"./FormField-B19rMsk1.js";import"./useFocusWithin-BHVkTq3i.js";import"./Select.module-CMLPdxP8.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D66RFa5n.js";import"./cancel_16-DqqQ33f0.js";import"./useStateWithPrev-CVuELe5J.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";import"./useEnsuredControl-D-lyK4Qo.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
