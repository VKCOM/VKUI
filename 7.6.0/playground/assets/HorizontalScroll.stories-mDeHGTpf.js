import{w as u,b as f,j as r,r as e}from"./iframe-DveaDHpJ.js";import{w as g}from"./withCartesian-B27GpNph.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-BZ_UOjJ3.js";import{G as H}from"./Group-jSVFVrUQ.js";import{H as R}from"./Header-CB2Td8vQ.js";import{H as S}from"./HorizontalCell-KZ0HBDtd.js";import{S as C}from"./Spinner-kmrkwAxt.js";import{H as c}from"./HorizontalScroll-CJ9pJE_0.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-CSPjt5UO.js";import"./Clickable-Qd8MhpMK.js";import"./useFocusVisibleClassName-Dv2zV7aT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-jOcLBbtU.js";import"./useColorScheme-Ca6Q1evu.js";import"./InputUtils-DB2utYDB.js";import"./useFocusWithin-C-V6I_uV.js";import"./useIsClient-Bmcaxh8V.js";import"./useConfigDirection-C-LxfHUm.js";import"./online_mobile_12-DR7dOS3R.js";import"./SvgIconRootV2-DLNfXJsw.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DMEVDgek.js";import"./Caption-xmt4HAL3.js";import"./Headline-D2z7orvN.js";import"./Paragraph-DEGhVC7y.js";import"./Subhead-CMDv2ZTP.js";import"./Title-DhgmrscL.js";import"./Tappable-B6M0Cj2d.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C4fiFLiw.js";import"./fx-YNXcIS6t.js";import"./ScrollArrow-CIe7xaKd.js";import"./chevron_24-P8XsFrlZ.js";import"./chevron_16-8_wEssbM.js";const ur={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
