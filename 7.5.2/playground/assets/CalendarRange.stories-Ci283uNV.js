import{j as g}from"./iframe-D2wkiYbA.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-DF0-2VhH.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BrnuS8h5.js";import{C as s}from"./CalendarRange-DKn45Dd5.js";import"./Caption-Bow6F5xg.js";import"./DisplayTitle-BdtMyhIA.js";import"./education_12-C1P1Q7hF.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./CalendarHeader-Bnh1TsEc.js";import"./Clickable-BU3u--9M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D1Sdra8V.js";import"./InputUtils-QU0WrbnN.js";import"./VisuallyHidden-ChTSElWV.js";import"./Footnote-4HzFQCBl.js";import"./constants-BxoWbviK.js";import"./CustomSelect-B9o8TK7v.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cqparjzv.js";import"./useStateWithPrev-BpUU0Czk.js";import"./DropdownIcon-C60GCJD6.js";import"./children-Cn4G3p10.js";import"./dropdown_20-YG0nvhiD.js";import"./chevron_up_24-D654iwo3.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-B6sFy9YY.js";import"./CustomScrollView-DpTAfiv1.js";import"./Popper-CZeGsxqj.js";import"./useReferenceHiddenChangeCallback-CXW6Zd17.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./FloatingArrow-H9XdygxR.js";import"./usePlacementChangeCallback-B0_BqOZm.js";import"./floating-ui.react-dom-Cab1-L-I.js";import"./Spinner-DVe93hh_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Qi33PTeX.js";import"./Paragraph-DQR4gM98.js";import"./NativeSelect-D1bAWJvM.js";import"./FormField-BCe2hBV2.js";import"./Select.module-JzEuNKdK.js";import"./IconButton-DhTwf-xi.js";import"./cancel_16-Btdg1xUF.js";import"./chevron_left_outline_20-CFkuEpie.js";import"./useEnsuredControl-BM8G-vFy.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
