import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{n as i,t as a}from"./Button-DkR7tdUq.js";import{n as o,t as s}from"./Popper-CZXEIxbC.js";import{n as c,t as l}from"./Div-DkSA0ZW5.js";import{i as u,n as d,t as f}from"./constants-Dj6vOzIh.js";import{n as p,t as m}from"./createStoryParameters-pz1UrWMe.js";var h,g,_,v,y,b=t((()=>{h=e(n(),1),u(),p(),i(),c(),o(),g=r(),_={title:`Modals/Popper`,component:s,parameters:m(`Popper`,f,d),tags:[`Модальные окна`]},v={render:function(e){let[t,n]=h.useState(e.shown||!1),r=h.useRef(null);return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(a,{getRootRef:r,onClick:()=>n(!t),children:t?`Закрыть`:`Открыть`}),t&&(0,g.jsx)(s,{usePortal:!1,offsetByMainAxis:8,...e,targetRef:r,children:(0,g.jsx)(l,{children:`Привет`})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}));export{_ as i,y as n,b as r,v as t};