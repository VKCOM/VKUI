import{j as T}from"./iframe-BW2_2Sqh.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-BqU4WboE.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-hmI1F5Az.js";import{C as p}from"./Calendar-CgwU8m4J.js";import"./Caption-B3YPJibB.js";import"./DisplayTitle-CUcUrb66.js";import"./education_12-DFgrcrGc.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./CalendarHeader-42OaW77O.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D_Pc41Ky.js";import"./InputUtils-DYuPlK4j.js";import"./VisuallyHidden-0_L4g8bM.js";import"./Footnote-DqSrPGSc.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Di5uuXSi.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cv8cds6L.js";import"./useStateWithPrev-CMG94Yfr.js";import"./DropdownIcon-C1GCze_v.js";import"./children-Dc0ieD8_.js";import"./dropdown_20-BhtxCkzn.js";import"./chevron_up_24-PXJae6b0.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BBnuosIF.js";import"./CustomScrollView-DrGLqxxz.js";import"./Popper-CvXRdepB.js";import"./useReferenceHiddenChangeCallback-D-Y2YXE4.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./FloatingArrow-BwItcUE2.js";import"./usePlacementChangeCallback-B_7WiNet.js";import"./Spinner-Ck410QJW.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DbZP3vkW.js";import"./Paragraph-DwKlZasN.js";import"./NativeSelect-DcEvGgJn.js";import"./FormField-bePIa3wK.js";import"./Select.module-ESI76py7.js";import"./IconButton-DMIGpMdh.js";import"./cancel_16-Cy5lofFG.js";import"./chevron_left_outline_20-EU2jxazt.js";import"./useEnsuredControl-C3ZVk8ic.js";import"./date-Bo_VOar-.js";import"./Button-B8UDwXDh.js";const we={title:"Forms/Calendar",component:p,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()}},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(p,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Fe=["Playground"];export{e as Playground,Fe as __namedExportsOrder,we as default};
