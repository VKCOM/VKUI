import{j as r}from"./iframe-DTUKIQpa.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-4D2_0gD4.js";import{F as o}from"./FormItem-UmjKI1Z5.js";import{I as p}from"./Input-DqgsxzdF.js";import{S as j}from"./Select-05tp-X5h.js";import{V as a}from"./VisuallyHidden-B0Nb8Auz.js";import{F as n}from"./FormLayoutGroup-C66wYwqa.js";import"./DateInput.module-_k_JItMG.js";import"./useBooleanState-BWuuVZFd.js";import"./useGlobalEventListener-D8BL8vid.js";import"./useEventListener-DzYdBFwg.js";import"./callMultiple-ChqatQlo.js";import"./date-D1ciwgPe.js";import"./CalendarHeader-DMAGB71Q.js";import"./Clickable-DRtJbe2S.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-Br6ZM5HO.js";import"./InputUtils-Db1DLuWS.js";import"./Footnote-rQhC0WQs.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DB15qcvA.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-BaNto5dO.js";import"./useStateWithPrev-U9GIjbS7.js";import"./DropdownIcon-B_Ph2ptA.js";import"./children-B8YsjXFx.js";import"./dropdown_20-DR-0bnZ1.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./chevron_up_24-ilJGQ0lV.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-7BTS6Okn.js";import"./CustomScrollView-r1BN1p7I.js";import"./Popper-BSgRPBX2.js";import"./useReferenceHiddenChangeCallback-ojQ1DOCE.js";import"./AppRootPortal-DxIJvWMm.js";import"./useColorScheme-BGAH8gMd.js";import"./createPortal-88uciayh.js";import"./ColorSchemeProvider-BX-9CWxv.js";import"./ConfigProviderOverride-CgvCCF7D.js";import"./FloatingArrow-k99_XB05.js";import"./usePlacementChangeCallback-XITFD2B3.js";import"./Spinner-BjJTDPz-.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B_3mEn4N.js";import"./Paragraph-D0uPZqgj.js";import"./NativeSelect-BfY_PPcx.js";import"./FormField-bYsVG-1L.js";import"./Select.module-BWSQdVM5.js";import"./IconButton-Dy9SRYqV.js";import"./cancel_16-C6mgGc9w.js";import"./chevron_left_outline_20-DdZWpJA-.js";import"./Calendar-BH8o_Gm8.js";import"./useEnsuredControl-DZdU0p0r.js";import"./Button-BCF43kbr.js";import"./FocusTrap-Dj4RiGIf.js";import"./useFocusTrap-D-4PYHeK.js";import"./useMutationObserver-DSnEeQjr.js";import"./calendar_outline_20-D8_X0THl.js";import"./clear_16-CAUQYn8x.js";import"./Removable-Cld3TR36.js";import"./useConfigDirection-Cb5ryD04.js";import"./cancel_24-BG0iu8qf.js";import"./FormItemTopLabel-o5UsKAs4.js";import"./Subhead-C7vbIoTq.js";import"./UnstyledTextField-DNwGI5kJ.js";const Er={title:"Forms/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
