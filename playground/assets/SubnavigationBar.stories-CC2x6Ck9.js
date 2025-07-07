import{j as u,R as v,r as C,w as _,b}from"./iframe-DTUKIQpa.js";import{D as y,C as A}from"./constants-DdkjnEgz.js";import{c as E}from"./createStoryParameters-CcwS40kl.js";import{u as h}from"./useCustomArgs-CP_4pwkL.js";import{C as D}from"./Counter-DUUuREc8.js";import{G as F}from"./Group-CZGORHer.js";import{S as l,P as j,W as w,a as R}from"./SubnavigationButton.stories-Begf3-_m.js";import{h as P}from"./react_utils-CSZjvU4X.js";import{H as z}from"./HorizontalScroll-DXCV8OUr.js";import{k as I}from"./index-CqV0khl1.js";const T="_scrollIn_x64wg_7",k="_item_x64wg_20",V="_modeFixed_x64wg_29",a={in:"_in_x64wg_1",scrollIn:T,item:k,modeFixed:V},L=e=>e-240,N=e=>e+240,s=({fixed:e=!1,children:t,showArrows:n=!0,getScrollToLeft:o=L,getScrollToRight:f=N,scrollAnimationDuration:S,...B})=>{let i,c={};return e?i="div":(i=z,c={showArrows:n,getScrollToLeft:o,getScrollToRight:f,scrollAnimationDuration:S}),u.jsx(v,{baseClassName:e&&a.modeFixed,...B,children:u.jsx(i,{className:a.in,...c,children:u.jsx("ul",{className:a.scrollIn,children:C.Children.map(t,(d,x)=>P(d)?u.jsx("li",{className:a.item,children:d},x):null)})})})};try{s.displayName="SubnavigationBar",s.__docgenInfo={description:"",displayName:"SubnavigationBar",props:{fixed:{defaultValue:{value:"false"},description:"Отключение возможности прокручивания компонента по горизонтали.",name:"fixed",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},showArrows:{defaultValue:{value:"true"},description:"Показывать ли стрелки.",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},getScrollToLeft:{defaultValue:{value:"(x) => x - 240"},description:"Функция для расчета величины прокрутки при нажатии на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:{value:"(x) => x + 240"},description:"Функция для расчета величины прокрутки при нажатии на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},scrollAnimationDuration:{defaultValue:null,description:"Длительность анимации скролла.",name:"scrollAnimationDuration",required:!1,type:{name:"number"}}}}}catch{}const q={title:"Blocks/SubnavigationBar",component:s,parameters:E("SubnavigationBar",A,y),argTypes:{selected:{control:"select",options:["size","favorite","filters"]}}},r={render:function({selected:t,...n}){const[,o]=h();return u.jsxs(s,{...n,children:[u.jsx(l,{...j.args,selected:t==="size",onClick:()=>o({selected:"size"})}),u.jsx(l,{...w.args,before:u.jsx(I,{}),selected:t==="favorite",onClick:()=>o({selected:"favorite"})}),u.jsx(l,{...R.args,after:u.jsx(D,{size:"s",children:"3"}),selected:t==="filters",onClick:()=>o({selected:"filters"})})]})},args:{selected:"size"},decorators:[(e,t)=>u.jsx(F,{children:u.jsx(e,{...t.args})}),_,b]};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render({
    selected,
    ...args
  }) {
    const [, updateArg] = useCustomArgs();
    return <SubnavigationBar {...args}>
        <SubnavigationButton {...BasicSubnavigationButtonStory.args} selected={selected === 'size'} onClick={() => updateArg({
        selected: 'size'
      })} />
        <SubnavigationButton {...IconSubnavigationButtonStory.args} before={<Icon24FavoriteOutline />} selected={selected === 'favorite'} onClick={() => updateArg({
        selected: 'favorite'
      })} />
        <SubnavigationButton {...CounterSubnavigationButtonStory.args} after={<Counter size="s">3</Counter>} selected={selected === 'filters'} onClick={() => updateArg({
        selected: 'filters'
      })} />
      </SubnavigationBar>;
  },
  args: {
    selected: 'size'
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const H=["Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{r as P,s as S,Y as a};
