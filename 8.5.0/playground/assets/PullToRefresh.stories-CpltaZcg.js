import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{At as i,Mt as a,jt as o}from"./iframe-A_Ww4uh-.js";import{n as s,t as c}from"./Group-BgnaPBo3.js";import{n as l,t as u}from"./Cell-BO3eia_p.js";import{n as d,t as f}from"./List-zmKNC1Ar.js";import{n as p,t as m}from"./Avatar-DFFcusfM.js";import{n as h,t as g}from"./PullToRefresh-D7mnCSHU.js";import{i as _,n as v,t as y}from"./constants-BWBR8eWE.js";import{n as b,t as x}from"./createStoryParameters-D_aKMzVl.js";import{a as S,i as C,o as w,r as T}from"./mock-gn_3WRVn.js";var E,D,O,k,A,j;function M(){return(M=t((()=>{E=e(n(),1),i(),_(),w(),b(),p(),l(),s(),d(),h(),D=r(),O=S(20),k={title:`Feedback/PullToRefresh`,component:g,parameters:x(`PullToRefresh`,y,v,{liveCodeEditor:{scope:{initUsers:O}}}),decorators:[o,a],tags:[`Обратная связь`]},A=()=>{let[e,t]=E.useState(O),[n,r]=E.useState(!1),i=E.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),t(e=>[C(),...e])},T(600,2e3))},[]);return(0,D.jsx)(g,{onRefresh:i,isFetching:n,children:(0,D.jsx)(c,{children:(0,D.jsx)(f,{children:e.map(({name:e,photo_100:t},n)=>(0,D.jsx)(u,{before:(0,D.jsx)(m,{src:t}),children:e},n))})})})},j=[`Example`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as Example,j as __namedExportsOrder,k as default};