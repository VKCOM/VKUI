import{j as T}from"./iframe-7s0T-F6L.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField--U1wSDVq.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-B62FvRd2.js";import{C as n}from"./Calendar-BIay5uK_.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-COQCwN-F.js";import"./DisplayTitle-X6e5YmJo.js";import"./education_12-DG8XqpmA.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CJ2eXZuQ.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BPO49mNS.js";import"./Clickable-LGVh7luH.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CP-PNx6u.js";import"./VisuallyHidden-CNF1CStS.js";import"./Footnote-BCofusdy.js";import"./CustomSelect-CrjvJvEm.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DBS9PTip.js";import"./children-DpgARscT.js";import"./dropdown_20-BTbvNgad.js";import"./chevron_up_24-CFc4xg2b.js";import"./CustomSelectDropdown-CKmnj90d.js";import"./CustomScrollView-DyDN-q5E.js";import"./Popper-D9qLyBtu.js";import"./useReferenceHiddenChangeCallback-DCB56tXG.js";import"./AppRootPortal-8JJCRvIt.js";import"./useColorScheme-BL2QEz1W.js";import"./createPortal-BLAX00_m.js";import"./ColorSchemeProvider-ftW5T2o8.js";import"./ConfigProviderOverride-CXr_UxnZ.js";import"./FloatingArrow-CMttNlxp.js";import"./usePlacementChangeCallback-Cqx7bnT2.js";import"./floating-ui.react-dom-sf4yENU9.js";import"./Spinner-DyPdKfog.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-QcLSq0wY.js";import"./Paragraph-tkvECuzn.js";import"./NativeSelect-CpwH-hf4.js";import"./FormField-B-roU3a7.js";import"./useFocusWithin-DluxB-SI.js";import"./Select.module-Fl8wtk8V.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CH48s9Wj.js";import"./cancel_16-BwTGakTO.js";import"./useStateWithPrev-D9zVD1D1.js";import"./chevron_left_outline_20-BuU6DaOs.js";import"./useEnsuredControl-yAfZICsK.js";import"./Button-DBxYkQfv.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
