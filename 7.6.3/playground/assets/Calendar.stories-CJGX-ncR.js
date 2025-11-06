import{j as T}from"./iframe-OJ1C6fMc.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CDTRDvVL.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-KXaF96CQ.js";import{C as n}from"./Calendar-DE_2revr.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-eNcQJads.js";import"./DisplayTitle-C_LuK5Lz.js";import"./education_12-BgbzReZ4.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B1l5sXtp.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BvI9Mb-u.js";import"./Clickable-DKzQKlVj.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./VisuallyHidden-BNf-15JI.js";import"./Footnote-JF6_a0Sk.js";import"./CustomSelect-COF9668r.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-DNz6wE2Y.js";import"./children-BFlZwmuK.js";import"./dropdown_20-iZaOpOGh.js";import"./chevron_up_24-BUqUAFiY.js";import"./CustomSelectDropdown-_XCeU4DA.js";import"./CustomScrollView-DD3vDONo.js";import"./Popper-NL2v58jg.js";import"./useReferenceHiddenChangeCallback-BxabS6iI.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./FloatingArrow-B3NLPmUL.js";import"./usePlacementChangeCallback-B257mnAK.js";import"./floating-ui.react-dom-DVR29jSp.js";import"./Spinner-B_HHBggy.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-mJAXpot3.js";import"./Paragraph-BmysOZB8.js";import"./NativeSelect-DS_lymh-.js";import"./FormField-CWpBf-Vc.js";import"./useFocusWithin-a-EzjXb7.js";import"./Select.module-YYXaApUn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bt_Y57sB.js";import"./cancel_16-Ca-rlfQm.js";import"./useStateWithPrev-Bl-OLVQ9.js";import"./chevron_left_outline_20-aYVHemST.js";import"./useEnsuredControl-EZ1T13Lg.js";import"./Button-CRQbp7pl.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
