import{j as l}from"./iframe-DC59t_7s.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-B06ZdeeT.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BLpUr6nY.js";import{C as o}from"./Calendar-BMUsAbTl.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-k9jgJVgg.js";import"./DisplayTitle-33UX4eDH.js";import"./education_12-LFb5f-3w.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B2E7R0X5.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CRrpYa-n.js";import"./Clickable-k0omQ8uW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./VisuallyHidden-dUOLTySp.js";import"./Footnote-B_mvNSI1.js";import"./CustomSelect-C_yfWVZk.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C-WBznle.js";import"./children-DYOU-AGd.js";import"./dropdown_20-DyhMSWKb.js";import"./chevron_up_24-DXo7w0t3.js";import"./CustomSelectDropdown-BO85D6H2.js";import"./CustomScrollView-DqxqicWb.js";import"./Popper-BDurMwAV.js";import"./useReferenceHiddenChangeCallback-Cv-J72mi.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./FloatingArrow-uPZYtw2a.js";import"./usePlacementChangeCallback-DjeyUYH1.js";import"./floating-ui.react-dom-gjdRo9Jf.js";import"./Spinner-BHxVDILF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-rh0HPT1I.js";import"./Paragraph-CNGX9Ncs.js";import"./NativeSelect-9bMx5srV.js";import"./FormField-DYhXjH9r.js";import"./useFocusWithin-9CYA-Xql.js";import"./Select.module-Dr6pz-LO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlcUkq3s.js";import"./cancel_16-DOyKhfQK.js";import"./useStateWithPrev-DFxMBC4E.js";import"./chevron_left_outline_20-BIdPFGBs.js";import"./useEnsuredControl-B87PR-rL.js";import"./Button-TPmMtPai.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
