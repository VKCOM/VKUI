import{j as l}from"./iframe-BnACcuaj.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-B3i8aNb-.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-DnLlCn5Y.js";import{C as o}from"./Calendar-DBDAs454.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-BCwlm_4N.js";import"./DisplayTitle-DQ2QRyhL.js";import"./education_12-D5JC6DzP.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CM8KqZ_U.js";import"./useState-Bfn4OdDS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./Tappable-Bp0BqfGQ.js";import"./Clickable-BArC-ALh.js";import"./InputUtils-Bef-cQxi.js";import"./VisuallyHidden-UrXKAcy6.js";import"./Footnote-DxEsaF8U.js";import"./CustomSelect-BYB7ly6q.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClojpxKz.js";import"./children-UU2tqqG0.js";import"./dropdown_20-BGNvRmjo.js";import"./chevron_up_24-umdY8hRe.js";import"./CustomSelectDropdown-Df4Ky-qO.js";import"./CustomScrollView-6jddE_3D.js";import"./Popper-DYnz-pr0.js";import"./useReferenceHiddenChangeCallback-DuuiI3jw.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./FloatingArrow-D2O-SNso.js";import"./usePlacementChangeCallback-CDmlNiC1.js";import"./floating-ui.react-dom-bTtkFxJ_.js";import"./Spinner-gYU1puQq.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DhMyr_Z8.js";import"./Paragraph-D3a0j1Hf.js";import"./NativeSelect-a4tySREf.js";import"./FormField-4Uh0lksV.js";import"./useFocusWithin-BXXGciuN.js";import"./Select.module-BgWuEpJn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DJLKvWv6.js";import"./cancel_16-XNcRXdRh.js";import"./useStateWithPrev-7FgZ8AZO.js";import"./chevron_left_outline_20-1-xRflVr.js";import"./useEnsuredControl-CGKhw2zb.js";import"./Button-DZqU8iPb.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
