import{j as l}from"./iframe-KtxhC7Vu.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CtiBGFZA.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-Dkq0eKsU.js";import{C as o}from"./Calendar-BexT8DB3.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Yrm4oGty.js";import"./DisplayTitle-D6gYel-6.js";import"./education_12-BBfveU6S.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-GO4ikmjU.js";import"./useState-D1V9wQJY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./Tappable-BHKu77gD.js";import"./Clickable-zoSQNYwS.js";import"./InputUtils-BueJ8J_Y.js";import"./VisuallyHidden-8TqRJKxj.js";import"./Footnote-lwK0vUsu.js";import"./CustomSelect-DaqBuU38.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-B0mPTmqN.js";import"./children-BMwCSNmp.js";import"./dropdown_20-C2jnygJR.js";import"./chevron_up_24-FW-l4FSN.js";import"./CustomSelectDropdown-CwXH4hYl.js";import"./CustomScrollView-DbnS4Q0q.js";import"./Popper-Bi9VpZic.js";import"./useReferenceHiddenChangeCallback-D2CAbs8d.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./FloatingArrow-x9VSrLhI.js";import"./usePlacementChangeCallback-D7f72DhY.js";import"./floating-ui.react-dom-aiJhAjls.js";import"./Spinner-kWF4Wnla.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DwIELNai.js";import"./Paragraph-DwCH17iY.js";import"./NativeSelect-udiubFLU.js";import"./FormField-B5GJ46_3.js";import"./useFocusWithin-Do1ICwdO.js";import"./Select.module-BkIVIfSU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DubnwX4y.js";import"./cancel_16-B1WNNliN.js";import"./useStateWithPrev-BUgHxQGV.js";import"./chevron_left_outline_20-DwzXMy22.js";import"./useEnsuredControl-Dalnicbc.js";import"./Button-Md1sLJHS.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
