import{w as u,b as f,j as r,r as e}from"./iframe-BdL7Qu3-.js";import{w as g}from"./withCartesian-DwExuUpS.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-DQW5Aa4w.js";import{G as H}from"./Group-1bWIf9u2.js";import{H as R}from"./Header-B0MknLtV.js";import{H as S}from"./HorizontalCell-vZJ7Iu_p.js";import{S as C}from"./Spinner-CchhrSOA.js";import{H as c}from"./HorizontalScroll-B4P0RS3A.js";import"./ImageBase-B2iDi54_.js";import"./Clickable-zgtvQHiz.js";import"./useFocusVisibleClassName-BInn9DFL.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BeqMr1RR.js";import"./useColorScheme-BFusLRUe.js";import"./InputUtils-DfOLgQuD.js";import"./useFocusWithin-C1xt8Yic.js";import"./useIsClient-C0Y1oVh7.js";import"./useConfigDirection-D_GPblpw.js";import"./online_mobile_12-DGd3l17M.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DfIcWceh.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Cejbc8FV.js";import"./Caption-A9YdzU-r.js";import"./Headline-IzZ5JXBy.js";import"./Paragraph-jPlkG9S_.js";import"./Subhead-CEr4zt5A.js";import"./Title-D-2PMsHx.js";import"./Tappable-DH_64QBQ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DMev6gKF.js";import"./fx-B6HrcG_P.js";import"./ScrollArrow-CC4axyoT.js";import"./chevron_24-Cmnibbi9.js";import"./chevron_16-Dq6TqX7-.js";const dr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
