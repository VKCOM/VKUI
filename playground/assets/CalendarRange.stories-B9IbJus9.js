import{j as g}from"./iframe-CNYWi-tv.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DCyEhurJ.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-DGsskUb2.js";import{C as s}from"./CalendarRange-CIsMNAzb.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-VNaRRNHV.js";import"./DisplayTitle-cax5A9Gh.js";import"./education_12-N5r7i3rq.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-UWx_imzm.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-Bt2S1yMc.js";import"./Clickable-PPkKMUDS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./VisuallyHidden-CIbqknZb.js";import"./Footnote-BYeJ88ZB.js";import"./CustomSelect-CA3LhGpT.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CK-q77tq.js";import"./children-D9VTJ2FF.js";import"./dropdown_20-xOXOAUZ-.js";import"./chevron_up_24-B5mApQ7w.js";import"./CustomSelectDropdown-DfgUhNMb.js";import"./CustomScrollView-BsfvooqJ.js";import"./Popper-D5E7M93E.js";import"./useReferenceHiddenChangeCallback-DrJqA32s.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./FloatingArrow-D53bG7gO.js";import"./usePlacementChangeCallback-Cojz57y6.js";import"./floating-ui.react-dom-B41PFPvr.js";import"./Spinner-CLko12L1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C8yk_WE_.js";import"./Paragraph-BlAo2fn7.js";import"./NativeSelect-B1QstsTz.js";import"./FormField-Ddj740Jf.js";import"./useFocusWithin-DPWwC_DA.js";import"./Select.module-CMu9xKIa.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-1hwVmaZf.js";import"./cancel_16-BaRnUpV1.js";import"./useStateWithPrev-CQgWZ7iu.js";import"./chevron_left_outline_20-LPpqaviN.js";import"./useEnsuredControl-BpSX3TsH.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
