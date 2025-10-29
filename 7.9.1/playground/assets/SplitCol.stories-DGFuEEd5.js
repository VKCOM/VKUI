import{e as p,r as d,j as e,f as u,V as h,g as i,S as n}from"./iframe-DC59t_7s.js";import{D as P,C as x}from"./constants-DdkjnEgz.js";import{c as j}from"./createStoryParameters-CcwS40kl.js";import{B as l}from"./Button-TPmMtPai.js";import{G as s}from"./Group-BjjfSX7O.js";import{P as r}from"./Placeholder-CLBGRurs.js";import{I as S}from"./users_outline_56-DGWhqrcT.js";import{I as f}from"./mention_outline_56-Cm356rnu.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-BHxVDILF.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-dUOLTySp.js";import"./Tappable-CRrpYa-n.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C5RWily7.js";import"./Footnote-B_mvNSI1.js";import"./Headline-bNrKkYhC.js";import"./Title-DbXaHY-Y.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";const N={title:"Layout/SplitLayout/SplitCol",component:p,parameters:j("SplitCol",x,P),tags:["Раскладка"]},t=["panel 1","panel 2"],o={args:{width:"100%",maxWidth:560},render:function(c){const[m,a]=d.useState(t[0]);return e.jsx(u,{center:!0,children:e.jsx(p,{...c,children:e.jsxs(h,{activePanel:m,children:[e.jsx(i,{id:t[0],children:e.jsxs(s,{children:[e.jsx(r,{icon:e.jsx(S,{}),title:"Уведомления от сообществ",action:e.jsx(l,{size:"m",onClick:()=>a(t[1]),children:"Подключить сообщества"}),children:"Подключите сообщества, от которых Вы хотите получать уведомления"}),e.jsx(n,{}),e.jsx(r,{icon:e.jsx(f,{}),children:"Введите адрес страницы в поле поиска"})]})}),e.jsx(i,{id:t[1],children:e.jsxs(s,{children:[e.jsx(r,{children:"Доступ запрещён"}),e.jsx(n,{}),e.jsx(r,{title:"Находите друзей",action:e.jsx(l,{size:"m",onClick:()=>a(t[0]),children:"Найти друзей"}),children:"Здесь будут отображаться люди, которых вы добавите в друзья"})]})})]})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Q=["Playground"];export{o as Playground,Q as __namedExportsOrder,N as default};
