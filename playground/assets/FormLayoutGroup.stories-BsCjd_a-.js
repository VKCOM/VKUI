import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B7sYxePN.js";import{n,t as r}from"./VisuallyHidden-CMBkULmz.js";import{n as i,t as a}from"./FormItem-sbT2gAR3.js";import{n as o,t as s}from"./FormLayoutGroup-BvdYEWK5.js";import{n as c,t as l}from"./Input-D0DJqmeY.js";import{n as u,t as d}from"./Select-DiSzgbFi.js";import{n as f,t as p}from"./DateInput-nS1jzpGL.js";import{i as m,n as h,t as g}from"./constants-Dj6vOzIh.js";import{n as _,t as v}from"./createStoryParameters-pz1UrWMe.js";var y,b,x,S,C,w=e((()=>{m(),_(),f(),i(),c(),u(),n(),o(),y=t(),b={title:`Layout/FormLayoutGroup`,component:s,parameters:v(`FormLayoutGroup`,g,h),tags:[`Раскладка`]},x={render:e=>(0,y.jsxs)(s,{...e,children:[(0,y.jsx)(a,{htmlFor:`name`,top:`Имя ящика`,children:(0,y.jsx)(l,{id:`name`})}),(0,y.jsx)(a,{children:(0,y.jsx)(d,{options:[`@mail.ru`,`@internet.ru`,`@bk.ru`,`@inbox.ru`,`@list.ru`].map(e=>({label:e,value:e})),defaultValue:`@mail.ru`})})]})},S={render:e=>(0,y.jsxs)(s,{mode:`horizontal`,segmented:!0,...e,children:[(0,y.jsxs)(a,{children:[(0,y.jsx)(r,{Component:`label`,htmlFor:`nikname-id`,children:`Никнейм или имя`}),(0,y.jsx)(l,{id:`nickname-id`,placeholder:`Никнейм или имя`})]}),(0,y.jsxs)(a,{children:[(0,y.jsx)(r,{Component:`label`,htmlFor:`link-or-id-input-id`,children:`Ссылка на ID`}),(0,y.jsx)(l,{id:`link-or-id-input-id`,placeholder:`Ссылка на ID`})]}),(0,y.jsxs)(a,{children:[(0,y.jsx)(r,{Component:`label`,htmlFor:`date-id`,children:`Дата или диапазон`}),(0,y.jsx)(p,{id:`date-id`,renderCustomValue:e=>e?void 0:(0,y.jsx)(`span`,{"aria-hidden":!0,style:{color:`var(--vkui--color_text_secondary)`},children:`Дата или диапазон`})})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`AccessibleHorizontalSegmeted`]}));export{b as a,w as i,x as n,C as r,S as t};