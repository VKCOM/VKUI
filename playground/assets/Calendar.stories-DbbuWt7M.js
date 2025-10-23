import{j as l}from"./iframe-BdXaAE5r.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CnqJh9E5.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-B4poho75.js";import{C as o}from"./Calendar-DC18j3xZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-B8hxH2dQ.js";import"./DisplayTitle-DW0jTrOA.js";import"./education_12-CWUVNJ7E.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Cptk8zp3.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DfpzQKhB.js";import"./Clickable-0nFsuW3k.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./VisuallyHidden-DcQJc2es.js";import"./Footnote-ByXPLsYQ.js";import"./CustomSelect-Cu036XGx.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-8qOBQz0J.js";import"./children-l5OU2f11.js";import"./dropdown_20-BZfVNQlJ.js";import"./chevron_up_24-uhX6-5Hj.js";import"./CustomSelectDropdown-B1W3rkKd.js";import"./CustomScrollView-CMGGh_2P.js";import"./Popper-Beqzn5p-.js";import"./useReferenceHiddenChangeCallback-CV7-HRaM.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./FloatingArrow-Bc_HvhOO.js";import"./usePlacementChangeCallback-Eb8gezm-.js";import"./floating-ui.react-dom-Db2st6hH.js";import"./Spinner-Dsao1b5l.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_1P28cN.js";import"./Paragraph-ZazE2YSK.js";import"./NativeSelect-BsrUAl_n.js";import"./FormField-EQy9__nw.js";import"./useFocusWithin-BFFjMCCU.js";import"./Select.module-N9DEoYZ7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CXgqouLn.js";import"./cancel_16-DBln7EA6.js";import"./useStateWithPrev-DFoPjIDX.js";import"./chevron_left_outline_20-C5Eclvvd.js";import"./useEnsuredControl-dQkhshwS.js";import"./Button-BXQ5RzYy.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
