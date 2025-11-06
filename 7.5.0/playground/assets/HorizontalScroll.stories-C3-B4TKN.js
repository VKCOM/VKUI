import{w as u,b as f,j as r,r as e}from"./iframe-CRvvLw_c.js";import{w as g}from"./withCartesian-NpmVpHK4.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-pwjjqDmg.js";import{G as H}from"./Group-QBPXGokh.js";import{H as R}from"./Header-H57R6hJb.js";import{H as S}from"./HorizontalCell-DzKAT1WM.js";import{S as C}from"./Spinner-BeKI5I2R.js";import{H as c}from"./HorizontalScroll-CQm_4d2q.js";import"./ImageBase-BO5k9ugY.js";import"./Clickable-C5yyRKxt.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DhBJmgl1.js";import"./useColorScheme-Dg8vGXhe.js";import"./InputUtils-jCwC7LNS.js";import"./useFocusWithin-B4DTXq5h.js";import"./useIsClient-499Yyiwu.js";import"./useConfigDirection-B3mnQ7qq.js";import"./online_mobile_12-032s7S0V.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Bvq1VuiB.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dyjj_lEj.js";import"./Caption-Ci2Nlz7Z.js";import"./Headline-D6S1r3dC.js";import"./Paragraph-DyoHshUI.js";import"./Subhead-BYsNdrqQ.js";import"./Title-CR_Ip4zZ.js";import"./Tappable-BL_Dp9-M.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-ExmaeT5t.js";import"./fx-D44SbiKV.js";import"./ScrollArrow-BpJ1rLw8.js";import"./chevron_24-ctQegZ7f.js";import"./chevron_16-DKMjO9ca.js";const cr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(s=>r.jsx(S,{title:s.first_name,children:r.jsx(F,{size:56,src:s.photo_200})},s.id))})]})},decorators:[(i,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(i,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
