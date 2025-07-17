import{j as r}from"./iframe-DSAhScPT.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-CFVVHmJM.js";import{F as o}from"./FormItem-i6Eg4KnE.js";import{I as p}from"./Input-HaKuVJno.js";import{S as j}from"./Select-Dfd9ZOPG.js";import{V as a}from"./VisuallyHidden-DIyQgeho.js";import{F as n}from"./FormLayoutGroup-CVDg-HhM.js";import"./DateInput.module-BtU4XOmh.js";import"./useBooleanState-Dnoj4C3p.js";import"./useGlobalEventListener-CiW_WKtR.js";import"./useEventListener-DJyKCYx1.js";import"./callMultiple-ChqatQlo.js";import"./date-BfD1Qbye.js";import"./CalendarHeader-D3IK7AKL.js";import"./Clickable-6oth1gD7.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-41du4Si_.js";import"./InputUtils-CLCgtllv.js";import"./Footnote-BKhvF0_1.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DyF1ugHs.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-BI_v5t1h.js";import"./useStateWithPrev-BRDHZi1j.js";import"./DropdownIcon-BFGIuZpB.js";import"./children-Dz6__HWn.js";import"./dropdown_20-Cy4w0TaO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./chevron_up_24-BrEBZu44.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BE0sJFiQ.js";import"./CustomScrollView-Cuc8sd5U.js";import"./Popper-rmpwLWcs.js";import"./useReferenceHiddenChangeCallback-DIajmvBr.js";import"./AppRootPortal-CxrPafwR.js";import"./useColorScheme-Cus1gWwQ.js";import"./createPortal-D1QM7FM5.js";import"./ColorSchemeProvider-DxBekgIw.js";import"./ConfigProviderOverride-0fOmGBwc.js";import"./FloatingArrow-B8GxgOa-.js";import"./usePlacementChangeCallback-BG0wibxD.js";import"./floating-ui.react-dom-DRzDlYnr.js";import"./Spinner-KyMn6wQY.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BE3um6rG.js";import"./Paragraph-Dffse9lF.js";import"./NativeSelect-BsJweyBr.js";import"./FormField-B2769bQ_.js";import"./Select.module-RXjp17wE.js";import"./IconButton-CDVak2Pm.js";import"./cancel_16-ClU_GfUS.js";import"./chevron_left_outline_20-CkWRsy8s.js";import"./Calendar-q8JImfpI.js";import"./useEnsuredControl-CbqgyVDK.js";import"./Button-D3Kc_P4_.js";import"./FocusTrap-D1M1GcdK.js";import"./useFocusTrap-9P94Rqwu.js";import"./useMutationObserver-BLl4oY9n.js";import"./calendar_outline_20-u4WFXglz.js";import"./clear_16-C8r8A01D.js";import"./Removable-D5ZrDV4g.js";import"./useConfigDirection-Dm4173QE.js";import"./cancel_24-5SKzeyoh.js";import"./FormItemTopLabel-DUnL-Id7.js";import"./Subhead-CkgCAX-J.js";import"./UnstyledTextField-DLwFLjOm.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
