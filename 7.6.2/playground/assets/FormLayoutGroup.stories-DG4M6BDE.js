import{j as r}from"./iframe-DdjuqQRP.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DqHztoHp.js";import{F as o}from"./FormItem-DQDBAB4x.js";import{I as p}from"./Input-CQUDv7MC.js";import{S as j}from"./Select-BFv-m45K.js";import{V as a}from"./VisuallyHidden-DYNTcNls.js";import{F as n}from"./FormLayoutGroup-Piq3z9E8.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-CIuiJrh7.js";import"./useBooleanState-Cr2Fa3Eh.js";import"./useGlobalEventListener-DUEl-XhX.js";import"./useEventListener-CEBYRcj_.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CBt_UsTB.js";import"./CalendarHeader-5xVdaabW.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-BrYIPFio.js";import"./Clickable-CMjmakJq.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DQHFk4OZ.js";import"./Footnote-BRLGHUUX.js";import"./CustomSelect-DWPx6nTC.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-B3c2Rm3u.js";import"./children-C7QEwmfw.js";import"./dropdown_20-5Fs_qo-o.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-lCdC9jQy.js";import"./CustomSelectDropdown-DDhqwrMM.js";import"./CustomScrollView-DQ0fV1r2.js";import"./Popper-CQiNpR-Y.js";import"./useReferenceHiddenChangeCallback-CpFVkuG8.js";import"./AppRootPortal-9OX03cZM.js";import"./useColorScheme-CYrptSaC.js";import"./createPortal-DlGqdrzK.js";import"./ColorSchemeProvider-Dc6luGdy.js";import"./ConfigProviderOverride-CI3Q5Goh.js";import"./FloatingArrow-Bqx-gDMR.js";import"./usePlacementChangeCallback-BojqPjpp.js";import"./floating-ui.react-dom-BBiLDifA.js";import"./Spinner-CywFefQr.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-I8i5aAO-.js";import"./Paragraph-MmTEWjmH.js";import"./NativeSelect-DLfmliXD.js";import"./FormField-DmeZQKFa.js";import"./useFocusWithin-BBPiXwue.js";import"./Select.module-DX6LcA9c.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B3vqP3ir.js";import"./cancel_16-CpUU2xC2.js";import"./useStateWithPrev-CIMqjGqU.js";import"./chevron_left_outline_20-BFaOXy4j.js";import"./useEnsuredControl-CdHy4ml_.js";import"./Button-h87Efeih.js";import"./FocusTrap-BGikfNIq.js";import"./useFocusTrap-Citeeza2.js";import"./useMutationObserver-DPXhKAC5.js";import"./calendar_outline_20-B3Gn4EZT.js";import"./clear_16-BlkSNVbY.js";import"./Removable-DGD-GK2i.js";import"./useConfigDirection-DvOEXyz7.js";import"./cancel_24-BfZOhllk.js";import"./FormItemTopLabel-B5F63XJQ.js";import"./Subhead-BeRrVUPj.js";import"./UnstyledTextField-gVrbnAyx.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
