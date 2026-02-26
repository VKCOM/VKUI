import{E as p,r as d,j as e,z as u,V as h,P as i,S as n}from"./iframe-C4bTyPBQ.js";import{D as P,C as x}from"./constants-DdkjnEgz.js";import{c as j}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-D-zltIHu.js";import{G as s}from"./Group-B0qSQvWx.js";import{P as r}from"./Placeholder-CWU5YLqg.js";import{I as S}from"./users_outline_56-DyiOZM0A.js";import{I as C}from"./mention_outline_56-Cm2lsHqm.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-CnNDPfa2.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./Tappable-BZW__-HP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./InputUtils-Ns7QNyDT.js";import"./Footnote-wW_hecXF.js";import"./Headline-B4T2ew9V.js";import"./Title-CK3YofNd.js";import"./SvgIconRootV2-DbftVVP5.js";const J={title:"Layout/SplitLayout/SplitCol",component:p,parameters:j("SplitCol",x,P),tags:["Раскладка"]},t=["panel 1","panel 2"],o={args:{width:"100%",maxWidth:560},render:function(c){const[m,a]=d.useState(t[0]);return e.jsx(u,{center:!0,children:e.jsx(p,{...c,children:e.jsxs(h,{activePanel:m,children:[e.jsx(i,{id:t[0],children:e.jsxs(s,{children:[e.jsx(r,{icon:e.jsx(S,{}),title:"Уведомления от сообществ",action:e.jsx(l,{size:"m",onClick:()=>a(t[1]),children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(n,{}),e.jsx(r,{icon:e.jsx(C,{}),children:"Введите адрес страницы в поле поиска"})]})}),e.jsx(i,{id:t[1],children:e.jsxs(s,{children:[e.jsx(r,{children:"Доступ запрещён"}),e.jsx(n,{}),e.jsx(r,{title:"Находите друзей",action:e.jsx(l,{size:"m",onClick:()=>a(t[0]),children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})})]})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const K=["Playground"];export{o as Playground,K as __namedExportsOrder,J as default};
