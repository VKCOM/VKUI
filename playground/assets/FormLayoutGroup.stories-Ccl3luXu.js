import{j as r}from"./iframe-CEhhJuIi.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-BXSBRozV.js";import{F as o}from"./FormItem-CgID-1p5.js";import{I as p}from"./Input-Y5WvGego.js";import{S as c}from"./Select-CvOFF3KV.js";import{V as a}from"./VisuallyHidden-BYulTkKK.js";import{F as n}from"./FormLayoutGroup-BDdyqph2.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-DDRtdo5V.js";import"./useBooleanState-C3dujkKO.js";import"./callMultiple-ChqatQlo.js";import"./useGlobalEscKeyDown-CE7TqF1-.js";import"./CalendarHeader-DsvWo35P.js";import"./useState-BlpMLPZb.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./Tappable-CTSOdpDd.js";import"./Clickable-CSDkuBjh.js";import"./InputUtils-CN8Bpeve.js";import"./Footnote-wldoNL-p.js";import"./equal-Ct-7Lddr.js";import"./CustomSelect-3uI43kSM.js";import"./getValueByKey-BAqjffOg.js";import"./DropdownIcon-QFSiGWGc.js";import"./children-fYKiCF6j.js";import"./dropdown_20-DwBVY18R.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-A_QqfnCy.js";import"./CustomSelectDropdown-mJ6-GiY6.js";import"./CustomScrollView-Bcc3tVi5.js";import"./Popper-BHJzTj_0.js";import"./useReferenceHiddenChangeCallback-DHx5mXYN.js";import"./AppRootPortal-uzyAKSZM.js";import"./useColorScheme-C52TR78y.js";import"./createPortal-BD13EKcF.js";import"./ColorSchemeProvider-fCsC8sPd.js";import"./ConfigProviderOverride-CSnPmu4b.js";import"./FloatingArrow-D9rl4d8P.js";import"./usePlacementChangeCallback-moWOJvM7.js";import"./floating-ui.react-dom-BUWNT6g6.js";import"./Spinner-C8mKPATK.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./CustomSelectOption-BjwWmvjQ.js";import"./Paragraph-DZv5gWne.js";import"./NativeSelect-C8TgweD-.js";import"./FormField-K1skToW1.js";import"./useFocusWithin-D7grZ9Rv.js";import"./Select.module-CXMT-Xu2.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-D0BsKVg5.js";import"./cancel_16-L2iU7g3d.js";import"./useStateWithPrev-4wIF-59x.js";import"./chevron_left_outline_20-004eD-mk.js";import"./Calendar-B1v1sSQ4.js";import"./useEnsuredControl-R1Fp-Kd5.js";import"./Button-VHcOoYjV.js";import"./FocusTrap-Bmt_IN1l.js";import"./useMutationObserver-L83qy9tM.js";import"./calendar_outline_20-BlTKrIM9.js";import"./clear_16-Cob-MU78.js";import"./Removable-BCfQmLaJ.js";import"./useConfigDirection-K0H5l3FT.js";import"./cancel_24-CHfH8s1a.js";import"./FormItemTopLabel-Cm1fSad6.js";import"./Subhead-4zP8hIFm.js";import"./UnstyledTextField-CEQXrxfo.js";const Gr={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const _r=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,_r as __namedExportsOrder,Gr as default};
