import{j as l}from"./iframe-ChnjXsIu.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-DMdca-B2.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-CGRDwTHt.js";import{C as o}from"./Calendar-CBTrwaCM.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DTswF5wb.js";import"./DisplayTitle-D3hITMan.js";import"./education_12-DRRfQhqW.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Bx1RbLSq.js";import"./useState-ZDhvxYGh.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./Tappable-BDf7UE95.js";import"./Clickable-zj2UWImj.js";import"./InputUtils-D67zZ2HF.js";import"./VisuallyHidden-C0GQz0ke.js";import"./Footnote-a8vRHGoF.js";import"./CustomSelect-cyLzpzOq.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-h4uxWYEd.js";import"./children-CZfmS9px.js";import"./dropdown_20-Dky_QlsQ.js";import"./chevron_up_24-BDRpf73z.js";import"./CustomSelectDropdown-CrQtvAdb.js";import"./CustomScrollView-CXMjEdip.js";import"./Popper-Bf4yDOIo.js";import"./useReferenceHiddenChangeCallback-2W8QGwUV.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./FloatingArrow-BeHWd8nc.js";import"./usePlacementChangeCallback-Cm3J6Vod.js";import"./floating-ui.react-dom-Dvn3YOYt.js";import"./Spinner-D882qXq5.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BywXDc-o.js";import"./Paragraph-CrOm9mYb.js";import"./NativeSelect-BVh_YTTY.js";import"./FormField-BTw2bisQ.js";import"./useFocusWithin-DfM9Gs3P.js";import"./Select.module-1rG_aevb.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DcISWAYH.js";import"./cancel_16-99w3wgRx.js";import"./useStateWithPrev-BTnHBdt0.js";import"./chevron_left_outline_20-0BRPPppm.js";import"./useEnsuredControl-CI320LI0.js";import"./Button-B4NYHs9P.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
