import{j as r}from"./iframe-CjlHPZNU.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-CubDNz7d.js";import{F as o}from"./FormItem-Bg8wwssc.js";import{I as p}from"./Input-4eJG4krs.js";import{S as c}from"./Select-CzZ6iFuf.js";import{V as a}from"./VisuallyHidden-BhHQTREx.js";import{F as n}from"./FormLayoutGroup-CbNy64MT.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DIz6g5lv.js";import"./useBooleanState-Byxj-TXc.js";import"./useGlobalEventListener-B-Bh84II.js";import"./useEventListener-B0Sz5sam.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DsWBhFnM.js";import"./CalendarHeader-BjQc82Sw.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-B5zgJODm.js";import"./Clickable-CtpofEGa.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DGnaA_Jg.js";import"./Footnote-OilvUFbZ.js";import"./CustomSelect-DBxHX6fS.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CYnCbTns.js";import"./children-DXLPnz61.js";import"./dropdown_20-wvnefOap.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-Dmgv5k62.js";import"./CustomSelectDropdown-B3w7Q0Ob.js";import"./CustomScrollView-CjlOR93R.js";import"./Popper-BxTlfMRp.js";import"./useReferenceHiddenChangeCallback-BYBOPzRw.js";import"./AppRootPortal-D2B8wiWM.js";import"./useColorScheme-BIeu6EL3.js";import"./createPortal-CZhxf4lQ.js";import"./ColorSchemeProvider-DgPkTADU.js";import"./ConfigProviderOverride-BAEtQBTT.js";import"./FloatingArrow-CXk5BXWM.js";import"./usePlacementChangeCallback-BUGqU92G.js";import"./floating-ui.react-dom-BOvPne9Z.js";import"./Spinner-BqL1JLHM.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-3fHYt2O8.js";import"./Paragraph-xO9VNyZg.js";import"./NativeSelect-CjxDByOa.js";import"./FormField-DDneCC7H.js";import"./useFocusWithin-CtqEkwtt.js";import"./Select.module-Dq_Q3yEj.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DL_Qecp_.js";import"./cancel_16-H58NJ25u.js";import"./useStateWithPrev-ZsPCJv_t.js";import"./chevron_left_outline_20-lPTczRg2.js";import"./useEnsuredControl-B_VfQasx.js";import"./Button-eWkGETfu.js";import"./FocusTrap-juMAmhQs.js";import"./useFocusTrap-Bi2qV_ik.js";import"./useMutationObserver-CeFU5bUT.js";import"./calendar_outline_20-MeU_WSkr.js";import"./clear_16-CDlNe0mR.js";import"./Removable-8x1bU61T.js";import"./useConfigDirection-CtCMtXRC.js";import"./cancel_24-DoQTGG5W.js";import"./FormItemTopLabel-D23xobiA.js";import"./Subhead-LlQLYw53.js";import"./UnstyledTextField-DljJJoFd.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const zr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,zr as __namedExportsOrder,_r as default};
