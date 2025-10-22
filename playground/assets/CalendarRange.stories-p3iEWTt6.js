import{j as u}from"./iframe-DvQ0hW0I.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-ac26kDMv.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-DHDTtt1t.js";import{C as o}from"./CalendarRange-DF_3yZdP.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-hh3k8-HK.js";import"./DisplayTitle-CFmZH4aI.js";import"./education_12-DZHRxfo-.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DDsND2oN.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CzBKs2NQ.js";import"./Clickable-CBovrC6X.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./VisuallyHidden-CGlAvVNH.js";import"./Footnote-DYSqrBFj.js";import"./CustomSelect-BSp1nyxX.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CFJxO54x.js";import"./children-BdLlg6DR.js";import"./dropdown_20-CQqEaMvC.js";import"./chevron_up_24-D5XC5yKX.js";import"./CustomSelectDropdown-DkMEia6f.js";import"./CustomScrollView-DE6eWhG6.js";import"./Popper-uYwlu0xB.js";import"./useReferenceHiddenChangeCallback-DyVC-Pyk.js";import"./AppRootPortal-CoRG5RWu.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./FloatingArrow-nqFcSJUy.js";import"./usePlacementChangeCallback-CCMY9emW.js";import"./floating-ui.react-dom-ST0J1v4u.js";import"./Spinner-CAlwHhMu.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ddz7Vfse.js";import"./Paragraph-R3cad3zP.js";import"./NativeSelect-hb-NqpRf.js";import"./FormField-C5R4IHoT.js";import"./useFocusWithin-C0XX_iqt.js";import"./Select.module-Bm8talgv.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Dmx4oOAb.js";import"./cancel_16-BarEFL_7.js";import"./useStateWithPrev-DauWq6Az.js";import"./chevron_left_outline_20-BP5SLsjC.js";import"./useEnsuredControl-CswA9P61.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const wt=["Playground"];export{t as Playground,wt as __namedExportsOrder,St as default};
