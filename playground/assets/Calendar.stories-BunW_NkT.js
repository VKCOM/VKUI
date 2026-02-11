import{j as l}from"./iframe-DIYy3-CH.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DInCXrFo.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-h9h7ejHK.js";import{C as o}from"./Calendar-DxRwFZW2.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CaOppkeD.js";import"./DisplayTitle-C2cMicvR.js";import"./education_12-CqjwLMZI.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-kCZ9H7qv.js";import"./useState-p4Iaaoae.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./Tappable-sYAEqFlc.js";import"./Clickable-BAIHKsz8.js";import"./InputUtils-MuCAFNzU.js";import"./VisuallyHidden-B6N7VZPM.js";import"./Footnote-CRCyeFbn.js";import"./CustomSelect-BYDJoheE.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CpdTLJ55.js";import"./children-BgxIS89X.js";import"./dropdown_20-DCuiNVmp.js";import"./chevron_up_24-hXM5sa8Y.js";import"./CustomSelectDropdown-TSlmrZ5Y.js";import"./CustomScrollView-G7yuAOqH.js";import"./Popper-CuNxRGBX.js";import"./useReferenceHiddenChangeCallback-CW-8m34o.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./FloatingArrow-B11NdP-t.js";import"./usePlacementChangeCallback-CgA_U0ts.js";import"./floating-ui.react-dom-SH6Hwo0U.js";import"./Spinner-D5ck6QgF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D7FmCYaF.js";import"./Paragraph-C-gjngMm.js";import"./NativeSelect-juMjOPi4.js";import"./FormField-BywUP1eK.js";import"./useFocusWithin-De2BOk53.js";import"./Select.module-6jS9NVCS.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DhekZgUs.js";import"./cancel_16-7cpCCUKH.js";import"./useStateWithPrev-W9bRPnvU.js";import"./chevron_left_outline_20-CwPtsqRK.js";import"./useEnsuredControl-7dmeozfI.js";import"./Button-D7qQMSR2.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
