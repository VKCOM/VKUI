import{j as r}from"./iframe-BqdgnJE0.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-Cad9Y93P.js";import{F as o}from"./FormItem-Bf52fXjZ.js";import{I as p}from"./Input-C0Z8DasI.js";import{S as c}from"./Select-7eST6mBH.js";import{V as a}from"./VisuallyHidden-B5KO6Y_w.js";import{F as n}from"./FormLayoutGroup-mUWieFIg.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DNMvpGJd.js";import"./useBooleanState-DTN3Xx5u.js";import"./useGlobalEventListener-BJBa7VdU.js";import"./useEventListener-C8S8CDSH.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DjQusL0q.js";import"./CalendarHeader-CU_lwp4p.js";import"./useState-CWGeE8jE.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C5iPmffX.js";import"./Tappable-C0ES09y8.js";import"./Clickable-_lommW0d.js";import"./InputUtils-ESzsNRN2.js";import"./Footnote-Bj-28HDg.js";import"./CustomSelect-BVhw21dJ.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BFWrXu6f.js";import"./children-rmDURaUl.js";import"./dropdown_20-Blxc57wu.js";import"./SvgIconRootV2-BFRN-bnB.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-BtsVjg8Z.js";import"./CustomSelectDropdown-DmVF0BRV.js";import"./CustomScrollView-CwRuv418.js";import"./Popper-DmnzI0Bc.js";import"./useReferenceHiddenChangeCallback-CIJGa2Ph.js";import"./AppRootPortal-DRaDzdXH.js";import"./useColorScheme-B3VXvXnZ.js";import"./createPortal-CfJRRh6m.js";import"./ColorSchemeProvider-BPL5atgs.js";import"./ConfigProviderOverride-BYZnQAAH.js";import"./FloatingArrow-Bdu_em3L.js";import"./usePlacementChangeCallback-DKDruSlP.js";import"./floating-ui.react-dom-Jxcy3D_W.js";import"./Spinner-CHRizUnE.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_pXol92.js";import"./Paragraph-CWuOgUOG.js";import"./NativeSelect-D3oNe4Xd.js";import"./FormField-Cg65d97h.js";import"./useFocusWithin-7VHk4Gs5.js";import"./Select.module-xTktcizs.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7jcJUXx.js";import"./cancel_16-GeHSc2Gr.js";import"./useStateWithPrev-Cbm2nfMX.js";import"./chevron_left_outline_20-C8nGg7bJ.js";import"./useEnsuredControl-BBQaujFI.js";import"./Button-BBUIsY6v.js";import"./FocusTrap-D8HWFNvo.js";import"./useFocusTrap-DDyVh1XH.js";import"./useMutationObserver-lKnFJcNz.js";import"./calendar_outline_20-DkLoKxvH.js";import"./clear_16-DLttciY9.js";import"./Removable-CQjuFWD6.js";import"./useConfigDirection-D5bRs-MF.js";import"./cancel_24-DLsb6enM.js";import"./FormItemTopLabel-CWwcsuZB.js";import"./Subhead-ubP323Lg.js";import"./UnstyledTextField-DEee9VX2.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
