import{j as u}from"./iframe-BqdgnJE0.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-B5yKqwIH.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BXHDNaz8.js";import{C as o}from"./CalendarRange-B7qU4r8O.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DQ3GIvfa.js";import"./DisplayTitle-CPCr3719.js";import"./education_12-kWQMLfLC.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CU_lwp4p.js";import"./useState-CWGeE8jE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./Tappable-C0ES09y8.js";import"./Clickable-_lommW0d.js";import"./InputUtils-ESzsNRN2.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./Footnote-Bj-28HDg.js";import"./CustomSelect-BVhw21dJ.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BFWrXu6f.js";import"./children-rmDURaUl.js";import"./dropdown_20-Blxc57wu.js";import"./chevron_up_24-BtsVjg8Z.js";import"./CustomSelectDropdown-DmVF0BRV.js";import"./CustomScrollView-CwRuv418.js";import"./Popper-DmnzI0Bc.js";import"./useReferenceHiddenChangeCallback-CIJGa2Ph.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./FloatingArrow-Bdu_em3L.js";import"./usePlacementChangeCallback-DKDruSlP.js";import"./floating-ui.react-dom-Jxcy3D_W.js";import"./Spinner-CHRizUnE.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_pXol92.js";import"./Paragraph-CWuOgUOG.js";import"./NativeSelect-D3oNe4Xd.js";import"./FormField-Cg65d97h.js";import"./useFocusWithin-7VHk4Gs5.js";import"./Select.module-xTktcizs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7jcJUXx.js";import"./cancel_16-GeHSc2Gr.js";import"./useStateWithPrev-Cbm2nfMX.js";import"./chevron_left_outline_20-C8nGg7bJ.js";import"./useEnsuredControl-BBQaujFI.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
