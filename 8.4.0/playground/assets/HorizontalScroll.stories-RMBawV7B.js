import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{At as i,Mt as a,jt as o}from"./iframe-33ykgUxE.js";import{n as s,t as c}from"./Spinner-8CGtcXLY.js";import{n as l,t as u}from"./HorizontalScroll-m10mX-rT.js";import{n as d,t as f}from"./Header-DqIdfGka.js";import{n as p,t as m}from"./Group-Bp-h8t_O.js";import{n as h,t as g}from"./Avatar-DoiR7xFu.js";import{n as _,t as v}from"./HorizontalCell-DX3tFRcf.js";import{i as y,n as b,t as x}from"./constants-DBkyy3CT.js";import{n as S,t as C}from"./createStoryParameters-DBkK1CfQ.js";import{r as w,t as T}from"./src-BNmmzK9S.js";import{a as E,o as D}from"./mock-CkzEkxhs.js";var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n(),1),T(),i(),y(),D(),S(),h(),p(),d(),_(),s(),l(),k=r(),A={title:`Data Display/HorizontalScroll`,component:u,parameters:C(`HorizontalScroll`,x,b),argTypes:{showArrows:{options:[`None`,`Always`,`False`,`True`],mapping:{None:void 0,Always:`always`,False:!1,True:!0},control:{type:`inline-radio`}}},decorators:[w,o,a],tags:[`Отображение данных`]},j=e=>{let[t,n]=O.useState([]),r=O.useRef(void 0);return O.useEffect(()=>(r.current=setTimeout(()=>{n(E(30))},2e3),()=>{clearTimeout(r.current)}),[]),(0,k.jsx)(m,{header:(0,k.jsx)(f,{size:`s`,children:`Недавние`}),children:(0,k.jsxs)(u,{...e,children:[t.length===0&&(0,k.jsx)(c,{size:`m`,style:{height:88}}),t.length>0&&(0,k.jsx)(O.Fragment,{children:t.map(e=>(0,k.jsx)(v,{title:e.first_name,children:(0,k.jsx)(g,{size:56,src:e.photo_200})},e.id))})]})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: HorizontalScrollProps) => {
  const [commonFriends, setCommonFriends] = React.useState<UserExtendedInterface[]>([]);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  React.useEffect(() => {
    // Эмуляция загрузки
    timer.current = setTimeout(() => {
      setCommonFriends(getRandomUsers(30));
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return <Group header={<Header size="s">Недавние</Header>}>
      <HorizontalScroll {...args}>
        {commonFriends.length === 0 && <Spinner size="m" style={{
        height: 88
      }} />}
        {commonFriends.length > 0 && <React.Fragment>
            {commonFriends.map(item => {
          return <HorizontalCell key={item.id} title={item.first_name}>
                  <Avatar size={56} src={item.photo_200} />
                </HorizontalCell>;
        })}
          </React.Fragment>}
      </HorizontalScroll>
    </Group>;
}`,...j.parameters?.docs?.source}}},M=[`Playground`]})))()}N();export{j as Playground,M as __namedExportsOrder,A as default};