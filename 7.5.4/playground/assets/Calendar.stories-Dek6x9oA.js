import{j as T}from"./iframe-DQDZnzQe.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DNezfwZi.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BaaMWcJD.js";import{C as n}from"./Calendar-BlSxtCYL.js";import"./Caption-BxTGQxAz.js";import"./DisplayTitle-ORqj649f.js";import"./education_12-CgmjkFP5.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./CalendarHeader-Cg-Zc5Ia.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-GGjjvyZD.js";import"./Clickable-BDq-1Cyq.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CKZOM7f4.js";import"./VisuallyHidden-vRsYbH_6.js";import"./Footnote-y02Efo06.js";import"./constants-BxoWbviK.js";import"./CustomSelect-SatF41sH.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-DP8QP68V.js";import"./useStateWithPrev-B98vQEeT.js";import"./DropdownIcon-DhLV2qpD.js";import"./children-JmIZewKa.js";import"./dropdown_20-wCkklzJL.js";import"./chevron_up_24-DgXLjups.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Bh6QyIlb.js";import"./CustomScrollView-1W6fExUZ.js";import"./Popper-Df6uYYRQ.js";import"./useReferenceHiddenChangeCallback-Dbj80JL7.js";import"./AppRootPortal-Bq1Lh75N.js";import"./useColorScheme-alZiR8qg.js";import"./createPortal-7OEOxVfD.js";import"./ColorSchemeProvider-KH2nDpqI.js";import"./ConfigProviderOverride-iezr64Uj.js";import"./FloatingArrow-B7uRlAoA.js";import"./usePlacementChangeCallback-CLm-XiCo.js";import"./floating-ui.react-dom-B2Zm5IGL.js";import"./Spinner-BbRcECA7.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-QnF2xjky.js";import"./Paragraph-pbN2toqi.js";import"./NativeSelect-CGdi1AI7.js";import"./FormField-CAL2xkEJ.js";import"./Select.module-C5jBo746.js";import"./IconButton-fW78sGQ1.js";import"./cancel_16-hZiKNl_V.js";import"./chevron_left_outline_20-BYQNaDdt.js";import"./useEnsuredControl-CXLvoAQT.js";import"./date-Ce0q_vyd.js";import"./Button-CP79mmtk.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
