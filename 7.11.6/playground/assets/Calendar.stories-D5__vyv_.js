import{j as l}from"./iframe-DxxZLxeI.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-Dk6dzhYm.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-C4d-hFtX.js";import{C as o}from"./Calendar-DlcsT4Ub.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BaO_eCgt.js";import"./DisplayTitle-WtppXOCm.js";import"./education_12-DM1fxi-Q.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CKoRdS3h.js";import"./useState-CSsh5GFH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./Tappable-C82LyDNp.js";import"./Clickable-iBjUcv74.js";import"./InputUtils-CuOtTanw.js";import"./VisuallyHidden-DujZCwJ6.js";import"./Footnote-C3-8h3B5.js";import"./CustomSelect-Ds3g0wO8.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyCEZRIL.js";import"./children-CeKSHNky.js";import"./dropdown_20-jAyRuGir.js";import"./chevron_up_24-CCkXxAU-.js";import"./CustomSelectDropdown-BvnjxXii.js";import"./CustomScrollView-BgNbYtGX.js";import"./Popper-BqSSJ4b-.js";import"./useReferenceHiddenChangeCallback-Bdeh3c_U.js";import"./AppRootPortal-BC3JV3T9.js";import"./useColorScheme-CToT-7qP.js";import"./createPortal-DlraoZsb.js";import"./ColorSchemeProvider-DtExgQxR.js";import"./ConfigProviderOverride-CeDxwPUE.js";import"./FloatingArrow-2W0GhyuX.js";import"./usePlacementChangeCallback-BQqykK7j.js";import"./floating-ui.react-dom-DLojga1i.js";import"./Spinner-BmfPEekg.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dwyu7_r7.js";import"./Paragraph-DoYA-tO3.js";import"./NativeSelect-xxKpWJ_l.js";import"./FormField-D_s9Gk1O.js";import"./useFocusWithin-CCKxCh5m.js";import"./Select.module-CgaTlf0q.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CgpvmjLz.js";import"./cancel_16-B5ZWMyK2.js";import"./useStateWithPrev-DQv0ILTY.js";import"./chevron_left_outline_20-B6Q-cCoY.js";import"./useEnsuredControl-DmtaIsBi.js";import"./Button-BpqQfiA7.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
