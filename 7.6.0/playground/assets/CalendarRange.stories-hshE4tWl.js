import{j as g}from"./iframe-DveaDHpJ.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-BsHsoKNh.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-BiPPspw1.js";import{C as s}from"./CalendarRange-BagilNiW.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-xmt4HAL3.js";import"./DisplayTitle-DmkQiNbN.js";import"./education_12-D8D-_2tN.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-fni5sLyz.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-B6M0Cj2d.js";import"./Clickable-Qd8MhpMK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./VisuallyHidden-C4fiFLiw.js";import"./Footnote-DMEVDgek.js";import"./CustomSelect-DC0kkY8R.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-hzasv1hP.js";import"./children-DIqfUSJp.js";import"./dropdown_20-CZznK5HK.js";import"./chevron_up_24-BwZFvUz5.js";import"./CustomSelectDropdown-BSYt37e0.js";import"./CustomScrollView-DQok_qII.js";import"./Popper-CYuDwYhz.js";import"./useReferenceHiddenChangeCallback-DT-Tatoc.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./FloatingArrow-BTubR1vc.js";import"./usePlacementChangeCallback-Bz3H7LaO.js";import"./floating-ui.react-dom-CCMwIqsk.js";import"./Spinner-kmrkwAxt.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bl2D0DTY.js";import"./Paragraph-DEGhVC7y.js";import"./NativeSelect-Drg0Y4LA.js";import"./FormField-DIy1SM_b.js";import"./useFocusWithin-C-V6I_uV.js";import"./Select.module-BtVdibmC.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B6-RVMvP.js";import"./cancel_16-BVJbY8rW.js";import"./useStateWithPrev-BQHmZAAg.js";import"./chevron_left_outline_20-AC1IUGj4.js";import"./useEnsuredControl-pDZ_aYUB.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
