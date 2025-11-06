import{j as r}from"./iframe-F_0bvJrc.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-GwWSEkMP.js";import{F as o}from"./FormItem-CR1ltdco.js";import{I as p}from"./Input-C5xpv7RL.js";import{S as c}from"./Select-DEECCV8I.js";import{V as a}from"./VisuallyHidden-CRrL_L2y.js";import{F as n}from"./FormLayoutGroup-C-sjMnzz.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-C4Wo_G_Z.js";import"./useBooleanState-Bze2nNFK.js";import"./useGlobalEventListener-Y3RIl-_k.js";import"./useEventListener-DlnjWBsX.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-vDjjS7dm.js";import"./CalendarHeader-CNr3niQf.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DJ3rCQkY.js";import"./Clickable-B4aTO_qb.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-CneTbOko.js";import"./Footnote-DfPFidfa.js";import"./CustomSelect-AeMOLvAM.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-DKCgq7mS.js";import"./children-CfV6Kr3n.js";import"./dropdown_20-B9e7Y_E7.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-Q8g1MI2x.js";import"./CustomSelectDropdown-DT35ijRC.js";import"./CustomScrollView-DEuKtSsw.js";import"./Popper-jEDCIA6z.js";import"./useReferenceHiddenChangeCallback-BgaI2Iei.js";import"./AppRootPortal-C5ZjlUn-.js";import"./useColorScheme-CMuS3Rce.js";import"./createPortal-3kBuG0xS.js";import"./ColorSchemeProvider-CBhvh-QL.js";import"./ConfigProviderOverride-DP-FN5VZ.js";import"./FloatingArrow-BFutSiUS.js";import"./usePlacementChangeCallback-mGGiHeRj.js";import"./floating-ui.react-dom-BwXaV5NM.js";import"./Spinner-D7kEFt-1.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-C4XgJt4d.js";import"./Paragraph-DpqDuxuA.js";import"./NativeSelect-BnCt67fZ.js";import"./FormField-Dkyvpq47.js";import"./useFocusWithin-CDt5X1od.js";import"./Select.module-BXZZZxMR.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BHFFi_8a.js";import"./cancel_16-CJb_-qse.js";import"./useStateWithPrev-ojENS7H5.js";import"./chevron_left_outline_20-DWHaa5vd.js";import"./useEnsuredControl-BBTm3kq1.js";import"./Button-OQORbYpv.js";import"./FocusTrap-CatbEh5x.js";import"./useFocusTrap-D3fDlwS6.js";import"./useMutationObserver-BmpmDaTi.js";import"./calendar_outline_20-CSxVU1eE.js";import"./clear_16-BPlmX8ts.js";import"./Removable-CQf4vu_q.js";import"./useConfigDirection-poWhsvcV.js";import"./cancel_24-CEwNt985.js";import"./FormItemTopLabel-DG5nnJu-.js";import"./Subhead-CtWFTcAD.js";import"./UnstyledTextField-odxkRx3q.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
