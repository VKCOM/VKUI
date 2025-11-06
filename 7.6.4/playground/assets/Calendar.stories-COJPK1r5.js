import{j as T}from"./iframe-gnG2DlPI.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DJ-xDfYu.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-xenh2TAE.js";import{C as n}from"./Calendar-CO-ZqXXs.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-BFNedaFH.js";import"./DisplayTitle-JRJHIR7t.js";import"./education_12-BUGot4fb.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DnFziZa5.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-03YLyRIn.js";import"./Clickable-CEzYBb4W.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./VisuallyHidden-CKM3u7Sn.js";import"./Footnote-CONk622S.js";import"./CustomSelect-CzylMRq9.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3MQ6Zfj.js";import"./children-f2sIKLUn.js";import"./dropdown_20-BBKaGv9g.js";import"./chevron_up_24-DoyCz406.js";import"./CustomSelectDropdown-C16WVPUt.js";import"./CustomScrollView-DrMf6IgL.js";import"./Popper-DC-k3Bn1.js";import"./useReferenceHiddenChangeCallback-DFZxSJq2.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./FloatingArrow-BxfAO7YE.js";import"./usePlacementChangeCallback-BKIMntET.js";import"./floating-ui.react-dom-B5yNzxXa.js";import"./Spinner-CpE2KS8o.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-htb9b17L.js";import"./Paragraph-C-NM1n3-.js";import"./NativeSelect-CDarQ2Cp.js";import"./FormField-BCUJfz82.js";import"./useFocusWithin-XtLgfp-_.js";import"./Select.module-DzrzSPIQ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cf4dAO-u.js";import"./cancel_16-CitrMCMl.js";import"./useStateWithPrev-CHGTfIix.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./useEnsuredControl-25o_zjEi.js";import"./Button-0nci1iZm.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
