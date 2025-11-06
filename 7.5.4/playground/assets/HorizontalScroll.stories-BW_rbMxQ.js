import{w as u,b as f,j as r,r as e}from"./iframe-DQDZnzQe.js";import{w as g}from"./withCartesian-Cd5XUTsF.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-4IjQEWlF.js";import{G as H}from"./Group-qnf_xRXF.js";import{H as R}from"./Header-BfVjXzov.js";import{H as S}from"./HorizontalCell-DLoxlbc1.js";import{S as C}from"./Spinner-BbRcECA7.js";import{H as c}from"./HorizontalScroll-M4Uw6uTn.js";import"./ImageBase-VWSBvzf0.js";import"./Clickable-BDq-1Cyq.js";import"./useFocusVisibleClassName-CSPl5qrL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BUi6r-Q8.js";import"./useColorScheme-alZiR8qg.js";import"./InputUtils-CKZOM7f4.js";import"./useFocusWithin-DP8QP68V.js";import"./useIsClient-w_GYH5P_.js";import"./useConfigDirection-CFM_wEcG.js";import"./online_mobile_12-BObMLxiO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-wcV10mZC.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-y02Efo06.js";import"./Caption-BxTGQxAz.js";import"./Headline-DFYCKKj3.js";import"./Paragraph-pbN2toqi.js";import"./Subhead-CV6mVfj0.js";import"./Title-DVgoNOIF.js";import"./Tappable-GGjjvyZD.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-vRsYbH_6.js";import"./fx-rt4GuRRo.js";import"./ScrollArrow-B53PiJOy.js";import"./chevron_24-DPX9SsYy.js";import"./chevron_16-D6ldfjxj.js";const dr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ur=["Playground"];export{t as Playground,ur as __namedExportsOrder,dr as default};
