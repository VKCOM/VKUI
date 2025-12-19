import{j as l}from"./iframe-CGSrC79H.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DPVsrHAS.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-DuFii-g_.js";import{C as o}from"./Calendar-BqiwFCZg.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BHHO6d1x.js";import"./DisplayTitle-CNlukW7S.js";import"./education_12-DLTepyJs.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-VsKo-Tpi.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./Tappable-HtqfSGDW.js";import"./Clickable-DvGk0QGJ.js";import"./InputUtils-AL_dRhAR.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./Footnote-9-fttdTG.js";import"./CustomSelect-CdNt_4m7.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CBX_pcLT.js";import"./children-C-hCqQRI.js";import"./dropdown_20-DdgqA2FX.js";import"./chevron_up_24-DNC5aBg8.js";import"./CustomSelectDropdown-BHVzRpO-.js";import"./CustomScrollView-ClAxltNi.js";import"./Popper-BXCfD9qH.js";import"./useReferenceHiddenChangeCallback-BEYGsRvY.js";import"./AppRootPortal-D8fiuoF8.js";import"./useColorScheme-DM7MWYfE.js";import"./createPortal-CrUV0Jad.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-zZt_kTkY.js";import"./ConfigProviderOverride-DO-HeAeb.js";import"./FloatingArrow-DPBTaDMU.js";import"./usePlacementChangeCallback-C_EKg3Ob.js";import"./floating-ui.react-dom-C7nxf647.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CLlWSgUI.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-YXDM9fUX.js";import"./Paragraph-MD0IQtl5.js";import"./NativeSelect-DgoKDWkN.js";import"./FormField-CQtfDQHY.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./Select.module-Bmdgm75C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bq_FXaCp.js";import"./cancel_16--_Pgj7hA.js";import"./useBooleanState-BkBFPaFP.js";import"./useStateWithPrev-DYD-gkn1.js";import"./chevron_left_outline_20-CVNV5cAz.js";import"./useEnsuredControl-AiFtRieF.js";import"./Button-JZGl9x8f.js";const Pe={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
