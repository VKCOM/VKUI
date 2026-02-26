import{j as l}from"./iframe-C4bTyPBQ.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-mOuJYCxo.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BNhG4qp1.js";import{C as o}from"./Calendar-DOdE3Cg1.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-D_3C1Hvb.js";import"./DisplayTitle-CJqodZD2.js";import"./education_12-63IQx91m.js";import"./SvgIconRootV2-DbftVVP5.js";import"./CalendarHeader-Dai295k5.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./Tappable-BZW__-HP.js";import"./Clickable-BhDfuptR.js";import"./InputUtils-Ns7QNyDT.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Footnote-wW_hecXF.js";import"./equal-DqB04qCY.js";import"./CustomSelect-DzCYC4SR.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DgnNzXl1.js";import"./children-DNxvoAyX.js";import"./dropdown_20-BAdDJnDY.js";import"./chevron_up_24-vYRkVu4w.js";import"./CustomSelectDropdown-Bf66ayKC.js";import"./CustomScrollView-BsG9TUbn.js";import"./Popper-BdfxQDqx.js";import"./useReferenceHiddenChangeCallback-DNsZVkB4.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./FloatingArrow-Bxs0n5DK.js";import"./usePlacementChangeCallback-CvoK5TDA.js";import"./floating-ui.react-dom-D2lgGwq0.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-CcwpPq37.js";import"./Paragraph-DjR0IJ5A.js";import"./NativeSelect-Cospdbm8.js";import"./FormField-Cu0jfNj8.js";import"./useFocusWithin-CWJCpHmP.js";import"./Select.module-BrSpg0k5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BXe704ZF.js";import"./cancel_16-CoNztr4w.js";import"./useBooleanState-CoNuuFWh.js";import"./useStateWithPrev-BIxy4Pbm.js";import"./chevron_left_outline_20-DN1jhhy8.js";import"./useEnsuredControl-D1T8oqbk.js";import"./Button-D-zltIHu.js";const Pe={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
