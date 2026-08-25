import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./VisuallyHidden-a-QXl37q.js";import{n as a,t as o}from"./FormItem-B7byku12.js";import{n as s,t as c}from"./FormLayoutGroup-CERUXdFI.js";import{n as l,t as u}from"./Input-BD5Vf9yq.js";import{n as d,t as f}from"./Select-Ckre30ml.js";import{n as p,t as m}from"./DateInput-Cb-JSkyn.js";import{i as h,n as g,t as _}from"./constants-DBkyy3CT.js";import{n as v,t as y}from"./createStoryParameters-DBkK1CfQ.js";var b=t({AccessibleHorizontalSegmented:()=>w,Playground:()=>C,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T;function E(){return(E=e((()=>{h(),v(),p(),a(),l(),d(),r(),s(),x=n(),S={title:`Layout/FormLayoutGroup`,component:c,parameters:y(`FormLayoutGroup`,_,g),tags:[`Раскладка`]},C=e=>(0,x.jsxs)(c,{...e,children:[(0,x.jsx)(o,{htmlFor:`name`,top:`Имя ящика`,children:(0,x.jsx)(u,{id:`name`})}),(0,x.jsx)(o,{children:(0,x.jsx)(f,{options:[`@mail.ru`,`@internet.ru`,`@bk.ru`,`@inbox.ru`,`@list.ru`].map(e=>({label:e,value:e})),defaultValue:`@mail.ru`})})]}),w=e=>(0,x.jsxs)(c,{mode:`horizontal`,segmented:!0,...e,children:[(0,x.jsxs)(o,{children:[(0,x.jsx)(i,{Component:`label`,htmlFor:`nikname-id`,children:`Никнейм или имя`}),(0,x.jsx)(u,{id:`nickname-id`,placeholder:`Никнейм или имя`})]}),(0,x.jsxs)(o,{children:[(0,x.jsx)(i,{Component:`label`,htmlFor:`link-or-id-input-id`,children:`Ссылка на ID`}),(0,x.jsx)(u,{id:`link-or-id-input-id`,placeholder:`Ссылка на ID`})]}),(0,x.jsxs)(o,{children:[(0,x.jsx)(i,{Component:`label`,htmlFor:`date-id`,children:`Дата или диапазон`}),(0,x.jsx)(m,{id:`date-id`,renderCustomValue:e=>e?void 0:(0,x.jsx)(`span`,{"aria-hidden":!0,style:{color:`var(--vkui--color_text_secondary)`},children:`Дата или диапазон`})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: FormLayoutGroupProps) => <FormLayoutGroup {...args}>
    <FormItem htmlFor="name" top="Имя ящика">
      <Input id="name" />
    </FormItem>
    <FormItem>
      <Select options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(i => ({
      label: i,
      value: i
    }))} defaultValue="@mail.ru" />
    </FormItem>
  </FormLayoutGroup>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: FormLayoutGroupProps) => <FormLayoutGroup mode="horizontal" segmented {...args}>
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
  </FormLayoutGroup>`,...w.parameters?.docs?.source}}},T=[`Playground`,`AccessibleHorizontalSegmented`]})))()}export{C as n,E as r,b as t};