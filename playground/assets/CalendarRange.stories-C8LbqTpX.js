import{j as g}from"./iframe-BdL7Qu3-.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-8jki7RDr.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BySvhDp3.js";import{C as s}from"./CalendarRange--OWEDFUn.js";import"./Caption-A9YdzU-r.js";import"./DisplayTitle-CaU2fLV3.js";import"./education_12-D30j3lP7.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./CalendarHeader-AXUqPuQn.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DH_64QBQ.js";import"./Clickable-zgtvQHiz.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./VisuallyHidden-DMev6gKF.js";import"./Footnote-Cejbc8FV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CaCyrUjh.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C1xt8Yic.js";import"./useStateWithPrev-BwklpJtc.js";import"./DropdownIcon-B51siMI_.js";import"./children-D33S37xY.js";import"./dropdown_20-CcrT0WK8.js";import"./chevron_up_24-BeYCSzSD.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Bv3SFUia.js";import"./CustomScrollView-W74DUE-r.js";import"./Popper-DSd7JoP9.js";import"./useReferenceHiddenChangeCallback-BDB-jZS9.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./FloatingArrow-C9usf79d.js";import"./usePlacementChangeCallback-TMZyVZQg.js";import"./floating-ui.react-dom-B1ZkUPW4.js";import"./Spinner-CchhrSOA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-zpwz0PEe.js";import"./Paragraph-jPlkG9S_.js";import"./NativeSelect-AXmXophw.js";import"./FormField-CqnEFqGM.js";import"./Select.module-Dz57dYm_.js";import"./IconButton-oiQnZbSh.js";import"./cancel_16-CENPgfP-.js";import"./chevron_left_outline_20-B13X4oR-.js";import"./useEnsuredControl-B3YM8IG7.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
