import{w as u,b as f,j as r,r as e}from"./iframe-WscSQxk_.js";import{w as g}from"./withCartesian-DBsVLigS.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-0RoHI5K7.js";import{G as H}from"./Group-qAlp-RAW.js";import{H as R}from"./Header-Jd3F-6_A.js";import{H as S}from"./HorizontalCell-D4uEolzJ.js";import{S as C}from"./Spinner-BOd2c3oA.js";import{H as c}from"./HorizontalScroll-C_wUgCeJ.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-3KL0flvN.js";import"./Clickable-C7ilqGtf.js";import"./useFocusVisibleClassName-LTUayfN7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-wA-vnNFa.js";import"./useColorScheme-C09gZSyP.js";import"./InputUtils-JLBJXs47.js";import"./useFocusWithin-BHVkTq3i.js";import"./useIsClient-d2y8ByAY.js";import"./useConfigDirection-f8qxYIIC.js";import"./online_mobile_12-DJlNBlPs.js";import"./SvgIconRootV2-DxvRspKa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DadQ2vZ3.js";import"./Caption-wyHxTwpV.js";import"./Headline-Cv7evErM.js";import"./Paragraph-DlgzzrFx.js";import"./Subhead-Dng_N-gz.js";import"./Title-C_Gav_p7.js";import"./Tappable-4pvQI-9h.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-uW7N7P-s.js";import"./fx-B_Ce2UEi.js";import"./ScrollArrow-C5QKXXPz.js";import"./chevron_24-CIrr-ZVo.js";import"./chevron_16-BY28eTD3.js";const ur={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const fr=["Playground"];export{t as Playground,fr as __namedExportsOrder,ur as default};
