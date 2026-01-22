import{w as l,b as c,j as r,r as e}from"./iframe-CJSxyW9U.js";import{w as d}from"./withCartesian-Cm3TpuPo.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-DDG2Aeft.js";import{G as x}from"./Group-Bl9QB3Zd.js";import{H as z}from"./Header-BDiuDSjJ.js";import{H as F}from"./HorizontalCell-CKuRXFpA.js";import{S as H}from"./Spinner-BlbUmBeW.js";import{H as m}from"./HorizontalScroll-CklqZnuq.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-EkuBMVhQ.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./ImageBaseBadge-BCPwu5M0.js";import"./useColorScheme-cIrBBNZn.js";import"./InputUtils-CQXgm4mM.js";import"./useFocusWithin-B6ZQto83.js";import"./useIsClient-CYCYCyLi.js";import"./useConfigDirection-C3cHGESc.js";import"./online_mobile_12-BmLoPU5y.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-PeEhUyBm.js";import"./Caption-DJRq5DSE.js";import"./Headline-B-NKRtjP.js";import"./Paragraph-Drw97mgp.js";import"./Subhead-B39S2HHi.js";import"./Title-BHBezTAx.js";import"./Tappable-B_lgqKnQ.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-CnCcgob2.js";import"./chevron_24-BPHQ9yUO.js";import"./chevron_16-BZCG5KUX.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
