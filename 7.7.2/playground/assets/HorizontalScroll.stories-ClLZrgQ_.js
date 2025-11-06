import{w as u,b as f,j as r,r as e}from"./iframe-7s0T-F6L.js";import{w as g}from"./withCartesian-Doqc41Sx.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-1hD9vHBL.js";import{G as H}from"./Group-CH_sa7ue.js";import{H as R}from"./Header-CysWeUwt.js";import{H as S}from"./HorizontalCell-DXuX4EUQ.js";import{S as C}from"./Spinner-DyPdKfog.js";import{H as c}from"./HorizontalScroll-iTbFcBbr.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-7R9OqT4P.js";import"./Clickable-LGVh7luH.js";import"./useFocusVisible-BTUcwPxj.js";import"./useFocusVisibleClassName-CMVp5o9Y.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-C13UJOhu.js";import"./useColorScheme-BL2QEz1W.js";import"./InputUtils-CP-PNx6u.js";import"./useFocusWithin-DluxB-SI.js";import"./useIsClient-SmbH6kX8.js";import"./useConfigDirection--PDr40UE.js";import"./online_mobile_12-BtP8zEC7.js";import"./SvgIconRootV2-Wzzl8e4S.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BCofusdy.js";import"./Caption-COQCwN-F.js";import"./Headline-CfLwurX4.js";import"./Paragraph-tkvECuzn.js";import"./Subhead-D1_aWRaG.js";import"./Title-C8ooGZRF.js";import"./Tappable-BPO49mNS.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CNF1CStS.js";import"./fx-DN2Vj22E.js";import"./ScrollArrow-C1YFujIW.js";import"./chevron_24-BvnjMiP-.js";import"./chevron_16-1M6O6SWX.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
