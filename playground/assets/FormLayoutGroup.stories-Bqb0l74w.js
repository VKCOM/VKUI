import{j as r}from"./iframe-BdL7Qu3-.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-C7v99AXy.js";import{F as o}from"./FormItem-BXkhFAtY.js";import{I as p}from"./Input-BtY-vKev.js";import{S as j}from"./Select-BK7T2mJT.js";import{V as a}from"./VisuallyHidden-DMev6gKF.js";import{F as n}from"./FormLayoutGroup-DjKHnqCJ.js";import"./DateInput.module-CTy0EiL7.js";import"./useBooleanState-gpCLyzW9.js";import"./useGlobalEventListener-CWI65JCy.js";import"./useEventListener-COxWOe_W.js";import"./callMultiple-ChqatQlo.js";import"./date-L3Antn1d.js";import"./CalendarHeader-AXUqPuQn.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DH_64QBQ.js";import"./Clickable-zgtvQHiz.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DfOLgQuD.js";import"./Footnote-Cejbc8FV.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CaCyrUjh.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-C1xt8Yic.js";import"./useStateWithPrev-BwklpJtc.js";import"./DropdownIcon-B51siMI_.js";import"./children-D33S37xY.js";import"./dropdown_20-CcrT0WK8.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./chevron_up_24-BeYCSzSD.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-Bv3SFUia.js";import"./CustomScrollView-W74DUE-r.js";import"./Popper-DSd7JoP9.js";import"./useReferenceHiddenChangeCallback-BDB-jZS9.js";import"./AppRootPortal-Lr0ibmIo.js";import"./useColorScheme-BFusLRUe.js";import"./createPortal-B4xhqo8S.js";import"./ColorSchemeProvider-B2wMfrSB.js";import"./ConfigProviderOverride-KE2AAYgd.js";import"./FloatingArrow-C9usf79d.js";import"./usePlacementChangeCallback-TMZyVZQg.js";import"./floating-ui.react-dom-B1ZkUPW4.js";import"./Spinner-CchhrSOA.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-zpwz0PEe.js";import"./Paragraph-jPlkG9S_.js";import"./NativeSelect-AXmXophw.js";import"./FormField-CqnEFqGM.js";import"./Select.module-Dz57dYm_.js";import"./IconButton-oiQnZbSh.js";import"./cancel_16-CENPgfP-.js";import"./chevron_left_outline_20-B13X4oR-.js";import"./Calendar-2XUahiJE.js";import"./useEnsuredControl-B3YM8IG7.js";import"./Button-Bf-yaCMi.js";import"./FocusTrap-QcsSwy0c.js";import"./useFocusTrap-BZvdIrk4.js";import"./useMutationObserver-BqGBX4ZS.js";import"./calendar_outline_20-DI6-cit4.js";import"./clear_16-CM5ZDj6Z.js";import"./Removable-kBBzHwjh.js";import"./useConfigDirection-D_GPblpw.js";import"./cancel_24-DYZXSV6w.js";import"./FormItemTopLabel-DJ2NDfgx.js";import"./Subhead-CEr4zt5A.js";import"./UnstyledTextField-DkhACj1h.js";const Rr={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
