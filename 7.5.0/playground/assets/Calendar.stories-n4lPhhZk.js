import{j as T}from"./iframe-CRvvLw_c.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-DFzh_tmo.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-CPRzmZ5R.js";import{C as n}from"./Calendar-CtnMB51a.js";import"./Caption-Ci2Nlz7Z.js";import"./DisplayTitle-DQnPR_wV.js";import"./education_12-BE5jcrni.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./CalendarHeader-CnzH9Dvx.js";import"./Clickable-C5yyRKxt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BL_Dp9-M.js";import"./InputUtils-jCwC7LNS.js";import"./VisuallyHidden-ExmaeT5t.js";import"./Footnote-Dyjj_lEj.js";import"./constants-BxoWbviK.js";import"./CustomSelect-wu9Cf4Ey.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B4DTXq5h.js";import"./useStateWithPrev-Kk8TUOj4.js";import"./DropdownIcon-F8OJfzzV.js";import"./children-B6ZvQs6l.js";import"./dropdown_20-CsC81trI.js";import"./chevron_up_24-D4XLNPfV.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C21KCnuT.js";import"./CustomScrollView-stHHqvfl.js";import"./Popper-ChNgl10L.js";import"./useReferenceHiddenChangeCallback-WDhIB5eK.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./FloatingArrow-T5Ka_chK.js";import"./usePlacementChangeCallback-CO1Ai17Q.js";import"./floating-ui.react-dom-BDvHgZmU.js";import"./Spinner-BeKI5I2R.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CXUEWZRA.js";import"./Paragraph-DyoHshUI.js";import"./NativeSelect-iMGZhT9Y.js";import"./FormField-BuObGDLk.js";import"./Select.module-GdVREifB.js";import"./IconButton-BfjgaeOF.js";import"./cancel_16-CfE_EEJn.js";import"./chevron_left_outline_20-CfqmpdCV.js";import"./useEnsuredControl-Cn1DQzZT.js";import"./date-CQNiurXG.js";import"./Button-C8kpyiaO.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
