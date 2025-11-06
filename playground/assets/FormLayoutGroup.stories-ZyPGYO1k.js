import{j as r}from"./iframe-DcUCz3Gq.js";import{D as l,C as d}from"./constants-DdkjnEgz.js";import{c as s}from"./createStoryParameters-CcwS40kl.js";import{D as u}from"./DateInput-CQlPHlN3.js";import{F as o}from"./FormItem-CgOt9sf0.js";import{I as p}from"./Input-cM2pkblM.js";import{S as c}from"./Select-B8bRMlp4.js";import{V as a}from"./VisuallyHidden-IsgabQ9w.js";import{F as n}from"./FormLayoutGroup-Bdc6DaIQ.js";import"./preload-helper-PPVm8Dsz.js";import"./DateInput.module-B8i60UJg.js";import"./useBooleanState-Bvgv4ud3.js";import"./useGlobalEventListener-JEtPNfzN.js";import"./useEventListener-D25pA6Ua.js";import"./callMultiple-ChqatQlo.js";import"./Calendar-MKi_jq83.js";import"./CalendarHeader-B7AEShB4.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./mergeCalls-Bc-HqyI0.js";import"./Tappable-CGnYgxpx.js";import"./Clickable-8ToLJd_t.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Dt7ctke5.js";import"./Footnote-lAEBSvha.js";import"./CustomSelect-DXJqjN00.js";import"./getValueByKey-D-251Osc.js";import"./DropdownIcon-C_vBKBvW.js";import"./children-DDwVHqk6.js";import"./dropdown_20-D4qt7qi0.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./chevron_up_24-DJH5Bv_Z.js";import"./CustomSelectDropdown-B26n3wMN.js";import"./CustomScrollView-CYwznZ8r.js";import"./Popper-C4EFCWA9.js";import"./useReferenceHiddenChangeCallback-CSFFsN8n.js";import"./AppRootPortal-Uj7JA9BA.js";import"./useColorScheme-DrgIsgMO.js";import"./createPortal-DltXdHJc.js";import"./ColorSchemeProvider-CpsSWhwy.js";import"./ConfigProviderOverride-BiHuZVLC.js";import"./FloatingArrow-AZDnUaK5.js";import"./usePlacementChangeCallback-qGx5x2BN.js";import"./floating-ui.react-dom-BD4t0KnS.js";import"./Spinner-DB1TcyOv.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./CustomSelectOption-BrSjq8Dp.js";import"./Paragraph-DEZu3Vgm.js";import"./NativeSelect-fWz39x5d.js";import"./FormField-BE6qQZ7q.js";import"./useFocusWithin-4tbXXtmK.js";import"./Select.module-cqXk88D3.js";import"./warnOnce-BsOPdcXO.js";import"./IconButton-CGiS95Aa.js";import"./cancel_16-Dmbi-9wn.js";import"./useStateWithPrev-ULdk1ffR.js";import"./chevron_left_outline_20-BgodPbFJ.js";import"./useEnsuredControl-B2KTcbi_.js";import"./Button-BU_mp-AO.js";import"./FocusTrap-i28PizB0.js";import"./useFocusTrap-SSRd9KwO.js";import"./useMutationObserver-BO5feLdl.js";import"./calendar_outline_20-pd9RL1BT.js";import"./clear_16-n-XV9p3X.js";import"./Removable-Bl3ntWOu.js";import"./useConfigDirection-BglQDqbm.js";import"./cancel_24-DyhNO7vT.js";import"./FormItemTopLabel-DbrGZt8b.js";import"./Subhead-CcORohtB.js";import"./UnstyledTextField-BjhcsYsW.js";const _r={title:"Layout/FormLayoutGroup",component:n,parameters:s("FormLayoutGroup",d,l),tags:["Раскладка"]},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(c,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(u,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
