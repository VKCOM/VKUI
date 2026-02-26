import{j as r}from"./iframe-C4bTyPBQ.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-N3YLR8Zv.js";import{F as o}from"./FormItem-C-IhRU6i.js";import{I as p}from"./Input-A1g04NDj.js";import{S as c}from"./Select-Cd806eW_.js";import{V as a}from"./VisuallyHidden-BEfP1Q2n.js";import{F as n}from"./FormLayoutGroup-BfA6Hq56.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-oSiOxptx.js";import"./useBooleanState-CoNuuFWh.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-CvS_H8_H.js";import"./CalendarHeader-Dai295k5.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./Tappable-BZW__-HP.js";import"./Clickable-BhDfuptR.js";import"./InputUtils-Ns7QNyDT.js";import"./Footnote-wW_hecXF.js";import"./equal-DqB04qCY.js";import"./CustomSelect-DzCYC4SR.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DgnNzXl1.js";import"./children-DNxvoAyX.js";import"./dropdown_20-BAdDJnDY.js";import"./SvgIconRootV2-DbftVVP5.js";import"./chevron_up_24-vYRkVu4w.js";import"./CustomSelectDropdown-Bf66ayKC.js";import"./CustomScrollView-BsG9TUbn.js";import"./Popper-BdfxQDqx.js";import"./useReferenceHiddenChangeCallback-DNsZVkB4.js";import"./AppRootPortal-CWanvcnq.js";import"./useColorScheme-B5qdSLTx.js";import"./createPortal-BVIABMB9.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B34yrt0u.js";import"./ConfigProviderOverride-BLhdVd3U.js";import"./FloatingArrow-Bxs0n5DK.js";import"./usePlacementChangeCallback-CvoK5TDA.js";import"./floating-ui.react-dom-D2lgGwq0.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./CustomSelectOption-CcwpPq37.js";import"./Paragraph-DjR0IJ5A.js";import"./NativeSelect-Cospdbm8.js";import"./FormField-Cu0jfNj8.js";import"./useFocusWithin-CWJCpHmP.js";import"./Select.module-BrSpg0k5.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BXe704ZF.js";import"./cancel_16-CoNztr4w.js";import"./useStateWithPrev-BIxy4Pbm.js";import"./chevron_left_outline_20-DN1jhhy8.js";import"./Calendar-DOdE3Cg1.js";import"./useEnsuredControl-D1T8oqbk.js";import"./Button-D-zltIHu.js";import"./FocusTrap-DR0NIrZZ.js";import"./useMutationObserver-Dz5wTjis.js";import"./calendar_outline_20-BJRRtset.js";import"./clear_16-BwcQWqpd.js";import"./Removable-CbiJXY2P.js";import"./useConfigDirection-OBrCdmzr.js";import"./cancel_24-BKCyLyjW.js";import"./FormItemTopLabel-CMW198iU.js";import"./Subhead-CGMBr7DJ.js";import"./UnstyledTextField-Dht_T5AR.js";const Gr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
