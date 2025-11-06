import{j as g}from"./iframe-B4SbMwac.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-B2HpcsEg.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-Ckv0Ztuf.js";import{C as s}from"./CalendarRange-C3pmK9GN.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-2zBCEySr.js";import"./DisplayTitle-Sy48LclA.js";import"./education_12-CEeeNYup.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-xKwNf_bJ.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DlzKIRC8.js";import"./Clickable-LHka_ZWc.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C948cbKc.js";import"./VisuallyHidden-B_fMC41X.js";import"./Footnote-PzIaqeP1.js";import"./CustomSelect-DsXv4ZdF.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CcBAmcmV.js";import"./children-hJQIY4yI.js";import"./dropdown_20-CxYmrmU3.js";import"./chevron_up_24-CaEzBp3s.js";import"./CustomSelectDropdown-b6en_-0o.js";import"./CustomScrollView-CSv3j4T0.js";import"./Popper-DFCpkDRE.js";import"./useReferenceHiddenChangeCallback-CRKvMz2H.js";import"./AppRootPortal-BWPaNlwr.js";import"./useColorScheme-D4AzIlWD.js";import"./createPortal-BRXgEjGv.js";import"./ColorSchemeProvider-B6sJTJHQ.js";import"./ConfigProviderOverride-BEOiP_JX.js";import"./FloatingArrow-D8SaHZXW.js";import"./usePlacementChangeCallback-Dnl7vUIF.js";import"./floating-ui.react-dom-B5IXheP8.js";import"./Spinner-CVJ-p2Lm.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BUZolQX5.js";import"./Paragraph-BxdY1U1n.js";import"./NativeSelect-B7q6YOy9.js";import"./FormField-DCol49_L.js";import"./useFocusWithin-to_rIq53.js";import"./Select.module-C-VXyaHP.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BrekU4vj.js";import"./cancel_16-CGmKO3B7.js";import"./useStateWithPrev-DStfvjsY.js";import"./chevron_left_outline_20-B7gtEROt.js";import"./useEnsuredControl-OhL1_krT.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
