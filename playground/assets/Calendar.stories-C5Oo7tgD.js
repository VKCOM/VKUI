import{j as l}from"./iframe-Db0SwwYs.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DfSFnuOY.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BGYdS3iU.js";import{C as o}from"./Calendar-BMfdWGVn.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-02ZtUboh.js";import"./DisplayTitle-Dl3xMsKF.js";import"./education_12-CufZ1OAK.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DxkK0Xhe.js";import"./useState-_pDIeHd1.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./Tappable-DPDNr6uV.js";import"./Clickable-QJYjPwzV.js";import"./InputUtils-DU65P5CC.js";import"./VisuallyHidden-CZDmCAU7.js";import"./Footnote-CJOdhFdd.js";import"./CustomSelect-CZTYq96-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BhedKSLh.js";import"./children-BEQ7OHl7.js";import"./dropdown_20-VUDXxbjX.js";import"./chevron_up_24-C75ZrWHv.js";import"./CustomSelectDropdown-GCn6rg4P.js";import"./CustomScrollView-Z0P7fIf-.js";import"./Popper-hRMVJDOY.js";import"./useReferenceHiddenChangeCallback-BVfL_SN8.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./FloatingArrow-A8JFHQho.js";import"./usePlacementChangeCallback-Wr5lETKk.js";import"./floating-ui.react-dom-CXE2iVpv.js";import"./Spinner-Dy7IzRwA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ch_QrsP6.js";import"./Paragraph-Bv0EtTo4.js";import"./NativeSelect-BLEWKHxb.js";import"./FormField-DrhdvO2i.js";import"./useFocusWithin-CRR7Gu3h.js";import"./Select.module-Dk8aoWC7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-f4wUPwMX.js";import"./cancel_16-UMpt-5Dk.js";import"./useStateWithPrev-CUZpM60q.js";import"./chevron_left_outline_20-Bm5ycyz6.js";import"./useEnsuredControl-DC7ucSqy.js";import"./Button-DKPWjiCT.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Ae=["Playground"];export{e as Playground,Ae as __namedExportsOrder,Ve as default};
