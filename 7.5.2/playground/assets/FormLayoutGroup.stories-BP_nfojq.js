import{j as r}from"./iframe-BzXYREd1.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-BqHs2Azy.js";import{F as o}from"./FormItem-CYWBjSDx.js";import{I as p}from"./Input-Vc2MweMx.js";import{S as j}from"./Select-Cium-v1N.js";import{V as a}from"./VisuallyHidden-CGoUHCA9.js";import{F as n}from"./FormLayoutGroup-BAhM2Jpq.js";import"./DateInput.module-TA5sJHz6.js";import"./useBooleanState-CTryDGGC.js";import"./useGlobalEventListener-B6vpDla7.js";import"./useEventListener-BVPfg_EC.js";import"./callMultiple-ChqatQlo.js";import"./date-hgSAX-20.js";import"./CalendarHeader-BWjYhd4-.js";import"./Clickable-DoSI9phS.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CEn82fQ0.js";import"./InputUtils-DULFm0M2.js";import"./Footnote-ChYIirVi.js";import"./constants-BxoWbviK.js";import"./CustomSelect-DnEqJaTG.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-vRJD8Q-q.js";import"./useStateWithPrev-DIRc7sTN.js";import"./DropdownIcon-dYyUG-ER.js";import"./children-Cg6pG0uN.js";import"./dropdown_20-BW-ZuK3W.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-B6ey8g7O.js";import"./chevron_up_24-B_k7NpvP.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CTieeYsw.js";import"./CustomScrollView-Bjlru_-d.js";import"./Popper-CRKef3MV.js";import"./useReferenceHiddenChangeCallback-2xtRrg1t.js";import"./AppRootPortal-DalSlULG.js";import"./useColorScheme-BFL8-8ar.js";import"./createPortal-udDNqKIg.js";import"./ColorSchemeProvider-CpCL9cxM.js";import"./ConfigProviderOverride-Cadcpf05.js";import"./FloatingArrow-C9T5GfxJ.js";import"./usePlacementChangeCallback-Cr19q53p.js";import"./floating-ui.react-dom-gQYdXTBL.js";import"./Spinner-CKaqwWiI.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CALDRXE3.js";import"./Paragraph-IO_n1Dux.js";import"./NativeSelect-DPfma8_h.js";import"./FormField-DMycdJEz.js";import"./Select.module-B_-em5IN.js";import"./IconButton-DmYSjyYz.js";import"./cancel_16-D3jkawaL.js";import"./chevron_left_outline_20-DVvIs5zx.js";import"./Calendar-Djk9dLKn.js";import"./useEnsuredControl-ZZij51Ca.js";import"./Button-C3UHKLcX.js";import"./FocusTrap-BL9uWNnt.js";import"./useFocusTrap-Orx0aYnt.js";import"./useMutationObserver-DPiiTATP.js";import"./calendar_outline_20-uSZbNE9d.js";import"./clear_16-Cqf9WRS1.js";import"./Removable-CqorhSR_.js";import"./useConfigDirection-EqB_hZQh.js";import"./cancel_24-CYr0_4vC.js";import"./FormItemTopLabel-DYmFh4Lc.js";import"./Subhead-fVUucS5M.js";import"./UnstyledTextField-CI6zCtHO.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
