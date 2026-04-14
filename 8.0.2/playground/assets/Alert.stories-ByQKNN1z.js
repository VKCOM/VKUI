import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{ps as r,yo as i}from"./iframe-lhb8_BzR.js";import{n as a,t as o}from"./Button-DNrV6Opx.js";import{n as s,t as c}from"./Alert-D34MvGWU.js";import{n as l,t as u}from"./Placeholder-4w7vcExv.js";import{i as d,n as f,t as p}from"./constants-CXYaXe_q.js";import{n as m,t as h}from"./createStoryParameters-CbXzS3a6.js";var g=n({Playground:()=>b,__namedExportsOrder:()=>x,default:()=>y}),_,v,y,b,x,S=t((()=>{_=e(r(),1),d(),m(),a(),l(),s(),v=i(),y={title:`Feedback/Alert`,component:c,parameters:h(`Alert`,p,f),tags:[`Обратная связь`]},b={render:function(e){let[t,n]=_.useState(!0);return(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(u,{stretched:!0,children:(0,v.jsx)(o,{onClick:()=>n(!0),children:`Открыть`})}),t?(0,v.jsx)(c,{...e,onClosed:()=>n(!1)}):null]})},args:{actions:[{title:`Отмена`,mode:`cancel`},{title:`Удалить`,mode:`destructive`}],actionsLayout:`horizontal`,dismissLabel:`Отмена`,title:`Удаление документа`,description:`Вы уверены, что хотите удалить этот документ?`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClosed={() => setVisible(false)} /> : null}
      </React.Fragment>;
  },
  args: {
    actions: [{
      title: 'Отмена',
      mode: 'cancel'
    }, {
      title: 'Удалить',
      mode: 'destructive'
    }],
    actionsLayout: 'horizontal',
    dismissLabel: 'Отмена',
    title: 'Удаление документа',
    description: 'Вы уверены, что хотите удалить этот документ?'
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}));export{b as n,S as r,g as t};