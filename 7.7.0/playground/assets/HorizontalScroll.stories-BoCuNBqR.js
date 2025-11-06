import{w as u,b as f,j as r,r as e}from"./iframe-B4SbMwac.js";import{w as g}from"./withCartesian-Cp01bjUv.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-CoSV9blQ.js";import{G as H}from"./Group-BdqZOTIB.js";import{H as R}from"./Header-AW9Sx57G.js";import{H as S}from"./HorizontalCell-C0b_J1-1.js";import{S as C}from"./Spinner-CVJ-p2Lm.js";import{H as c}from"./HorizontalScroll-CoNjHwsB.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-JYJo2bcq.js";import"./Clickable-LHka_ZWc.js";import"./useFocusVisible-CA0gmOpw.js";import"./useFocusVisibleClassName-CYMT8ouX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bgt2c9nz.js";import"./useColorScheme-D4AzIlWD.js";import"./InputUtils-C948cbKc.js";import"./useFocusWithin-to_rIq53.js";import"./useIsClient-BLqc0TVE.js";import"./useConfigDirection-D94ZyAhW.js";import"./online_mobile_12-CG4amDzl.js";import"./SvgIconRootV2-CSlzNDT1.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-PzIaqeP1.js";import"./Caption-2zBCEySr.js";import"./Headline-DyfFpR9w.js";import"./Paragraph-BxdY1U1n.js";import"./Subhead-BszjoIm7.js";import"./Title-BLmuK8KQ.js";import"./Tappable-DlzKIRC8.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B_fMC41X.js";import"./fx-DgidOCzC.js";import"./ScrollArrow-DpEqgyg6.js";import"./chevron_24-BdFylkK-.js";import"./chevron_16-DNg3QADm.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const gr=["Playground"];export{t as Playground,gr as __namedExportsOrder,fr as default};
