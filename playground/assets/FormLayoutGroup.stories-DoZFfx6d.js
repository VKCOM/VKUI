import{j as r}from"./iframe-DdZr-4mP.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-Bdwm1DgM.js";import{F as o}from"./FormItem-BLIkBZYD.js";import{I as p}from"./Input-Ck1V21_9.js";import{S as c}from"./Select-CbBmzUhr.js";import{V as a}from"./VisuallyHidden-CSRm7Yw_.js";import{F as n}from"./FormLayoutGroup-DNLtDOGA.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DGjHT9k4.js";import"./useBooleanState-JHPHBct5.js";import"./useGlobalEventListener-VexK5DUQ.js";import"./useEventListener-EHs5705p.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BU8n8hxl.js";import"./CalendarHeader-BnHcgTbn.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-CovdKVQt.js";import"./Clickable-J2yyQqq6.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CcKtkKuI.js";import"./Footnote-1KqsUf4m.js";import"./CustomSelect-Cr2rMPnz.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DNE5t4x-.js";import"./children-oqymHkiK.js";import"./dropdown_20-C51VVF26.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-B5_EUz2K.js";import"./CustomSelectDropdown-hbWLPmhW.js";import"./CustomScrollView-D6gFw0v4.js";import"./Popper-qax9FHdX.js";import"./useReferenceHiddenChangeCallback-CSiwGfQ7.js";import"./AppRootPortal-C2gdNLsf.js";import"./useColorScheme-DV5aetKH.js";import"./createPortal-rWuLF35z.js";import"./ColorSchemeProvider-IMjSaaWc.js";import"./ConfigProviderOverride-VA0sqvdw.js";import"./FloatingArrow-CqnmVrPx.js";import"./usePlacementChangeCallback-DXOFFQMQ.js";import"./floating-ui.react-dom-BugnXWB1.js";import"./Spinner-BjrDa5Np.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CH1KRfzF.js";import"./Paragraph-x1XJ9xj3.js";import"./NativeSelect-BQNnBwtV.js";import"./FormField-C4XpjwD8.js";import"./useFocusWithin-Bj820Lyk.js";import"./Select.module-edfV4YsO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-C7aWXmKO.js";import"./cancel_16-BJb-DamK.js";import"./useStateWithPrev-Z0taGhgw.js";import"./chevron_left_outline_20-BKzfgAPG.js";import"./useEnsuredControl-CmGQ-V-a.js";import"./Button-BfB_yFLJ.js";import"./FocusTrap-D2jJP0Y_.js";import"./useFocusTrap-C_HnlYsk.js";import"./useMutationObserver-C4v790lX.js";import"./calendar_outline_20-DEnHhV0b.js";import"./clear_16-DJ3u945u.js";import"./Removable-sBXdy_3O.js";import"./useConfigDirection-BdfXEpUn.js";import"./cancel_24-SB-_Mfon.js";import"./FormItemTopLabel-Tt74abUx.js";import"./Subhead-xzDyxoRX.js";import"./UnstyledTextField-BPZT3vj_.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
