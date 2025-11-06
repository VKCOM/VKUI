import{j as T}from"./iframe-DveaDHpJ.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-BsHsoKNh.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BiPPspw1.js";import{C as n}from"./Calendar-wVE10zIs.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-xmt4HAL3.js";import"./DisplayTitle-DmkQiNbN.js";import"./education_12-D8D-_2tN.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-fni5sLyz.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-B6M0Cj2d.js";import"./Clickable-Qd8MhpMK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./VisuallyHidden-C4fiFLiw.js";import"./Footnote-DMEVDgek.js";import"./CustomSelect-DC0kkY8R.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-hzasv1hP.js";import"./children-DIqfUSJp.js";import"./dropdown_20-CZznK5HK.js";import"./chevron_up_24-BwZFvUz5.js";import"./CustomSelectDropdown-BSYt37e0.js";import"./CustomScrollView-DQok_qII.js";import"./Popper-CYuDwYhz.js";import"./useReferenceHiddenChangeCallback-DT-Tatoc.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./FloatingArrow-BTubR1vc.js";import"./usePlacementChangeCallback-Bz3H7LaO.js";import"./floating-ui.react-dom-CCMwIqsk.js";import"./Spinner-kmrkwAxt.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bl2D0DTY.js";import"./Paragraph-DEGhVC7y.js";import"./NativeSelect-Drg0Y4LA.js";import"./FormField-DIy1SM_b.js";import"./useFocusWithin-C-V6I_uV.js";import"./Select.module-BtVdibmC.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B6-RVMvP.js";import"./cancel_16-BVJbY8rW.js";import"./useStateWithPrev-BQHmZAAg.js";import"./chevron_left_outline_20-AC1IUGj4.js";import"./useEnsuredControl-pDZ_aYUB.js";import"./Button-Be-a6C2x.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
