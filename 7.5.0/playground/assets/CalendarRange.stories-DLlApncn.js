import{j as g}from"./iframe-CRvvLw_c.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DFzh_tmo.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CPRzmZ5R.js";import{C as s}from"./CalendarRange-CAgFpCuu.js";import"./Caption-Ci2Nlz7Z.js";import"./DisplayTitle-DQnPR_wV.js";import"./education_12-BE5jcrni.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./CalendarHeader-CnzH9Dvx.js";import"./Clickable-C5yyRKxt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BL_Dp9-M.js";import"./InputUtils-jCwC7LNS.js";import"./VisuallyHidden-ExmaeT5t.js";import"./Footnote-Dyjj_lEj.js";import"./constants-BxoWbviK.js";import"./CustomSelect-wu9Cf4Ey.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B4DTXq5h.js";import"./useStateWithPrev-Kk8TUOj4.js";import"./DropdownIcon-F8OJfzzV.js";import"./children-B6ZvQs6l.js";import"./dropdown_20-CsC81trI.js";import"./chevron_up_24-D4XLNPfV.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C21KCnuT.js";import"./CustomScrollView-stHHqvfl.js";import"./Popper-ChNgl10L.js";import"./useReferenceHiddenChangeCallback-WDhIB5eK.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./FloatingArrow-T5Ka_chK.js";import"./usePlacementChangeCallback-CO1Ai17Q.js";import"./floating-ui.react-dom-BDvHgZmU.js";import"./Spinner-BeKI5I2R.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CXUEWZRA.js";import"./Paragraph-DyoHshUI.js";import"./NativeSelect-iMGZhT9Y.js";import"./FormField-BuObGDLk.js";import"./Select.module-GdVREifB.js";import"./IconButton-BfjgaeOF.js";import"./cancel_16-CfE_EEJn.js";import"./chevron_left_outline_20-CfqmpdCV.js";import"./useEnsuredControl-Cn1DQzZT.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
