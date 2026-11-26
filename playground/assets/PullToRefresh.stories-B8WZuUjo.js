import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{At as i,Mt as a,jt as o}from"./iframe-kY6v1YfM.js";import{i as s,n as c,t as l}from"./constants-BWBR8eWE.js";import{n as u,t as d}from"./createStoryParameters-D_aKMzVl.js";import{n as f,t as p}from"./Group-BYaqcOTu.js";import{a as m,i as h,o as g,r as _}from"./mock-gn_3WRVn.js";import{n as v,t as y}from"./Avatar-D5eC2z7e.js";import{n as b,t as x}from"./Cell-BcnlaGy0.js";import{n as S,t as C}from"./List-DiuHbMTA.js";import{n as w,t as T}from"./PullToRefresh-BLNP8xHT.js";var E,D,O,k,A,j;function M(){return(M=t((()=>{E=e(n(),1),i(),s(),g(),u(),v(),b(),f(),S(),w(),D=r(),O=m(20),k={title:`Feedback/PullToRefresh`,component:T,parameters:d(`PullToRefresh`,l,c,{liveCodeEditor:{scope:{initUsers:O}}}),decorators:[o,a],tags:[`Обратная связь`]},A=()=>{let[e,t]=E.useState(O),[n,r]=E.useState(!1),i=E.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),t(e=>[h(),...e])},_(600,2e3))},[]);return(0,D.jsx)(T,{onRefresh:i,isFetching:n,children:(0,D.jsx)(p,{children:(0,D.jsx)(C,{children:e.map(({name:e,photo_100:t},n)=>(0,D.jsx)(x,{before:(0,D.jsx)(y,{src:t}),children:e},n))})})})},j=[`Example`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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