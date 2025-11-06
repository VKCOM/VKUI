import{j as T}from"./iframe-DZFG_ML5.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-CQFlB4Xt.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-_3h8Vk1o.js";import{C as n}from"./Calendar-C6W7ek9c.js";import"./Caption-B5AzA_Bj.js";import"./DisplayTitle-BcunrtfL.js";import"./education_12-CtvTeG8R.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./CalendarHeader-CtnFo7Q1.js";import"./Clickable-O0RRum4C.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DivmMzZn.js";import"./InputUtils-rnqmQ_3Q.js";import"./VisuallyHidden-DUSQwRyI.js";import"./Footnote-CYznJAmV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-f-sQBR7H.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-DEb1HL1x.js";import"./useStateWithPrev-izR8_aLG.js";import"./DropdownIcon-BR-zIiPk.js";import"./children-CbwhlWKb.js";import"./dropdown_20-6LWUZZVi.js";import"./chevron_up_24-DlEFZpUc.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C2dDroKo.js";import"./CustomScrollView-C4YzHNOP.js";import"./Popper-4fH1RKvH.js";import"./useReferenceHiddenChangeCallback-0wn49evO.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./FloatingArrow-C_-fnQXD.js";import"./usePlacementChangeCallback-BMP1j3H_.js";import"./floating-ui.react-dom-BHf189t_.js";import"./Spinner-Ds0i1YsX.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BcPfikFc.js";import"./Paragraph-B9EciRKy.js";import"./NativeSelect-DOQRs45B.js";import"./FormField-DdRRhoa6.js";import"./Select.module-DYhte166.js";import"./IconButton-C3HahQsG.js";import"./cancel_16-a7lfvdOs.js";import"./chevron_left_outline_20-D4rkUcSq.js";import"./useEnsuredControl-DRpPGXB0.js";import"./date-BtLxoRDG.js";import"./Button-W48RXyAv.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
