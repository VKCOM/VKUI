import{j as r}from"./iframe-ChnjXsIu.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BSkiR60R.js";import{F as o}from"./FormItem-keR5Xb2S.js";import{I as p}from"./Input-bVlH7BQy.js";import{S as c}from"./Select-zLf0SSkb.js";import{V as a}from"./VisuallyHidden-C0GQz0ke.js";import{F as n}from"./FormLayoutGroup-BcBuEis2.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DPQCtX3u.js";import"./useBooleanState-B9nW9Jnx.js";import"./useGlobalEventListener-D4SgjmKz.js";import"./useEventListener-BRTI2b5J.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CBTrwaCM.js";import"./CalendarHeader-Bx1RbLSq.js";import"./useState-ZDhvxYGh.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./Tappable-BDf7UE95.js";import"./Clickable-zj2UWImj.js";import"./InputUtils-D67zZ2HF.js";import"./Footnote-a8vRHGoF.js";import"./CustomSelect-cyLzpzOq.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-h4uxWYEd.js";import"./children-CZfmS9px.js";import"./dropdown_20-Dky_QlsQ.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-BDRpf73z.js";import"./CustomSelectDropdown-CrQtvAdb.js";import"./CustomScrollView-CXMjEdip.js";import"./Popper-Bf4yDOIo.js";import"./useReferenceHiddenChangeCallback-2W8QGwUV.js";import"./AppRootPortal-wSVjQS-M.js";import"./useColorScheme-BoHVEH1Y.js";import"./createPortal-psqf4yVg.js";import"./ColorSchemeProvider-DwB0ecjh.js";import"./ConfigProviderOverride-0ZAKsyIC.js";import"./FloatingArrow-BeHWd8nc.js";import"./usePlacementChangeCallback-Cm3J6Vod.js";import"./floating-ui.react-dom-Dvn3YOYt.js";import"./Spinner-D882qXq5.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BywXDc-o.js";import"./Paragraph-CrOm9mYb.js";import"./NativeSelect-BVh_YTTY.js";import"./FormField-BTw2bisQ.js";import"./useFocusWithin-DfM9Gs3P.js";import"./Select.module-1rG_aevb.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DcISWAYH.js";import"./cancel_16-99w3wgRx.js";import"./useStateWithPrev-BTnHBdt0.js";import"./chevron_left_outline_20-0BRPPppm.js";import"./useEnsuredControl-CI320LI0.js";import"./Button-B4NYHs9P.js";import"./FocusTrap-BrlPUpeO.js";import"./useFocusTrap-C5ZGD2Mm.js";import"./useMutationObserver-BPadd9uE.js";import"./calendar_outline_20-BMV0hwtm.js";import"./clear_16-YaepTOJo.js";import"./Removable-DWZ-UCU_.js";import"./useConfigDirection-Cu4tNejP.js";import"./cancel_24-Du4R4GHJ.js";import"./FormItemTopLabel-B5Mj2rZD.js";import"./Subhead-4jBJxz3c.js";import"./UnstyledTextField-BBgb7SHi.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
