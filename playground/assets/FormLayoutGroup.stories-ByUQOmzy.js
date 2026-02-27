import{j as r}from"./iframe-Cn0klKvz.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-B2rLL-vx.js";import{F as o}from"./FormItem-BmMuskhE.js";import{I as p}from"./Input-AzUTv79i.js";import{S as c}from"./Select-CX_8Axx2.js";import{V as a}from"./VisuallyHidden-C9tNf48m.js";import{F as n}from"./FormLayoutGroup-Dzjgz85f.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DDVIo4YF.js";import"./useBooleanState-CzvJFu2k.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-CspiQrnP.js";import"./CalendarHeader-wveqIoPc.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./Tappable-CVh4vgq8.js";import"./Clickable-D6ksQ4g4.js";import"./InputUtils-B6qCikuW.js";import"./Footnote-BwZkqEqY.js";import"./equal-DqB04qCY.js";import"./CustomSelect-CkTIXSiu.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-CyiI2WzX.js";import"./children-IiL0uSHX.js";import"./dropdown_20--DUJk8yW.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./chevron_up_24-C7u6Xkhd.js";import"./CustomSelectDropdown-d3mz6Yj3.js";import"./CustomScrollView-DDpGxQa7.js";import"./Popper-CJSXFplp.js";import"./useReferenceHiddenChangeCallback-C__GEFDu.js";import"./AppRootPortal-DrN2viSO.js";import"./useColorScheme-C7zCwRzY.js";import"./createPortal-CeijUj_q.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-Blw8FFCv.js";import"./ConfigProviderOverride-CSeOrjpg.js";import"./FloatingArrow-rIv3MFV8.js";import"./usePlacementChangeCallback-BcR5bXER.js";import"./floating-ui.react-dom-DkSLRTT4.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-Dez3qxwZ.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-YPe2tNNz.js";import"./Paragraph-DlmN_8kL.js";import"./NativeSelect-jlMl4W3c.js";import"./FormField-CqfiouLJ.js";import"./useFocusWithin-GdWsk7hi.js";import"./Select.module-CuMgMza5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DSEgeqcd.js";import"./cancel_16-DzhBEMr_.js";import"./useStateWithPrev-CUCMAMWh.js";import"./chevron_left_outline_20-9God32SQ.js";import"./Calendar-7kPU56K6.js";import"./useEnsuredControl-0lh_FwAV.js";import"./Button-D37nVvnc.js";import"./FocusTrap-DkOYwnnY.js";import"./useMutationObserver-COKUuFT-.js";import"./calendar_outline_20-Cjpq-z8b.js";import"./clear_16-AUqteKiH.js";import"./Removable-DJHs5oKA.js";import"./useConfigDirection-DuEYXWS_.js";import"./cancel_24-C8myLtmO.js";import"./FormItemTopLabel-CT7Moikm.js";import"./Subhead-BQyoBjlR.js";import"./UnstyledTextField-ogVVFYld.js";const Gr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
