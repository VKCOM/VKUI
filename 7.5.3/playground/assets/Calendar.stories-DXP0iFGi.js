import{j as T}from"./iframe-CGpIZMk8.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-D1nBRM07.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-BC0VidQN.js";import{C as n}from"./Calendar-BxNdlVO-.js";import"./Caption-J3zu-s3t.js";import"./DisplayTitle-DXQ8mBuj.js";import"./education_12-nMsc_Xo2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./CalendarHeader-B5x0BzEY.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BEdABn7b.js";import"./Clickable-D9pe1RI2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Footnote-DPd01TxJ.js";import"./constants-BxoWbviK.js";import"./CustomSelect-KZxcJIHj.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-mFqouh7d.js";import"./useStateWithPrev-a925luGf.js";import"./DropdownIcon-DNcwAH27.js";import"./children-BbEaAOxK.js";import"./dropdown_20-4F0jDwGt.js";import"./chevron_up_24-PpiZF3r-.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CgsPrLdC.js";import"./CustomScrollView-DHhB_4V_.js";import"./Popper-BSmeb810.js";import"./useReferenceHiddenChangeCallback-gx510wwF.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./FloatingArrow-DEW5lBO-.js";import"./usePlacementChangeCallback-BTN2Li97.js";import"./floating-ui.react-dom-DVNPl4I1.js";import"./Spinner-DVykHsGf.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1uWEnGu.js";import"./Paragraph-R2LFXqIt.js";import"./NativeSelect-BOMtQRno.js";import"./FormField-D5UDoMvG.js";import"./Select.module-KXh4qUn0.js";import"./IconButton-R-pBWVQH.js";import"./cancel_16-DSH-4CGb.js";import"./chevron_left_outline_20-anyUvaXU.js";import"./useEnsuredControl-DJeRq7Bz.js";import"./date-Bb6FYAs_.js";import"./Button-7GGfFD7v.js";const Re={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
