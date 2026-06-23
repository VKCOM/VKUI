import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{n as i,t as a}from"./VisuallyHidden-GaCP6QeD.js";import{n as o,t as s}from"./FormItem-DNDkxS86.js";import{n as c,t as l}from"./FormLayoutGroup-DSv4AHQb.js";import{n as u,t as d}from"./Input-D9mLcf5V.js";import{n as f,t as p}from"./Select-nG_loXqu.js";import{n as m,t as h}from"./DateInput-NNkaHB5g.js";import{i as g,n as _,t as v}from"./constants-cjed6ZWB.js";import{n as y,t as b}from"./createStoryParameters-CMHckkzt.js";var x=e({AccessibleHorizontalSegmented:()=>T,Playground:()=>w,__namedExportsOrder:()=>E,default:()=>C}),S,C,w,T,E,D=t((()=>{g(),y(),m(),o(),u(),f(),i(),c(),S=n(r(),1),C={title:`Layout/FormLayoutGroup`,component:l,parameters:b(`FormLayoutGroup`,v,_),tags:[`Раскладка`]},w=e=>(0,S.jsxs)(l,{...e,children:[(0,S.jsx)(s,{htmlFor:`name`,top:`Имя ящика`,children:(0,S.jsx)(d,{id:`name`})}),(0,S.jsx)(s,{children:(0,S.jsx)(p,{options:[`@mail.ru`,`@internet.ru`,`@bk.ru`,`@inbox.ru`,`@list.ru`].map(e=>({label:e,value:e})),defaultValue:`@mail.ru`})})]}),T=e=>(0,S.jsxs)(l,{mode:`horizontal`,segmented:!0,...e,children:[(0,S.jsxs)(s,{children:[(0,S.jsx)(a,{Component:`label`,htmlFor:`nikname-id`,children:`Никнейм или имя`}),(0,S.jsx)(d,{id:`nickname-id`,placeholder:`Никнейм или имя`})]}),(0,S.jsxs)(s,{children:[(0,S.jsx)(a,{Component:`label`,htmlFor:`link-or-id-input-id`,children:`Ссылка на ID`}),(0,S.jsx)(d,{id:`link-or-id-input-id`,placeholder:`Ссылка на ID`})]}),(0,S.jsxs)(s,{children:[(0,S.jsx)(a,{Component:`label`,htmlFor:`date-id`,children:`Дата или диапазон`}),(0,S.jsx)(h,{id:`date-id`,renderCustomValue:e=>e?void 0:(0,S.jsx)(`span`,{"aria-hidden":!0,style:{color:`var(--vkui--color_text_secondary)`},children:`Дата или диапазон`})})]})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: FormLayoutGroupProps) => <FormLayoutGroup {...args}>
    <FormItem htmlFor="name" top="Имя ящика">
      <Input id="name" />
    </FormItem>
    <FormItem>
      <Select options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(i => ({
      label: i,
      value: i
    }))} defaultValue="@mail.ru" />
    </FormItem>
  </FormLayoutGroup>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: FormLayoutGroupProps) => <FormLayoutGroup mode="horizontal" segmented {...args}>
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
  </FormLayoutGroup>`,...T.parameters?.docs?.source}}},E=[`Playground`,`AccessibleHorizontalSegmented`]}));export{w as n,D as r,x as t};