import{j as u}from"./iframe-DP0c1f9Y.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-Bh4Yur0V.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-CdkvlwkJ.js";import{C as o}from"./CalendarRange-Dpp-smvP.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Bf2pK2j4.js";import"./DisplayTitle-BKknlxs8.js";import"./education_12-DUJ-r_X1.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./CalendarHeader-B3Lk4PWw.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./Tappable-B2ZLiGfg.js";import"./Clickable-D6186WJE.js";import"./InputUtils-DpvhaK12.js";import"./VisuallyHidden-CsBByQHJ.js";import"./Footnote-DJoQQEv9.js";import"./CustomSelect-DxFm8Dup.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-Cj-cillC.js";import"./children-Bag1sNQQ.js";import"./dropdown_20-BQnMRUMx.js";import"./chevron_up_24-BwG-n7bB.js";import"./CustomSelectDropdown-CHa8KMS6.js";import"./CustomScrollView-CCCcf5Bk.js";import"./Popper-BFtfb9wE.js";import"./useReferenceHiddenChangeCallback-btJOraww.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./FloatingArrow-CAd55EkA.js";import"./usePlacementChangeCallback-DsJnrfKn.js";import"./floating-ui.react-dom-C28MpNR-.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BWyM2ouI.js";import"./Paragraph-o90iONah.js";import"./NativeSelect-Matn3s-N.js";import"./FormField-CPyOAnhV.js";import"./useFocusWithin-CvS6Su5o.js";import"./Select.module-NB4erb4C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DX6zaS9g.js";import"./cancel_16-CKShxaQm.js";import"./useBooleanState-CFH-Qq-E.js";import"./useStateWithPrev-CZTRyD_R.js";import"./chevron_left_outline_20-CUvTDHV1.js";import"./useEnsuredControl-BQTVtCet.js";const wt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    value,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <CalendarRange {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...t.parameters?.docs?.source}}};const vt=["Playground"];export{t as Playground,vt as __namedExportsOrder,wt as default};
