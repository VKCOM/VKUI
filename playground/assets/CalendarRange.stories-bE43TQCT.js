import{j as u}from"./iframe-DcUCz3Gq.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CAZu0VcV.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-1Ie8CGF3.js";import{C as o}from"./CalendarRange-BisW7W5N.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CDwF9hKw.js";import"./DisplayTitle-M_h6_zgi.js";import"./education_12-D5c1vYkF.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B7AEShB4.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CGnYgxpx.js";import"./Clickable-8ToLJd_t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Footnote-lAEBSvha.js";import"./CustomSelect-DXJqjN00.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C_vBKBvW.js";import"./children-DDwVHqk6.js";import"./dropdown_20-D4qt7qi0.js";import"./chevron_up_24-DJH5Bv_Z.js";import"./CustomSelectDropdown-B26n3wMN.js";import"./CustomScrollView-CYwznZ8r.js";import"./Popper-C4EFCWA9.js";import"./useReferenceHiddenChangeCallback-CSFFsN8n.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./FloatingArrow-AZDnUaK5.js";import"./usePlacementChangeCallback-qGx5x2BN.js";import"./floating-ui.react-dom-BD4t0KnS.js";import"./Spinner-DB1TcyOv.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BrSjq8Dp.js";import"./Paragraph-DEZu3Vgm.js";import"./NativeSelect-fWz39x5d.js";import"./FormField-BE6qQZ7q.js";import"./useFocusWithin-4tbXXtmK.js";import"./Select.module-cqXk88D3.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CGiS95Aa.js";import"./cancel_16-Dmbi-9wn.js";import"./useStateWithPrev-ULdk1ffR.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./useEnsuredControl-B2KTcbi_.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
