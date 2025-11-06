import{j as r}from"./iframe-gnG2DlPI.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-CVKJKZAn.js";import{F as o}from"./FormItem-BOZz6Hik.js";import{I as p}from"./Input-Cp1VkOSm.js";import{S as j}from"./Select-BJ_uYpPF.js";import{V as a}from"./VisuallyHidden-CKM3u7Sn.js";import{F as n}from"./FormLayoutGroup-BgJ7dt-5.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-b5xAmfMB.js";import"./useBooleanState-CTKutUp4.js";import"./useGlobalEventListener-BrlIfad1.js";import"./useEventListener-BZo6MitC.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CO-ZqXXs.js";import"./CalendarHeader-DnFziZa5.js";import"./useFocusVisibleClassName-CBr5fuHP.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-03YLyRIn.js";import"./Clickable-CEzYBb4W.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bge3OIaY.js";import"./Footnote-CONk622S.js";import"./CustomSelect-CzylMRq9.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3MQ6Zfj.js";import"./children-f2sIKLUn.js";import"./dropdown_20-BBKaGv9g.js";import"./SvgIconRootV2-DT4nia1k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DoyCz406.js";import"./CustomSelectDropdown-C16WVPUt.js";import"./CustomScrollView-DrMf6IgL.js";import"./Popper-DC-k3Bn1.js";import"./useReferenceHiddenChangeCallback-DFZxSJq2.js";import"./AppRootPortal-Czy3ESyL.js";import"./useColorScheme-vbaHcGpn.js";import"./createPortal-B06EttXw.js";import"./ColorSchemeProvider-BCLoO_b0.js";import"./ConfigProviderOverride-BGC5vwuB.js";import"./FloatingArrow-BxfAO7YE.js";import"./usePlacementChangeCallback-BKIMntET.js";import"./floating-ui.react-dom-B5yNzxXa.js";import"./Spinner-CpE2KS8o.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-htb9b17L.js";import"./Paragraph-C-NM1n3-.js";import"./NativeSelect-CDarQ2Cp.js";import"./FormField-BCUJfz82.js";import"./useFocusWithin-XtLgfp-_.js";import"./Select.module-DzrzSPIQ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cf4dAO-u.js";import"./cancel_16-CitrMCMl.js";import"./useStateWithPrev-CHGTfIix.js";import"./chevron_left_outline_20-S4du1SZv.js";import"./useEnsuredControl-25o_zjEi.js";import"./Button-0nci1iZm.js";import"./FocusTrap-2yAVIkw9.js";import"./useFocusTrap-BxxxDrxm.js";import"./useMutationObserver-BgOYgPZV.js";import"./calendar_outline_20-C9qm4qTN.js";import"./clear_16-DIY2ubBj.js";import"./Removable-DDpdMjUf.js";import"./useConfigDirection-Dd3ud1i-.js";import"./cancel_24-D159N_1T.js";import"./FormItemTopLabel-DQwoSTnR.js";import"./Subhead-CTHKnpeS.js";import"./UnstyledTextField-DkIAIkd2.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
