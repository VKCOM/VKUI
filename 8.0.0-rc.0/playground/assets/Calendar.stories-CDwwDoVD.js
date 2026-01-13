import{j as l}from"./iframe-DP0c1f9Y.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-Bh4Yur0V.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-CdkvlwkJ.js";import{C as o}from"./Calendar-DDXRyZYB.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Bf2pK2j4.js";import"./DisplayTitle-BKknlxs8.js";import"./education_12-DUJ-r_X1.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./CalendarHeader-B3Lk4PWw.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./Tappable-B2ZLiGfg.js";import"./Clickable-D6186WJE.js";import"./InputUtils-DpvhaK12.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Footnote-DJoQQEv9.js";import"./CustomSelect-DxFm8Dup.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-Cj-cillC.js";import"./children-Bag1sNQQ.js";import"./dropdown_20-BQnMRUMx.js";import"./chevron_up_24-BwG-n7bB.js";import"./CustomSelectDropdown-CHa8KMS6.js";import"./CustomScrollView-CCCcf5Bk.js";import"./Popper-BFtfb9wE.js";import"./useReferenceHiddenChangeCallback-btJOraww.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./FloatingArrow-CAd55EkA.js";import"./usePlacementChangeCallback-DsJnrfKn.js";import"./floating-ui.react-dom-C28MpNR-.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BWyM2ouI.js";import"./Paragraph-o90iONah.js";import"./NativeSelect-Matn3s-N.js";import"./FormField-CPyOAnhV.js";import"./useFocusWithin-CvS6Su5o.js";import"./Select.module-NB4erb4C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DX6zaS9g.js";import"./cancel_16-CKShxaQm.js";import"./useBooleanState-CFH-Qq-E.js";import"./useStateWithPrev-CZTRyD_R.js";import"./chevron_left_outline_20-CUvTDHV1.js";import"./useEnsuredControl-BQTVtCet.js";import"./Button-DYe3R3CT.js";const Ae={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Pe=["Playground"];export{e as Playground,Pe as __namedExportsOrder,Ae as default};
