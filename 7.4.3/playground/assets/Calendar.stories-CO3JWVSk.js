import{j as T}from"./iframe-C2_PECK0.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-B1FNr0wG.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BkdoSo1V.js";import{C as p}from"./Calendar-CoCKjLXb.js";import"./Caption-D3QJC-zO.js";import"./DisplayTitle-NyTx5WJH.js";import"./education_12-B64bjlKb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./CalendarHeader-DmQ_9zqS.js";import"./Clickable-Ctz6ZMd9.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DLQDSygG.js";import"./InputUtils-BDpjj3t6.js";import"./VisuallyHidden-DSMrBIlo.js";import"./Footnote-B_H7tDpo.js";import"./constants-BxoWbviK.js";import"./CustomSelect-65EsxXG8.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-gjFI-5hQ.js";import"./useStateWithPrev-C5Aciol_.js";import"./DropdownIcon-DkMbwP0c.js";import"./children-n2srhEVv.js";import"./dropdown_20-DvIblsX2.js";import"./chevron_up_24-CMti3RIs.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-qCaM2tPX.js";import"./CustomScrollView-gvcW3YKp.js";import"./Popper-Bo2p_PrY.js";import"./useReferenceHiddenChangeCallback-2ArwOqZN.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./FloatingArrow-_eZKd9-i.js";import"./usePlacementChangeCallback-DeYYV3Z9.js";import"./Spinner-DOBIwFGK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DU8pVnZO.js";import"./Paragraph-BJiuCRl2.js";import"./NativeSelect-DEaHtyU_.js";import"./FormField-BvW49P_p.js";import"./Select.module-40dUcPLV.js";import"./IconButton-ht7j3HPv.js";import"./cancel_16-CB2v-scR.js";import"./chevron_left_outline_20-By9_OjBN.js";import"./useEnsuredControl-D3OYDbAS.js";import"./date-DGcDspvK.js";import"./Button-DnPEcOt6.js";const we={title:"Forms/Calendar",component:p,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()}},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(p,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
