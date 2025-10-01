import{j as l}from"./iframe-DJZLDe2v.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CTkqcwqD.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-Cy6H9mhl.js";import{C as o}from"./Calendar-DjubU5_1.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-B1NS-klr.js";import"./DisplayTitle-B79lALg2.js";import"./education_12-Cz8Y-r-n.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B0F2SwRY.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CY0nsltg.js";import"./Clickable-DJi6sM1Y.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CYWMeBJ6.js";import"./VisuallyHidden-D0jMNSCO.js";import"./Footnote-D8Ch1fTG.js";import"./CustomSelect-CXM0rP-p.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_1xQ3gYQ.js";import"./children-Dhk2DcjP.js";import"./dropdown_20-XMSN09VU.js";import"./chevron_up_24-CEaQUyyy.js";import"./CustomSelectDropdown-DJ2a33B-.js";import"./CustomScrollView-D8SujhxZ.js";import"./Popper-D8p4fWFq.js";import"./useReferenceHiddenChangeCallback-BLBLca1c.js";import"./AppRootPortal-CbG6gCHO.js";import"./useColorScheme-DOPlqjNA.js";import"./createPortal-D4c259Iv.js";import"./ColorSchemeProvider-DhQPwwFm.js";import"./ConfigProviderOverride-CI0r-TE-.js";import"./FloatingArrow-D8cEO-Yg.js";import"./usePlacementChangeCallback-DPCse-sq.js";import"./floating-ui.react-dom-lakl85H9.js";import"./Spinner-BnPfDhY3.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DfCxAhCM.js";import"./Paragraph-G8d9aizT.js";import"./NativeSelect-BoA9RpWF.js";import"./FormField-Cnff4fSG.js";import"./useFocusWithin-BwFTxwKW.js";import"./Select.module-D06y7HCU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CMOFK_Ua.js";import"./cancel_16-Df48sQ_x.js";import"./useStateWithPrev-DSVTyTdW.js";import"./chevron_left_outline_20-DNA2miEA.js";import"./useEnsuredControl-Cp0sdS7L.js";import"./Button-owOpbUxM.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
