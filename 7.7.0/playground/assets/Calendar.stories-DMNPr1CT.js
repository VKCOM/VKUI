import{j as T}from"./iframe-B4SbMwac.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-B2HpcsEg.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-Ckv0Ztuf.js";import{C as n}from"./Calendar-CGV5STO6.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-2zBCEySr.js";import"./DisplayTitle-Sy48LclA.js";import"./education_12-CEeeNYup.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-xKwNf_bJ.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DlzKIRC8.js";import"./Clickable-LHka_ZWc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./VisuallyHidden-B_fMC41X.js";import"./Footnote-PzIaqeP1.js";import"./CustomSelect-DsXv4ZdF.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CcBAmcmV.js";import"./children-hJQIY4yI.js";import"./dropdown_20-CxYmrmU3.js";import"./chevron_up_24-CaEzBp3s.js";import"./CustomSelectDropdown-b6en_-0o.js";import"./CustomScrollView-CSv3j4T0.js";import"./Popper-DFCpkDRE.js";import"./useReferenceHiddenChangeCallback-CRKvMz2H.js";import"./AppRootPortal-BWPaNlwr.js";import"./useColorScheme-D4AzIlWD.js";import"./createPortal-BRXgEjGv.js";import"./ColorSchemeProvider-B6sJTJHQ.js";import"./ConfigProviderOverride-BEOiP_JX.js";import"./FloatingArrow-D8SaHZXW.js";import"./usePlacementChangeCallback-Dnl7vUIF.js";import"./floating-ui.react-dom-B5IXheP8.js";import"./Spinner-CVJ-p2Lm.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BUZolQX5.js";import"./Paragraph-BxdY1U1n.js";import"./NativeSelect-B7q6YOy9.js";import"./FormField-DCol49_L.js";import"./useFocusWithin-to_rIq53.js";import"./Select.module-C-VXyaHP.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BrekU4vj.js";import"./cancel_16-CGmKO3B7.js";import"./useStateWithPrev-DStfvjsY.js";import"./chevron_left_outline_20-B7gtEROt.js";import"./useEnsuredControl-OhL1_krT.js";import"./Button-CqwGeWDr.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
