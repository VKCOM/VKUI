import{j as T}from"./iframe-CNYWi-tv.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DCyEhurJ.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-DGsskUb2.js";import{C as n}from"./Calendar-Dc-fpZv4.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-VNaRRNHV.js";import"./DisplayTitle-cax5A9Gh.js";import"./education_12-N5r7i3rq.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-UWx_imzm.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-Bt2S1yMc.js";import"./Clickable-PPkKMUDS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./VisuallyHidden-CIbqknZb.js";import"./Footnote-BYeJ88ZB.js";import"./CustomSelect-CA3LhGpT.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CK-q77tq.js";import"./children-D9VTJ2FF.js";import"./dropdown_20-xOXOAUZ-.js";import"./chevron_up_24-B5mApQ7w.js";import"./CustomSelectDropdown-DfgUhNMb.js";import"./CustomScrollView-BsfvooqJ.js";import"./Popper-D5E7M93E.js";import"./useReferenceHiddenChangeCallback-DrJqA32s.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./FloatingArrow-D53bG7gO.js";import"./usePlacementChangeCallback-Cojz57y6.js";import"./floating-ui.react-dom-B41PFPvr.js";import"./Spinner-CLko12L1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C8yk_WE_.js";import"./Paragraph-BlAo2fn7.js";import"./NativeSelect-B1QstsTz.js";import"./FormField-Ddj740Jf.js";import"./useFocusWithin-DPWwC_DA.js";import"./Select.module-CMu9xKIa.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-1hwVmaZf.js";import"./cancel_16-BaRnUpV1.js";import"./useStateWithPrev-CQgWZ7iu.js";import"./chevron_left_outline_20-LPpqaviN.js";import"./useEnsuredControl-BpSX3TsH.js";import"./Button-CRnRhdN6.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
