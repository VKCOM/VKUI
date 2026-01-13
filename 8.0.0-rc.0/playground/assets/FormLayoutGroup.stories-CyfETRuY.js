import{j as r}from"./iframe-DP0c1f9Y.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-z_D_Dgjt.js";import{F as o}from"./FormItem-BkC2ERPK.js";import{I as p}from"./Input-Cj8wWljh.js";import{S as c}from"./Select-C9_4Uy2F.js";import{V as a}from"./VisuallyHidden-CsBByQHJ.js";import{F as n}from"./FormLayoutGroup-BkCsS-lz.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-Bg4inBFx.js";import"./useBooleanState-CFH-Qq-E.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-XvABs4cA.js";import"./Calendar-DDXRyZYB.js";import"./CalendarHeader-B3Lk4PWw.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./Tappable-B2ZLiGfg.js";import"./Clickable-D6186WJE.js";import"./InputUtils-DpvhaK12.js";import"./Footnote-DJoQQEv9.js";import"./CustomSelect-DxFm8Dup.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-Cj-cillC.js";import"./children-Bag1sNQQ.js";import"./dropdown_20-BQnMRUMx.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./chevron_up_24-BwG-n7bB.js";import"./CustomSelectDropdown-CHa8KMS6.js";import"./CustomScrollView-CCCcf5Bk.js";import"./Popper-BFtfb9wE.js";import"./useReferenceHiddenChangeCallback-btJOraww.js";import"./AppRootPortal-DtFYcz06.js";import"./useColorScheme-DuZucal0.js";import"./createPortal-DvBpJvds.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-BsiYmjTD.js";import"./ConfigProviderOverride-Dv9z0Xug.js";import"./FloatingArrow-CAd55EkA.js";import"./usePlacementChangeCallback-DsJnrfKn.js";import"./floating-ui.react-dom-C28MpNR-.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Bk4bS91d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BWyM2ouI.js";import"./Paragraph-o90iONah.js";import"./NativeSelect-Matn3s-N.js";import"./FormField-CPyOAnhV.js";import"./useFocusWithin-CvS6Su5o.js";import"./Select.module-NB4erb4C.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DX6zaS9g.js";import"./cancel_16-CKShxaQm.js";import"./useStateWithPrev-CZTRyD_R.js";import"./chevron_left_outline_20-CUvTDHV1.js";import"./useEnsuredControl-BQTVtCet.js";import"./Button-DYe3R3CT.js";import"./FocusTrap-F0reUUyC.js";import"./useMutationObserver-tL6yc0PX.js";import"./calendar_outline_20-B-WbudFx.js";import"./clear_16-p70laEFK.js";import"./Removable-BE-e-wqK.js";import"./useConfigDirection-BNkwGAZM.js";import"./cancel_24-Cb6nnPMq.js";import"./FormItemTopLabel-wYveWCaL.js";import"./Subhead-CZ6CT0II.js";import"./UnstyledTextField-uiBGtoLb.js";const Sr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Gr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,Gr as __namedExportsOrder,Sr as default};
