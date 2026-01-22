import{j as r}from"./iframe-qlSEKL6e.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-DhDC0ZtN.js";import{F as o}from"./FormItem-B64ozuS8.js";import{I as p}from"./Input-B01WXvu2.js";import{S as c}from"./Select-B3Xz-AcQ.js";import{V as a}from"./VisuallyHidden-Bk8azc-l.js";import{F as n}from"./FormLayoutGroup-DChWDfWP.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-C2bM-kjS.js";import"./useBooleanState-C-4zMXro.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-mphiiSZ1.js";import"./CalendarHeader-BVjuCgtH.js";import"./useState-C_16qP2U.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BSdd-gmN.js";import"./Tappable-BHeAowlI.js";import"./Clickable-D1c0nrMo.js";import"./InputUtils-vU1H8cid.js";import"./Footnote-BzLLEJCe.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-C6j6AAsH.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-BlVG0U2E.js";import"./children-DNQ1k21b.js";import"./dropdown_20-DI1xGklU.js";import"./SvgIconRootV2-DNGE9nnc.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DmhrGLWt.js";import"./CustomSelectDropdown-z5LiGY_J.js";import"./CustomScrollView-Cz-uOj3n.js";import"./Popper-BX-2zFTd.js";import"./useReferenceHiddenChangeCallback-D_B1XjcH.js";import"./AppRootPortal-Bj-vg1zq.js";import"./useColorScheme-BxcR7ZEW.js";import"./createPortal-CvpuS67o.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-C-9YDCpQ.js";import"./ConfigProviderOverride-DnQqijVu.js";import"./FloatingArrow-CtoadKdS.js";import"./usePlacementChangeCallback-7H5OKj5I.js";import"./floating-ui.react-dom-BIRJ4FTj.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-BoZXPbho.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DUbLsO6I.js";import"./Paragraph-BUgvhuHQ.js";import"./NativeSelect-slK_uqde.js";import"./FormField-Co4GQc8h.js";import"./useFocusWithin-BRbaVvSY.js";import"./Select.module-DIJ-cnuD.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-BRmjKqzD.js";import"./cancel_16-CadNQiL8.js";import"./useStateWithPrev-C8Jp_q4M.js";import"./chevron_left_outline_20-CubSQ-Yb.js";import"./Calendar-q842aBQB.js";import"./useEnsuredControl-CgB4abgn.js";import"./Button-DRTEtUEH.js";import"./FocusTrap-Di6whJjK.js";import"./useMutationObserver-Cxb7eptU.js";import"./calendar_outline_20-B8fSUQ39.js";import"./clear_16-BajJzDYZ.js";import"./Removable-DOcraucr.js";import"./useConfigDirection-DGAPn-Y-.js";import"./cancel_24-cnh7cOD_.js";import"./FormItemTopLabel-Btd3OHdm.js";import"./Subhead-B_pgjgAK.js";import"./UnstyledTextField-BNXjmA_I.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
