import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{n as i,r as a,t as o}from"./VKUIDecorators-BYQp_QSp.js";import{n as s,t as c}from"./Group-aYCj1f58.js";import{n as l,t as u}from"./List-qWVQTwkk.js";import{n as d,t as f}from"./Cell-PZzKXF28.js";import{n as p,t as m}from"./Avatar-B-XgDXIW.js";import{n as h,t as g}from"./PullToRefresh-DVhOnVaf.js";import{i as _,n as v,t as y}from"./constants-Dj6vOzIh.js";import{n as b,t as x}from"./createStoryParameters-pz1UrWMe.js";import{a as S,i as C,o as w,r as T}from"./mock-D9mwry-3.js";var E,D,O,k,A,j;t((()=>{E=e(n(),1),o(),_(),w(),b(),p(),d(),s(),l(),h(),D=r(),O={title:`Feedback/PullToRefresh`,component:g,parameters:x(`PullToRefresh`,y,v),decorators:[i,a],tags:[`Обратная связь`]},k=S(20),A={render:function(){let[e,t]=E.useState(k),[n,r]=E.useState(!1);return(0,D.jsx)(g,{onRefresh:E.useCallback(()=>{r(!0),setTimeout(()=>{r(!1),t(e=>[C(),...e])},T(600,2e3))},[]),isFetching:n,children:(0,D.jsx)(c,{children:(0,D.jsx)(u,{children:e.map(({name:e,photo_100:t},n)=>(0,D.jsx)(f,{before:(0,D.jsx)(m,{src:t}),children:e},n))})})})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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