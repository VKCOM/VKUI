import{j as T}from"./iframe-BdL7Qu3-.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-8jki7RDr.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BySvhDp3.js";import{C as n}from"./Calendar-2XUahiJE.js";import"./Caption-A9YdzU-r.js";import"./DisplayTitle-CaU2fLV3.js";import"./education_12-D30j3lP7.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./CalendarHeader-AXUqPuQn.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DH_64QBQ.js";import"./Clickable-zgtvQHiz.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./VisuallyHidden-DMev6gKF.js";import"./Footnote-Cejbc8FV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CaCyrUjh.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C1xt8Yic.js";import"./useStateWithPrev-BwklpJtc.js";import"./DropdownIcon-B51siMI_.js";import"./children-D33S37xY.js";import"./dropdown_20-CcrT0WK8.js";import"./chevron_up_24-BeYCSzSD.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Bv3SFUia.js";import"./CustomScrollView-W74DUE-r.js";import"./Popper-DSd7JoP9.js";import"./useReferenceHiddenChangeCallback-BDB-jZS9.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./FloatingArrow-C9usf79d.js";import"./usePlacementChangeCallback-TMZyVZQg.js";import"./floating-ui.react-dom-B1ZkUPW4.js";import"./Spinner-CchhrSOA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-zpwz0PEe.js";import"./Paragraph-jPlkG9S_.js";import"./NativeSelect-AXmXophw.js";import"./FormField-CqnEFqGM.js";import"./Select.module-Dz57dYm_.js";import"./IconButton-oiQnZbSh.js";import"./cancel_16-CENPgfP-.js";import"./chevron_left_outline_20-B13X4oR-.js";import"./useEnsuredControl-B3YM8IG7.js";import"./date-L3Antn1d.js";import"./Button-Bf-yaCMi.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
