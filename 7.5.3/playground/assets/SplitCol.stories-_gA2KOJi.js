import{f as d,r as P,j as e,g as x,V as j,h as i,S as n}from"./iframe-CGpIZMk8.js";import{D as S,C as f}from"./constants-DdkjnEgz.js";import{c as C}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-7GGfFD7v.js";import{G as s}from"./Group-CoQ5RzN5.js";import{P as r}from"./Placeholder-DhFwRguk.js";import{I as y}from"./users_outline_56-D6bc4huD.js";import{I as g}from"./mention_outline_56-q4HMVOFF.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-DVykHsGf.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CdBh7Iry.js";import"./Tappable-BEdABn7b.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-Z7In03iI.js";import"./Footnote-DPd01TxJ.js";import"./Headline-ZBoX0yvc.js";import"./Title-Bh0cFv1G.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";const Q={title:"Layout/SplitLayout/SplitCol",component:d,parameters:C("SplitCol",f,S),tags:["Раскладка"]},t=["panel 1","panel 2"],o={args:{width:"100%",maxWidth:560},render:function(u){const[h,a]=P.useState(t[0]);return e.jsx(x,{center:!0,children:e.jsx(d,{...u,children:e.jsxs(j,{activePanel:h,children:[e.jsx(i,{id:t[0],children:e.jsxs(s,{children:[e.jsx(r,{icon:e.jsx(y,{}),title:"Уведомления от сообществ",action:e.jsx(l,{size:"m",onClick:()=>a(t[1]),children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(n,{}),e.jsx(r,{icon:e.jsx(g,{}),children:"Введите адрес страницы в поле поиска"})]})}),e.jsx(i,{id:t[1],children:e.jsxs(s,{children:[e.jsx(r,{children:"Доступ запрещён"}),e.jsx(n,{}),e.jsx(r,{title:"Находите друзей",action:e.jsx(l,{size:"m",onClick:()=>a(t[0]),children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})})]})})})}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Playground"];export{o as Playground,T as __namedExportsOrder,Q as default};
