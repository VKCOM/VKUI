import{j as r}from"./iframe-BW2_2Sqh.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-SkhORBpu.js";import{F as o}from"./FormItem-7Zww93ws.js";import{I as p}from"./Input-9k0PNIUP.js";import{S as j}from"./Select-5thsxfsv.js";import{V as a}from"./VisuallyHidden-0_L4g8bM.js";import{F as n}from"./FormLayoutGroup-BabT0ym2.js";import"./DateInput.module-DqenPwYu.js";import"./useBooleanState-zh8E_smZ.js";import"./useGlobalEventListener-DBCEN9bj.js";import"./useEventListener-DphI_omp.js";import"./callMultiple-ChqatQlo.js";import"./date-Bo_VOar-.js";import"./CalendarHeader-42OaW77O.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D_Pc41Ky.js";import"./InputUtils-DYuPlK4j.js";import"./Footnote-DqSrPGSc.js";import"./constants-BxoWbviK.js";import"./CustomSelect-Di5uuXSi.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cv8cds6L.js";import"./useStateWithPrev-CMG94Yfr.js";import"./DropdownIcon-C1GCze_v.js";import"./children-Dc0ieD8_.js";import"./dropdown_20-BhtxCkzn.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./chevron_up_24-PXJae6b0.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-BBnuosIF.js";import"./CustomScrollView-DrGLqxxz.js";import"./Popper-CvXRdepB.js";import"./useReferenceHiddenChangeCallback-D-Y2YXE4.js";import"./AppRootPortal-F6rxXrpM.js";import"./useColorScheme-DfFLwB8B.js";import"./createPortal-BgwYQhDs.js";import"./ColorSchemeProvider-DNcZYulN.js";import"./ConfigProviderOverride-DKz7Q2_Q.js";import"./FloatingArrow-BwItcUE2.js";import"./usePlacementChangeCallback-B_7WiNet.js";import"./Spinner-Ck410QJW.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DbZP3vkW.js";import"./Paragraph-DwKlZasN.js";import"./NativeSelect-DcEvGgJn.js";import"./FormField-bePIa3wK.js";import"./Select.module-ESI76py7.js";import"./IconButton-DMIGpMdh.js";import"./cancel_16-Cy5lofFG.js";import"./chevron_left_outline_20-EU2jxazt.js";import"./Calendar-CgwU8m4J.js";import"./useEnsuredControl-C3ZVk8ic.js";import"./Button-B8UDwXDh.js";import"./FocusTrap-DmokX27Q.js";import"./useFocusTrap-CCxzzpOC.js";import"./useMutationObserver-Dl_rwnc3.js";import"./calendar_outline_20-DnMMdBwX.js";import"./clear_16-Blu4NwUm.js";import"./Removable-C1txKSic.js";import"./useConfigDirection-DNUhHzMQ.js";import"./cancel_24-CE2mq3tL.js";import"./FormItemTopLabel-BX_6yTrg.js";import"./Subhead-BlMIzlRi.js";import"./UnstyledTextField-Bz4MUGPO.js";const Er={title:"Forms/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
