import{j as u}from"./iframe-qlSEKL6e.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-Dq11gQHG.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-C9cYcXmA.js";import{C as o}from"./CalendarRange-WCtCL2J7.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-H79pUCEU.js";import"./DisplayTitle-ByqI9Yly.js";import"./education_12-DWIFAuMv.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BVjuCgtH.js";import"./useState-C_16qP2U.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./Tappable-BHeAowlI.js";import"./Clickable-D1c0nrMo.js";import"./InputUtils-vU1H8cid.js";import"./VisuallyHidden-Bk8azc-l.js";import"./Footnote-BzLLEJCe.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-C6j6AAsH.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BlVG0U2E.js";import"./children-DNQ1k21b.js";import"./dropdown_20-DI1xGklU.js";import"./chevron_up_24-DmhrGLWt.js";import"./CustomSelectDropdown-z5LiGY_J.js";import"./CustomScrollView-Cz-uOj3n.js";import"./Popper-BX-2zFTd.js";import"./useReferenceHiddenChangeCallback-D_B1XjcH.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./FloatingArrow-CtoadKdS.js";import"./usePlacementChangeCallback-7H5OKj5I.js";import"./floating-ui.react-dom-BIRJ4FTj.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUbLsO6I.js";import"./Paragraph-BUgvhuHQ.js";import"./NativeSelect-slK_uqde.js";import"./FormField-Co4GQc8h.js";import"./useFocusWithin-BRbaVvSY.js";import"./Select.module-DIJ-cnuD.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BRmjKqzD.js";import"./cancel_16-CadNQiL8.js";import"./useBooleanState-C-4zMXro.js";import"./useStateWithPrev-C8Jp_q4M.js";import"./chevron_left_outline_20-CubSQ-Yb.js";import"./useEnsuredControl-CgB4abgn.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
