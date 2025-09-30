import{j as g}from"./iframe-qoTtUH8h.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-mpCzFxqG.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BFwe8KrN.js";import{C as s}from"./CalendarRange-C4DteNON.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-bIdYMpTC.js";import"./DisplayTitle-BzxXawYY.js";import"./education_12-DIV4kCOg.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-D-BsnVfN.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-D-SlRlKJ.js";import"./Clickable-0SfVv815.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DCqC4s6H.js";import"./VisuallyHidden-BqFtMTWb.js";import"./Footnote-DrM4b0WC.js";import"./CustomSelect-tZHNRolR.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BlGZKa5x.js";import"./children-Tz7yKUE7.js";import"./dropdown_20-BYySsUa9.js";import"./chevron_up_24-BRlURm07.js";import"./CustomSelectDropdown-B-kYY2ii.js";import"./CustomScrollView-OgnoSfIa.js";import"./Popper-CDwlWBLk.js";import"./useReferenceHiddenChangeCallback-CoBcnP-Y.js";import"./AppRootPortal-xRZPOq86.js";import"./useColorScheme-xLZC0aKi.js";import"./createPortal-yS_K3Zg-.js";import"./ColorSchemeProvider-DCb80HKd.js";import"./ConfigProviderOverride-CdXDfhg5.js";import"./FloatingArrow-BSMg02bE.js";import"./usePlacementChangeCallback-DXVqMB8T.js";import"./floating-ui.react-dom-XNsbD0-z.js";import"./Spinner-C8UkQVmM.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DXIpJ_9s.js";import"./Paragraph-Dx2jmIL9.js";import"./NativeSelect-BBoH35hP.js";import"./FormField-DCCIiDnM.js";import"./useFocusWithin-E39X-WYV.js";import"./Select.module-v5g6Rgek.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B17wjzUA.js";import"./cancel_16-wfglQx50.js";import"./useStateWithPrev-q-5o1mLG.js";import"./chevron_left_outline_20-ujKCL-Pw.js";import"./useEnsuredControl-Dz1TjRJ3.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
