import{j as T}from"./iframe-WscSQxk_.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-BfZdtNoo.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-1dB4d3uR.js";import{C as n}from"./Calendar-BwKawlrP.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-wyHxTwpV.js";import"./DisplayTitle-q9BY6eoh.js";import"./education_12-p0vWEUAm.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CwdUcKsW.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-4pvQI-9h.js";import"./Clickable-C7ilqGtf.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./VisuallyHidden-uW7N7P-s.js";import"./Footnote-DadQ2vZ3.js";import"./CustomSelect-D-hc13Yt.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B4xVbxJg.js";import"./children-PV0P3fmv.js";import"./dropdown_20-DRkNt1iW.js";import"./chevron_up_24-D5FCKPim.js";import"./CustomSelectDropdown-NUsO1uDu.js";import"./CustomScrollView-xnVnJFD2.js";import"./Popper-yqTBZXtr.js";import"./useReferenceHiddenChangeCallback-DXGV-oHr.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./FloatingArrow-CM5Y14V9.js";import"./usePlacementChangeCallback-BEnhShFW.js";import"./floating-ui.react-dom-DLxqAOSM.js";import"./Spinner-BOd2c3oA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DB_qaMXS.js";import"./Paragraph-DlgzzrFx.js";import"./NativeSelect-DFrjeEHg.js";import"./FormField-B19rMsk1.js";import"./useFocusWithin-BHVkTq3i.js";import"./Select.module-CMLPdxP8.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D66RFa5n.js";import"./cancel_16-DqqQ33f0.js";import"./useStateWithPrev-CVuELe5J.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";import"./useEnsuredControl-D-lyK4Qo.js";import"./Button-C7Wah6LB.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
