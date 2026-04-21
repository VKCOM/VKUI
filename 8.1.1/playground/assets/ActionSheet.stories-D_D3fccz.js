import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{B as i,E as a,L as o,P as s,S as c,V as l,n as u,v as d,x as f}from"./dist-JE-Gteso.js";import{n as p,t as m}from"./Button-l1w8-E3r.js";import{n as h,t as g}from"./ActionSheetItem-B2a1GMnR.js";import{n as _,t as v}from"./ActionSheet-IJuPOVCW.js";import{n as y,t as b}from"./Placeholder-L7aC_pzR.js";import{i as x,n as S,r as C,t as w}from"./constants-Dj6vOzIh.js";import{n as T,t as E}from"./createStoryParameters-pz1UrWMe.js";var D,O,k,A,j,M,N,P,F;t((()=>{D=e(n(),1),u(),x(),T(),h(),p(),y(),_(),O=r(),k={title:`Modals/ActionSheet`,component:v,parameters:E(`ActionSheet`,w,S),argTypes:{title:C,description:C},tags:[`Модальные окна`]},A={render:function({items:e,...t}){let n=D.useRef(null),[r,i]=D.useState(!0);return(0,O.jsxs)(D.Fragment,{children:[(0,O.jsx)(b,{stretched:!0,children:(0,O.jsx)(m,{getRootRef:n,onClick:()=>i(!0),"aria-expanded":r,children:`Открыть`})}),r?(0,O.jsx)(v,{...t,onClosed:()=>i(!1),toggleRef:n,children:e.map(({children:e,...t},n)=>(0,O.jsx)(g,{...t,children:e},n))}):null]})},args:{items:[{children:`Сохранить в закладках`},{children:`Закрепить запись`},{children:`Выключить комментирование`},{children:`Закрепить запись`},{mode:`destructive`,children:`Удалить запись`}]}},j={...A,args:{items:[{before:(0,O.jsx)(o,{}),children:`Редактировать профиль`},{before:(0,O.jsx)(s,{}),children:`Слушать далее`},{before:(0,O.jsx)(f,{}),children:`Поделиться`},{before:(0,O.jsx)(l,{}),children:`Скопировать ссылку`},{before:(0,O.jsx)(i,{}),mode:`destructive`,children:`Удалить плейлист`}]}},M={...A,args:{items:[{before:(0,O.jsx)(c,{}),subtitle:`Авто`,children:`Качество`},{before:(0,O.jsx)(d,{}),subtitle:`Отсутствуют`,disabled:!0,children:`Субтитры`},{before:(0,O.jsx)(a,{}),subtitle:`Обычная`,children:`Скорость воспроизведения`}]}},N={...A,args:{title:`Вы действительно хотите удалить это видео из Ваших видео?`,items:[{mode:`destructive`,children:`Удалить видео`}]}},P={...A,args:{items:[{name:`menu`,selectable:!0,children:`Лучшие друзья`,defaultChecked:!0},{name:`menu`,selectable:!0,children:`Родственники`},{name:`menu`,selectable:!0,children:`Коллеги`},{name:`menu`,selectable:!0,children:`Друзья по школе`},{name:`menu`,selectable:!0,children:`Друзья по вузу`}]}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render({
    items,
    ...args
  }) {
    const baseToggleRef = React.useRef(null);
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
            Открыть
          </Button>
        </Placeholder>

        {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef}>
            {items.map(({
          children,
          ...rest
        }, index) => <ActionSheetItem key={index} {...rest}>
                {children}
              </ActionSheetItem>)}
          </ActionSheet> : null}
      </React.Fragment>;
  },
  args: {
    items: [{
      children: 'Сохранить в закладках'
    }, {
      children: 'Закрепить запись'
    }, {
      children: 'Выключить комментирование'
    }, {
      children: 'Закрепить запись'
    }, {
      mode: 'destructive',
      children: 'Удалить запись'
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      before: <Icon28EditOutline />,
      children: 'Редактировать профиль'
    }, {
      before: <Icon28ListPlayOutline />,
      children: 'Слушать далее'
    }, {
      before: <Icon28ShareOutline />,
      children: 'Поделиться'
    }, {
      before: <Icon28CopyOutline />,
      children: 'Скопировать ссылку'
    }, {
      before: <Icon28DeleteOutline />,
      mode: 'destructive',
      children: 'Удалить плейлист'
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      before: <Icon28SettingsOutline />,
      subtitle: 'Авто',
      children: 'Качество'
    }, {
      before: <Icon28SubtitlesOutline />,
      subtitle: 'Отсутствуют',
      disabled: true,
      children: 'Субтитры'
    }, {
      before: <Icon28PlaySpeedOutline />,
      subtitle: 'Обычная',
      children: 'Скорость воспроизведения'
    }]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    title: 'Вы действительно хотите удалить это видео из Ваших видео?',
    items: [{
      mode: 'destructive',
      children: 'Удалить видео'
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    items: [{
      name: 'menu',
      selectable: true,
      children: 'Лучшие друзья',
      defaultChecked: true
    }, {
      name: 'menu',
      selectable: true,
      children: 'Родственники'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Коллеги'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Друзья по школе'
    }, {
      name: 'menu',
      selectable: true,
      children: 'Друзья по вузу'
    }]
  }
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`WithIcon`,`WithSubtitle`,`WithTitle`,`WithSelectable`]}))();export{A as Playground,j as WithIcon,P as WithSelectable,M as WithSubtitle,N as WithTitle,F as __namedExportsOrder,k as default};