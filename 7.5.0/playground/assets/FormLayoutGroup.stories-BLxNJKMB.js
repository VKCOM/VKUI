import{j as r}from"./iframe-CRvvLw_c.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-BB7ssgHS.js";import{F as o}from"./FormItem-zQbzaIRv.js";import{I as p}from"./Input-CtNFEXBO.js";import{S as j}from"./Select-B9XGDG00.js";import{V as a}from"./VisuallyHidden-ExmaeT5t.js";import{F as n}from"./FormLayoutGroup-DOqbDng6.js";import"./DateInput.module-Dx9i0IWN.js";import"./useBooleanState-FyM6sJr_.js";import"./useGlobalEventListener-Dcqm9qtj.js";import"./useEventListener-CJcuEL8k.js";import"./callMultiple-ChqatQlo.js";import"./date-CQNiurXG.js";import"./CalendarHeader-CnzH9Dvx.js";import"./Clickable-C5yyRKxt.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BL_Dp9-M.js";import"./InputUtils-jCwC7LNS.js";import"./Footnote-Dyjj_lEj.js";import"./constants-BxoWbviK.js";import"./CustomSelect-wu9Cf4Ey.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B4DTXq5h.js";import"./useStateWithPrev-Kk8TUOj4.js";import"./DropdownIcon-F8OJfzzV.js";import"./children-B6ZvQs6l.js";import"./dropdown_20-CsC81trI.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./chevron_up_24-D4XLNPfV.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-C21KCnuT.js";import"./CustomScrollView-stHHqvfl.js";import"./Popper-ChNgl10L.js";import"./useReferenceHiddenChangeCallback-WDhIB5eK.js";import"./AppRootPortal-NZw49JW8.js";import"./useColorScheme-Dg8vGXhe.js";import"./createPortal-CEA54U8j.js";import"./ColorSchemeProvider-Cyqs8Swv.js";import"./ConfigProviderOverride-AsEUQZ3i.js";import"./FloatingArrow-T5Ka_chK.js";import"./usePlacementChangeCallback-CO1Ai17Q.js";import"./floating-ui.react-dom-BDvHgZmU.js";import"./Spinner-BeKI5I2R.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CXUEWZRA.js";import"./Paragraph-DyoHshUI.js";import"./NativeSelect-iMGZhT9Y.js";import"./FormField-BuObGDLk.js";import"./Select.module-GdVREifB.js";import"./IconButton-BfjgaeOF.js";import"./cancel_16-CfE_EEJn.js";import"./chevron_left_outline_20-CfqmpdCV.js";import"./Calendar-CtnMB51a.js";import"./useEnsuredControl-Cn1DQzZT.js";import"./Button-C8kpyiaO.js";import"./FocusTrap-BLplPfjw.js";import"./useFocusTrap-DtP6NXl7.js";import"./useMutationObserver-CYZaENm6.js";import"./calendar_outline_20-BWUiVCFw.js";import"./clear_16-BgDF56cG.js";import"./Removable-D6hUbfb3.js";import"./useConfigDirection-B3mnQ7qq.js";import"./cancel_24-Bj5mGOBW.js";import"./FormItemTopLabel-Bmvp6V76.js";import"./Subhead-BYsNdrqQ.js";import"./UnstyledTextField-UaXoIuk8.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,F;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(F=(c=e.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Rr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,Rr as __namedExportsOrder,Or as default};
