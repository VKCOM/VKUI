import{j as T}from"./iframe-CkliH7Ym.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-D7sR0822.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-DpMME8OT.js";import{C as n}from"./Calendar-C_1FO-GW.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-XD0QEt-A.js";import"./DisplayTitle-CITDAmpz.js";import"./education_12-CkaFu-n1.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-uSeBNsKw.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-fZc2zE5Y.js";import"./Clickable-D0QQafOF.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./VisuallyHidden-Dn7EkmGE.js";import"./Footnote-CVpuTKzI.js";import"./CustomSelect-BTyDgp7z.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-1hUMhB0U.js";import"./children-B0i547Ke.js";import"./dropdown_20-DFkMJTEQ.js";import"./chevron_up_24-DpNmfOob.js";import"./CustomSelectDropdown-XQHuM8r6.js";import"./CustomScrollView-BfGihvhQ.js";import"./Popper-EuLCrfqJ.js";import"./useReferenceHiddenChangeCallback-CrbKL3K8.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./FloatingArrow-B53s4wIh.js";import"./usePlacementChangeCallback-DQYCmAMk.js";import"./floating-ui.react-dom-DQc45krP.js";import"./Spinner-UdAHfoPk.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CmOc4L65.js";import"./Paragraph-Bj3P3vMD.js";import"./NativeSelect-r2NBdp7L.js";import"./FormField-2Xr44SiQ.js";import"./useFocusWithin-njH6fdIQ.js";import"./Select.module-B9F05EDA.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CSrcIMnc.js";import"./cancel_16-CVLOC4uu.js";import"./useStateWithPrev-BblT4-HP.js";import"./chevron_left_outline_20-BvT7hjfx.js";import"./useEnsuredControl-DPyJ8XQk.js";import"./Button-CDpcJNjy.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
