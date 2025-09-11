import{j as g}from"./iframe-DfeTZ_Fw.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-CEYRAbDd.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-DnUlZtzo.js";import{C as s}from"./CalendarRange-BUInC5wu.js";import"./preload-helper-Dp1pzeXC.js";import"./Caption-hDjGO988.js";import"./DisplayTitle-MVUkiPfF.js";import"./education_12-CJPpzNiU.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./CalendarHeader-Dvcc8Qij.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Tappable-BBWke1IE.js";import"./Clickable-Bpx6dgEO.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C-I8ensD.js";import"./VisuallyHidden-BuJles22.js";import"./Footnote-ivEbNXOe.js";import"./CustomSelect-C4lo9yBT.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CTKRcmoK.js";import"./children-DctjNuEY.js";import"./dropdown_20-BNTx9TYE.js";import"./chevron_up_24-5Ojx3Y17.js";import"./CustomSelectDropdown-BqlT281C.js";import"./CustomScrollView-nYtC7Vih.js";import"./Popper-Cljg5rUv.js";import"./useReferenceHiddenChangeCallback-N3uDB-Py.js";import"./AppRootPortal-Cf-1kRil.js";import"./useColorScheme-BGgcYhBu.js";import"./createPortal-B5-CgryZ.js";import"./ColorSchemeProvider-Ct7XlnnY.js";import"./ConfigProviderOverride-BwkUJRE0.js";import"./FloatingArrow-uD3esN_v.js";import"./usePlacementChangeCallback-Cv8IwpN3.js";import"./floating-ui.react-dom-BV57HVUx.js";import"./Spinner-Crblzylq.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DaoMFzCt.js";import"./Paragraph-B0joEyCz.js";import"./NativeSelect-B8Wq8T2C.js";import"./FormField-BLz8UzFa.js";import"./useFocusWithin-UgE2lzew.js";import"./Select.module-D_mKBLoc.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CE4ifGYW.js";import"./cancel_16-CAHFUioB.js";import"./useStateWithPrev-Bd1I0QPL.js";import"./chevron_left_outline_20-BH5O8FRo.js";import"./useEnsuredControl-Q_kfI6qJ.js";const xt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()},tags:["Работа с датами"]},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    value,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <CalendarRange {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const At=["Playground"];export{t as Playground,At as __namedExportsOrder,xt as default};
