import{j as g}from"./iframe-VQuwIBim.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-BgvZcPy7.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-D_qqyPzY.js";import{C as s}from"./CalendarRange-BH7lD8fN.js";import"./Caption-C4GZRvva.js";import"./DisplayTitle-K84wRPg1.js";import"./education_12-BF0slcJa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./CalendarHeader-ChL49vgU.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DJKRXU4j.js";import"./Clickable-GKvDpg7c.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./VisuallyHidden-Bn9barOE.js";import"./Footnote-CFr_RCRn.js";import"./constants-BxoWbviK.js";import"./CustomSelect-D0zvvk11.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C9W7nehx.js";import"./useStateWithPrev-CGNjumc_.js";import"./DropdownIcon-Bo4sb50J.js";import"./children-DbSAwzjm.js";import"./dropdown_20-CYoiQxdD.js";import"./chevron_up_24-CTDjlFV8.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-DHTmemVx.js";import"./CustomScrollView-B8oa2wyV.js";import"./Popper-lAUSxP2k.js";import"./useReferenceHiddenChangeCallback-Bmr5y_bS.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./FloatingArrow-BBql9SkG.js";import"./usePlacementChangeCallback-DmGIfBmK.js";import"./floating-ui.react-dom-Pmp8ft10.js";import"./Spinner-D45v6N1-.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-u7kAah.js";import"./Paragraph-DFDWF4fB.js";import"./NativeSelect-BNriZWAB.js";import"./FormField-swNNfxlr.js";import"./Select.module-BdMGGYVX.js";import"./IconButton-CsO6Fs2D.js";import"./cancel_16-CS8Axx3h.js";import"./chevron_left_outline_20-DULcAu75.js";import"./useEnsuredControl-DHCjfbrM.js";const vt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
