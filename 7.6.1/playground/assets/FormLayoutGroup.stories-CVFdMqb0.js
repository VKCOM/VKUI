import{j as r}from"./iframe-CkliH7Ym.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-XEJgEnke.js";import{F as o}from"./FormItem-CdHOoeub.js";import{I as p}from"./Input-aR_wx8Nh.js";import{S as j}from"./Select-DHUXfmer.js";import{V as a}from"./VisuallyHidden-Dn7EkmGE.js";import{F as n}from"./FormLayoutGroup-BQfVYvWZ.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-Db2zspMv.js";import"./useBooleanState-BM2pyVN1.js";import"./useGlobalEventListener-4U7JtIC8.js";import"./useEventListener-iURZQrFx.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-C_1FO-GW.js";import"./CalendarHeader-uSeBNsKw.js";import"./useFocusVisibleClassName-Bnsyl2mE.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-fZc2zE5Y.js";import"./Clickable-D0QQafOF.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-BZxXqLFf.js";import"./Footnote-CVpuTKzI.js";import"./CustomSelect-BTyDgp7z.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-1hUMhB0U.js";import"./children-B0i547Ke.js";import"./dropdown_20-DFkMJTEQ.js";import"./SvgIconRootV2-DWb7sWtR.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DpNmfOob.js";import"./CustomSelectDropdown-XQHuM8r6.js";import"./CustomScrollView-BfGihvhQ.js";import"./Popper-EuLCrfqJ.js";import"./useReferenceHiddenChangeCallback-CrbKL3K8.js";import"./AppRootPortal-_qkzjwpD.js";import"./useColorScheme-D8FQD_Wa.js";import"./createPortal-DdOejS3g.js";import"./ColorSchemeProvider-B9rX6vOp.js";import"./ConfigProviderOverride-Btyq71wt.js";import"./FloatingArrow-B53s4wIh.js";import"./usePlacementChangeCallback-DQYCmAMk.js";import"./floating-ui.react-dom-DQc45krP.js";import"./Spinner-UdAHfoPk.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-CmOc4L65.js";import"./Paragraph-Bj3P3vMD.js";import"./NativeSelect-r2NBdp7L.js";import"./FormField-2Xr44SiQ.js";import"./useFocusWithin-njH6fdIQ.js";import"./Select.module-B9F05EDA.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CSrcIMnc.js";import"./cancel_16-CVLOC4uu.js";import"./useStateWithPrev-BblT4-HP.js";import"./chevron_left_outline_20-BvT7hjfx.js";import"./useEnsuredControl-DPyJ8XQk.js";import"./Button-CDpcJNjy.js";import"./FocusTrap-BEq0j9Ee.js";import"./useFocusTrap-BAV3lIvK.js";import"./useMutationObserver-DLhY5Avj.js";import"./calendar_outline_20-C2wFnnGq.js";import"./clear_16-DCGggquy.js";import"./Removable-BiD1BBxW.js";import"./useConfigDirection-Cu9Dkwyc.js";import"./cancel_24-DYiMxFG6.js";import"./FormItemTopLabel-CAeEADtG.js";import"./Subhead-DmZ-gnSD.js";import"./UnstyledTextField-CyJCk8sh.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
