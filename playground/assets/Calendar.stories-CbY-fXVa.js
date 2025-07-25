import{j as T}from"./iframe-D2wkiYbA.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DF0-2VhH.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BrnuS8h5.js";import{C as n}from"./Calendar-CZLXS8i-.js";import"./Caption-Bow6F5xg.js";import"./DisplayTitle-BdtMyhIA.js";import"./education_12-C1P1Q7hF.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./CalendarHeader-Bnh1TsEc.js";import"./Clickable-BU3u--9M.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D1Sdra8V.js";import"./InputUtils-QU0WrbnN.js";import"./VisuallyHidden-ChTSElWV.js";import"./Footnote-4HzFQCBl.js";import"./constants-BxoWbviK.js";import"./CustomSelect-B9o8TK7v.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cqparjzv.js";import"./useStateWithPrev-BpUU0Czk.js";import"./DropdownIcon-C60GCJD6.js";import"./children-Cn4G3p10.js";import"./dropdown_20-YG0nvhiD.js";import"./chevron_up_24-D654iwo3.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-B6sFy9YY.js";import"./CustomScrollView-DpTAfiv1.js";import"./Popper-CZeGsxqj.js";import"./useReferenceHiddenChangeCallback-CXW6Zd17.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./FloatingArrow-H9XdygxR.js";import"./usePlacementChangeCallback-B0_BqOZm.js";import"./floating-ui.react-dom-Cab1-L-I.js";import"./Spinner-DVe93hh_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Qi33PTeX.js";import"./Paragraph-DQR4gM98.js";import"./NativeSelect-D1bAWJvM.js";import"./FormField-BCe2hBV2.js";import"./Select.module-JzEuNKdK.js";import"./IconButton-DhTwf-xi.js";import"./cancel_16-Btdg1xUF.js";import"./chevron_left_outline_20-CFkuEpie.js";import"./useEnsuredControl-BM8G-vFy.js";import"./date-CRHi-Frl.js";import"./Button-DffPUQY4.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
