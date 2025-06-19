import{j as T}from"./iframe-k6odcVfq.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-ByTXJtQt.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BfP_t4Uf.js";import{C as p}from"./Calendar-C-niSBMA.js";import"./Caption-CAbXIvPt.js";import"./DisplayTitle-D_QWnQ_i.js";import"./education_12-BD2Da6Za.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./CalendarHeader-CAHF_G5f.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CLnVjIR_.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Footnote-DHnfr3c7.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dtl4_h2r.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Bs7KV-km.js";import"./useStateWithPrev-CT065FoZ.js";import"./DropdownIcon-DXMLLgl5.js";import"./children-CYWK7spH.js";import"./dropdown_20-DI5rRmPk.js";import"./chevron_up_24-DUviWVsC.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CcSy1sjg.js";import"./CustomScrollView-BXdQts83.js";import"./Popper-Cymo0deb.js";import"./useReferenceHiddenChangeCallback-5rOssyve.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./FloatingArrow-DaP7ccM2.js";import"./usePlacementChangeCallback-BTz75stv.js";import"./Spinner-COoI1Hcx.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-GesVWsbq.js";import"./Paragraph-DvqjBQ5B.js";import"./NativeSelect-DA9WT8fr.js";import"./FormField-fetq_Z25.js";import"./Select.module-ClxNp5L4.js";import"./IconButton-dHj7AK-z.js";import"./cancel_16-DSe4OQBX.js";import"./chevron_left_outline_20-DzkmYzqa.js";import"./useEnsuredControl-BaxW7pA0.js";import"./date-C8PZEeUp.js";import"./Button-BOH5rx1N.js";const we={title:"Forms/Calendar",component:p,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()}},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(p,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
