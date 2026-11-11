import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{At as i,Mt as a,jt as o}from"./iframe-A_Ww4uh-.js";import{n as s,t as c}from"./Spinner-juyTcpj4.js";import{n as l,t as u}from"./HorizontalScroll-D8sh-JyS.js";import{n as d,t as f}from"./Header-C5dQ7Kxw.js";import{n as p,t as m}from"./Group-BgnaPBo3.js";import{n as h,t as g}from"./Avatar-DFFcusfM.js";import{n as _,t as v}from"./HorizontalCell-CmPVbEXc.js";import{i as y,n as b,t as x}from"./constants-BWBR8eWE.js";import{n as S,t as C}from"./createStoryParameters-D_aKMzVl.js";import{r as w,t as T}from"./src-CNP_L1Hg.js";import{a as E,o as D}from"./mock-gn_3WRVn.js";var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n(),1),T(),i(),y(),D(),S(),h(),p(),d(),_(),s(),l(),k=r(),A={title:`Data Display/HorizontalScroll`,component:u,parameters:C(`HorizontalScroll`,x,b),argTypes:{showArrows:{options:[`None`,`Always`,`False`,`True`],mapping:{None:void 0,Always:`always`,False:!1,True:!0},control:{type:`inline-radio`}}},decorators:[w,o,a],tags:[`Отображение данных`]},j=e=>{let[t,n]=O.useState([]),r=O.useRef(void 0);return O.useEffect(()=>(r.current=setTimeout(()=>{n(E(30))},2e3),()=>{clearTimeout(r.current)}),[]),(0,k.jsx)(m,{header:(0,k.jsx)(f,{size:`s`,children:`Недавние`}),children:(0,k.jsxs)(u,{...e,children:[t.length===0&&(0,k.jsx)(c,{size:`m`,style:{height:88}}),t.length>0&&(0,k.jsx)(O.Fragment,{children:t.map(e=>(0,k.jsx)(v,{title:e.first_name,children:(0,k.jsx)(g,{size:56,src:e.photo_200})},e.id))})]})})},M=[`Playground`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: HorizontalScrollProps) => {
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
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as Playground,M as __namedExportsOrder,A as default};