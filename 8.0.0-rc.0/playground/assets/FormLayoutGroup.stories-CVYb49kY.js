import{j as r}from"./iframe-CWLi0Dwx.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BRLEO1pg.js";import{F as o}from"./FormItem-C8PPO9Ml.js";import{I as p}from"./Input-CqNBnZVQ.js";import{S as c}from"./Select-CPk_fOrT.js";import{V as a}from"./VisuallyHidden-DcnlEFVn.js";import{F as n}from"./FormLayoutGroup-9svQc4zW.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-LZcH1VQN.js";import"./useBooleanState-DBJg9YoG.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-Guf-0OZs.js";import"./CalendarHeader-DPPcC09q.js";import"./useState-B6GpLt4z.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./Tappable-BfbUNvge.js";import"./Clickable-qvNFYhPA.js";import"./InputUtils-y46vV6Lq.js";import"./Footnote-uuGEAWzo.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-BL3f3T5w.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-D64BfRQG.js";import"./children-o7IWS_m7.js";import"./dropdown_20-zJLYpS_C.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DZPWqokN.js";import"./CustomSelectDropdown-Tt1tOKnj.js";import"./CustomScrollView-CTmeeRKm.js";import"./Popper-2QpuK-_N.js";import"./useReferenceHiddenChangeCallback-BushtQXU.js";import"./AppRootPortal-DE1zUA1W.js";import"./useColorScheme-BJrTZoRu.js";import"./createPortal-C50FuxQ1.js";import"./isRefObject-Dh5CqLqK.js";import"./ColorSchemeProvider-B-rFnFpu.js";import"./ConfigProviderOverride-BG7i4k0t.js";import"./FloatingArrow-C0dKbfCi.js";import"./usePlacementChangeCallback-yI2hnKE9.js";import"./floating-ui.react-dom-CUfx7nZO.js";import"./customResizeObserver-CzwDpNji.js";import"./Spinner-ClXGWKNH.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-DagysbTj.js";import"./Paragraph-BILZ1ORB.js";import"./NativeSelect-DM4YvyY5.js";import"./FormField-IzYh4c0W.js";import"./useFocusWithin-CGwmDWCX.js";import"./Select.module-B0QOxRMU.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-DltQDU2z.js";import"./cancel_16-YXtTtkow.js";import"./useStateWithPrev-CXWNs8CA.js";import"./chevron_left_outline_20-C0ihW9l8.js";import"./Calendar-WoyM0GG0.js";import"./useEnsuredControl-D9d4ZMOI.js";import"./Button-V1CoOSHU.js";import"./FocusTrap-sLpD_IpX.js";import"./useMutationObserver-CFeW2Qdk.js";import"./calendar_outline_20-C6Fpt6DG.js";import"./clear_16-DeivK5kH.js";import"./Removable-DbtKpkoR.js";import"./useConfigDirection-EPKxpKX2.js";import"./cancel_24-k8gLLgTE.js";import"./FormItemTopLabel-BR1igi6_.js";import"./Subhead-BNTLgiWX.js";import"./UnstyledTextField-BbUr6gdD.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
