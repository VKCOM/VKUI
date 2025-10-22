import{j as l}from"./iframe-DvQ0hW0I.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-ac26kDMv.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-DHDTtt1t.js";import{C as o}from"./Calendar-CqhTorlW.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-hh3k8-HK.js";import"./DisplayTitle-CFmZH4aI.js";import"./education_12-DZHRxfo-.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DDsND2oN.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CzBKs2NQ.js";import"./Clickable-CBovrC6X.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BSmatczf.js";import"./VisuallyHidden-CGlAvVNH.js";import"./Footnote-DYSqrBFj.js";import"./CustomSelect-BSp1nyxX.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CFJxO54x.js";import"./children-BdLlg6DR.js";import"./dropdown_20-CQqEaMvC.js";import"./chevron_up_24-D5XC5yKX.js";import"./CustomSelectDropdown-DkMEia6f.js";import"./CustomScrollView-DE6eWhG6.js";import"./Popper-uYwlu0xB.js";import"./useReferenceHiddenChangeCallback-DyVC-Pyk.js";import"./AppRootPortal-CoRG5RWu.js";import"./useColorScheme-Du5ZuGtY.js";import"./createPortal-BtQKhO30.js";import"./ColorSchemeProvider-DIg3ehzA.js";import"./ConfigProviderOverride-5F9Q0adn.js";import"./FloatingArrow-nqFcSJUy.js";import"./usePlacementChangeCallback-CCMY9emW.js";import"./floating-ui.react-dom-ST0J1v4u.js";import"./Spinner-CAlwHhMu.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ddz7Vfse.js";import"./Paragraph-R3cad3zP.js";import"./NativeSelect-hb-NqpRf.js";import"./FormField-C5R4IHoT.js";import"./useFocusWithin-C0XX_iqt.js";import"./Select.module-Bm8talgv.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Dmx4oOAb.js";import"./cancel_16-BarEFL_7.js";import"./useStateWithPrev-DauWq6Az.js";import"./chevron_left_outline_20-BP5SLsjC.js";import"./useEnsuredControl-CswA9P61.js";import"./Button-DPGaTllJ.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
