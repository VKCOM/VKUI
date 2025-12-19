import{j as u,R as S,r as C,g as b,k as _,w as x,b as E}from"./iframe-CGSrC79H.js";import{D as y,C as A}from"./constants-DdkjnEgz.js";import{c as F}from"./createStoryParameters-CcwS40kl.js";import{u as D}from"./useCustomArgs-DuFii-g_.js";import{C as h}from"./Counter-C6u0gZTc.js";import{G as P}from"./Group-DH0PWTW1.js";import{S as l,P as j,W as R,a as z}from"./SubnavigationButton.stories-DEA9QK3d.js";import{H as w}from"./HorizontalScroll-CLG6ETB5.js";import{k as I}from"./index-DL2x-uFD.js";const V="_scrollIn_1r74r_7",k="_noPadding_1r74r_20",T="_item_1r74r_29",q="_modeFixed_1r74r_38",o={in:"_in_1r74r_1",scrollIn:V,noPadding:k,item:T,modeFixed:q},N=e=>e-240,L=e=>e+240,n=({fixed:e=!1,children:t,showArrows:s=!0,noPadding:a=!1,arrowSize:m="s",getScrollToLeft:g=N,getScrollToRight:p=L,scrollAnimationDuration:f,...v})=>{let i,c={};return e?i="div":(i=w,c={showArrows:s,arrowSize:m,getScrollToLeft:g,getScrollToRight:p,scrollAnimationDuration:f}),u.jsx(S,{baseClassName:e&&o.modeFixed,...v,children:u.jsx(i,{className:o.in,...c,children:u.jsx("ul",{className:b(o.scrollIn,a&&o.noPadding),children:C.Children.map(t,(d,B)=>_(d)?u.jsx("li",{className:o.item,children:d},B):null)})})})};try{n.displayName="SubnavigationBar",n.__docgenInfo={description:"",displayName:"SubnavigationBar",props:{fixed:{defaultValue:{value:"false"},description:"Отключение возможности прокручивания компонента по горизонтали.",name:"fixed",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:'Отключает отступы. Рекомендуется использовать с `mode="outline"` у [`SubnavigationButton`](https://vkui.io/components/subnavigation-button).',name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},showArrows:{defaultValue:{value:"true"},description:"Показывать ли стрелки.",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},arrowSize:{defaultValue:{value:"s"},description:"Размер стрелок.",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getScrollToLeft:{defaultValue:{value:"(x) => x - 240"},description:"Функция для расчета величины прокрутки при нажатии на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:{value:"(x) => x + 240"},description:"Функция для расчета величины прокрутки при нажатии на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},scrollAnimationDuration:{defaultValue:null,description:"Длительность анимации скролла.",name:"scrollAnimationDuration",required:!1,type:{name:"number"}}}}}catch{}const H={title:"Navigation/SubnavigationBar",component:n,parameters:F("SubnavigationBar",A,y),argTypes:{selected:{control:"select",options:["size","favorite","filters"]}},tags:["Навигация"]},r={render:function({selected:t,...s}){const[,a]=D();return u.jsxs(n,{...s,children:[u.jsx(l,{...j.args,selected:t==="size",onClick:()=>a({selected:"size"})}),u.jsx(l,{...R.args,before:u.jsx(I,{}),selected:t==="favorite",onClick:()=>a({selected:"favorite"})}),u.jsx(l,{...z.args,after:u.jsx(h,{size:"s",children:"3"}),selected:t==="filters",onClick:()=>a({selected:"filters"})})]})},args:{selected:"size"},decorators:[(e,t)=>u.jsx(P,{children:u.jsx(e,{...t.args})}),x,E]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const O=["Playground"],Y=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:O,default:H},Symbol.toStringTag,{value:"Module"}));export{r as P,n as S,Y as a};
