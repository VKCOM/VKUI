import{j as r}from"./iframe-D2wkiYbA.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-CK__J0_P.js";import{F as o}from"./FormItem-D5p3HRbg.js";import{I as p}from"./Input-BuQsNfpY.js";import{S as j}from"./Select-BYz3azRS.js";import{V as a}from"./VisuallyHidden-ChTSElWV.js";import{F as n}from"./FormLayoutGroup-DFi5oXWJ.js";import"./DateInput.module-DidqATac.js";import"./useBooleanState--gBTG5GA.js";import"./useGlobalEventListener-dinbl7W7.js";import"./useEventListener-CNPrbSFG.js";import"./callMultiple-ChqatQlo.js";import"./date-CRHi-Frl.js";import"./CalendarHeader-Bnh1TsEc.js";import"./Clickable-BU3u--9M.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-D1Sdra8V.js";import"./InputUtils-QU0WrbnN.js";import"./Footnote-4HzFQCBl.js";import"./constants-BxoWbviK.js";import"./CustomSelect-B9o8TK7v.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-Cqparjzv.js";import"./useStateWithPrev-BpUU0Czk.js";import"./DropdownIcon-C60GCJD6.js";import"./children-Cn4G3p10.js";import"./dropdown_20-YG0nvhiD.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CJ3PYzhx.js";import"./chevron_up_24-D654iwo3.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-B6sFy9YY.js";import"./CustomScrollView-DpTAfiv1.js";import"./Popper-CZeGsxqj.js";import"./useReferenceHiddenChangeCallback-CXW6Zd17.js";import"./AppRootPortal-CD39ER_Q.js";import"./useColorScheme-DEY2vJy9.js";import"./createPortal-DmNeOwZo.js";import"./ColorSchemeProvider-CST3LDrj.js";import"./ConfigProviderOverride-llMEn7P1.js";import"./FloatingArrow-H9XdygxR.js";import"./usePlacementChangeCallback-B0_BqOZm.js";import"./floating-ui.react-dom-Cab1-L-I.js";import"./Spinner-DVe93hh_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Qi33PTeX.js";import"./Paragraph-DQR4gM98.js";import"./NativeSelect-D1bAWJvM.js";import"./FormField-BCe2hBV2.js";import"./Select.module-JzEuNKdK.js";import"./IconButton-DhTwf-xi.js";import"./cancel_16-Btdg1xUF.js";import"./chevron_left_outline_20-CFkuEpie.js";import"./Calendar-CZLXS8i-.js";import"./useEnsuredControl-BM8G-vFy.js";import"./Button-DffPUQY4.js";import"./FocusTrap-Dwm8FY5s.js";import"./useFocusTrap-IoVotEbM.js";import"./useMutationObserver-Srju1l6k.js";import"./calendar_outline_20-CjyIMZ9j.js";import"./clear_16-nOcKiAwv.js";import"./Removable-DRvNecvI.js";import"./useConfigDirection-DrnKoeri.js";import"./cancel_24-D23uiKG2.js";import"./FormItemTopLabel-aSbvpA0d.js";import"./Subhead-UUuxM49Y.js";import"./UnstyledTextField-I-gtSAa_.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
