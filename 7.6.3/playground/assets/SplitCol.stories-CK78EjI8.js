import{e as d,r as P,j as e,f as x,V as j,g as i,S as n}from"./iframe-DvsMcRqO.js";import{D as S,C as f}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-DoX3DA-M.js";import{G as s}from"./Group-CqteXIEy.js";import{P as r}from"./Placeholder-H4GGnd-c.js";import{I as y}from"./users_outline_56-DqsVuC-A.js";import{I as g}from"./mention_outline_56-Bm3OGUbK.js";import"./preload-helper-Dp1pzeXC.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Nh-MMopi.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BGLO0lAS.js";import"./Tappable-Dogw4jpa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-DquLH6Yl.js";import"./useFocusVisibleClassName-D7HD7T4V.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-D1AbCbBE.js";import"./Footnote-BnZcEJ_G.js";import"./Headline-CDYdreGb.js";import"./Title-SHnE0uDa.js";import"./SvgIconRootV2-Co4m-cY3.js";import"./_object_spread_props-DRD4qu7p.js";const T={title:"Layout/SplitLayout/SplitCol",component:d,parameters:C("SplitCol",f,S),tags:["Раскладка"]},t=["panel 1","panel 2"],o={args:{width:"100%",maxWidth:560},render:function(u){const[h,a]=P.useState(t[0]);return e.jsx(x,{center:!0,children:e.jsx(d,{...u,children:e.jsxs(j,{activePanel:h,children:[e.jsx(i,{id:t[0],children:e.jsxs(s,{children:[e.jsx(r,{icon:e.jsx(y,{}),title:"Уведомления от сообществ",action:e.jsx(l,{size:"m",onClick:()=>a(t[1]),children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(n,{}),e.jsx(r,{icon:e.jsx(g,{}),children:"Введите адрес страницы в поле поиска"})]})}),e.jsx(i,{id:t[1],children:e.jsxs(s,{children:[e.jsx(r,{children:"Доступ запрещён"}),e.jsx(n,{}),e.jsx(r,{title:"Находите друзей",action:e.jsx(l,{size:"m",onClick:()=>a(t[0]),children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})})]})})})}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const X=["Playground"];export{o as Playground,X as __namedExportsOrder,T as default};
