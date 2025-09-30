import{j as T}from"./iframe-qoTtUH8h.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-mpCzFxqG.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BFwe8KrN.js";import{C as n}from"./Calendar-DjlB95fe.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-bIdYMpTC.js";import"./DisplayTitle-BzxXawYY.js";import"./education_12-DIV4kCOg.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-D-BsnVfN.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-D-SlRlKJ.js";import"./Clickable-0SfVv815.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./Footnote-DrM4b0WC.js";import"./CustomSelect-tZHNRolR.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BlGZKa5x.js";import"./children-Tz7yKUE7.js";import"./dropdown_20-BYySsUa9.js";import"./chevron_up_24-BRlURm07.js";import"./CustomSelectDropdown-B-kYY2ii.js";import"./CustomScrollView-OgnoSfIa.js";import"./Popper-CDwlWBLk.js";import"./useReferenceHiddenChangeCallback-CoBcnP-Y.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./FloatingArrow-BSMg02bE.js";import"./usePlacementChangeCallback-DXVqMB8T.js";import"./floating-ui.react-dom-XNsbD0-z.js";import"./Spinner-C8UkQVmM.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DXIpJ_9s.js";import"./Paragraph-Dx2jmIL9.js";import"./NativeSelect-BBoH35hP.js";import"./FormField-DCCIiDnM.js";import"./useFocusWithin-E39X-WYV.js";import"./Select.module-v5g6Rgek.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B17wjzUA.js";import"./cancel_16-wfglQx50.js";import"./useStateWithPrev-q-5o1mLG.js";import"./chevron_left_outline_20-ujKCL-Pw.js";import"./useEnsuredControl-Dz1TjRJ3.js";import"./Button-qb2UxdVt.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
