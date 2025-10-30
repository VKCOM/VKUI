import{j as l}from"./iframe-CjlHPZNU.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CacEC_UG.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-CX5JP4WW.js";import{C as o}from"./Calendar-DsWBhFnM.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BGNxLEI7.js";import"./DisplayTitle-DGpgc0Ci.js";import"./education_12-EN5C4g7F.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BjQc82Sw.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-B5zgJODm.js";import"./Clickable-CtpofEGa.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./VisuallyHidden-BhHQTREx.js";import"./Footnote-OilvUFbZ.js";import"./CustomSelect-DBxHX6fS.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CYnCbTns.js";import"./children-DXLPnz61.js";import"./dropdown_20-wvnefOap.js";import"./chevron_up_24-Dmgv5k62.js";import"./CustomSelectDropdown-B3w7Q0Ob.js";import"./CustomScrollView-CjlOR93R.js";import"./Popper-BxTlfMRp.js";import"./useReferenceHiddenChangeCallback-BYBOPzRw.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./FloatingArrow-CXk5BXWM.js";import"./usePlacementChangeCallback-BUGqU92G.js";import"./floating-ui.react-dom-BOvPne9Z.js";import"./Spinner-BqL1JLHM.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-3fHYt2O8.js";import"./Paragraph-xO9VNyZg.js";import"./NativeSelect-CjxDByOa.js";import"./FormField-DDneCC7H.js";import"./useFocusWithin-CtqEkwtt.js";import"./Select.module-Dq_Q3yEj.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DL_Qecp_.js";import"./cancel_16-H58NJ25u.js";import"./useStateWithPrev-ZsPCJv_t.js";import"./chevron_left_outline_20-lPTczRg2.js";import"./useEnsuredControl-B_VfQasx.js";import"./Button-eWkGETfu.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
