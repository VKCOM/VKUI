import{j as r}from"./iframe-CNYWi-tv.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DRINTf8L.js";import{F as o}from"./FormItem-TffBaOrr.js";import{I as p}from"./Input-B_C71P6e.js";import{S as j}from"./Select-CDsW5xe7.js";import{V as a}from"./VisuallyHidden-CIbqknZb.js";import{F as n}from"./FormLayoutGroup-BnhMfMMs.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-VZThH9pP.js";import"./useBooleanState-C7K6InNc.js";import"./useGlobalEventListener-JcQvOfhM.js";import"./useEventListener-DZQbwQUn.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-Dc-fpZv4.js";import"./CalendarHeader-UWx_imzm.js";import"./useFocusVisibleClassName-CrxrpfB8.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-Bt2S1yMc.js";import"./Clickable-PPkKMUDS.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Bfhccirq.js";import"./Footnote-BYeJ88ZB.js";import"./CustomSelect-CA3LhGpT.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CK-q77tq.js";import"./children-D9VTJ2FF.js";import"./dropdown_20-xOXOAUZ-.js";import"./SvgIconRootV2-gYxZaoy5.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-B5mApQ7w.js";import"./CustomSelectDropdown-DfgUhNMb.js";import"./CustomScrollView-BsfvooqJ.js";import"./Popper-D5E7M93E.js";import"./useReferenceHiddenChangeCallback-DrJqA32s.js";import"./AppRootPortal-DIw5dSpY.js";import"./useColorScheme-Cfkm4fLV.js";import"./createPortal-Rj5gNAak.js";import"./ColorSchemeProvider-CnyWnc2N.js";import"./ConfigProviderOverride-HCjSxczU.js";import"./FloatingArrow-D53bG7gO.js";import"./usePlacementChangeCallback-Cojz57y6.js";import"./floating-ui.react-dom-B41PFPvr.js";import"./Spinner-CLko12L1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C8yk_WE_.js";import"./Paragraph-BlAo2fn7.js";import"./NativeSelect-B1QstsTz.js";import"./FormField-Ddj740Jf.js";import"./useFocusWithin-DPWwC_DA.js";import"./Select.module-CMu9xKIa.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-1hwVmaZf.js";import"./cancel_16-BaRnUpV1.js";import"./useStateWithPrev-CQgWZ7iu.js";import"./chevron_left_outline_20-LPpqaviN.js";import"./useEnsuredControl-BpSX3TsH.js";import"./Button-CRnRhdN6.js";import"./FocusTrap-wAa-uW1e.js";import"./useFocusTrap-B9P9em3P.js";import"./useMutationObserver-K5r2VJks.js";import"./calendar_outline_20-Bd1gF4uT.js";import"./clear_16-DAX7ZSXs.js";import"./Removable-DXEozIKZ.js";import"./useConfigDirection-C_6xjTM7.js";import"./cancel_24-CquaKNSW.js";import"./FormItemTopLabel-Bb32qR9k.js";import"./Subhead-BeVsNNt7.js";import"./UnstyledTextField-KKy2mfWc.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
