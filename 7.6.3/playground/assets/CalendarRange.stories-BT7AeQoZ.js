import{j as g}from"./iframe-OJ1C6fMc.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CDTRDvVL.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-KXaF96CQ.js";import{C as s}from"./CalendarRange-abHAzRd0.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-eNcQJads.js";import"./DisplayTitle-C_LuK5Lz.js";import"./education_12-BgbzReZ4.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B1l5sXtp.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BvI9Mb-u.js";import"./Clickable-DKzQKlVj.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./VisuallyHidden-BNf-15JI.js";import"./Footnote-JF6_a0Sk.js";import"./CustomSelect-COF9668r.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-DNz6wE2Y.js";import"./children-BFlZwmuK.js";import"./dropdown_20-iZaOpOGh.js";import"./chevron_up_24-BUqUAFiY.js";import"./CustomSelectDropdown-_XCeU4DA.js";import"./CustomScrollView-DD3vDONo.js";import"./Popper-NL2v58jg.js";import"./useReferenceHiddenChangeCallback-BxabS6iI.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./FloatingArrow-B3NLPmUL.js";import"./usePlacementChangeCallback-B257mnAK.js";import"./floating-ui.react-dom-DVR29jSp.js";import"./Spinner-B_HHBggy.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-mJAXpot3.js";import"./Paragraph-BmysOZB8.js";import"./NativeSelect-DS_lymh-.js";import"./FormField-CWpBf-Vc.js";import"./useFocusWithin-a-EzjXb7.js";import"./Select.module-YYXaApUn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bt_Y57sB.js";import"./cancel_16-Ca-rlfQm.js";import"./useStateWithPrev-Bl-OLVQ9.js";import"./chevron_left_outline_20-aYVHemST.js";import"./useEnsuredControl-EZ1T13Lg.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
