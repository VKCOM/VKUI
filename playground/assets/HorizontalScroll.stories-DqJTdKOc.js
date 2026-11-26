import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{At as i,Mt as a,jt as o}from"./iframe-kY6v1YfM.js";import{i as s,n as c,t as l}from"./constants-BWBR8eWE.js";import{n as u,t as d}from"./createStoryParameters-D_aKMzVl.js";import{n as f,t as p}from"./Group-BYaqcOTu.js";import{n as m,t as h}from"./Spinner-B23uxuTb.js";import{r as g,t as _}from"./src-CNP_L1Hg.js";import{a as v,o as y}from"./mock-gn_3WRVn.js";import{n as b,t as x}from"./Avatar-D5eC2z7e.js";import{n as S,t as C}from"./HorizontalScroll-cOR9kCRx.js";import{n as w,t as T}from"./Header-D_4bQeTM.js";import{n as E,t as D}from"./HorizontalCell-Cy2WpV9Q.js";var O,k,A,j,M;function N(){return(N=t((()=>{O=e(n(),1),_(),i(),s(),y(),u(),b(),f(),w(),E(),m(),S(),k=r(),A={title:`Data Display/HorizontalScroll`,component:C,parameters:d(`HorizontalScroll`,l,c),argTypes:{showArrows:{options:[`None`,`Always`,`False`,`True`],mapping:{None:void 0,Always:`always`,False:!1,True:!0},control:{type:`inline-radio`}}},decorators:[g,o,a],tags:[`Отображение данных`]},j=e=>{let[t,n]=O.useState([]),r=O.useRef(void 0);return O.useEffect(()=>(r.current=setTimeout(()=>{n(v(30))},2e3),()=>{clearTimeout(r.current)}),[]),(0,k.jsx)(p,{header:(0,k.jsx)(T,{size:`s`,children:`Недавние`}),children:(0,k.jsxs)(C,{...e,children:[t.length===0&&(0,k.jsx)(h,{size:`m`,style:{height:88}}),t.length>0&&(0,k.jsx)(O.Fragment,{children:t.map(e=>(0,k.jsx)(D,{title:e.first_name,children:(0,k.jsx)(x,{size:56,src:e.photo_200})},e.id))})]})})},M=[`Playground`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args: HorizontalScrollProps) => {
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