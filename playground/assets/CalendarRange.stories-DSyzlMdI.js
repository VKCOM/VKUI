import{j as g}from"./iframe-C2_PECK0.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-B1FNr0wG.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BkdoSo1V.js";import{C as s}from"./CalendarRange-DaDVuHpG.js";import"./Caption-D3QJC-zO.js";import"./DisplayTitle-NyTx5WJH.js";import"./education_12-B64bjlKb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./CalendarHeader-DmQ_9zqS.js";import"./Clickable-Ctz6ZMd9.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DLQDSygG.js";import"./InputUtils-BDpjj3t6.js";import"./VisuallyHidden-DSMrBIlo.js";import"./Footnote-B_H7tDpo.js";import"./constants-BxoWbviK.js";import"./CustomSelect-65EsxXG8.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-gjFI-5hQ.js";import"./useStateWithPrev-C5Aciol_.js";import"./DropdownIcon-DkMbwP0c.js";import"./children-n2srhEVv.js";import"./dropdown_20-DvIblsX2.js";import"./chevron_up_24-CMti3RIs.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-qCaM2tPX.js";import"./CustomScrollView-gvcW3YKp.js";import"./Popper-Bo2p_PrY.js";import"./useReferenceHiddenChangeCallback-2ArwOqZN.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./FloatingArrow-_eZKd9-i.js";import"./usePlacementChangeCallback-DeYYV3Z9.js";import"./Spinner-DOBIwFGK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DU8pVnZO.js";import"./Paragraph-BJiuCRl2.js";import"./NativeSelect-DEaHtyU_.js";import"./FormField-BvW49P_p.js";import"./Select.module-40dUcPLV.js";import"./IconButton-ht7j3HPv.js";import"./cancel_16-CB2v-scR.js";import"./chevron_left_outline_20-By9_OjBN.js";import"./useEnsuredControl-D3OYDbAS.js";const St={title:"Forms/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
