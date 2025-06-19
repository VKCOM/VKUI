import{j as r}from"./iframe-k6odcVfq.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-nHNSobfV.js";import{F as o}from"./FormItem-DgAYSsMp.js";import{I as p}from"./Input-C0LUXxUN.js";import{S as j}from"./Select-0k8j9kfJ.js";import{V as a}from"./VisuallyHidden-D-1P4bzL.js";import{F as n}from"./FormLayoutGroup-D3Wym6es.js";import"./DateInput.module-AGo3nIsv.js";import"./useBooleanState-DLDFlLOy.js";import"./useGlobalEventListener-szCziyIJ.js";import"./useEventListener-ongRIzns.js";import"./callMultiple-ChqatQlo.js";import"./date-C8PZEeUp.js";import"./CalendarHeader-CAHF_G5f.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-CLnVjIR_.js";import"./InputUtils-C1ugcw4m.js";import"./Footnote-DHnfr3c7.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Dtl4_h2r.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Bs7KV-km.js";import"./useStateWithPrev-CT065FoZ.js";import"./DropdownIcon-DXMLLgl5.js";import"./children-CYWK7spH.js";import"./dropdown_20-DI5rRmPk.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./chevron_up_24-DUviWVsC.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CcSy1sjg.js";import"./CustomScrollView-BXdQts83.js";import"./Popper-Cymo0deb.js";import"./useReferenceHiddenChangeCallback-5rOssyve.js";import"./AppRootPortal-ide7xEku.js";import"./useColorScheme-DOgN8xDN.js";import"./createPortal-CP-_6ERR.js";import"./ColorSchemeProvider-Br_CwDQ8.js";import"./ConfigProviderOverride-ChT6I2Rd.js";import"./FloatingArrow-DaP7ccM2.js";import"./usePlacementChangeCallback-BTz75stv.js";import"./Spinner-COoI1Hcx.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-GesVWsbq.js";import"./Paragraph-DvqjBQ5B.js";import"./NativeSelect-DA9WT8fr.js";import"./FormField-fetq_Z25.js";import"./Select.module-ClxNp5L4.js";import"./IconButton-dHj7AK-z.js";import"./cancel_16-DSe4OQBX.js";import"./chevron_left_outline_20-DzkmYzqa.js";import"./Calendar-C-niSBMA.js";import"./useEnsuredControl-BaxW7pA0.js";import"./Button-BOH5rx1N.js";import"./FocusTrap-BO_9uuti.js";import"./useFocusTrap-CNN63JoG.js";import"./useMutationObserver-CpuDc0mt.js";import"./calendar_outline_20-Cx4bnPfE.js";import"./clear_16-DnpS3CYl.js";import"./Removable-DCOjXm07.js";import"./useConfigDirection-CxnUW9rE.js";import"./cancel_24-fcxuZKq0.js";import"./FormItemTopLabel-DEjlkVqn.js";import"./Subhead-CfBOCg31.js";import"./UnstyledTextField-BeYswI4x.js";const Er={title:"Forms/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
