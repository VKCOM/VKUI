import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{n as i,r as a,t as o}from"./VKUIDecorators-DDgl8MQv.js";import{n as s,t as c}from"./Spinner-DIJCTf--.js";import{n as l,t as u}from"./HorizontalScroll-DatKoPXJ.js";import{n as d,t as f}from"./Header-Cxx7JD2_.js";import{n as p,t as m}from"./Group-BsDFq5nd.js";import{n as h,t as g}from"./Avatar-Bj2v-TM0.js";import{n as _,t as v}from"./HorizontalCell-dguySgZg.js";import{i as y,n as b,t as x}from"./constants-Dj6vOzIh.js";import{n as S,t as C}from"./createStoryParameters-pz1UrWMe.js";import{n as w,t as T}from"./src-13y77QG6.js";import{a as E,o as D}from"./mock-D9mwry-3.js";var O,k,A,j,M;t((()=>{O=e(n(),1),T(),o(),y(),D(),S(),h(),p(),d(),_(),s(),l(),k=r(),A={title:`Data Display/HorizontalScroll`,component:u,parameters:C(`HorizontalScroll`,x,b),argTypes:{showArrows:{options:[`None`,`Always`,`False`,`True`],mapping:{None:void 0,Always:`always`,False:!1,True:!0},control:{type:`inline-radio`}}},decorators:[w,i,a],tags:[`Отображение данных`]},j={render:function(e){let[t,n]=O.useState([]),r=O.useRef(void 0);return O.useEffect(()=>(r.current=setTimeout(()=>{n(E(30))},2e3),()=>{clearTimeout(r.current)}),[]),(0,k.jsxs)(u,{...e,children:[t.length===0&&(0,k.jsx)(c,{size:`m`,style:{height:88}}),t.length>0&&(0,k.jsx)(O.Fragment,{children:t.map(e=>(0,k.jsx)(v,{title:e.first_name,children:(0,k.jsx)(g,{size:56,src:e.photo_200})},e.id))})]})},decorators:[(e,t)=>(0,k.jsx)(m,{header:(0,k.jsx)(f,{size:`s`,children:`Недавние`}),children:(0,k.jsx)(e,{args:t.args})})]},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
    return <HorizontalScroll {...args}>
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
      </HorizontalScroll>;
  },
  decorators: [(Component, context) => <Group header={<Header size="s">Недавние</Header>}>
        <Component args={context.args} />
      </Group>]
}`,...j.parameters?.docs?.source}}},M=[`Playground`]}))();export{j as Playground,M as __namedExportsOrder,A as default};