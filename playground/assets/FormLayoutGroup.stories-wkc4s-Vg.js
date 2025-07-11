import{j as r}from"./iframe-DDos8QSD.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-Bz0xcq_Y.js";import{F as o}from"./FormItem-Dzo1_vUz.js";import{I as p}from"./Input-BTlYR5LB.js";import{S as j}from"./Select-P42Rz4sl.js";import{V as a}from"./VisuallyHidden-Bn0ixRRD.js";import{F as n}from"./FormLayoutGroup-bxJLshbX.js";import"./DateInput.module-BTKZdnfr.js";import"./useBooleanState-BPdqgwEs.js";import"./useGlobalEventListener-Cf-K_pnj.js";import"./useEventListener-B5lUY6Nx.js";import"./callMultiple-ChqatQlo.js";import"./date-DAg-m4Qt.js";import"./CalendarHeader-1U13NKYV.js";import"./Clickable-CWxsm2KA.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-B0kWxOOO.js";import"./InputUtils-Dyyzogrc.js";import"./Footnote-DolN14Rp.js";import"./constants-BxoWbviK.js";import"./CustomSelect-NikWzeBX.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cy7ZAR8z.js";import"./useStateWithPrev-Cr0tutSw.js";import"./DropdownIcon-CqqFb8dt.js";import"./children-DM03Xori.js";import"./dropdown_20-Buu8AsnJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./chevron_up_24-RY23OIHq.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Da6ydPXD.js";import"./CustomScrollView-CiAPPumg.js";import"./Popper-BfobY8S-.js";import"./useReferenceHiddenChangeCallback-BNMZQcE1.js";import"./AppRootPortal-Ba3z6brt.js";import"./useColorScheme-DqjxLW2f.js";import"./createPortal-pZ_xEb8D.js";import"./ColorSchemeProvider-DlGS5IA_.js";import"./ConfigProviderOverride-CyArhSE9.js";import"./FloatingArrow-AYA0w7FM.js";import"./usePlacementChangeCallback-iLcROg5y.js";import"./Spinner-DXID7UE1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B3-0gwcs.js";import"./Paragraph-BV-p2vqx.js";import"./NativeSelect-Ei503CvN.js";import"./FormField-nH1PGum8.js";import"./Select.module-C2pqCS_H.js";import"./IconButton-C3mRDxD7.js";import"./cancel_16-Dv9sHB8j.js";import"./chevron_left_outline_20-C-_aw8Re.js";import"./Calendar-B4c0Z4Ja.js";import"./useEnsuredControl-DPf8E04f.js";import"./Button-Ky5QsFrC.js";import"./FocusTrap-kPWSjsD0.js";import"./useFocusTrap-CjwjAyWA.js";import"./useMutationObserver-CUQEMQVw.js";import"./calendar_outline_20-DzwCIN6F.js";import"./clear_16-IEFZOITA.js";import"./Removable-BkLTzKdK.js";import"./useConfigDirection-BVLc7CyO.js";import"./cancel_24-Cjk92GYx.js";import"./FormItemTopLabel-CG_reccQ.js";import"./Subhead-94kqPIfE.js";import"./UnstyledTextField-DBd6oyAk.js";const Er={title:"Forms/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
