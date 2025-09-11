import{j as g}from"./iframe-D9ctG7Ns.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-C_pVHuqB.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-C9djuA-t.js";import{C as s}from"./CalendarRange-hR58EDyQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-6ObnKwfL.js";import"./DisplayTitle-aqKGRV1t.js";import"./education_12-MqVmoYFk.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BsdeO7D8.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DOmAnzcN.js";import"./Clickable-4xEXwBeB.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./VisuallyHidden-XRinxkJw.js";import"./Footnote-BcHikxS0.js";import"./CustomSelect-Clhq3HIP.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-OpS3N_ep.js";import"./children-O1ZDhWOu.js";import"./dropdown_20-CPZmcS09.js";import"./chevron_up_24-Byz4oOTz.js";import"./CustomSelectDropdown-iWfSOj3j.js";import"./CustomScrollView-BgDWNMPk.js";import"./Popper-Box-Q-aN.js";import"./useReferenceHiddenChangeCallback-Cmfrj-4J.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./FloatingArrow-C_eyXCdC.js";import"./usePlacementChangeCallback-BNOpKcC7.js";import"./floating-ui.react-dom-i0bg-Iov.js";import"./Spinner-CdhXnMLF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-xHfalzw0.js";import"./Paragraph-CL2gUbo0.js";import"./NativeSelect-DQo-TeXA.js";import"./FormField-DArlX69i.js";import"./useFocusWithin-C5Vdk2dl.js";import"./Select.module-9xsMYqzH.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cu6N9yzq.js";import"./cancel_16-DYxBW21y.js";import"./useStateWithPrev-B_erCZ5v.js";import"./chevron_left_outline_20-C2tebWfr.js";import"./useEnsuredControl-C-x_bIxV.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
