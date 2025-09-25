import{w as u,b as f,j as r,r as e}from"./iframe-Bz8JpgqB.js";import{w as g}from"./withCartesian-DJz-fGS0.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-Djz9XYEE.js";import{G as H}from"./Group-DTDZzv4b.js";import{H as R}from"./Header-C4lsCBoI.js";import{H as S}from"./HorizontalCell-Bjn7uI4r.js";import{S as C}from"./Spinner-BdNNxg7b.js";import{H as c}from"./HorizontalScroll-9uf4ffgA.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-ClmHHqwk.js";import"./Clickable-C8sAptP9.js";import"./useFocusVisible-DI7o-w5D.js";import"./useFocusVisibleClassName-DeYZ6Bju.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-UmCFkqsi.js";import"./useColorScheme-DVyOIIkN.js";import"./InputUtils-C36z3TAr.js";import"./useFocusWithin-DoazkeVF.js";import"./useIsClient-BRGUFVjE.js";import"./useConfigDirection-1j4RIbQo.js";import"./online_mobile_12-BjrG8SuA.js";import"./SvgIconRootV2-PiPT7FW9.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CXG5ZQyY.js";import"./Caption-DWsz_D6l.js";import"./Headline-DOUR4p3R.js";import"./Paragraph-COWk_h1U.js";import"./Subhead-CQ9JxnC_.js";import"./Title-D2iv6BIz.js";import"./Tappable-DGSycWIS.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Civmtkn4.js";import"./fx-kodWYGM0.js";import"./ScrollArrow-DFGwcOys.js";import"./chevron_24-BadJq5fS.js";import"./chevron_16-r7AvM1qe.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
