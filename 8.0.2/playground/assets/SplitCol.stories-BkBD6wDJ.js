import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{Ct as r,F as i,I as a,On as o,Pn as s,St as c,U as l,W as u,a as d,et as f,kn as p,o as m,ps as h,tt as g,yo as _}from"./iframe-lhb8_BzR.js";import{n as v,t as y}from"./Button-DNrV6Opx.js";import{n as b,t as x}from"./Group-BJ5gURe8.js";import{n as S,t as C}from"./Placeholder-4w7vcExv.js";import{i as w,n as T,t as E}from"./constants-CXYaXe_q.js";import{n as D,t as O}from"./createStoryParameters-CbXzS3a6.js";var k=n({Playground:()=>P,__namedExportsOrder:()=>F,default:()=>M}),A,j,M,N,P,F,I=t((()=>{A=e(h(),1),o(),w(),D(),v(),b(),r(),S(),g(),a(),m(),u(),j=_(),M={title:`Layout/SplitLayout/SplitCol`,component:l,parameters:O(`SplitCol`,E,T),tags:[`Раскладка`]},N=[`panel 1`,`panel 2`],P={args:{width:`100%`,maxWidth:560},render:function(e){let[t,n]=A.useState(N[0]);return(0,j.jsx)(i,{center:!0,children:(0,j.jsx)(l,{...e,children:(0,j.jsxs)(d,{activePanel:t,children:[(0,j.jsx)(c,{id:N[0],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{icon:(0,j.jsx)(p,{}),title:`Уведомления от сообществ`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(N[1]),children:`Подключить сообщества`}),children:`Подключите сообщества, от которых Вы хотите получать уведомления`}),(0,j.jsx)(f,{}),(0,j.jsx)(C,{icon:(0,j.jsx)(s,{}),children:`Введите адрес страницы в поле поиска`})]})}),(0,j.jsx)(c,{id:N[1],children:(0,j.jsxs)(x,{children:[(0,j.jsx)(C,{children:`Доступ запрещён`}),(0,j.jsx)(f,{}),(0,j.jsx)(C,{title:`Находите друзей`,action:(0,j.jsx)(y,{size:`m`,onClick:()=>n(N[0]),children:`Найти друзей`}),children:`Здесь будут отображаться люди, которых вы добавите в друзья`})]})})]})})})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    width: '100%',
    maxWidth: 560
  },
  render: function Render(args) {
    const [panel, setPanel] = React.useState(panels[0]);
    return <SplitLayout center>
        <SplitCol {...args}>
          <View activePanel={panel}>
            <Panel id={panels[0]}>
              <Group>
                <Placeholder icon={<Icon56UsersOutline />} title="Уведомления от сообществ" action={<Button size="m" onClick={() => setPanel(panels[1])}>
                      Подключить сообщества
                    </Button>}>
                  Подключите сообщества, от которых Вы хотите получать уведомления
                </Placeholder>
                <Separator />
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
            <Panel id={panels[1]}>
              <Group>
                <Placeholder>Доступ запрещён</Placeholder>
                <Separator />
                <Placeholder title="Находите друзей" action={<Button size="m" onClick={() => setPanel(panels[0])}>
                      Найти друзей
                    </Button>}>
                  Здесь будут отображаться люди, которых вы добавите в друзья
                </Placeholder>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Playground`]}));export{k as n,I as r,P as t};