import{j as r}from"./iframe-WscSQxk_.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DnQuRvYx.js";import{F as o}from"./FormItem-C5jU3y7N.js";import{I as p}from"./Input-COvS7SZC.js";import{S as j}from"./Select-D4E1NEW4.js";import{V as a}from"./VisuallyHidden-uW7N7P-s.js";import{F as n}from"./FormLayoutGroup-_xUbr_Rh.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-D1lQBPeG.js";import"./useBooleanState-DjNPmzUO.js";import"./useGlobalEventListener-g9jun4JN.js";import"./useEventListener-DRRpeHIY.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BwKawlrP.js";import"./CalendarHeader-CwdUcKsW.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-4pvQI-9h.js";import"./Clickable-C7ilqGtf.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-JLBJXs47.js";import"./Footnote-DadQ2vZ3.js";import"./CustomSelect-D-hc13Yt.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B4xVbxJg.js";import"./children-PV0P3fmv.js";import"./dropdown_20-DRkNt1iW.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-D5FCKPim.js";import"./CustomSelectDropdown-NUsO1uDu.js";import"./CustomScrollView-xnVnJFD2.js";import"./Popper-yqTBZXtr.js";import"./useReferenceHiddenChangeCallback-DXGV-oHr.js";import"./AppRootPortal-99J6OfwT.js";import"./useColorScheme-C09gZSyP.js";import"./createPortal-Dh4UeMek.js";import"./ColorSchemeProvider-BohugYos.js";import"./ConfigProviderOverride-CE2xRMO6.js";import"./FloatingArrow-CM5Y14V9.js";import"./usePlacementChangeCallback-BEnhShFW.js";import"./floating-ui.react-dom-DLxqAOSM.js";import"./Spinner-BOd2c3oA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DB_qaMXS.js";import"./Paragraph-DlgzzrFx.js";import"./NativeSelect-DFrjeEHg.js";import"./FormField-B19rMsk1.js";import"./useFocusWithin-BHVkTq3i.js";import"./Select.module-CMLPdxP8.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D66RFa5n.js";import"./cancel_16-DqqQ33f0.js";import"./useStateWithPrev-CVuELe5J.js";import"./chevron_left_outline_20-BU3TJ2Cl.js";import"./useEnsuredControl-D-lyK4Qo.js";import"./Button-C7Wah6LB.js";import"./FocusTrap-DP1KUwEU.js";import"./useFocusTrap-aPtkck9v.js";import"./useMutationObserver-3DDsDNI6.js";import"./calendar_outline_20-BwOhG5ZH.js";import"./clear_16-D5G6Qwzf.js";import"./Removable-BJhZzne5.js";import"./useConfigDirection-f8qxYIIC.js";import"./cancel_24-DRq5Gwy2.js";import"./FormItemTopLabel-Ak2SZP--.js";import"./Subhead-Dng_N-gz.js";import"./UnstyledTextField-BTqt-tQ0.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,F;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(F=(c=e.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Rr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,Rr as __namedExportsOrder,Or as default};
