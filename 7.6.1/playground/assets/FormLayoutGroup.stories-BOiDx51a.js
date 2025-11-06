import{j as r}from"./iframe-CdtcRMP-.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DVfPgcvc.js";import{F as o}from"./FormItem-Dl7AVDtc.js";import{I as p}from"./Input-BOEGrA49.js";import{S as j}from"./Select-BZ1ZOj8r.js";import{V as a}from"./VisuallyHidden-CtlI0uOO.js";import{F as n}from"./FormLayoutGroup-CM-qGDQV.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-2INgGte2.js";import"./useBooleanState-DSmP0yRA.js";import"./useGlobalEventListener-enXvR1yE.js";import"./useEventListener-CidaaUBr.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BhXZVQ3W.js";import"./CalendarHeader-ChP8yCH6.js";import"./useFocusVisibleClassName-r8X4bE31.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-znRvcKvt.js";import"./Clickable-nnjkiOyK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-4kqGTgL9.js";import"./Footnote-UnTPOYYT.js";import"./CustomSelect-yWjErFJk.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-CZjsFca3.js";import"./children-BpYEnGqU.js";import"./dropdown_20-BbFICyt9.js";import"./SvgIconRootV2-CcgDj6WP.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DN5UovyM.js";import"./CustomSelectDropdown-BWtFjGkj.js";import"./CustomScrollView-BzKXL2Z5.js";import"./Popper-T3RUj53f.js";import"./useReferenceHiddenChangeCallback-JE-hnu_T.js";import"./AppRootPortal-BFk_fNEt.js";import"./useColorScheme-Bqwp8l3s.js";import"./createPortal-DFnZY35-.js";import"./ColorSchemeProvider-DeJkjfVG.js";import"./ConfigProviderOverride--tQEj98o.js";import"./FloatingArrow-BleoPFqO.js";import"./usePlacementChangeCallback-BB0AFdrs.js";import"./floating-ui.react-dom-Dfkb5x82.js";import"./Spinner-C-2OzDn_.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bw5BXA_B.js";import"./Paragraph-B8xPxJlh.js";import"./NativeSelect-yM5JNzj5.js";import"./FormField-DzT87oDI.js";import"./useFocusWithin-CnBAXQ2U.js";import"./Select.module-DdA2hEwl.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-rnOj30v2.js";import"./cancel_16-CbxMAvwC.js";import"./useStateWithPrev-Dd6f6IIM.js";import"./chevron_left_outline_20-BMCptxgE.js";import"./useEnsuredControl-D2ifizI6.js";import"./Button-BpUWCXRP.js";import"./FocusTrap-RDi_VQaF.js";import"./useFocusTrap-CvctiW_B.js";import"./useMutationObserver-BRkrCep6.js";import"./calendar_outline_20-yEmLyx9d.js";import"./clear_16-B2C3Rrhp.js";import"./Removable-nQuC3wCX.js";import"./useConfigDirection-I0bRjt3K.js";import"./cancel_24-DMLedojc.js";import"./FormItemTopLabel-CY1USPN-.js";import"./Subhead-DKX6pZDk.js";import"./UnstyledTextField-Ci_oktW-.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
