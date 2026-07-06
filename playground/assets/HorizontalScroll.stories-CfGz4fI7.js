import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{Mt as i,Nt as a,jt as o}from"./iframe-CgMGh-8q.js";import{n as s,t as c}from"./Spinner-CHdjpv5-.js";import{n as l,t as u}from"./HorizontalScroll-C4rnPZz0.js";import{n as d,t as f}from"./Header-CQj031La.js";import{n as p,t as m}from"./Group-LwNPJiLD.js";import{n as h,t as g}from"./Avatar-BddMLYzH.js";import{n as _,t as v}from"./HorizontalCell-CNcxLodV.js";import{i as y,n as b,t as x}from"./constants-cjed6ZWB.js";import{n as S,t as C}from"./createStoryParameters-CMHckkzt.js";import{r as w,t as T}from"./src-Baqpfbsn.js";import{a as E,o as D}from"./mock-K9LjXOLX.js";var O,k,A,j,M;e((()=>{O=t(n(),1),T(),o(),y(),D(),S(),h(),p(),d(),_(),s(),l(),k=t(r(),1),A={title:`Data Display/HorizontalScroll`,component:u,parameters:C(`HorizontalScroll`,x,b),argTypes:{showArrows:{options:[`None`,`Always`,`False`,`True`],mapping:{None:void 0,Always:`always`,False:!1,True:!0},control:{type:`inline-radio`}}},decorators:[w,i,a],tags:[`Отображение данных`]},j=e=>{let[t,n]=O.useState([]),r=O.useRef(void 0);return O.useEffect(()=>(r.current=setTimeout(()=>{n(E(30))},2e3),()=>{clearTimeout(r.current)}),[]),(0,k.jsx)(m,{header:(0,k.jsx)(f,{size:`s`,children:`Недавние`}),children:(0,k.jsxs)(u,{...e,children:[t.length===0&&(0,k.jsx)(c,{size:`m`,style:{height:88}}),t.length>0&&(0,k.jsx)(O.Fragment,{children:t.map(e=>(0,k.jsx)(v,{title:e.first_name,children:(0,k.jsx)(g,{size:56,src:e.photo_200})},e.id))})]})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: HorizontalScrollProps) => {
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
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}))();export{j as Playground,M as __namedExportsOrder,A as default};