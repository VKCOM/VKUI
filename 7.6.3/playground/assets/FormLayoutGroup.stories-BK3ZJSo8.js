import{j as r}from"./iframe-OJ1C6fMc.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-lWW3idis.js";import{F as o}from"./FormItem-3SXfYpQi.js";import{I as p}from"./Input-DUNUbt5N.js";import{S as j}from"./Select-CEd3P9ht.js";import{V as a}from"./VisuallyHidden-BNf-15JI.js";import{F as n}from"./FormLayoutGroup-XqPDbyct.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-_PHW5C2W.js";import"./useBooleanState-4rhuh7F8.js";import"./useGlobalEventListener-D2antHno.js";import"./useEventListener-5I8DZFbr.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DE_2revr.js";import"./CalendarHeader-B1l5sXtp.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-BvI9Mb-u.js";import"./Clickable-DKzQKlVj.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CNd9WeYt.js";import"./Footnote-JF6_a0Sk.js";import"./CustomSelect-COF9668r.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-DNz6wE2Y.js";import"./children-BFlZwmuK.js";import"./dropdown_20-iZaOpOGh.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-BUqUAFiY.js";import"./CustomSelectDropdown-_XCeU4DA.js";import"./CustomScrollView-DD3vDONo.js";import"./Popper-NL2v58jg.js";import"./useReferenceHiddenChangeCallback-BxabS6iI.js";import"./AppRootPortal-BQNLj1SY.js";import"./useColorScheme-Bl13B3Wz.js";import"./createPortal-BUdXaYYW.js";import"./ColorSchemeProvider-CI-3hzwt.js";import"./ConfigProviderOverride-iLzFNrjD.js";import"./FloatingArrow-B3NLPmUL.js";import"./usePlacementChangeCallback-B257mnAK.js";import"./floating-ui.react-dom-DVR29jSp.js";import"./Spinner-B_HHBggy.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-mJAXpot3.js";import"./Paragraph-BmysOZB8.js";import"./NativeSelect-DS_lymh-.js";import"./FormField-CWpBf-Vc.js";import"./useFocusWithin-a-EzjXb7.js";import"./Select.module-YYXaApUn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Bt_Y57sB.js";import"./cancel_16-Ca-rlfQm.js";import"./useStateWithPrev-Bl-OLVQ9.js";import"./chevron_left_outline_20-aYVHemST.js";import"./useEnsuredControl-EZ1T13Lg.js";import"./Button-CRQbp7pl.js";import"./FocusTrap-D7VNxV-L.js";import"./useFocusTrap-BOUMNou6.js";import"./useMutationObserver-bZJaBeyU.js";import"./calendar_outline_20-DaSNnjf7.js";import"./clear_16-DvL6wfKE.js";import"./Removable-XkV2WchN.js";import"./useConfigDirection-jCjot1AW.js";import"./cancel_24-DkgWneF3.js";import"./FormItemTopLabel-vJLQLBmy.js";import"./Subhead-DtXruDSo.js";import"./UnstyledTextField-Yc4SoTp5.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
