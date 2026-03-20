import{j as r}from"./iframe-CmkY54f5.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DNnXkFq1.js";import{F as o}from"./FormItem-CkNF-lcJ.js";import{I as p}from"./Input-BtGQMChi.js";import{S as c}from"./Select-DSOxMJoz.js";import{V as a}from"./VisuallyHidden-Da3ud9kw.js";import{F as n}from"./FormLayoutGroup-DkgTLh_b.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-Dr9HYr0d.js";import"./useBooleanState-C2ldts3L.js";import"./useGlobalEventListener-D4VlZRSO.js";import"./useEventListener-CsQVQesK.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DUKpUVdl.js";import"./CalendarHeader-BKLaiCrE.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./Tappable-DW-ilhli.js";import"./Clickable-BrVjzu4L.js";import"./InputUtils-UNO81DKX.js";import"./Footnote-Dh1koNQe.js";import"./CustomSelect-BQ59V0Ch.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BANyY5dI.js";import"./children-nFeoBYDx.js";import"./dropdown_20-DWPbLuVF.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-BXf7h9wL.js";import"./CustomSelectDropdown-BiT3ExQW.js";import"./CustomScrollView-BW102QqZ.js";import"./Popper-B4G3Cw95.js";import"./useReferenceHiddenChangeCallback-CXmxCSux.js";import"./AppRootPortal-DhIktMNn.js";import"./useColorScheme-BCWY6G93.js";import"./createPortal-CzK3IUGW.js";import"./ColorSchemeProvider-BA0ymiYZ.js";import"./ConfigProviderOverride-DzFZq6HF.js";import"./FloatingArrow-BVH0iJE6.js";import"./usePlacementChangeCallback-D4ejLsOm.js";import"./floating-ui.react-dom-l5QuDyvu.js";import"./Spinner-C6TWv4c6.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Dgp_7LMZ.js";import"./Paragraph-DRaKBji1.js";import"./NativeSelect-CcaCMbDP.js";import"./FormField-CeGCA5oR.js";import"./useFocusWithin-BymUKlkD.js";import"./Select.module-BkMYHOVU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-hyZ4L0bk.js";import"./cancel_16-BvUE-S4Y.js";import"./useStateWithPrev-_03xRjJs.js";import"./chevron_left_outline_20-Dm8bj3a9.js";import"./useEnsuredControl-DvsDNI3j.js";import"./Button-TSeYhrGZ.js";import"./FocusTrap-B80AiANX.js";import"./useFocusTrap-BoB1d5Y9.js";import"./useMutationObserver-BMEHBXHy.js";import"./calendar_outline_20-CnTgdOVA.js";import"./clear_16-BfVB_YJ7.js";import"./Removable-N-h_aW0x.js";import"./useConfigDirection-Duqs0EiT.js";import"./cancel_24-D5GJv2PT.js";import"./FormItemTopLabel-BLu4raEf.js";import"./Subhead-BS8ES9bw.js";import"./UnstyledTextField-Cpi10jqy.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup {...args}>
      <FormItem htmlFor="name" top="Имя ящика">
        <Input id="name" />
      </FormItem>
      <FormItem>
        <Select options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(i => ({
        label: i,
        value: i
      }))} defaultValue="@mail.ru" />
      </FormItem>
    </FormLayoutGroup>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup mode="horizontal" segmented {...args}>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="nikname-id">
          Никнейм или имя
        </VisuallyHidden>
        <Input id="nickname-id" placeholder="Никнейм или имя" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="link-or-id-input-id">
          Ссылка на ID
        </VisuallyHidden>
        <Input id="link-or-id-input-id" placeholder="Ссылка на ID" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="date-id">
          Дата или диапазон
        </VisuallyHidden>
        <DateInput id="date-id" renderCustomValue={(date: Date | undefined) => date ? undefined : <span aria-hidden style={{
        color: 'var(--vkui--color_text_secondary)'
      }}>
                Дата или диапазон
              </span>} />
      </FormItem>
    </FormLayoutGroup>
}`,...e.parameters?.docs?.source}}};const zr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,zr as __namedExportsOrder,_r as default};
