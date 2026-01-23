import{j as l}from"./iframe-BJ9555aC.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DNSLBXl_.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-rQABBE_Q.js";import{C as o}from"./Calendar-2ygU7b5F.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BrB5DlXi.js";import"./DisplayTitle-BEMvCdAB.js";import"./education_12-BZSlzGy3.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CFpGUA92.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./Tappable-Bz7LtOMO.js";import"./Clickable-BL1AyP3s.js";import"./InputUtils-8LhFcqKY.js";import"./VisuallyHidden-BpRJPd7L.js";import"./Footnote-xxqNAETB.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-D5JbKYX_.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-_KDqP4gW.js";import"./children-CFPqwV5J.js";import"./dropdown_20-DyA2EYYB.js";import"./chevron_up_24-CRtNUENt.js";import"./CustomSelectDropdown-i-AfigEh.js";import"./CustomScrollView-kMAABzAe.js";import"./Popper-BhaeA0Qs.js";import"./useReferenceHiddenChangeCallback-DY7Th_c3.js";import"./AppRootPortal-Du-f4Doj.js";import"./useColorScheme-DvMUZASe.js";import"./createPortal-DbDswA2g.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-QatNCALS.js";import"./ConfigProviderOverride-TDUswttQ.js";import"./FloatingArrow-C4JFmSBi.js";import"./usePlacementChangeCallback-BKmBlkkK.js";import"./floating-ui.react-dom-DIn9Ikqa.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CsAXLMyU.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BAbpEHx_.js";import"./Paragraph-Cp7CvK2x.js";import"./NativeSelect-ByWiiYIv.js";import"./FormField-DvQPBwxb.js";import"./useFocusWithin-ClOWbdUU.js";import"./Select.module-DhR9NBbI.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DRWEpqxT.js";import"./cancel_16-DW-e6Ezq.js";import"./useBooleanState-BYJEPe49.js";import"./useStateWithPrev-BGjF88uR.js";import"./chevron_left_outline_20-CfdM4DXq.js";import"./useEnsuredControl-3-CGTCCX.js";import"./Button-BbA_I1es.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
