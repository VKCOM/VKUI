import{j as r}from"./iframe-C2_PECK0.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DBCErnTv.js";import{F as o}from"./FormItem-DxHbC0fS.js";import{I as p}from"./Input-BOCXMCAU.js";import{S as j}from"./Select-BJ53Ie-3.js";import{V as a}from"./VisuallyHidden-DSMrBIlo.js";import{F as n}from"./FormLayoutGroup-6_Tf3vNe.js";import"./DateInput.module-BcRdx3cG.js";import"./useBooleanState-BoeoNWy_.js";import"./useGlobalEventListener-C0NjmmOV.js";import"./useEventListener-BmXoCYOx.js";import"./callMultiple-ChqatQlo.js";import"./date-DGcDspvK.js";import"./CalendarHeader-DmQ_9zqS.js";import"./Clickable-Ctz6ZMd9.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DLQDSygG.js";import"./InputUtils-BDpjj3t6.js";import"./Footnote-B_H7tDpo.js";import"./constants-BxoWbviK.js";import"./CustomSelect-65EsxXG8.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-gjFI-5hQ.js";import"./useStateWithPrev-C5Aciol_.js";import"./DropdownIcon-DkMbwP0c.js";import"./children-n2srhEVv.js";import"./dropdown_20-DvIblsX2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./chevron_up_24-CMti3RIs.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-qCaM2tPX.js";import"./CustomScrollView-gvcW3YKp.js";import"./Popper-Bo2p_PrY.js";import"./useReferenceHiddenChangeCallback-2ArwOqZN.js";import"./AppRootPortal-Q7WzAGvZ.js";import"./useColorScheme-5WrknPov.js";import"./createPortal-yC0ym91a.js";import"./ColorSchemeProvider-DdoBpxie.js";import"./ConfigProviderOverride-6qFI0Cam.js";import"./FloatingArrow-_eZKd9-i.js";import"./usePlacementChangeCallback-DeYYV3Z9.js";import"./Spinner-DOBIwFGK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DU8pVnZO.js";import"./Paragraph-BJiuCRl2.js";import"./NativeSelect-DEaHtyU_.js";import"./FormField-BvW49P_p.js";import"./Select.module-40dUcPLV.js";import"./IconButton-ht7j3HPv.js";import"./cancel_16-CB2v-scR.js";import"./chevron_left_outline_20-By9_OjBN.js";import"./Calendar-CoCKjLXb.js";import"./useEnsuredControl-D3OYDbAS.js";import"./Button-DnPEcOt6.js";import"./FocusTrap--JsurIAg.js";import"./useFocusTrap-CBS2lFwN.js";import"./useMutationObserver-DIp9x6RD.js";import"./calendar_outline_20-CdgpCpGB.js";import"./clear_16-DElyKwrU.js";import"./Removable-DDOYN81Z.js";import"./useConfigDirection-CkTav0j8.js";import"./cancel_24-CulXt8M_.js";import"./FormItemTopLabel-C62-clg8.js";import"./Subhead-tEP5dl-0.js";import"./UnstyledTextField-DtZDuFW2.js";const Er={title:"Forms/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(F=(c=e.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Or=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,Or as __namedExportsOrder,Er as default};
