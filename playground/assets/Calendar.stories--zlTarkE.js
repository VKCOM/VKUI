import{j as l}from"./iframe-qlSEKL6e.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-Dq11gQHG.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-C9cYcXmA.js";import{C as o}from"./Calendar-q842aBQB.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-H79pUCEU.js";import"./DisplayTitle-ByqI9Yly.js";import"./education_12-DWIFAuMv.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BVjuCgtH.js";import"./useState-C_16qP2U.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./Tappable-BHeAowlI.js";import"./Clickable-D1c0nrMo.js";import"./InputUtils-vU1H8cid.js";import"./VisuallyHidden-Bk8azc-l.js";import"./Footnote-BzLLEJCe.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-C6j6AAsH.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BlVG0U2E.js";import"./children-DNQ1k21b.js";import"./dropdown_20-DI1xGklU.js";import"./chevron_up_24-DmhrGLWt.js";import"./CustomSelectDropdown-z5LiGY_J.js";import"./CustomScrollView-Cz-uOj3n.js";import"./Popper-BX-2zFTd.js";import"./useReferenceHiddenChangeCallback-D_B1XjcH.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./FloatingArrow-CtoadKdS.js";import"./usePlacementChangeCallback-7H5OKj5I.js";import"./floating-ui.react-dom-BIRJ4FTj.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUbLsO6I.js";import"./Paragraph-BUgvhuHQ.js";import"./NativeSelect-slK_uqde.js";import"./FormField-Co4GQc8h.js";import"./useFocusWithin-BRbaVvSY.js";import"./Select.module-DIJ-cnuD.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BRmjKqzD.js";import"./cancel_16-CadNQiL8.js";import"./useBooleanState-C-4zMXro.js";import"./useStateWithPrev-C8Jp_q4M.js";import"./chevron_left_outline_20-CubSQ-Yb.js";import"./useEnsuredControl-CgB4abgn.js";import"./Button-DRTEtUEH.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
