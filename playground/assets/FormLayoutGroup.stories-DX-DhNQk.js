import{j as r}from"./iframe-A37C1jR-.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DcZF70sl.js";import{F as o}from"./FormItem-Cq8TOb8d.js";import{I as p}from"./Input-PY5qOmPZ.js";import{S as j}from"./Select-CYmY56uj.js";import{V as a}from"./VisuallyHidden-DX4ud0qi.js";import{F as n}from"./FormLayoutGroup-tTF6OZri.js";import"./DateInput.module-Kw4m_doj.js";import"./useBooleanState-Byeeh5u-.js";import"./useGlobalEventListener-Cm_NgAlW.js";import"./useEventListener-YcbCw0KM.js";import"./callMultiple-ChqatQlo.js";import"./date-Z9F9_vk2.js";import"./CalendarHeader-CtV_2svi.js";import"./Clickable-yIrZH96-.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-bphv_Btw.js";import"./InputUtils-C1lt5OkO.js";import"./Footnote-DEEoTBIm.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dgmm5iJ_.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cq9HJdBy.js";import"./useStateWithPrev-DfKtIxym.js";import"./DropdownIcon-BkJ8kaVO.js";import"./children-CHwlOS0u.js";import"./dropdown_20-CvZtNoC4.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-qP_PfTnQ.js";import"./chevron_up_24-xaiJ1ycL.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-g0goFJ7o.js";import"./CustomScrollView-BZY8tbQd.js";import"./Popper-DhT02TVN.js";import"./useReferenceHiddenChangeCallback-DYfWerJO.js";import"./AppRootPortal-DBF1tBzb.js";import"./useColorScheme-AJAxISWR.js";import"./createPortal-CMKk957J.js";import"./ColorSchemeProvider-DrI_6v3H.js";import"./ConfigProviderOverride-Bu8U2Yft.js";import"./FloatingArrow-CKKoyZ-4.js";import"./usePlacementChangeCallback-CIqLvTp3.js";import"./floating-ui.react-dom-O8fuuV_i.js";import"./Spinner-CS7OnS2c.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-LN6mIn.js";import"./Paragraph-UsRkYy3D.js";import"./NativeSelect-CAmRpSfb.js";import"./FormField-0WfbJfLM.js";import"./Select.module-Y-9Nm8uF.js";import"./IconButton-DbMMimp0.js";import"./cancel_16-Ce9nrR5S.js";import"./chevron_left_outline_20-DgMNq689.js";import"./Calendar-DwrwjiZo.js";import"./useEnsuredControl-B8kDh8y7.js";import"./Button-DupvSECF.js";import"./FocusTrap-BYqeWfp-.js";import"./useFocusTrap-dFkQ6BrA.js";import"./useMutationObserver-DrADQeuc.js";import"./calendar_outline_20-DbVC5kIh.js";import"./clear_16--07WbYnl.js";import"./Removable-YvJNJGGv.js";import"./useConfigDirection-EbyEgXYN.js";import"./cancel_24-Cwv97N5Z.js";import"./FormItemTopLabel-CXPf3KpK.js";import"./Subhead-BEeAaWS4.js";import"./UnstyledTextField-KXrFaLda.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
