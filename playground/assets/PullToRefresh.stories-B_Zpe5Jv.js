import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CX9URrKL.js";import{t as r}from"./jsx-runtime-CRMqfscQ.js";import{i,n as a,r as o}from"./iframe-CMWvQvt2.js";import{n as s,t as c}from"./Group-DLQ4QDyF.js";import{n as l,t as u}from"./List-BsSIsz-v.js";import{n as d,t as f}from"./Cell-DAcefG9P.js";import{n as p,t as m}from"./Avatar-jGPB16Pg.js";import{n as h,t as g}from"./PullToRefresh-6eQs9xff.js";import{i as _,n as v,t as y}from"./constants-BYo4AJCv.js";import{n as b,t as x}from"./createStoryParameters-Dbf8epgV.js";import{a as S,i as C,o as w,r as T}from"./mock-Da5716d-.js";var E,D,O,k,A,j;t((()=>{E=e(n(),1),a(),_(),w(),b(),p(),d(),s(),l(),h(),D=r(),O={title:`Feedback/PullToRefresh`,component:g,parameters:x(`PullToRefresh`,y,v),decorators:[o,i],tags:[`Обратная связь`]},k=S(20),A={render:function(){let[e,t]=E.useState(k),[n,r]=E.useState(!1);return(0,D.jsx)(g,{onRefresh:E.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),t(e=>[C(),...e])},T(600,2e3))},[]),isFetching:n,children:(0,D.jsx)(c,{children:(0,D.jsx)(u,{children:e.map(({name:e,photo_100:t},n)=>(0,D.jsx)(f,{before:(0,D.jsx)(m,{src:t}),children:e},n))})})})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
  }
}`,...A.parameters?.docs?.source}}},j=[`Example`]}))();export{A as Example,j as __namedExportsOrder,O as default};