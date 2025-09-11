import{j as T}from"./iframe-DfeTZ_Fw.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CEYRAbDd.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-DnUlZtzo.js";import{C as n}from"./Calendar-BVT5-FWK.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-hDjGO988.js";import"./DisplayTitle-MVUkiPfF.js";import"./education_12-CJPpzNiU.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Dvcc8Qij.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BBWke1IE.js";import"./Clickable-Bpx6dgEO.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./VisuallyHidden-BuJles22.js";import"./Footnote-ivEbNXOe.js";import"./CustomSelect-C4lo9yBT.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CTKRcmoK.js";import"./children-DctjNuEY.js";import"./dropdown_20-BNTx9TYE.js";import"./chevron_up_24-5Ojx3Y17.js";import"./CustomSelectDropdown-BqlT281C.js";import"./CustomScrollView-nYtC7Vih.js";import"./Popper-Cljg5rUv.js";import"./useReferenceHiddenChangeCallback-N3uDB-Py.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./ConfigProviderOverride-BwkUJRE0.js";import"./FloatingArrow-uD3esN_v.js";import"./usePlacementChangeCallback-Cv8IwpN3.js";import"./floating-ui.react-dom-BV57HVUx.js";import"./Spinner-Crblzylq.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DaoMFzCt.js";import"./Paragraph-B0joEyCz.js";import"./NativeSelect-B8Wq8T2C.js";import"./FormField-BLz8UzFa.js";import"./useFocusWithin-UgE2lzew.js";import"./Select.module-D_mKBLoc.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CE4ifGYW.js";import"./cancel_16-CAHFUioB.js";import"./useStateWithPrev-Bd1I0QPL.js";import"./chevron_left_outline_20-BH5O8FRo.js";import"./useEnsuredControl-Q_kfI6qJ.js";import"./Button-CYtH28qE.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
