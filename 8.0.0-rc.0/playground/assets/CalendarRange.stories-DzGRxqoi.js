import{j as u}from"./iframe-CJSxyW9U.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-COZ1Ya8b.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BvO-n0Wf.js";import{C as o}from"./CalendarRange-DcyIBc-V.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DJRq5DSE.js";import"./DisplayTitle-BZ7iiVHN.js";import"./education_12-CD2Y4iGz.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Dt0WtSan.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./Tappable-B_lgqKnQ.js";import"./Clickable-C7Hv1Vzv.js";import"./InputUtils-CQXgm4mM.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Footnote-PeEhUyBm.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CcafMIlj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-AJYC2Ld6.js";import"./children-B_vv-93P.js";import"./dropdown_20-a3g49EXu.js";import"./chevron_up_24-IL4Ee17g.js";import"./CustomSelectDropdown-B80ubdsN.js";import"./CustomScrollView-CoMoGALI.js";import"./Popper-CILUD6SC.js";import"./useReferenceHiddenChangeCallback-D1-xpaTE.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./FloatingArrow-D3RfVyEp.js";import"./usePlacementChangeCallback-CcbRo2C7.js";import"./floating-ui.react-dom-DgoDJi3n.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DazM5ro7.js";import"./Paragraph-Drw97mgp.js";import"./NativeSelect-CCc1W4C8.js";import"./FormField-C1QoIvTb.js";import"./useFocusWithin-B6ZQto83.js";import"./Select.module-C8eYQrh0.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlIx3m79.js";import"./cancel_16-oWyxmFnc.js";import"./useBooleanState-CkcwTMgJ.js";import"./useStateWithPrev-DFqPg5SA.js";import"./chevron_left_outline_20-Nu9zVYtc.js";import"./useEnsuredControl-DVOSKHBB.js";const xt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
