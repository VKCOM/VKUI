import{j as g}from"./iframe-DDos8QSD.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-C7Hm60qg.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BoI2k3Ve.js";import{C as s}from"./CalendarRange-DcDOkLv1.js";import"./Caption-C8aMWNCU.js";import"./DisplayTitle-CXwNFjPh.js";import"./education_12-B_CmKAIr.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./CalendarHeader-1U13NKYV.js";import"./Clickable-CWxsm2KA.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-B0kWxOOO.js";import"./InputUtils-Dyyzogrc.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./Footnote-DolN14Rp.js";import"./constants-BxoWbviK.js";import"./CustomSelect-NikWzeBX.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cy7ZAR8z.js";import"./useStateWithPrev-Cr0tutSw.js";import"./DropdownIcon-CqqFb8dt.js";import"./children-DM03Xori.js";import"./dropdown_20-Buu8AsnJ.js";import"./chevron_up_24-RY23OIHq.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Da6ydPXD.js";import"./CustomScrollView-CiAPPumg.js";import"./Popper-BfobY8S-.js";import"./useReferenceHiddenChangeCallback-BNMZQcE1.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./FloatingArrow-AYA0w7FM.js";import"./usePlacementChangeCallback-iLcROg5y.js";import"./Spinner-DXID7UE1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B3-0gwcs.js";import"./Paragraph-BV-p2vqx.js";import"./NativeSelect-Ei503CvN.js";import"./FormField-nH1PGum8.js";import"./Select.module-C2pqCS_H.js";import"./IconButton-C3mRDxD7.js";import"./cancel_16-Dv9sHB8j.js";import"./chevron_left_outline_20-C-_aw8Re.js";import"./useEnsuredControl-DPf8E04f.js";const St={title:"Forms/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
