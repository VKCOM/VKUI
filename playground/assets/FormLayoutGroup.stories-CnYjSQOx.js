import{j as r}from"./iframe-D9ctG7Ns.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-Cyn4psJT.js";import{F as o}from"./FormItem-WqX-ap_M.js";import{I as p}from"./Input-BFLTV-Rt.js";import{S as j}from"./Select-DRDmUi2I.js";import{V as a}from"./VisuallyHidden-XRinxkJw.js";import{F as n}from"./FormLayoutGroup-BJRRf57i.js";import"./preload-helper-Dp1pzeXC.js";import"./DateInput.module-B-g7uyDX.js";import"./useBooleanState-EYObBVXu.js";import"./useGlobalEventListener-DwhKth4J.js";import"./useEventListener-UbYuQ7Ip.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-CoTP4WiW.js";import"./CalendarHeader-BsdeO7D8.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-DOmAnzcN.js";import"./Clickable-4xEXwBeB.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-dk1yVFOH.js";import"./Footnote-BcHikxS0.js";import"./CustomSelect-Clhq3HIP.js";import"./getValueByKey-D_Dt--9h.js";import"./DropdownIcon-OpS3N_ep.js";import"./children-O1ZDhWOu.js";import"./dropdown_20-CPZmcS09.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-Byz4oOTz.js";import"./CustomSelectDropdown-iWfSOj3j.js";import"./CustomScrollView-BgDWNMPk.js";import"./Popper-Box-Q-aN.js";import"./useReferenceHiddenChangeCallback-Cmfrj-4J.js";import"./AppRootPortal-DZcFVsJe.js";import"./useColorScheme-D5oaSQC0.js";import"./createPortal-DiDQqqFD.js";import"./ColorSchemeProvider-42MwyphL.js";import"./ConfigProviderOverride-BJZJ1bpA.js";import"./FloatingArrow-C_eyXCdC.js";import"./usePlacementChangeCallback-BNOpKcC7.js";import"./floating-ui.react-dom-i0bg-Iov.js";import"./Spinner-CdhXnMLF.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-xHfalzw0.js";import"./Paragraph-CL2gUbo0.js";import"./NativeSelect-DQo-TeXA.js";import"./FormField-DArlX69i.js";import"./useFocusWithin-C5Vdk2dl.js";import"./Select.module-9xsMYqzH.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-Cu6N9yzq.js";import"./cancel_16-DYxBW21y.js";import"./useStateWithPrev-B_erCZ5v.js";import"./chevron_left_outline_20-C2tebWfr.js";import"./useEnsuredControl-C-x_bIxV.js";import"./Button-ClDISrDv.js";import"./FocusTrap-CXlwguwW.js";import"./useFocusTrap-DgL23sHD.js";import"./useMutationObserver-qTqSTRf6.js";import"./calendar_outline_20-B6kK08gH.js";import"./clear_16-CkB26DR4.js";import"./Removable-D8OEYYHJ.js";import"./useConfigDirection-BepSmh67.js";import"./cancel_24-oGe7O0m1.js";import"./FormItemTopLabel-BNFanwkm.js";import"./Subhead-DjvqikOr.js";import"./UnstyledTextField-DcT-C0zT.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
