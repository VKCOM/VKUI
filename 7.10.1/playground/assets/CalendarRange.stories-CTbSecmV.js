import{j as u}from"./iframe-DhuutAfC.js";import{D,C as c}from"./constants-DdkjnEgz.js";import{c as g}from"./createCalendarDayRenderField-CcD_UWpD.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-BsJgeJGG.js";import{C as o}from"./CalendarRange-BCG4ORw1.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BhiEFCof.js";import"./DisplayTitle-C8fkacFN.js";import"./education_12-CIGyvuy6.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B53A4_UI.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./Tappable-tvWVp5xX.js";import"./Clickable-CuiuPnoa.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Footnote-BE0sRU6f.js";import"./CustomSelect-B-atdAbu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CCNUlfU5.js";import"./children-f71tIclX.js";import"./dropdown_20-D5AgEBOZ.js";import"./chevron_up_24-C3koUHhH.js";import"./CustomSelectDropdown-by8QAIg9.js";import"./CustomScrollView-LJROjlfk.js";import"./Popper--oSez6Jy.js";import"./useReferenceHiddenChangeCallback-C54G18M-.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./FloatingArrow-Cnm_pG-Z.js";import"./usePlacementChangeCallback-Dqqe6zNt.js";import"./floating-ui.react-dom-D_ZuLwN8.js";import"./Spinner-gmUVON3e.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DF1X0pu2.js";import"./Paragraph-DY0mKGfS.js";import"./NativeSelect-DGOES6Us.js";import"./FormField-a8bHx8UE.js";import"./useFocusWithin-TQRavq7I.js";import"./Select.module-CW-OjDQs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CS1h91J8.js";import"./cancel_16-B_c_nEwm.js";import"./useStateWithPrev-BKsbmWzi.js";import"./chevron_left_outline_20-BFW3SHD3.js";import"./useEnsuredControl-BpH5tC17.js";const St={title:"Dates/CalendarRange",component:o,parameters:C("CalendarRange",c,D),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:g()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:R,...p}){const[,m]=h(),s=l=>{const[r,n]=l||[null,null];m({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},i=e?new Date(e):null,d=a?new Date(a):null;return u.jsx(o,{...p,value:[i,d],onChange:s})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
