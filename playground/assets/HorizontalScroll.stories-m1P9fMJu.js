import{b as l,w as c,j as r,r as e}from"./iframe-CDzsgUJ6.js";import{w as d}from"./withCartesian-Dc-q2kCz.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{a as g}from"./mock-KFM_xxXO.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-P09vjEf9.js";import{G as x}from"./Group-BHUvSep0.js";import{H as z}from"./Header-CPzR7NAt.js";import{H as F}from"./HorizontalCell-Du1Zw8Sc.js";import{S as H}from"./Spinner-D6Csl20o.js";import{H as m}from"./HorizontalScroll-BYnanXSX.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dib2k8_n.js";import"./Clickable-Dfoj99Ww.js";import"./useState-QDdZr02K.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BNUMQRcR.js";import"./ImageBaseBadge-BJaRDGAe.js";import"./useColorScheme-BJ9q12Ap.js";import"./InputUtils-DkBsdccT.js";import"./useFocusWithin-UKmiu0Co.js";import"./useIsClient-CDj3wCHu.js";import"./useConfigDirection-BVbAx_rU.js";import"./online_mobile_12-D0RCPVny.js";import"./SvgIconRootV2-Atv9uK4X.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-EhoXcm5o.js";import"./Caption-Boi85h93.js";import"./Headline-BViG_F4T.js";import"./Paragraph-le0T_6Gv.js";import"./Subhead-BNbydgjR.js";import"./Title-Q5c-cjF2.js";import"./Tappable-BF8rCM_k.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-hrbUbT1W.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-LiGxBkQ4.js";import"./chevron_24-CXLTjO71.js";import"./chevron_16-BoVPvRqg.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const cr=["Playground"];export{t as Playground,cr as __namedExportsOrder,lr as default};
