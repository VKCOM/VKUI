import{j as r}from"./iframe-DIYy3-CH.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DSIKqx1R.js";import{F as o}from"./FormItem-Ct6FdPDz.js";import{I as p}from"./Input-FX0Kp5R3.js";import{S as c}from"./Select-CaVEaiRi.js";import{V as a}from"./VisuallyHidden-B6N7VZPM.js";import{F as n}from"./FormLayoutGroup-DA8Pv4vT.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-I4JrPwN-.js";import"./useBooleanState-2ZxQw8ru.js";import"./useGlobalEventListener-CiGQPE82.js";import"./useEventListener-By1FPFXl.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DxRwFZW2.js";import"./CalendarHeader-kCZ9H7qv.js";import"./useState-p4Iaaoae.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./Tappable-sYAEqFlc.js";import"./Clickable-BAIHKsz8.js";import"./InputUtils-MuCAFNzU.js";import"./Footnote-CRCyeFbn.js";import"./CustomSelect-BYDJoheE.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CpdTLJ55.js";import"./children-BgxIS89X.js";import"./dropdown_20-DCuiNVmp.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-hXM5sa8Y.js";import"./CustomSelectDropdown-TSlmrZ5Y.js";import"./CustomScrollView-G7yuAOqH.js";import"./Popper-CuNxRGBX.js";import"./useReferenceHiddenChangeCallback-CW-8m34o.js";import"./AppRootPortal-B6-nwskM.js";import"./useColorScheme-BPR6ME_0.js";import"./createPortal-w5gOwCV_.js";import"./ColorSchemeProvider-Ncvd_GBc.js";import"./ConfigProviderOverride-C79xSzNm.js";import"./FloatingArrow-B11NdP-t.js";import"./usePlacementChangeCallback-CgA_U0ts.js";import"./floating-ui.react-dom-SH6Hwo0U.js";import"./Spinner-D5ck6QgF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D7FmCYaF.js";import"./Paragraph-C-gjngMm.js";import"./NativeSelect-juMjOPi4.js";import"./FormField-BywUP1eK.js";import"./useFocusWithin-De2BOk53.js";import"./Select.module-6jS9NVCS.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DhekZgUs.js";import"./cancel_16-7cpCCUKH.js";import"./useStateWithPrev-W9bRPnvU.js";import"./chevron_left_outline_20-CwPtsqRK.js";import"./useEnsuredControl-7dmeozfI.js";import"./Button-D7qQMSR2.js";import"./FocusTrap-Da2C75l5.js";import"./useFocusTrap-CtitvsGk.js";import"./useMutationObserver-CRE9L4FZ.js";import"./calendar_outline_20-Cp4bhn9T.js";import"./clear_16-B3g1XPOf.js";import"./Removable-CEZaH-IR.js";import"./useConfigDirection-5JvPOI0y.js";import"./cancel_24-BLCbiPJn.js";import"./FormItemTopLabel-BFfGZTXN.js";import"./Subhead-CZ6Imw4B.js";import"./UnstyledTextField-DKnSUXzR.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
