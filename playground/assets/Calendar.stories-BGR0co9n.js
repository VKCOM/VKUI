import{j as T}from"./iframe-D9ctG7Ns.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-C_pVHuqB.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-C9djuA-t.js";import{C as n}from"./Calendar-CoTP4WiW.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-6ObnKwfL.js";import"./DisplayTitle-aqKGRV1t.js";import"./education_12-MqVmoYFk.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BsdeO7D8.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DOmAnzcN.js";import"./Clickable-4xEXwBeB.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./VisuallyHidden-XRinxkJw.js";import"./Footnote-BcHikxS0.js";import"./CustomSelect-Clhq3HIP.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-OpS3N_ep.js";import"./children-O1ZDhWOu.js";import"./dropdown_20-CPZmcS09.js";import"./chevron_up_24-Byz4oOTz.js";import"./CustomSelectDropdown-iWfSOj3j.js";import"./CustomScrollView-BgDWNMPk.js";import"./Popper-Box-Q-aN.js";import"./useReferenceHiddenChangeCallback-Cmfrj-4J.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./FloatingArrow-C_eyXCdC.js";import"./usePlacementChangeCallback-BNOpKcC7.js";import"./floating-ui.react-dom-i0bg-Iov.js";import"./Spinner-CdhXnMLF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-xHfalzw0.js";import"./Paragraph-CL2gUbo0.js";import"./NativeSelect-DQo-TeXA.js";import"./FormField-DArlX69i.js";import"./useFocusWithin-C5Vdk2dl.js";import"./Select.module-9xsMYqzH.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cu6N9yzq.js";import"./cancel_16-DYxBW21y.js";import"./useStateWithPrev-B_erCZ5v.js";import"./chevron_left_outline_20-C2tebWfr.js";import"./useEnsuredControl-C-x_bIxV.js";import"./Button-ClDISrDv.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
