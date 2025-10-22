import{j as u,R as S,r as B,w as x,b as v}from"./iframe-DvQ0hW0I.js";import{D as C,C as _}from"./constants-DdkjnEgz.js";import{c as b}from"./createStoryParameters-CcwS40kl.js";import{u as y}from"./useCustomArgs-DHDTtt1t.js";import{C as A}from"./Counter-BC0hBSqt.js";import{G as E}from"./Group-DlJj6tsg.js";import{S as l,P as h,W as D,a as F}from"./SubnavigationButton.stories-BzmlMHbe.js";import{h as j}from"./react_utils-CSZjvU4X.js";import{H as w}from"./HorizontalScroll-C5Z6sTbD.js";import{k as R}from"./index-FTwol-uD.js";const P="_scrollIn_x64wg_7",z="_item_x64wg_20",I="_modeFixed_x64wg_29",a={in:"_in_x64wg_1",scrollIn:P,item:z,modeFixed:I},T=e=>e-240,N=e=>e+240,s=({fixed:e=!1,children:t,showArrows:n=!0,getScrollToLeft:o=T,getScrollToRight:m=N,scrollAnimationDuration:g,...p})=>{let i,c={};return e?i="div":(i=w,c={showArrows:n,getScrollToLeft:o,getScrollToRight:m,scrollAnimationDuration:g}),u.jsx(S,{baseClassName:e&&a.modeFixed,...p,children:u.jsx(i,{className:a.in,...c,children:u.jsx("ul",{className:a.scrollIn,children:B.Children.map(t,(d,f)=>j(d)?u.jsx("li",{className:a.item,children:d},f):null)})})})};try{s.displayName="SubnavigationBar",s.__docgenInfo={description:"",displayName:"SubnavigationBar",props:{fixed:{defaultValue:{value:"false"},description:"Отключение возможности прокручивания компонента по горизонтали.",name:"fixed",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},showArrows:{defaultValue:{value:"true"},description:"Показывать ли стрелки.",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},getScrollToLeft:{defaultValue:{value:"(x) => x - 240"},description:"Функция для расчета величины прокрутки при нажатии на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:{value:"(x) => x + 240"},description:"Функция для расчета величины прокрутки при нажатии на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},scrollAnimationDuration:{defaultValue:null,description:"Длительность анимации скролла.",name:"scrollAnimationDuration",required:!1,type:{name:"number"}}}}}catch{}const V={title:"Navigation/SubnavigationBar",component:s,parameters:b("SubnavigationBar",_,C),argTypes:{selected:{control:"select",options:["size","favorite","filters"]}},tags:["Навигация"]},r={render:function({selected:t,...n}){const[,o]=y();return u.jsxs(s,{...n,children:[u.jsx(l,{...h.args,selected:t==="size",onClick:()=>o({selected:"size"})}),u.jsx(l,{...D.args,before:u.jsx(R,{}),selected:t==="favorite",onClick:()=>o({selected:"favorite"})}),u.jsx(l,{...F.args,after:u.jsx(A,{size:"s",children:"3"}),selected:t==="filters",onClick:()=>o({selected:"filters"})})]})},args:{selected:"size"},decorators:[(e,t)=>u.jsx(E,{children:u.jsx(e,{...t.args})}),x,v]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["Playground"],J=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:k,default:V},Symbol.toStringTag,{value:"Module"}));export{r as P,s as S,J as a};
