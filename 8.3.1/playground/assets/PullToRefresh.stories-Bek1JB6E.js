import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Mt as i,Nt as a,jt as o}from"./iframe-CgMGh-8q.js";import{n as s,t as c}from"./Group-LwNPJiLD.js";import{n as l,t as u}from"./List-BsGWDSKo.js";import{n as d,t as f}from"./Cell-Co3d1Bhe.js";import{n as p,t as m}from"./Avatar-BddMLYzH.js";import{n as h,t as g}from"./PullToRefresh-BNpbG5cg.js";import{i as _,n as v,t as y}from"./constants-cjed6ZWB.js";import{n as b,t as x}from"./createStoryParameters-CMHckkzt.js";import{a as S,i as C,o as w,r as T}from"./mock-K9LjXOLX.js";var E,D,O,k,A,j;e((()=>{E=t(n(),1),o(),_(),w(),b(),p(),d(),s(),l(),h(),D=t(r(),1),O=S(20),k={title:`Feedback/PullToRefresh`,component:g,parameters:x(`PullToRefresh`,y,v,{liveCodeEditor:{scope:{initUsers:O}}}),decorators:[i,a],tags:[`Обратная связь`]},A=()=>{let[e,t]=E.useState(O),[n,r]=E.useState(!1);return(0,D.jsx)(g,{onRefresh:E.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),t(e=>[C(),...e])},T(600,2e3))},[]),isFetching:n,children:(0,D.jsx)(c,{children:(0,D.jsx)(u,{children:e.map(({name:e,photo_100:t},n)=>(0,D.jsx)(f,{before:(0,D.jsx)(m,{src:t}),children:e},n))})})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [users, setUsers] = React.useState(initUsers);
  const [fetching, setFetching] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
      setUsers(prevUsers => [getRandomUser(), ...prevUsers]);
    }, getRandomInt(600, 2000));
  }, []);
  return <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
      <Group>
        <List>
          {users.map(({
          name,
          photo_100
        }, i) => {
          return <Cell key={i} before={<Avatar src={photo_100} />}>
                {name}
              </Cell>;
        })}
        </List>
      </Group>
    </PullToRefresh>;
}`,...A.parameters?.docs?.source}}},j=[`Example`]}))();export{A as Example,j as __namedExportsOrder,k as default};