import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{Ct as i,N as a,Tt as o,V as s,Y as c,_t as l,dt as u,n as d,z as f}from"./dist-ffVrjb4g.js";import{i as p,n as m,r as h,t as g}from"./constants-BWBR8eWE.js";import{n as _,t as v}from"./createStoryParameters-D_aKMzVl.js";import{n as y,t as b}from"./ActionSheetItem-CglnQZWw.js";import{n as x,t as S}from"./Button-UIWLqw4_.js";import{n as C,t as w}from"./Placeholder-CEGhmgMM.js";import{n as T,t as E}from"./ActionSheet-BhIs0-6-.js";var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{D=e(n(),1),d(),p(),_(),y(),x(),C(),T(),O=r(),k={title:`Modals/ActionSheet`,component:E,parameters:v(`ActionSheet`,g,m),argTypes:{title:h,description:h},tags:[`Модальные окна`]},A=e=>{let t=D.useRef(null),[n,r]=D.useState(!0);return(0,O.jsxs)(D.Fragment,{children:[(0,O.jsx)(w,{stretched:!0,children:(0,O.jsx)(S,{getRootRef:t,onClick:()=>r(!0),"aria-expanded":n,children:`Открыть`})}),n?(0,O.jsx)(E,{...e,onClosed:()=>r(!1),toggleRef:t}):null]})},A.args={children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{children:`Сохранить в закладках`}),(0,O.jsx)(b,{children:`Закрепить запись`}),(0,O.jsx)(b,{children:`Выключить комментирование`}),(0,O.jsx)(b,{children:`Закрепить запись`}),(0,O.jsx)(b,{mode:`destructive`,children:`Удалить запись`})]})},j=A.bind({}),j.args={children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{before:(0,O.jsx)(l,{}),children:`Редактировать профиль`}),(0,O.jsx)(b,{before:(0,O.jsx)(u,{}),children:`Слушать далее`}),(0,O.jsx)(b,{before:(0,O.jsx)(f,{}),children:`Поделиться`}),(0,O.jsx)(b,{before:(0,O.jsx)(o,{}),children:`Скопировать ссылку`}),(0,O.jsx)(b,{before:(0,O.jsx)(i,{}),mode:`destructive`,children:`Удалить плейлист`})]})},M=A.bind({}),M.args={children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{before:(0,O.jsx)(s,{}),subtitle:`Авто`,children:`Качество`}),(0,O.jsx)(b,{before:(0,O.jsx)(a,{}),subtitle:`Отсутствуют`,disabled:!0,children:`Субтитры`}),(0,O.jsx)(b,{before:(0,O.jsx)(c,{}),subtitle:`Обычная`,children:`Скорость воспроизведения`})]})},N=A.bind({}),N.args={title:`Вы действительно хотите удалить это видео из Ваших видео?`,children:(0,O.jsx)(b,{mode:`destructive`,children:`Удалить видео`})},P=A.bind({}),P.args={children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(b,{name:`menu`,selectable:!0,defaultChecked:!0,children:`Лучшие друзья`}),(0,O.jsx)(b,{name:`menu`,selectable:!0,children:`Родственники`}),(0,O.jsx)(b,{name:`menu`,selectable:!0,children:`Коллеги`}),(0,O.jsx)(b,{name:`menu`,selectable:!0,children:`Друзья по школе`}),(0,O.jsx)(b,{name:`menu`,selectable:!0,children:`Друзья по вузу`})]})},F=[`Playground`,`WithIcon`,`WithSubtitle`,`WithTitle`,`WithSelectable`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} /> : null}
    </React.Fragment>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} /> : null}
    </React.Fragment>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} /> : null}
    </React.Fragment>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} /> : null}
    </React.Fragment>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: ActionSheetProps) => {
  const baseToggleRef = React.useRef(null);
  const [visible, setVisible] = React.useState(true);
  return <React.Fragment>
      <Placeholder stretched>
        <Button getRootRef={baseToggleRef} onClick={() => setVisible(true)} aria-expanded={visible}>
          Открыть
        </Button>
      </Placeholder>

      {visible ? <ActionSheet {...args} onClosed={() => setVisible(false)} toggleRef={baseToggleRef} /> : null}
    </React.Fragment>;
}`,...P.parameters?.docs?.source}}}})))()}I();export{A as Playground,j as WithIcon,P as WithSelectable,M as WithSubtitle,N as WithTitle,F as __namedExportsOrder,k as default};