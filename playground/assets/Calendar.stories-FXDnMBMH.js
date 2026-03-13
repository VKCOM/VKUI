import{j as l}from"./iframe-CEhhJuIi.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CBGu1Zle.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-C96CZ3Pk.js";import{C as o}from"./Calendar-B1v1sSQ4.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-DB-0jBpG.js";import"./DisplayTitle-Rm0xGoRU.js";import"./education_12-jrJvKeSH.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-DsvWo35P.js";import"./useState-BlpMLPZb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./Tappable-CTSOdpDd.js";import"./Clickable-CSDkuBjh.js";import"./InputUtils-CN8Bpeve.js";import"./VisuallyHidden-BYulTkKK.js";import"./Footnote-wldoNL-p.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-3uI43kSM.js";import"./getValueByKey-BAqjffOg.js";import"./DropdownIcon-QFSiGWGc.js";import"./children-fYKiCF6j.js";import"./dropdown_20-DwBVY18R.js";import"./chevron_up_24-A_QqfnCy.js";import"./CustomSelectDropdown-mJ6-GiY6.js";import"./CustomScrollView-Bcc3tVi5.js";import"./Popper-BHJzTj_0.js";import"./useReferenceHiddenChangeCallback-DHx5mXYN.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./FloatingArrow-D9rl4d8P.js";import"./usePlacementChangeCallback-moWOJvM7.js";import"./floating-ui.react-dom-BUWNT6g6.js";import"./Spinner-C8mKPATK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BjwWmvjQ.js";import"./Paragraph-DZv5gWne.js";import"./NativeSelect-C8TgweD-.js";import"./FormField-K1skToW1.js";import"./useFocusWithin-D7grZ9Rv.js";import"./Select.module-CXMT-Xu2.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D0BsKVg5.js";import"./cancel_16-L2iU7g3d.js";import"./useBooleanState-C3dujkKO.js";import"./useStateWithPrev-4wIF-59x.js";import"./chevron_left_outline_20-004eD-mk.js";import"./useEnsuredControl-R1Fp-Kd5.js";import"./Button-VHcOoYjV.js";const Pe={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
