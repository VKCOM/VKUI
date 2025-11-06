import{j as r}from"./iframe-DZFG_ML5.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-CFK-M3gY.js";import{F as o}from"./FormItem-u3tUPodR.js";import{I as p}from"./Input-XzR6s9Yw.js";import{S as j}from"./Select-BHNVAbv8.js";import{V as a}from"./VisuallyHidden-DUSQwRyI.js";import{F as n}from"./FormLayoutGroup-CNUVI8jm.js";import"./DateInput.module-DEVk19gt.js";import"./useBooleanState-CdIoqYcW.js";import"./useGlobalEventListener-is3gW8hR.js";import"./useEventListener-eXbAXU7E.js";import"./callMultiple-ChqatQlo.js";import"./date-BtLxoRDG.js";import"./CalendarHeader-CtnFo7Q1.js";import"./Clickable-O0RRum4C.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-DivmMzZn.js";import"./InputUtils-rnqmQ_3Q.js";import"./Footnote-CYznJAmV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-f-sQBR7H.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-DEb1HL1x.js";import"./useStateWithPrev-izR8_aLG.js";import"./DropdownIcon-BR-zIiPk.js";import"./children-CbwhlWKb.js";import"./dropdown_20-6LWUZZVi.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./chevron_up_24-DlEFZpUc.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C2dDroKo.js";import"./CustomScrollView-C4YzHNOP.js";import"./Popper-4fH1RKvH.js";import"./useReferenceHiddenChangeCallback-0wn49evO.js";import"./AppRootPortal-DTIQQrr5.js";import"./useColorScheme-u4Oy3KJr.js";import"./createPortal-Cb1hOk6l.js";import"./ColorSchemeProvider-CduwPPyw.js";import"./ConfigProviderOverride-BPkye6ZO.js";import"./FloatingArrow-C_-fnQXD.js";import"./usePlacementChangeCallback-BMP1j3H_.js";import"./floating-ui.react-dom-BHf189t_.js";import"./Spinner-Ds0i1YsX.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BcPfikFc.js";import"./Paragraph-B9EciRKy.js";import"./NativeSelect-DOQRs45B.js";import"./FormField-DdRRhoa6.js";import"./Select.module-DYhte166.js";import"./IconButton-C3HahQsG.js";import"./cancel_16-a7lfvdOs.js";import"./chevron_left_outline_20-D4rkUcSq.js";import"./Calendar-C6W7ek9c.js";import"./useEnsuredControl-DRpPGXB0.js";import"./Button-W48RXyAv.js";import"./FocusTrap-DTAXdOAt.js";import"./useFocusTrap-Ckt82xM7.js";import"./useMutationObserver-BgbAvC30.js";import"./calendar_outline_20-D-IYobmK.js";import"./clear_16-DQdWPUh1.js";import"./Removable-BniJd5-v.js";import"./useConfigDirection-BbxI4kck.js";import"./cancel_24-So4WKeZo.js";import"./FormItemTopLabel-BKQp-WkK.js";import"./Subhead-D8223A8i.js";import"./UnstyledTextField-tP5cdVSG.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
