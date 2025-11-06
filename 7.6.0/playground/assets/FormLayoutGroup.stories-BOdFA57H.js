import{j as r}from"./iframe-DveaDHpJ.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-DDyz9HA7.js";import{F as o}from"./FormItem-CRd-qG67.js";import{I as p}from"./Input-FdwgW_DA.js";import{S as j}from"./Select-D69_JHNa.js";import{V as a}from"./VisuallyHidden-C4fiFLiw.js";import{F as n}from"./FormLayoutGroup-CQaTZSQv.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-C6apAyLc.js";import"./useBooleanState-Bf8gkZ5Q.js";import"./useGlobalEventListener-DxW3-2us.js";import"./useEventListener-BZXVGBW4.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-wVE10zIs.js";import"./CalendarHeader-fni5sLyz.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-B6M0Cj2d.js";import"./Clickable-Qd8MhpMK.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-DB2utYDB.js";import"./Footnote-DMEVDgek.js";import"./CustomSelect-DC0kkY8R.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-hzasv1hP.js";import"./children-DIqfUSJp.js";import"./dropdown_20-CZznK5HK.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-BwZFvUz5.js";import"./CustomSelectDropdown-BSYt37e0.js";import"./CustomScrollView-DQok_qII.js";import"./Popper-CYuDwYhz.js";import"./useReferenceHiddenChangeCallback-DT-Tatoc.js";import"./AppRootPortal-CrDvtA-l.js";import"./useColorScheme-Ca6Q1evu.js";import"./createPortal-DGpWZUDM.js";import"./ColorSchemeProvider-CxCT7c0Q.js";import"./ConfigProviderOverride-BzdBugdn.js";import"./FloatingArrow-BTubR1vc.js";import"./usePlacementChangeCallback-Bz3H7LaO.js";import"./floating-ui.react-dom-CCMwIqsk.js";import"./Spinner-kmrkwAxt.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-Bl2D0DTY.js";import"./Paragraph-DEGhVC7y.js";import"./NativeSelect-Drg0Y4LA.js";import"./FormField-DIy1SM_b.js";import"./useFocusWithin-C-V6I_uV.js";import"./Select.module-BtVdibmC.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-B6-RVMvP.js";import"./cancel_16-BVJbY8rW.js";import"./useStateWithPrev-BQHmZAAg.js";import"./chevron_left_outline_20-AC1IUGj4.js";import"./useEnsuredControl-pDZ_aYUB.js";import"./Button-Be-a6C2x.js";import"./FocusTrap-BlYjcIfF.js";import"./useFocusTrap-B6jSfMpx.js";import"./useMutationObserver-DsBH9-0i.js";import"./calendar_outline_20-hVnHF3fS.js";import"./clear_16-DO1pR0Za.js";import"./Removable-dXf4SeU2.js";import"./useConfigDirection-C-LxfHUm.js";import"./cancel_24-v6kzA3DC.js";import"./FormItemTopLabel-CBgV5I5S.js";import"./Subhead-CMDv2ZTP.js";import"./UnstyledTextField-C6tpz79c.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
