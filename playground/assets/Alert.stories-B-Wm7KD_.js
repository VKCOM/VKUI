import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{t as r}from"./jsx-runtime-CRMqfscQ.js";import{n as i,t as a}from"./Button-B52Pa8EG.js";import{n as o,t as s}from"./Alert-BR0X-Ax4.js";import{n as c,t as l}from"./Placeholder-BI6EG9Dt.js";import{i as u,n as d,t as f}from"./constants-BYo4AJCv.js";import{n as p,t as m}from"./createStoryParameters-Dbf8epgV.js";var h,g,_,v,y,b=t((()=>{h=e(n(),1),u(),p(),i(),c(),o(),g=r(),_={title:`Feedback/Alert`,component:s,parameters:m(`Alert`,f,d),tags:[`Обратная связь`]},v={render:function(e){let[t,n]=h.useState(!0);return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(l,{stretched:!0,children:(0,g.jsx)(a,{onClick:()=>n(!0),children:`Открыть`})}),t?(0,g.jsx)(s,{...e,onClosed:()=>n(!1)}):null]})},args:{actions:[{title:`Отмена`,mode:`cancel`},{title:`Удалить`,mode:`destructive`}],actionsLayout:`horizontal`,dismissLabel:`Отмена`,title:`Удаление документа`,description:`Вы уверены, что хотите удалить этот документ?`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}));export{_ as i,y as n,b as r,v as t};