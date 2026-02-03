import{j as l}from"./iframe-C4ttrVUJ.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-c7826QIF.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-LLK5tR6T.js";import{C as o}from"./Calendar-CslAqE99.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-Den-IMPb.js";import"./DisplayTitle-B3MMZEHv.js";import"./education_12-ClTQ6BEe.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-BDks_1IX.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./Tappable-CL0fK4DO.js";import"./Clickable-B80alsah.js";import"./InputUtils-CD1Rp_t7.js";import"./VisuallyHidden-XgvirjGY.js";import"./Footnote-D7DVMFfP.js";import"./CustomSelect-C8Xx-RTj.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BrCV9u2Z.js";import"./children-DylyViM5.js";import"./dropdown_20-BmDKn9aW.js";import"./chevron_up_24-B4YMPaHv.js";import"./CustomSelectDropdown-B-P-NVyL.js";import"./CustomScrollView-B97yUFEZ.js";import"./Popper-DFY7QZ5U.js";import"./useReferenceHiddenChangeCallback-BPKnqOos.js";import"./AppRootPortal-DfuF7Oqt.js";import"./useColorScheme-CRY_65bE.js";import"./createPortal-BzUu3Hjp.js";import"./ColorSchemeProvider-DP16CCB3.js";import"./ConfigProviderOverride-BQtFiUwD.js";import"./FloatingArrow-DI1_-YRL.js";import"./usePlacementChangeCallback-DDIzKEgz.js";import"./floating-ui.react-dom-D2r8uzGZ.js";import"./Spinner-CeIULbGb.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1g9JWHb.js";import"./Paragraph-C9fVSqiB.js";import"./NativeSelect-C8tAULOC.js";import"./FormField-FAL0-RE2.js";import"./useFocusWithin-BAJNppfT.js";import"./Select.module-By692CQ-.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B4UJc4kp.js";import"./cancel_16-jBKFguup.js";import"./useStateWithPrev-J6FKBV8D.js";import"./chevron_left_outline_20-BY_CTwIe.js";import"./useEnsuredControl-BbUIO2GP.js";import"./Button-BdBXuQJY.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
