import{j as r}from"./iframe-D-vjmezP.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BYUAg32B.js";import{F as o}from"./FormItem-vi7slCo6.js";import{I as p}from"./Input-I59RC-3d.js";import{S as c}from"./Select-DAjq6GUa.js";import{V as a}from"./VisuallyHidden-Ct4Hq9SY.js";import{F as n}from"./FormLayoutGroup-iaT8OjZV.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-BfM1oPE4.js";import"./useBooleanState-CJ3ersJo.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-CJjuXJTQ.js";import"./Calendar-DdkoS38y.js";import"./CalendarHeader-DQ9VY9Sy.js";import"./useState-D4ynhpUN.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C-DOzShm.js";import"./Tappable-DMeLy5rU.js";import"./Clickable-BMFGYTS6.js";import"./InputUtils-DJ5DGhwp.js";import"./Footnote-DApQXU2r.js";import"./CustomSelect-BztTnfNo.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClEllO8Z.js";import"./children-DmJGU09q.js";import"./dropdown_20-CaZRtpS4.js";import"./SvgIconRootV2-9tDLLMqJ.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-D5WwjfBv.js";import"./CustomSelectDropdown-BY1VNd18.js";import"./CustomScrollView-CFBg-_BN.js";import"./Popper-BNFHN0Tn.js";import"./useReferenceHiddenChangeCallback-DQvcIGyb.js";import"./AppRootPortal-CyZtHULY.js";import"./useColorScheme-B_PTVyib.js";import"./createPortal-Dv77p3HH.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-n4W2EG.js";import"./ConfigProviderOverride-BVw-qRt5.js";import"./FloatingArrow-DyGZMMOG.js";import"./usePlacementChangeCallback-BZEnW3tw.js";import"./floating-ui.react-dom-CT8q3J_f.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CGq4yNx9.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Jzgl7PTK.js";import"./Paragraph-Btq89l8U.js";import"./NativeSelect-8KWHHYjG.js";import"./FormField-DoheaqQo.js";import"./useFocusWithin-BzKDlGXW.js";import"./Select.module-BCbAkFOY.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DrzcArVi.js";import"./cancel_16-wQUalFDs.js";import"./useStateWithPrev-CEbDOLKQ.js";import"./chevron_left_outline_20-06dzqiB5.js";import"./useEnsuredControl-DBfsmsB8.js";import"./Button-iOPheJU3.js";import"./FocusTrap-bmUu0BLP.js";import"./useMutationObserver-Dd7ppQ1q.js";import"./calendar_outline_20-DmIDzIOk.js";import"./clear_16-qZA4Frwf.js";import"./Removable-Db8Ui--t.js";import"./useConfigDirection-BUJREPxm.js";import"./cancel_24-B55ygFBW.js";import"./FormItemTopLabel-DgFuEBU_.js";import"./Subhead-DCgRz-zo.js";import"./UnstyledTextField-B6Z4YAuX.js";const Gr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _r=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,_r as __namedExportsOrder,Gr as default};
