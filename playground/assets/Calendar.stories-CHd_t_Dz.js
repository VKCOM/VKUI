import{j as T}from"./iframe-DvsMcRqO.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-BaNDQFGP.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-D2snfMZd.js";import{C as n}from"./Calendar-BYIJQpr4.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-B-wss8fo.js";import"./DisplayTitle-ahCZLCY8.js";import"./education_12-DK0430eY.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CPqm_p48.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-Dogw4jpa.js";import"./Clickable-DquLH6Yl.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./VisuallyHidden-BGLO0lAS.js";import"./Footnote-BnZcEJ_G.js";import"./CustomSelect-1vjnerGs.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-BXloRob2.js";import"./children-lVZQ7uKR.js";import"./dropdown_20-sKIK8g5d.js";import"./chevron_up_24-CmLqw_px.js";import"./CustomSelectDropdown-C_9I92nh.js";import"./CustomScrollView-DrQcp-qz.js";import"./Popper-DFzyr9iY.js";import"./useReferenceHiddenChangeCallback-Bv5Zofim.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./FloatingArrow-DvhJwnsr.js";import"./usePlacementChangeCallback-Cny6Wdhd.js";import"./floating-ui.react-dom-C6Zv4JyC.js";import"./Spinner-Nh-MMopi.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CZMNFeZM.js";import"./Paragraph-DEhxRJq2.js";import"./NativeSelect-B9dFQ-T0.js";import"./FormField-BWWKEzde.js";import"./useFocusWithin-Bvi6Sdqy.js";import"./Select.module-DXV2W0OJ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B-myA0wM.js";import"./cancel_16-CzV7BKaB.js";import"./useStateWithPrev-ygQuy9i4.js";import"./chevron_left_outline_20-yZ80JCLp.js";import"./useEnsuredControl-DpBtXUVf.js";import"./Button-DoX3DA-M.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
