import{j as r}from"./iframe-KtxhC7Vu.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BV79cWZ8.js";import{F as o}from"./FormItem-CILGV80L.js";import{I as p}from"./Input-vdvE0TeS.js";import{S as c}from"./Select-ekvIX-6m.js";import{V as a}from"./VisuallyHidden-8TqRJKxj.js";import{F as n}from"./FormLayoutGroup-CE7VYDlk.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-QMYMMZ_U.js";import"./useBooleanState-DcDcwgzq.js";import"./useGlobalEventListener-CospsVY6.js";import"./useEventListener-DNTY0hjA.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BexT8DB3.js";import"./CalendarHeader-GO4ikmjU.js";import"./useState-D1V9wQJY.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./Tappable-BHKu77gD.js";import"./Clickable-zoSQNYwS.js";import"./InputUtils-BueJ8J_Y.js";import"./Footnote-lwK0vUsu.js";import"./CustomSelect-DaqBuU38.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-B0mPTmqN.js";import"./children-BMwCSNmp.js";import"./dropdown_20-C2jnygJR.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-FW-l4FSN.js";import"./CustomSelectDropdown-CwXH4hYl.js";import"./CustomScrollView-DbnS4Q0q.js";import"./Popper-Bi9VpZic.js";import"./useReferenceHiddenChangeCallback-D2CAbs8d.js";import"./AppRootPortal-CebRltsZ.js";import"./useColorScheme-Ujmv4Cvg.js";import"./createPortal-Tz19WZo6.js";import"./ColorSchemeProvider-B2dHDCmM.js";import"./ConfigProviderOverride-ieUFn-Fm.js";import"./FloatingArrow-x9VSrLhI.js";import"./usePlacementChangeCallback-D7f72DhY.js";import"./floating-ui.react-dom-aiJhAjls.js";import"./Spinner-kWF4Wnla.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DwIELNai.js";import"./Paragraph-DwCH17iY.js";import"./NativeSelect-udiubFLU.js";import"./FormField-B5GJ46_3.js";import"./useFocusWithin-Do1ICwdO.js";import"./Select.module-BkIVIfSU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DubnwX4y.js";import"./cancel_16-B1WNNliN.js";import"./useStateWithPrev-BUgHxQGV.js";import"./chevron_left_outline_20-DwzXMy22.js";import"./useEnsuredControl-Dalnicbc.js";import"./Button-Md1sLJHS.js";import"./FocusTrap-D7WS1G7k.js";import"./useFocusTrap-C5b8ZMwl.js";import"./useMutationObserver-gH8v0RQA.js";import"./calendar_outline_20-BoJHlkkD.js";import"./clear_16-wnvVD4bX.js";import"./Removable-CpxKd1Q1.js";import"./useConfigDirection-CX53j0Ve.js";import"./cancel_24-B2bpUHqP.js";import"./FormItemTopLabel-Dkb-hW-z.js";import"./Subhead-AWezZjK6.js";import"./UnstyledTextField-Cqqod_y0.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
