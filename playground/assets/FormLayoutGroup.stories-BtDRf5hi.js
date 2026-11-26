import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,t as a}from"./constants-BWBR8eWE.js";import{n as o,t as s}from"./createStoryParameters-D_aKMzVl.js";import{n as c,t as l}from"./VisuallyHidden-B8gDKlvD.js";import{n as u,t as d}from"./Input-C0QwfGXJ.js";import{n as f,t as p}from"./FormItem--X1L6eoH.js";import{n as m,t as h}from"./DateInput-2qldKcZ2.js";import{n as g,t as _}from"./Select-3P8N8BZC.js";import{n as v,t as y}from"./FormLayoutGroup-ClrpUO4l.js";var b=t({AccessibleHorizontalSegmented:()=>w,Playground:()=>C,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T;function E(){return(E=e((()=>{r(),o(),m(),f(),u(),g(),c(),v(),x=n(),S={title:`Layout/FormLayoutGroup`,component:y,parameters:s(`FormLayoutGroup`,a,i),tags:[`Раскладка`]},C=e=>(0,x.jsxs)(y,{...e,children:[(0,x.jsx)(p,{htmlFor:`name`,top:`Имя ящика`,children:(0,x.jsx)(d,{id:`name`})}),(0,x.jsx)(p,{children:(0,x.jsx)(_,{options:[`@mail.ru`,`@internet.ru`,`@bk.ru`,`@inbox.ru`,`@list.ru`].map(e=>({label:e,value:e})),defaultValue:`@mail.ru`})})]}),w=e=>(0,x.jsxs)(y,{mode:`horizontal`,segmented:!0,...e,children:[(0,x.jsxs)(p,{children:[(0,x.jsx)(l,{Component:`label`,htmlFor:`nikname-id`,children:`Никнейм или имя`}),(0,x.jsx)(d,{id:`nickname-id`,placeholder:`Никнейм или имя`})]}),(0,x.jsxs)(p,{children:[(0,x.jsx)(l,{Component:`label`,htmlFor:`link-or-id-input-id`,children:`Ссылка на ID`}),(0,x.jsx)(d,{id:`link-or-id-input-id`,placeholder:`Ссылка на ID`})]}),(0,x.jsxs)(p,{children:[(0,x.jsx)(l,{Component:`label`,htmlFor:`date-id`,children:`Дата или диапазон`}),(0,x.jsx)(h,{id:`date-id`,renderCustomValue:e=>e?void 0:(0,x.jsx)(`span`,{"aria-hidden":!0,style:{color:`var(--vkui--color_text_secondary)`},children:`Дата или диапазон`})})]})]}),T=[`Playground`,`AccessibleHorizontalSegmented`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: FormLayoutGroupProps) => <FormLayoutGroup {...args}>
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
  </FormLayoutGroup>`,...w.parameters?.docs?.source}}}})))()}export{C as n,E as r,b as t};