import{j as T}from"./iframe-Bz8JpgqB.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-FWRN9EB0.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BA1ZeKcb.js";import{C as n}from"./Calendar-DzcBAl0I.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-DWsz_D6l.js";import"./DisplayTitle-2dIpuIjR.js";import"./education_12-w4nYI_AS.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader--_GfvT_b.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DGSycWIS.js";import"./Clickable-C8sAptP9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./VisuallyHidden-Civmtkn4.js";import"./Footnote-CXG5ZQyY.js";import"./CustomSelect-CatNDs7b.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DkWA8P4F.js";import"./children-CZEp9rCJ.js";import"./dropdown_20-B3NX-bVZ.js";import"./chevron_up_24-u7VxH0aB.js";import"./CustomSelectDropdown-CAfJ7FFb.js";import"./CustomScrollView-1nNv19Yp.js";import"./Popper-q3sZLUoJ.js";import"./useReferenceHiddenChangeCallback-Bry62V7f.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./ConfigProviderOverride-iG9hzCRC.js";import"./FloatingArrow-BEP7PKoE.js";import"./usePlacementChangeCallback-Dm4G90RH.js";import"./floating-ui.react-dom-BSyzrD7n.js";import"./Spinner-BdNNxg7b.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DCits1Ao.js";import"./Paragraph-COWk_h1U.js";import"./NativeSelect-DPIFN2xa.js";import"./FormField-DdIob4n7.js";import"./useFocusWithin-DoazkeVF.js";import"./Select.module-BOEKrPxI.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-SCSZUFVl.js";import"./cancel_16-XWUplmpx.js";import"./useStateWithPrev-BJAqxh9n.js";import"./chevron_left_outline_20-Dck12Yqu.js";import"./useEnsuredControl-CQ9aTHQJ.js";import"./Button-BGNgkvlW.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
