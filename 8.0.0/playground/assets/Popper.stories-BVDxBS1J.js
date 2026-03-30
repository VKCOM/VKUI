import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{ps as r,yo as i}from"./iframe-DYsbkMbM.js";import{n as a,t as o}from"./Button-Bn0gUV0z.js";import{n as s,t as c}from"./Popper-BGw9CPj_.js";import{n as l,t as u}from"./Div-DVktvkLx.js";import{i as d,n as f,t as p}from"./constants-CXYaXe_q.js";import{n as m,t as h}from"./createStoryParameters-CbXzS3a6.js";var g=n({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=t((()=>{_=e(r(),1),d(),m(),a(),l(),s(),v=i(),y={title:`Modals/Popper`,component:c,parameters:h(`Popper`,p,f),tags:[`Модальные окна`]},b={render:function(e){let[t,n]=_.useState(e.shown||!1),r=_.useRef(null);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(o,{getRootRef:r,onClick:()=>n(!t),children:t?`Закрыть`:`Открыть`}),t&&(0,v.jsx)(c,{usePortal:!1,offsetByMainAxis:8,...e,targetRef:r,children:(0,v.jsx)(u,{children:`Привет`})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shown, setShown] = React.useState(args.shown || false);
    const buttonRef = React.useRef(null);
    return <React.Fragment>
        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
          {shown ? 'Закрыть' : 'Открыть'}
        </Button>
        {shown && <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>
            <Div>Привет</Div>
          </Popper>}
      </React.Fragment>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{g as n,S as r,b as t};