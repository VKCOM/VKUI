import{j as l}from"./iframe-CDzsgUJ6.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-rBusiI9_.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-Bq6IdoTI.js";import{C as o}from"./Calendar-zD9_ZRdC.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Boi85h93.js";import"./DisplayTitle-B5DQPmOh.js";import"./education_12-CY5sUM85.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BlQ0OfUz.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./Tappable-BF8rCM_k.js";import"./Clickable-Dfoj99Ww.js";import"./InputUtils-DkBsdccT.js";import"./VisuallyHidden-hrbUbT1W.js";import"./Footnote-EhoXcm5o.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-B5gSAL-X.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DDTBL4u2.js";import"./children-__GeZXUq.js";import"./dropdown_20-m9cospeT.js";import"./chevron_up_24-DjQaueWG.js";import"./CustomSelectDropdown-DUsHfkV7.js";import"./CustomScrollView-CzqE7nP0.js";import"./Popper-DWLVFobm.js";import"./useReferenceHiddenChangeCallback-CY63qTPH.js";import"./AppRootPortal-CCVAQZe-.js";import"./useColorScheme-BJ9q12Ap.js";import"./createPortal-CVhd8q9v.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DTaIndt4.js";import"./ConfigProviderOverride-CcLe0DKj.js";import"./FloatingArrow-DUrMOVGb.js";import"./usePlacementChangeCallback-Bsdm3Pu3.js";import"./floating-ui.react-dom-B9MYDRsG.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-D6Csl20o.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-yYAiYeUv.js";import"./Paragraph-le0T_6Gv.js";import"./NativeSelect-B4rCAioC.js";import"./FormField-BNZ78smL.js";import"./useFocusWithin-UKmiu0Co.js";import"./Select.module-DLQY8KpU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DmVT1v_5.js";import"./cancel_16-BlaGgBnb.js";import"./useBooleanState-CnmcT8ct.js";import"./useStateWithPrev-C_uAPEx8.js";import"./chevron_left_outline_20-Bp5lQnXu.js";import"./useEnsuredControl-DK0f39Al.js";import"./Button-DrWhGNV0.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
