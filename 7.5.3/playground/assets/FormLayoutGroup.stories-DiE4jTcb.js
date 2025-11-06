import{j as r}from"./iframe-VQuwIBim.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-UP54ss5k.js";import{F as o}from"./FormItem-ChTk3dq7.js";import{I as p}from"./Input-CfnIbrhC.js";import{S as j}from"./Select-DOt9fhxR.js";import{V as a}from"./VisuallyHidden-Bn9barOE.js";import{F as n}from"./FormLayoutGroup-BLwOoT8E.js";import"./DateInput.module-BoXeDFpM.js";import"./useBooleanState-BLss2W4z.js";import"./useGlobalEventListener-Dg2G1Bu3.js";import"./useEventListener-buG494Se.js";import"./callMultiple-ChqatQlo.js";import"./date-CGVRXOzw.js";import"./CalendarHeader-ChL49vgU.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DJKRXU4j.js";import"./Clickable-GKvDpg7c.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-esLGIMz7.js";import"./Footnote-CFr_RCRn.js";import"./constants-BxoWbviK.js";import"./CustomSelect-D0zvvk11.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C9W7nehx.js";import"./useStateWithPrev-CGNjumc_.js";import"./DropdownIcon-Bo4sb50J.js";import"./children-DbSAwzjm.js";import"./dropdown_20-CYoiQxdD.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./chevron_up_24-CTDjlFV8.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-DHTmemVx.js";import"./CustomScrollView-B8oa2wyV.js";import"./Popper-lAUSxP2k.js";import"./useReferenceHiddenChangeCallback-Bmr5y_bS.js";import"./AppRootPortal-Cj8kaYA6.js";import"./useColorScheme-3PoJfbUB.js";import"./createPortal-CagxG8Ef.js";import"./ColorSchemeProvider-CD6Xwm8-.js";import"./ConfigProviderOverride-CgHQ0Bf4.js";import"./FloatingArrow-BBql9SkG.js";import"./usePlacementChangeCallback-DmGIfBmK.js";import"./floating-ui.react-dom-Pmp8ft10.js";import"./Spinner-D45v6N1-.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-B-u7kAah.js";import"./Paragraph-DFDWF4fB.js";import"./NativeSelect-BNriZWAB.js";import"./FormField-swNNfxlr.js";import"./Select.module-BdMGGYVX.js";import"./IconButton-CsO6Fs2D.js";import"./cancel_16-CS8Axx3h.js";import"./chevron_left_outline_20-DULcAu75.js";import"./Calendar-fIgjCpK-.js";import"./useEnsuredControl-DHCjfbrM.js";import"./Button-DX8vp4-B.js";import"./FocusTrap-C7Qtn-Or.js";import"./useFocusTrap-CDU-PFFW.js";import"./useMutationObserver-BvI-8POZ.js";import"./calendar_outline_20-DykOhbD6.js";import"./clear_16-DagTQ_ym.js";import"./Removable-B69Ae71z.js";import"./useConfigDirection-BhKWnP92.js";import"./cancel_24-76PwI_pT.js";import"./FormItemTopLabel-JFPLcZFc.js";import"./Subhead-BovRsuwk.js";import"./UnstyledTextField-CoHBz5MD.js";const Rr={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(F=(c=e.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const qr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,qr as __namedExportsOrder,Rr as default};
