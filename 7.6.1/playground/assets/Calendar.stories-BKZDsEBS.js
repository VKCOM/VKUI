import{j as T}from"./iframe-CdtcRMP-.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CbOCyvoP.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-CoFU7EkZ.js";import{C as n}from"./Calendar-BhXZVQ3W.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-DOhalbqy.js";import"./DisplayTitle-B29xSz1D.js";import"./education_12-6HQQm3ZW.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-ChP8yCH6.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-znRvcKvt.js";import"./Clickable-nnjkiOyK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./VisuallyHidden-CtlI0uOO.js";import"./Footnote-UnTPOYYT.js";import"./CustomSelect-yWjErFJk.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CZjsFca3.js";import"./children-BpYEnGqU.js";import"./dropdown_20-BbFICyt9.js";import"./chevron_up_24-DN5UovyM.js";import"./CustomSelectDropdown-BWtFjGkj.js";import"./CustomScrollView-BzKXL2Z5.js";import"./Popper-T3RUj53f.js";import"./useReferenceHiddenChangeCallback-JE-hnu_T.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./FloatingArrow-BleoPFqO.js";import"./usePlacementChangeCallback-BB0AFdrs.js";import"./floating-ui.react-dom-Dfkb5x82.js";import"./Spinner-C-2OzDn_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bw5BXA_B.js";import"./Paragraph-B8xPxJlh.js";import"./NativeSelect-yM5JNzj5.js";import"./FormField-DzT87oDI.js";import"./useFocusWithin-CnBAXQ2U.js";import"./Select.module-DdA2hEwl.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-rnOj30v2.js";import"./cancel_16-CbxMAvwC.js";import"./useStateWithPrev-Dd6f6IIM.js";import"./chevron_left_outline_20-BMCptxgE.js";import"./useEnsuredControl-D2ifizI6.js";import"./Button-BpUWCXRP.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
