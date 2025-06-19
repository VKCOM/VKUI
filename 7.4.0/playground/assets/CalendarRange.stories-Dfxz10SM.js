import{j as g}from"./iframe-k6odcVfq.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-ByTXJtQt.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BfP_t4Uf.js";import{C as s}from"./CalendarRange-tb14b75Z.js";import"./Caption-CAbXIvPt.js";import"./DisplayTitle-D_QWnQ_i.js";import"./education_12-BD2Da6Za.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./CalendarHeader-CAHF_G5f.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CLnVjIR_.js";import"./InputUtils-C1ugcw4m.js";import"./VisuallyHidden-D-1P4bzL.js";import"./Footnote-DHnfr3c7.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dtl4_h2r.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Bs7KV-km.js";import"./useStateWithPrev-CT065FoZ.js";import"./DropdownIcon-DXMLLgl5.js";import"./children-CYWK7spH.js";import"./dropdown_20-DI5rRmPk.js";import"./chevron_up_24-DUviWVsC.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CcSy1sjg.js";import"./CustomScrollView-BXdQts83.js";import"./Popper-Cymo0deb.js";import"./useReferenceHiddenChangeCallback-5rOssyve.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./FloatingArrow-DaP7ccM2.js";import"./usePlacementChangeCallback-BTz75stv.js";import"./Spinner-COoI1Hcx.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-GesVWsbq.js";import"./Paragraph-DvqjBQ5B.js";import"./NativeSelect-DA9WT8fr.js";import"./FormField-fetq_Z25.js";import"./Select.module-ClxNp5L4.js";import"./IconButton-dHj7AK-z.js";import"./cancel_16-DSe4OQBX.js";import"./chevron_left_outline_20-DzkmYzqa.js";import"./useEnsuredControl-BaxW7pA0.js";const St={title:"Forms/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
