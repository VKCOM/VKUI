import{j as r}from"./iframe-DvsMcRqO.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DW_LVuHN.js";import{F as o}from"./FormItem-B2F2rhWv.js";import{I as p}from"./Input-DsKR172b.js";import{S as j}from"./Select-BqKE60f8.js";import{V as a}from"./VisuallyHidden-BGLO0lAS.js";import{F as n}from"./FormLayoutGroup-CLRjIZ2r.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-t1aGVDT3.js";import"./useBooleanState-CDL0uU2Q.js";import"./useGlobalEventListener-BdJfJj1z.js";import"./useEventListener-BkrsSu0A.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-BYIJQpr4.js";import"./CalendarHeader-CPqm_p48.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-Dogw4jpa.js";import"./Clickable-DquLH6Yl.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./Footnote-BnZcEJ_G.js";import"./CustomSelect-1vjnerGs.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-BXloRob2.js";import"./children-lVZQ7uKR.js";import"./dropdown_20-sKIK8g5d.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-CmLqw_px.js";import"./CustomSelectDropdown-C_9I92nh.js";import"./CustomScrollView-DrQcp-qz.js";import"./Popper-DFzyr9iY.js";import"./useReferenceHiddenChangeCallback-Bv5Zofim.js";import"./AppRootPortal-DhnXzNcV.js";import"./useColorScheme-Bl3NVSSg.js";import"./createPortal-CG3Nvn8a.js";import"./ColorSchemeProvider-CWoA6MaR.js";import"./ConfigProviderOverride-Dy4Z3D95.js";import"./FloatingArrow-DvhJwnsr.js";import"./usePlacementChangeCallback-Cny6Wdhd.js";import"./floating-ui.react-dom-C6Zv4JyC.js";import"./Spinner-Nh-MMopi.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CZMNFeZM.js";import"./Paragraph-DEhxRJq2.js";import"./NativeSelect-B9dFQ-T0.js";import"./FormField-BWWKEzde.js";import"./useFocusWithin-Bvi6Sdqy.js";import"./Select.module-DXV2W0OJ.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B-myA0wM.js";import"./cancel_16-CzV7BKaB.js";import"./useStateWithPrev-ygQuy9i4.js";import"./chevron_left_outline_20-yZ80JCLp.js";import"./useEnsuredControl-DpBtXUVf.js";import"./Button-DoX3DA-M.js";import"./FocusTrap-CH7eC_Xz.js";import"./useFocusTrap-UeN2tfkO.js";import"./useMutationObserver-CyH_Q3fo.js";import"./calendar_outline_20-DAo9Arw-.js";import"./clear_16-DZogZ4wK.js";import"./Removable-B20LGpmh.js";import"./useConfigDirection-CN1nmZoK.js";import"./cancel_24-CxtMKOmC.js";import"./FormItemTopLabel-CwN93Szj.js";import"./Subhead-Bc3iAQV-.js";import"./UnstyledTextField-zot_0j36.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
