import{b as l,w as c,j as r,r as e}from"./iframe-OAvG3iJ-.js";import{w as d}from"./withCartesian-BIO2OLuw.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{a as g}from"./mock-KFM_xxXO.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BrxjTsBH.js";import{G as x}from"./Group-DBjl1Ywq.js";import{H as z}from"./Header-C1o2p0vK.js";import{H as F}from"./HorizontalCell-xRXWvgpN.js";import{S as H}from"./Spinner-e4jYbku1.js";import{H as m}from"./HorizontalScroll-M2qg7Fp5.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-mTZnpbEK.js";import"./Clickable-BctbgV4x.js";import"./useState-Dux8RiNa.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DPpDtYkO.js";import"./ImageBaseBadge-DET_R2n_.js";import"./useColorScheme--3xcMoVc.js";import"./InputUtils-D-RvHd2H.js";import"./useFocusWithin-lydw_Auo.js";import"./useIsClient-DWkou9dw.js";import"./useConfigDirection-EOrqXudq.js";import"./online_mobile_12-BNH-O2OP.js";import"./SvgIconRootV2-BFy9Uypd.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-Fnz7EDP7.js";import"./Caption-Dncllwwc.js";import"./Headline-7nMwixf1.js";import"./Paragraph-CVcud42F.js";import"./Subhead-Bec_-0uq.js";import"./Title-AFjtFc-5.js";import"./Tappable-hYlNxVzd.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-W5VCXPiv.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-avZN-Hx5.js";import"./chevron_24-CR2v9LFD.js";import"./chevron_16-BS2dVy5C.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
