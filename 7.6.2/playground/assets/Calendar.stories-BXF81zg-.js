import{j as T}from"./iframe-DdjuqQRP.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CRFgikhO.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-CwTjvdbG.js";import{C as n}from"./Calendar-CBt_UsTB.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-CY-tJQn6.js";import"./DisplayTitle-B4Kr5g-Q.js";import"./education_12-BuBtu880.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-5xVdaabW.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BrYIPFio.js";import"./Clickable-CMjmakJq.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DQHFk4OZ.js";import"./VisuallyHidden-DYNTcNls.js";import"./Footnote-BRLGHUUX.js";import"./CustomSelect-DWPx6nTC.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3c2Rm3u.js";import"./children-C7QEwmfw.js";import"./dropdown_20-5Fs_qo-o.js";import"./chevron_up_24-lCdC9jQy.js";import"./CustomSelectDropdown-DDhqwrMM.js";import"./CustomScrollView-DQ0fV1r2.js";import"./Popper-CQiNpR-Y.js";import"./useReferenceHiddenChangeCallback-CpFVkuG8.js";import"./AppRootPortal-9OX03cZM.js";import"./useColorScheme-CYrptSaC.js";import"./createPortal-DlGqdrzK.js";import"./ColorSchemeProvider-Dc6luGdy.js";import"./ConfigProviderOverride-CI3Q5Goh.js";import"./FloatingArrow-Bqx-gDMR.js";import"./usePlacementChangeCallback-BojqPjpp.js";import"./floating-ui.react-dom-BBiLDifA.js";import"./Spinner-CywFefQr.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-I8i5aAO-.js";import"./Paragraph-MmTEWjmH.js";import"./NativeSelect-DLfmliXD.js";import"./FormField-DmeZQKFa.js";import"./useFocusWithin-BBPiXwue.js";import"./Select.module-DX6LcA9c.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B3vqP3ir.js";import"./cancel_16-CpUU2xC2.js";import"./useStateWithPrev-CIMqjGqU.js";import"./chevron_left_outline_20-BFaOXy4j.js";import"./useEnsuredControl-CdHy4ml_.js";import"./Button-h87Efeih.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
