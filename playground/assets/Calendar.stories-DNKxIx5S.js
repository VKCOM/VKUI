import{j as l}from"./iframe-BqdgnJE0.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-B5yKqwIH.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-BXHDNaz8.js";import{C as o}from"./Calendar-DjQusL0q.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DQ3GIvfa.js";import"./DisplayTitle-CPCr3719.js";import"./education_12-kWQMLfLC.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-CU_lwp4p.js";import"./useState-CWGeE8jE.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./Tappable-C0ES09y8.js";import"./Clickable-_lommW0d.js";import"./InputUtils-ESzsNRN2.js";import"./VisuallyHidden-B5KO6Y_w.js";import"./Footnote-Bj-28HDg.js";import"./CustomSelect-BVhw21dJ.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BFWrXu6f.js";import"./children-rmDURaUl.js";import"./dropdown_20-Blxc57wu.js";import"./chevron_up_24-BtsVjg8Z.js";import"./CustomSelectDropdown-DmVF0BRV.js";import"./CustomScrollView-CwRuv418.js";import"./Popper-DmnzI0Bc.js";import"./useReferenceHiddenChangeCallback-CIJGa2Ph.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./FloatingArrow-Bdu_em3L.js";import"./usePlacementChangeCallback-DKDruSlP.js";import"./floating-ui.react-dom-Jxcy3D_W.js";import"./Spinner-CHRizUnE.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_pXol92.js";import"./Paragraph-CWuOgUOG.js";import"./NativeSelect-D3oNe4Xd.js";import"./FormField-Cg65d97h.js";import"./useFocusWithin-7VHk4Gs5.js";import"./Select.module-xTktcizs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7jcJUXx.js";import"./cancel_16-GeHSc2Gr.js";import"./useStateWithPrev-Cbm2nfMX.js";import"./chevron_left_outline_20-C8nGg7bJ.js";import"./useEnsuredControl-BBQaujFI.js";import"./Button-BBUIsY6v.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
