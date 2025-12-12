import{j as r}from"./iframe-Db0SwwYs.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-CsPo6QBs.js";import{F as o}from"./FormItem-C87O79iD.js";import{I as p}from"./Input-BFXGe7yV.js";import{S as c}from"./Select-6aIX1z4d.js";import{V as a}from"./VisuallyHidden-CZDmCAU7.js";import{F as n}from"./FormLayoutGroup-Bzlq5QoM.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-C5dK5aJP.js";import"./useBooleanState-CpWdKk8s.js";import"./useGlobalEventListener-MEUpvqsm.js";import"./useEventListener-DVPMElTJ.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BMfdWGVn.js";import"./CalendarHeader-DxkK0Xhe.js";import"./useState-_pDIeHd1.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./Tappable-DPDNr6uV.js";import"./Clickable-QJYjPwzV.js";import"./InputUtils-DU65P5CC.js";import"./Footnote-CJOdhFdd.js";import"./CustomSelect-CZTYq96-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BhedKSLh.js";import"./children-BEQ7OHl7.js";import"./dropdown_20-VUDXxbjX.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-C75ZrWHv.js";import"./CustomSelectDropdown-GCn6rg4P.js";import"./CustomScrollView-Z0P7fIf-.js";import"./Popper-hRMVJDOY.js";import"./useReferenceHiddenChangeCallback-BVfL_SN8.js";import"./AppRootPortal-D20gzpUj.js";import"./useColorScheme-BTSYlb-o.js";import"./createPortal-BhjAg26d.js";import"./ColorSchemeProvider-DZTdfkVT.js";import"./ConfigProviderOverride-CKegTf3s.js";import"./FloatingArrow-A8JFHQho.js";import"./usePlacementChangeCallback-Wr5lETKk.js";import"./floating-ui.react-dom-CXE2iVpv.js";import"./Spinner-Dy7IzRwA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Ch_QrsP6.js";import"./Paragraph-Bv0EtTo4.js";import"./NativeSelect-BLEWKHxb.js";import"./FormField-DrhdvO2i.js";import"./useFocusWithin-CRR7Gu3h.js";import"./Select.module-Dk8aoWC7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-f4wUPwMX.js";import"./cancel_16-UMpt-5Dk.js";import"./useStateWithPrev-CUZpM60q.js";import"./chevron_left_outline_20-Bm5ycyz6.js";import"./useEnsuredControl-DC7ucSqy.js";import"./Button-DKPWjiCT.js";import"./FocusTrap-CJOJYnOF.js";import"./useFocusTrap-BD2Piuw5.js";import"./useMutationObserver-B_vgSH7b.js";import"./calendar_outline_20-J6c9QNj3.js";import"./clear_16-QrPZ1Hqn.js";import"./Removable-DLHJRszG.js";import"./useConfigDirection-BSBBgTCk.js";import"./cancel_24-D88fKsYf.js";import"./FormItemTopLabel-fFmJSeLu.js";import"./Subhead-C2LPCYB7.js";import"./UnstyledTextField-xQ6PPR9j.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
