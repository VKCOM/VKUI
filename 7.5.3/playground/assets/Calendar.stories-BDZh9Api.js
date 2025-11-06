import{j as T}from"./iframe-VQuwIBim.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-BgvZcPy7.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-D_qqyPzY.js";import{C as n}from"./Calendar-fIgjCpK-.js";import"./Caption-C4GZRvva.js";import"./DisplayTitle-K84wRPg1.js";import"./education_12-BF0slcJa.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./CalendarHeader-ChL49vgU.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-DJKRXU4j.js";import"./Clickable-GKvDpg7c.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./VisuallyHidden-Bn9barOE.js";import"./Footnote-CFr_RCRn.js";import"./constants-BxoWbviK.js";import"./CustomSelect-D0zvvk11.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C9W7nehx.js";import"./useStateWithPrev-CGNjumc_.js";import"./DropdownIcon-Bo4sb50J.js";import"./children-DbSAwzjm.js";import"./dropdown_20-CYoiQxdD.js";import"./chevron_up_24-CTDjlFV8.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-DHTmemVx.js";import"./CustomScrollView-B8oa2wyV.js";import"./Popper-lAUSxP2k.js";import"./useReferenceHiddenChangeCallback-Bmr5y_bS.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./FloatingArrow-BBql9SkG.js";import"./usePlacementChangeCallback-DmGIfBmK.js";import"./floating-ui.react-dom-Pmp8ft10.js";import"./Spinner-D45v6N1-.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-u7kAah.js";import"./Paragraph-DFDWF4fB.js";import"./NativeSelect-BNriZWAB.js";import"./FormField-swNNfxlr.js";import"./Select.module-BdMGGYVX.js";import"./IconButton-CsO6Fs2D.js";import"./cancel_16-CS8Axx3h.js";import"./chevron_left_outline_20-DULcAu75.js";import"./useEnsuredControl-DHCjfbrM.js";import"./date-CGVRXOzw.js";import"./Button-DX8vp4-B.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const he=["Playground"];export{e as Playground,he as __namedExportsOrder,Re as default};
