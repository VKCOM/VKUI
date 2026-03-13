import{j as u}from"./iframe-CEhhJuIi.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CBGu1Zle.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-C96CZ3Pk.js";import{C as o}from"./CalendarRange-CzcOkhXF.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DB-0jBpG.js";import"./DisplayTitle-Rm0xGoRU.js";import"./education_12-jrJvKeSH.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DsvWo35P.js";import"./useState-BlpMLPZb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./Tappable-CTSOdpDd.js";import"./Clickable-CSDkuBjh.js";import"./InputUtils-CN8Bpeve.js";import"./VisuallyHidden-BYulTkKK.js";import"./Footnote-wldoNL-p.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-3uI43kSM.js";import"./getValueByKey-BAqjffOg.js";import"./DropdownIcon-QFSiGWGc.js";import"./children-fYKiCF6j.js";import"./dropdown_20-DwBVY18R.js";import"./chevron_up_24-A_QqfnCy.js";import"./CustomSelectDropdown-mJ6-GiY6.js";import"./CustomScrollView-Bcc3tVi5.js";import"./Popper-BHJzTj_0.js";import"./useReferenceHiddenChangeCallback-DHx5mXYN.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./FloatingArrow-D9rl4d8P.js";import"./usePlacementChangeCallback-moWOJvM7.js";import"./floating-ui.react-dom-BUWNT6g6.js";import"./Spinner-C8mKPATK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BjwWmvjQ.js";import"./Paragraph-DZv5gWne.js";import"./NativeSelect-C8TgweD-.js";import"./FormField-K1skToW1.js";import"./useFocusWithin-D7grZ9Rv.js";import"./Select.module-CXMT-Xu2.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D0BsKVg5.js";import"./cancel_16-L2iU7g3d.js";import"./useBooleanState-C3dujkKO.js";import"./useStateWithPrev-4wIF-59x.js";import"./chevron_left_outline_20-004eD-mk.js";import"./useEnsuredControl-R1Fp-Kd5.js";const vt={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),i=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},s=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[s,d],onChange:i})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const xt=["Playground"];export{t as Playground,xt as __namedExportsOrder,vt as default};
