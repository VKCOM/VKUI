import{j as r}from"./iframe-BKqRoeRO.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-TgYG_RmP.js";import{F as o}from"./FormItem-Dyo3xbl7.js";import{I as p}from"./Input-BqtL0lzn.js";import{S as c}from"./Select-D8fsFsjt.js";import{V as a}from"./VisuallyHidden-B-uFrHKw.js";import{F as n}from"./FormLayoutGroup-3bvnZs1J.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DASYkqbJ.js";import"./useBooleanState-D0nDf7gZ.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-B6CseJM6.js";import"./CalendarHeader-k2GZyK-1.js";import"./useState-Db1sLetb.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-f3zCVWI9.js";import"./Tappable-EPRrmr_0.js";import"./Clickable-CadgeLyo.js";import"./InputUtils-CQaATz1N.js";import"./Footnote-BAb4Skv3.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-j4qma72-.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D4AaZ9gz.js";import"./children-Bm1QhBGC.js";import"./dropdown_20-CNS7PAIu.js";import"./SvgIconRootV2-BsNjPzkn.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DdS0kdly.js";import"./CustomSelectDropdown-lQtUELXY.js";import"./CustomScrollView-LtH4AA1i.js";import"./Popper-B-oQljLT.js";import"./useReferenceHiddenChangeCallback-Co2OT1Ls.js";import"./AppRootPortal-Bl-mYqRi.js";import"./useColorScheme-CV37oJpw.js";import"./createPortal-DVslbEs3.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-DzGMXO52.js";import"./ConfigProviderOverride-AuipdI0T.js";import"./FloatingArrow-BW-WGI2j.js";import"./usePlacementChangeCallback-CWH3mKqa.js";import"./floating-ui.react-dom-BE-hubS3.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-DWSu6VQp.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUCRRXB7.js";import"./Paragraph-BihsN6Ji.js";import"./NativeSelect-BIaSFdWQ.js";import"./FormField-Go62Y8Xh.js";import"./useFocusWithin-cA-uu2zg.js";import"./Select.module-CQG3FEbX.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CDypKmxT.js";import"./cancel_16-YezS66Hp.js";import"./useStateWithPrev-Bz2fUJh7.js";import"./chevron_left_outline_20-e81f18Y3.js";import"./Calendar-hiZ8YwFe.js";import"./useEnsuredControl-DrUFPpJz.js";import"./Button-U9s7wDQC.js";import"./FocusTrap-BrNSy_VJ.js";import"./useMutationObserver-D2T9tvmZ.js";import"./calendar_outline_20-RPYOxH39.js";import"./clear_16-Bo-gSsNk.js";import"./Removable-BbK5TlWA.js";import"./useConfigDirection-BH9mMD5y.js";import"./cancel_24-C2B5W1bI.js";import"./FormItemTopLabel-CuNbnoDb.js";import"./Subhead-B3U-hqtC.js";import"./UnstyledTextField-CICTDeGk.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
