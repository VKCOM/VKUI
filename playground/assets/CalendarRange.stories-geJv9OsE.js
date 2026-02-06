import{j as u}from"./iframe-ChnjXsIu.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-DMdca-B2.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-CGRDwTHt.js";import{C as o}from"./CalendarRange-vDqchdrR.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DTswF5wb.js";import"./DisplayTitle-D3hITMan.js";import"./education_12-DRRfQhqW.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Bx1RbLSq.js";import"./useState-ZDhvxYGh.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./Tappable-BDf7UE95.js";import"./Clickable-zj2UWImj.js";import"./InputUtils-D67zZ2HF.js";import"./VisuallyHidden-C0GQz0ke.js";import"./Footnote-a8vRHGoF.js";import"./CustomSelect-cyLzpzOq.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-h4uxWYEd.js";import"./children-CZfmS9px.js";import"./dropdown_20-Dky_QlsQ.js";import"./chevron_up_24-BDRpf73z.js";import"./CustomSelectDropdown-CrQtvAdb.js";import"./CustomScrollView-CXMjEdip.js";import"./Popper-Bf4yDOIo.js";import"./useReferenceHiddenChangeCallback-2W8QGwUV.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./FloatingArrow-BeHWd8nc.js";import"./usePlacementChangeCallback-Cm3J6Vod.js";import"./floating-ui.react-dom-Dvn3YOYt.js";import"./Spinner-D882qXq5.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BywXDc-o.js";import"./Paragraph-CrOm9mYb.js";import"./NativeSelect-BVh_YTTY.js";import"./FormField-BTw2bisQ.js";import"./useFocusWithin-DfM9Gs3P.js";import"./Select.module-1rG_aevb.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DcISWAYH.js";import"./cancel_16-99w3wgRx.js";import"./useStateWithPrev-BTnHBdt0.js";import"./chevron_left_outline_20-0BRPPppm.js";import"./useEnsuredControl-CI320LI0.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
