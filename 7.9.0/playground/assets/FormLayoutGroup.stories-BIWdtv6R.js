import{j as r}from"./iframe-BdXaAE5r.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-Cd6YN33Q.js";import{F as o}from"./FormItem-Cxh1g4KJ.js";import{I as p}from"./Input-DVvWA0Cs.js";import{S as c}from"./Select-CSKrQqan.js";import{V as a}from"./VisuallyHidden-DcQJc2es.js";import{F as n}from"./FormLayoutGroup-BY40Aq56.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-zFsNv_Ub.js";import"./useBooleanState-6YMpJvg_.js";import"./useGlobalEventListener-BXli_s0F.js";import"./useEventListener-C9KDACQG.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-DC18j3xZ.js";import"./CalendarHeader-Cptk8zp3.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DfpzQKhB.js";import"./Clickable-0nFsuW3k.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils--HRLtXJo.js";import"./Footnote-ByXPLsYQ.js";import"./CustomSelect-Cu036XGx.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-8qOBQz0J.js";import"./children-l5OU2f11.js";import"./dropdown_20-BZfVNQlJ.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-uhX6-5Hj.js";import"./CustomSelectDropdown-B1W3rkKd.js";import"./CustomScrollView-CMGGh_2P.js";import"./Popper-Beqzn5p-.js";import"./useReferenceHiddenChangeCallback-CV7-HRaM.js";import"./AppRootPortal-CUn3WEk3.js";import"./useColorScheme-CR-44NGe.js";import"./createPortal-twf3JG26.js";import"./ColorSchemeProvider-BFJTPUcN.js";import"./ConfigProviderOverride-BDqJysYU.js";import"./FloatingArrow-Bc_HvhOO.js";import"./usePlacementChangeCallback-Eb8gezm-.js";import"./floating-ui.react-dom-Db2st6hH.js";import"./Spinner-Dsao1b5l.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C_1P28cN.js";import"./Paragraph-ZazE2YSK.js";import"./NativeSelect-BsrUAl_n.js";import"./FormField-EQy9__nw.js";import"./useFocusWithin-BFFjMCCU.js";import"./Select.module-N9DEoYZ7.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CXgqouLn.js";import"./cancel_16-DBln7EA6.js";import"./useStateWithPrev-DFoPjIDX.js";import"./chevron_left_outline_20-C5Eclvvd.js";import"./useEnsuredControl-dQkhshwS.js";import"./Button-BXQ5RzYy.js";import"./FocusTrap-CbZlzKqw.js";import"./useFocusTrap-D-fzHl7s.js";import"./useMutationObserver-epbeXk19.js";import"./calendar_outline_20-DM-l75t9.js";import"./clear_16-DeNybDuM.js";import"./Removable-CjePy1wL.js";import"./useConfigDirection-B4zlYhYT.js";import"./cancel_24-Cel532NE.js";import"./FormItemTopLabel-slYrJWd0.js";import"./Subhead-CM9E3HB6.js";import"./UnstyledTextField-C7-kPwgr.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
