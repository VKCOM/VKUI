import{j as T}from"./iframe-BzXYREd1.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-zVnnmcZr.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BXMOsghN.js";import{C as n}from"./Calendar-Djk9dLKn.js";import"./Caption-DQdafhaO.js";import"./DisplayTitle-ChLVdz5k.js";import"./education_12-ChFkpu24.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./CalendarHeader-BWjYhd4-.js";import"./Clickable-DoSI9phS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CEn82fQ0.js";import"./InputUtils-DULFm0M2.js";import"./VisuallyHidden-CGoUHCA9.js";import"./Footnote-ChYIirVi.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DnEqJaTG.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useStateWithPrev-DIRc7sTN.js";import"./DropdownIcon-dYyUG-ER.js";import"./children-Cg6pG0uN.js";import"./dropdown_20-BW-ZuK3W.js";import"./chevron_up_24-B_k7NpvP.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CTieeYsw.js";import"./CustomScrollView-Bjlru_-d.js";import"./Popper-CRKef3MV.js";import"./useReferenceHiddenChangeCallback-2xtRrg1t.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./FloatingArrow-C9T5GfxJ.js";import"./usePlacementChangeCallback-Cr19q53p.js";import"./floating-ui.react-dom-gQYdXTBL.js";import"./Spinner-CKaqwWiI.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CALDRXE3.js";import"./Paragraph-IO_n1Dux.js";import"./NativeSelect-DPfma8_h.js";import"./FormField-DMycdJEz.js";import"./Select.module-B_-em5IN.js";import"./IconButton-DmYSjyYz.js";import"./cancel_16-D3jkawaL.js";import"./chevron_left_outline_20-DVvIs5zx.js";import"./useEnsuredControl-ZZij51Ca.js";import"./date-hgSAX-20.js";import"./Button-C3UHKLcX.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
