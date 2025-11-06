import{j as l}from"./iframe-DcUCz3Gq.js";import{D as c,C as D}from"./constants-DdkjnEgz.js";import{c as T}from"./createCalendarDayRenderField-CAZu0VcV.js";import{c as g}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{u as x}from"./useCustomArgs-1Ie8CGF3.js";import{C as o}from"./Calendar-MKi_jq83.js";import"./preload-helper-PPVm8Dsz.js";import"./Caption-CDwF9hKw.js";import"./DisplayTitle-M_h6_zgi.js";import"./education_12-D5c1vYkF.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-B7AEShB4.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-CGnYgxpx.js";import"./Clickable-8ToLJd_t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./VisuallyHidden-IsgabQ9w.js";import"./Footnote-lAEBSvha.js";import"./CustomSelect-DXJqjN00.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C_vBKBvW.js";import"./children-DDwVHqk6.js";import"./dropdown_20-D4qt7qi0.js";import"./chevron_up_24-DJH5Bv_Z.js";import"./CustomSelectDropdown-B26n3wMN.js";import"./CustomScrollView-CYwznZ8r.js";import"./Popper-C4EFCWA9.js";import"./useReferenceHiddenChangeCallback-CSFFsN8n.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./FloatingArrow-AZDnUaK5.js";import"./usePlacementChangeCallback-qGx5x2BN.js";import"./floating-ui.react-dom-BD4t0KnS.js";import"./Spinner-DB1TcyOv.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BrSjq8Dp.js";import"./Paragraph-DEZu3Vgm.js";import"./NativeSelect-fWz39x5d.js";import"./FormField-BE6qQZ7q.js";import"./useFocusWithin-4tbXXtmK.js";import"./Select.module-cqXk88D3.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CGiS95Aa.js";import"./cancel_16-Dmbi-9wn.js";import"./useStateWithPrev-ULdk1ffR.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./useEnsuredControl-B2KTcbi_.js";import"./Button-BU_mp-AO.js";const Ve={title:"Dates/Calendar",component:o,parameters:C("Calendar",D,c),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:T(),timezone:g()},tags:["Работа с датами"]},e={render:function({value:t,minDateTime:r,maxDateTime:a,...m}){const[,i]=x(),n=t&&new Date(t),p=r&&new Date(r),s=a&&new Date(a),d=u=>{i({value:u?.getTime()})};return l.jsx(o,{value:n,minDateTime:p,maxDateTime:s,...m,onChange:d})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
