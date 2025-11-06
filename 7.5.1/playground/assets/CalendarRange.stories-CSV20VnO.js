import{j as g}from"./iframe-DZFG_ML5.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CQFlB4Xt.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-_3h8Vk1o.js";import{C as s}from"./CalendarRange-f9fCRXQN.js";import"./Caption-B5AzA_Bj.js";import"./DisplayTitle-BcunrtfL.js";import"./education_12-CtvTeG8R.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./CalendarHeader-CtnFo7Q1.js";import"./Clickable-O0RRum4C.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DivmMzZn.js";import"./InputUtils-rnqmQ_3Q.js";import"./VisuallyHidden-DUSQwRyI.js";import"./Footnote-CYznJAmV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-f-sQBR7H.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-DEb1HL1x.js";import"./useStateWithPrev-izR8_aLG.js";import"./DropdownIcon-BR-zIiPk.js";import"./children-CbwhlWKb.js";import"./dropdown_20-6LWUZZVi.js";import"./chevron_up_24-DlEFZpUc.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C2dDroKo.js";import"./CustomScrollView-C4YzHNOP.js";import"./Popper-4fH1RKvH.js";import"./useReferenceHiddenChangeCallback-0wn49evO.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./FloatingArrow-C_-fnQXD.js";import"./usePlacementChangeCallback-BMP1j3H_.js";import"./floating-ui.react-dom-BHf189t_.js";import"./Spinner-Ds0i1YsX.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BcPfikFc.js";import"./Paragraph-B9EciRKy.js";import"./NativeSelect-DOQRs45B.js";import"./FormField-DdRRhoa6.js";import"./Select.module-DYhte166.js";import"./IconButton-C3HahQsG.js";import"./cancel_16-a7lfvdOs.js";import"./chevron_left_outline_20-D4rkUcSq.js";import"./useEnsuredControl-DRpPGXB0.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const vt=["Playground"];export{t as Playground,vt as __namedExportsOrder,wt as default};
