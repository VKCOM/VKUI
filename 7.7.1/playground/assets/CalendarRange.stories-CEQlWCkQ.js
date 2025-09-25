import{j as g}from"./iframe-Bz8JpgqB.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-FWRN9EB0.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BA1ZeKcb.js";import{C as s}from"./CalendarRange-DFh8NLb3.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-DWsz_D6l.js";import"./DisplayTitle-2dIpuIjR.js";import"./education_12-w4nYI_AS.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader--_GfvT_b.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DGSycWIS.js";import"./Clickable-C8sAptP9.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C36z3TAr.js";import"./VisuallyHidden-Civmtkn4.js";import"./Footnote-CXG5ZQyY.js";import"./CustomSelect-CatNDs7b.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DkWA8P4F.js";import"./children-CZEp9rCJ.js";import"./dropdown_20-B3NX-bVZ.js";import"./chevron_up_24-u7VxH0aB.js";import"./CustomSelectDropdown-CAfJ7FFb.js";import"./CustomScrollView-1nNv19Yp.js";import"./Popper-q3sZLUoJ.js";import"./useReferenceHiddenChangeCallback-Bry62V7f.js";import"./AppRootPortal-BfEQGkF-.js";import"./useColorScheme-DVyOIIkN.js";import"./createPortal-5lj2qVdy.js";import"./ColorSchemeProvider-CDk5uzXv.js";import"./ConfigProviderOverride-iG9hzCRC.js";import"./FloatingArrow-BEP7PKoE.js";import"./usePlacementChangeCallback-Dm4G90RH.js";import"./floating-ui.react-dom-BSyzrD7n.js";import"./Spinner-BdNNxg7b.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DCits1Ao.js";import"./Paragraph-COWk_h1U.js";import"./NativeSelect-DPIFN2xa.js";import"./FormField-DdIob4n7.js";import"./useFocusWithin-DoazkeVF.js";import"./Select.module-BOEKrPxI.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-SCSZUFVl.js";import"./cancel_16-XWUplmpx.js";import"./useStateWithPrev-BJAqxh9n.js";import"./chevron_left_outline_20-Dck12Yqu.js";import"./useEnsuredControl-CQ9aTHQJ.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
