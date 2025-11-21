import{j as r}from"./iframe-BnACcuaj.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-C5gMhZzH.js";import{F as o}from"./FormItem-QGGcpTHT.js";import{I as p}from"./Input-BZQR9JEO.js";import{S as c}from"./Select-D_eRSPKp.js";import{V as a}from"./VisuallyHidden-UrXKAcy6.js";import{F as n}from"./FormLayoutGroup-DLg3j2ir.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-shMef-QN.js";import"./useBooleanState-CcPy88nu.js";import"./useGlobalEventListener-Bh7RxLIS.js";import"./useEventListener-Bs6dx_Bk.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DBDAs454.js";import"./CalendarHeader-CM8KqZ_U.js";import"./useState-Bfn4OdDS.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./Tappable-Bp0BqfGQ.js";import"./Clickable-BArC-ALh.js";import"./InputUtils-Bef-cQxi.js";import"./Footnote-DxEsaF8U.js";import"./CustomSelect-BYB7ly6q.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-ClojpxKz.js";import"./children-UU2tqqG0.js";import"./dropdown_20-BGNvRmjo.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-umdY8hRe.js";import"./CustomSelectDropdown-Df4Ky-qO.js";import"./CustomScrollView-6jddE_3D.js";import"./Popper-DYnz-pr0.js";import"./useReferenceHiddenChangeCallback-DuuiI3jw.js";import"./AppRootPortal-Cx_aCdV6.js";import"./useColorScheme-DVykw0fJ.js";import"./createPortal-BHYOSBDo.js";import"./ColorSchemeProvider-CDWwKyNi.js";import"./ConfigProviderOverride-BjbSWsz2.js";import"./FloatingArrow-D2O-SNso.js";import"./usePlacementChangeCallback-CDmlNiC1.js";import"./floating-ui.react-dom-bTtkFxJ_.js";import"./Spinner-gYU1puQq.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-DhMyr_Z8.js";import"./Paragraph-D3a0j1Hf.js";import"./NativeSelect-a4tySREf.js";import"./FormField-4Uh0lksV.js";import"./useFocusWithin-BXXGciuN.js";import"./Select.module-BgWuEpJn.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DJLKvWv6.js";import"./cancel_16-XNcRXdRh.js";import"./useStateWithPrev-7FgZ8AZO.js";import"./chevron_left_outline_20-1-xRflVr.js";import"./useEnsuredControl-CGKhw2zb.js";import"./Button-DZqU8iPb.js";import"./FocusTrap-DOaZc2yz.js";import"./useFocusTrap-DjOr2G5J.js";import"./useMutationObserver-BNoG0G4a.js";import"./calendar_outline_20-BCJ71kS_.js";import"./clear_16-CsXkLQJ2.js";import"./Removable-oaQXNttY.js";import"./useConfigDirection-BP7XHPEm.js";import"./cancel_24-CBMdiZ42.js";import"./FormItemTopLabel-zfhkCyrX.js";import"./Subhead-ctfJxtXj.js";import"./UnstyledTextField-D_6nFBsS.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
