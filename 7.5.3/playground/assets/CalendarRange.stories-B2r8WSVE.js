import{j as g}from"./iframe-CGpIZMk8.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-D1nBRM07.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BC0VidQN.js";import{C as s}from"./CalendarRange-BQgNwbev.js";import"./Caption-J3zu-s3t.js";import"./DisplayTitle-DXQ8mBuj.js";import"./education_12-nMsc_Xo2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./CalendarHeader-B5x0BzEY.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BEdABn7b.js";import"./Clickable-D9pe1RI2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Footnote-DPd01TxJ.js";import"./constants-BxoWbviK.js";import"./CustomSelect-KZxcJIHj.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-mFqouh7d.js";import"./useStateWithPrev-a925luGf.js";import"./DropdownIcon-DNcwAH27.js";import"./children-BbEaAOxK.js";import"./dropdown_20-4F0jDwGt.js";import"./chevron_up_24-PpiZF3r-.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CgsPrLdC.js";import"./CustomScrollView-DHhB_4V_.js";import"./Popper-BSmeb810.js";import"./useReferenceHiddenChangeCallback-gx510wwF.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./FloatingArrow-DEW5lBO-.js";import"./usePlacementChangeCallback-BTN2Li97.js";import"./floating-ui.react-dom-DVNPl4I1.js";import"./Spinner-DVykHsGf.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1uWEnGu.js";import"./Paragraph-R2LFXqIt.js";import"./NativeSelect-BOMtQRno.js";import"./FormField-D5UDoMvG.js";import"./Select.module-KXh4qUn0.js";import"./IconButton-R-pBWVQH.js";import"./cancel_16-DSH-4CGb.js";import"./chevron_left_outline_20-anyUvaXU.js";import"./useEnsuredControl-DJeRq7Bz.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
