import{j as l}from"./iframe-DdZr-4mP.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-BgPuI0El.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-Ba7SdRgj.js";import{C as o}from"./Calendar-BU8n8hxl.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DtU_BWrV.js";import"./DisplayTitle-Djtt-it5.js";import"./education_12-DrlYhy_2.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BnHcgTbn.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CovdKVQt.js";import"./Clickable-J2yyQqq6.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./Footnote-1KqsUf4m.js";import"./CustomSelect-Cr2rMPnz.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DNE5t4x-.js";import"./children-oqymHkiK.js";import"./dropdown_20-C51VVF26.js";import"./chevron_up_24-B5_EUz2K.js";import"./CustomSelectDropdown-hbWLPmhW.js";import"./CustomScrollView-D6gFw0v4.js";import"./Popper-qax9FHdX.js";import"./useReferenceHiddenChangeCallback-CSiwGfQ7.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./FloatingArrow-CqnmVrPx.js";import"./usePlacementChangeCallback-DXOFFQMQ.js";import"./floating-ui.react-dom-BugnXWB1.js";import"./Spinner-BjrDa5Np.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CH1KRfzF.js";import"./Paragraph-x1XJ9xj3.js";import"./NativeSelect-BQNnBwtV.js";import"./FormField-C4XpjwD8.js";import"./useFocusWithin-Bj820Lyk.js";import"./Select.module-edfV4YsO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7aWXmKO.js";import"./cancel_16-BJb-DamK.js";import"./useStateWithPrev-Z0taGhgw.js";import"./chevron_left_outline_20-BKzfgAPG.js";import"./useEnsuredControl-CmGQ-V-a.js";import"./Button-BfB_yFLJ.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
