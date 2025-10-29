import{j as r}from"./iframe-DC59t_7s.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-CSzcitNe.js";import{F as o}from"./FormItem-CXHYL2YK.js";import{I as p}from"./Input-BYD1hwJr.js";import{S as c}from"./Select-ClHC0_Wn.js";import{V as a}from"./VisuallyHidden-dUOLTySp.js";import{F as n}from"./FormLayoutGroup-BEXGmeNN.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-9k-kCeOw.js";import"./useBooleanState-Eb4ZHiwa.js";import"./useGlobalEventListener-C_qxnlQL.js";import"./useEventListener-D94pK2uE.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BMUsAbTl.js";import"./CalendarHeader-B2E7R0X5.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-CRrpYa-n.js";import"./Clickable-k0omQ8uW.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./Footnote-B_mvNSI1.js";import"./CustomSelect-C_yfWVZk.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C-WBznle.js";import"./children-DYOU-AGd.js";import"./dropdown_20-DyhMSWKb.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DXo7w0t3.js";import"./CustomSelectDropdown-BO85D6H2.js";import"./CustomScrollView-DqxqicWb.js";import"./Popper-BDurMwAV.js";import"./useReferenceHiddenChangeCallback-Cv-J72mi.js";import"./AppRootPortal-CA3u5wJU.js";import"./useColorScheme-Cf0PiwGW.js";import"./createPortal-2R_X9sVy.js";import"./ColorSchemeProvider-BtWhZJq6.js";import"./ConfigProviderOverride-i8pjibUq.js";import"./FloatingArrow-uPZYtw2a.js";import"./usePlacementChangeCallback-DjeyUYH1.js";import"./floating-ui.react-dom-gjdRo9Jf.js";import"./Spinner-BHxVDILF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-rh0HPT1I.js";import"./Paragraph-CNGX9Ncs.js";import"./NativeSelect-9bMx5srV.js";import"./FormField-DYhXjH9r.js";import"./useFocusWithin-9CYA-Xql.js";import"./Select.module-Dr6pz-LO.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DlcUkq3s.js";import"./cancel_16-DOyKhfQK.js";import"./useStateWithPrev-DFxMBC4E.js";import"./chevron_left_outline_20-BIdPFGBs.js";import"./useEnsuredControl-B87PR-rL.js";import"./Button-TPmMtPai.js";import"./FocusTrap-CGKFwjPV.js";import"./useFocusTrap-Cjt3r7rt.js";import"./useMutationObserver-D8gt_rME.js";import"./calendar_outline_20-C8J4VY1u.js";import"./clear_16-BlQpHYDv.js";import"./Removable-qNhpNz2M.js";import"./useConfigDirection-6hDi4KID.js";import"./cancel_24-pw3fX9Xb.js";import"./FormItemTopLabel-Bl9WlasH.js";import"./Subhead-CcQWHNvG.js";import"./UnstyledTextField-CI2KSCuu.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
