import{j as l}from"./iframe-DhuutAfC.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CcD_UWpD.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BsJgeJGG.js";import{C as o}from"./Calendar-B0ZEv_mk.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BhiEFCof.js";import"./DisplayTitle-C8fkacFN.js";import"./education_12-CIGyvuy6.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B53A4_UI.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./Tappable-tvWVp5xX.js";import"./Clickable-CuiuPnoa.js";import"./InputUtils-BcFat9xH.js";import"./VisuallyHidden-BkhWnsJf.js";import"./Footnote-BE0sRU6f.js";import"./CustomSelect-B-atdAbu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CCNUlfU5.js";import"./children-f71tIclX.js";import"./dropdown_20-D5AgEBOZ.js";import"./chevron_up_24-C3koUHhH.js";import"./CustomSelectDropdown-by8QAIg9.js";import"./CustomScrollView-LJROjlfk.js";import"./Popper--oSez6Jy.js";import"./useReferenceHiddenChangeCallback-C54G18M-.js";import"./AppRootPortal-BhnEIrq-.js";import"./useColorScheme-BGUvzePH.js";import"./createPortal-BLvM0w_F.js";import"./ColorSchemeProvider-DdceUlQQ.js";import"./ConfigProviderOverride-CpU6P7F6.js";import"./FloatingArrow-Cnm_pG-Z.js";import"./usePlacementChangeCallback-Dqqe6zNt.js";import"./floating-ui.react-dom-D_ZuLwN8.js";import"./Spinner-gmUVON3e.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DF1X0pu2.js";import"./Paragraph-DY0mKGfS.js";import"./NativeSelect-DGOES6Us.js";import"./FormField-a8bHx8UE.js";import"./useFocusWithin-TQRavq7I.js";import"./Select.module-CW-OjDQs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CS1h91J8.js";import"./cancel_16-B_c_nEwm.js";import"./useStateWithPrev-BKsbmWzi.js";import"./chevron_left_outline_20-BFW3SHD3.js";import"./useEnsuredControl-BpH5tC17.js";import"./Button-Id7-fKaz.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render({
    value,
    minDateTime,
    maxDateTime,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
    const updateValue = (newDate: Date | undefined) => {
      updateArgs({
        value: newDate?.getTime()
      });
    };
    return <Calendar value={parsedValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} onChange={updateValue} />;
  }
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
