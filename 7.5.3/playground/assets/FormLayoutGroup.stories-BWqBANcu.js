import{j as r}from"./iframe-CGpIZMk8.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-W1VT_1Rv.js";import{F as o}from"./FormItem-DBbyqWU1.js";import{I as p}from"./Input-DOG1Comz.js";import{S as j}from"./Select-XUQ3uWGk.js";import{V as a}from"./VisuallyHidden-CdBh7Iry.js";import{F as n}from"./FormLayoutGroup-CEtM5YD7.js";import"./DateInput.module-cyUPnvGZ.js";import"./useBooleanState-CxDCZlwA.js";import"./useGlobalEventListener-CwAATl2v.js";import"./useEventListener-OpwGLEa0.js";import"./callMultiple-ChqatQlo.js";import"./date-Bb6FYAs_.js";import"./CalendarHeader-B5x0BzEY.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-BEdABn7b.js";import"./Clickable-D9pe1RI2.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./Footnote-DPd01TxJ.js";import"./constants-BxoWbviK.js";import"./CustomSelect-KZxcJIHj.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-mFqouh7d.js";import"./useStateWithPrev-a925luGf.js";import"./DropdownIcon-DNcwAH27.js";import"./children-BbEaAOxK.js";import"./dropdown_20-4F0jDwGt.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./chevron_up_24-PpiZF3r-.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-CgsPrLdC.js";import"./CustomScrollView-DHhB_4V_.js";import"./Popper-BSmeb810.js";import"./useReferenceHiddenChangeCallback-gx510wwF.js";import"./AppRootPortal-DYl1v_5E.js";import"./useColorScheme-B2GHpbyp.js";import"./createPortal-1frpuduZ.js";import"./ColorSchemeProvider-6omxxyDL.js";import"./ConfigProviderOverride-CIbbMeWE.js";import"./FloatingArrow-DEW5lBO-.js";import"./usePlacementChangeCallback-BTN2Li97.js";import"./floating-ui.react-dom-DVNPl4I1.js";import"./Spinner-DVykHsGf.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-D1uWEnGu.js";import"./Paragraph-R2LFXqIt.js";import"./NativeSelect-BOMtQRno.js";import"./FormField-D5UDoMvG.js";import"./Select.module-KXh4qUn0.js";import"./IconButton-R-pBWVQH.js";import"./cancel_16-DSH-4CGb.js";import"./chevron_left_outline_20-anyUvaXU.js";import"./Calendar-BxNdlVO-.js";import"./useEnsuredControl-DJeRq7Bz.js";import"./Button-7GGfFD7v.js";import"./FocusTrap-DHMaFiMs.js";import"./useFocusTrap-BKkUzoSR.js";import"./useMutationObserver-Q739XKZZ.js";import"./calendar_outline_20-CNdv-IfF.js";import"./clear_16-CA7NMDrS.js";import"./Removable-v2sol_eW.js";import"./useConfigDirection-Dz_AGVHb.js";import"./cancel_24-X3lt1W_w.js";import"./FormItemTopLabel-xEGPZafk.js";import"./Subhead-D_tBif6E.js";import"./UnstyledTextField-B_37KEUn.js";const Rr={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
