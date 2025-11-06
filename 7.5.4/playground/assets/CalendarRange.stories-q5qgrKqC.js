import{j as g}from"./iframe-DQDZnzQe.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DNezfwZi.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BaaMWcJD.js";import{C as s}from"./CalendarRange-RLKWGQSD.js";import"./Caption-BxTGQxAz.js";import"./DisplayTitle-ORqj649f.js";import"./education_12-CgmjkFP5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./CalendarHeader-Cg-Zc5Ia.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-GGjjvyZD.js";import"./Clickable-BDq-1Cyq.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./VisuallyHidden-vRsYbH_6.js";import"./Footnote-y02Efo06.js";import"./constants-BxoWbviK.js";import"./CustomSelect-SatF41sH.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-DP8QP68V.js";import"./useStateWithPrev-B98vQEeT.js";import"./DropdownIcon-DhLV2qpD.js";import"./children-JmIZewKa.js";import"./dropdown_20-wCkklzJL.js";import"./chevron_up_24-DgXLjups.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Bh6QyIlb.js";import"./CustomScrollView-1W6fExUZ.js";import"./Popper-Df6uYYRQ.js";import"./useReferenceHiddenChangeCallback-Dbj80JL7.js";import"./AppRootPortal-Bq1Lh75N.js";import"./useColorScheme-alZiR8qg.js";import"./createPortal-7OEOxVfD.js";import"./ColorSchemeProvider-KH2nDpqI.js";import"./ConfigProviderOverride-iezr64Uj.js";import"./FloatingArrow-B7uRlAoA.js";import"./usePlacementChangeCallback-CLm-XiCo.js";import"./floating-ui.react-dom-B2Zm5IGL.js";import"./Spinner-BbRcECA7.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-QnF2xjky.js";import"./Paragraph-pbN2toqi.js";import"./NativeSelect-CGdi1AI7.js";import"./FormField-CAL2xkEJ.js";import"./Select.module-C5jBo746.js";import"./IconButton-fW78sGQ1.js";import"./cancel_16-hZiKNl_V.js";import"./chevron_left_outline_20-BYQNaDdt.js";import"./useEnsuredControl-CXLvoAQT.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
