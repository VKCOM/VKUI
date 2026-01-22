import{j as l}from"./iframe-CJSxyW9U.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-COZ1Ya8b.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BvO-n0Wf.js";import{C as o}from"./Calendar-DtJeej2d.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DJRq5DSE.js";import"./DisplayTitle-BZ7iiVHN.js";import"./education_12-CD2Y4iGz.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Dt0WtSan.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./Tappable-B_lgqKnQ.js";import"./Clickable-C7Hv1Vzv.js";import"./InputUtils-CQXgm4mM.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Footnote-PeEhUyBm.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-CcafMIlj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-AJYC2Ld6.js";import"./children-B_vv-93P.js";import"./dropdown_20-a3g49EXu.js";import"./chevron_up_24-IL4Ee17g.js";import"./CustomSelectDropdown-B80ubdsN.js";import"./CustomScrollView-CoMoGALI.js";import"./Popper-CILUD6SC.js";import"./useReferenceHiddenChangeCallback-D1-xpaTE.js";import"./AppRootPortal-DnnFjexz.js";import"./useColorScheme-cIrBBNZn.js";import"./createPortal-BAw7aojS.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-COmjjYbo.js";import"./ConfigProviderOverride-CF8gkful.js";import"./FloatingArrow-D3RfVyEp.js";import"./usePlacementChangeCallback-CcbRo2C7.js";import"./floating-ui.react-dom-DgoDJi3n.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DazM5ro7.js";import"./Paragraph-Drw97mgp.js";import"./NativeSelect-CCc1W4C8.js";import"./FormField-C1QoIvTb.js";import"./useFocusWithin-B6ZQto83.js";import"./Select.module-C8eYQrh0.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlIx3m79.js";import"./cancel_16-oWyxmFnc.js";import"./useBooleanState-CkcwTMgJ.js";import"./useStateWithPrev-DFqPg5SA.js";import"./chevron_left_outline_20-Nu9zVYtc.js";import"./useEnsuredControl-DVOSKHBB.js";import"./Button-BC2c2Xtj.js";const Re={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),p=t&&new Date(t),n=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:p,minDateTime:n,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
