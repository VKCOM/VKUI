import{j as l}from"./iframe-F_0bvJrc.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DbHAgnML.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-D99MQ4pr.js";import{C as o}from"./Calendar-vDjjS7dm.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DLbzsWHi.js";import"./DisplayTitle-CUHPGNrK.js";import"./education_12-ChGHUbPU.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CNr3niQf.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DJ3rCQkY.js";import"./Clickable-B4aTO_qb.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./VisuallyHidden-CRrL_L2y.js";import"./Footnote-DfPFidfa.js";import"./CustomSelect-AeMOLvAM.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DKCgq7mS.js";import"./children-CfV6Kr3n.js";import"./dropdown_20-B9e7Y_E7.js";import"./chevron_up_24-Q8g1MI2x.js";import"./CustomSelectDropdown-DT35ijRC.js";import"./CustomScrollView-DEuKtSsw.js";import"./Popper-jEDCIA6z.js";import"./useReferenceHiddenChangeCallback-BgaI2Iei.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./ConfigProviderOverride-DP-FN5VZ.js";import"./FloatingArrow-BFutSiUS.js";import"./usePlacementChangeCallback-mGGiHeRj.js";import"./floating-ui.react-dom-BwXaV5NM.js";import"./Spinner-D7kEFt-1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C4XgJt4d.js";import"./Paragraph-DpqDuxuA.js";import"./NativeSelect-BnCt67fZ.js";import"./FormField-Dkyvpq47.js";import"./useFocusWithin-CDt5X1od.js";import"./Select.module-BXZZZxMR.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BHFFi_8a.js";import"./cancel_16-CJb_-qse.js";import"./useStateWithPrev-ojENS7H5.js";import"./chevron_left_outline_20-DWHaa5vd.js";import"./useEnsuredControl-BBTm3kq1.js";import"./Button-OQORbYpv.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
