import{w as u,b as f,j as r,r as e}from"./iframe-DTUKIQpa.js";import{w as g}from"./withCartesian-6dQsYo8G.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as H}from"./Avatar-CSba3fV-.js";import{G as F}from"./Group-CZGORHer.js";import{H as S}from"./Header-BLw19y3f.js";import{H as R}from"./HorizontalCell-ClXKWJ-_.js";import{S as C}from"./Spinner-BjJTDPz-.js";import{H as c}from"./HorizontalScroll-DXCV8OUr.js";import"./ImageBase-5nov2l7v.js";import"./Clickable-DRtJbe2S.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DKeE-0Mw.js";import"./useColorScheme-BGAH8gMd.js";import"./InputUtils-Db1DLuWS.js";import"./useFocusWithin-BaNto5dO.js";import"./useIsClient-B-5KeZKv.js";import"./useConfigDirection-Cb5ryD04.js";import"./online_mobile_12-BsDhKzk-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-UH6uLjn4.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-rQhC0WQs.js";import"./Caption-D0cKPzOT.js";import"./Headline-DPZ9LHy_.js";import"./Paragraph-D0uPZqgj.js";import"./Subhead-C7vbIoTq.js";import"./Title-BNj2Lwrg.js";import"./Tappable-Br6ZM5HO.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B0Nb8Auz.js";import"./fx-BGo4yArJ.js";import"./ScrollArrow-C50odAoG.js";import"./chevron_24-De_wqlp3.js";import"./chevron_16-BuSYZLHG.js";const cr={title:"Layout/HorizontalScroll/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(R,{title:i.first_name,children:r.jsx(H,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(F,{header:r.jsx(S,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
