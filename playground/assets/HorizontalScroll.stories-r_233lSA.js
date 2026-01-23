import{w as l,b as c,j as r,r as e}from"./iframe-BJ9555aC.js";import{w as d}from"./withCartesian-C_RHUhdA.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-B5z-sg0O.js";import{G as x}from"./Group-DpwBrIOF.js";import{H as z}from"./Header-DoUFXvdD.js";import{H as F}from"./HorizontalCell-BacFtNb6.js";import{S as H}from"./Spinner-CsAXLMyU.js";import{H as m}from"./HorizontalScroll-Bt4gGntP.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DZszct4G.js";import"./Clickable-BL1AyP3s.js";import"./useState-ernR_nsp.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-nD9g3KxA.js";import"./ImageBaseBadge-CeubzczD.js";import"./useColorScheme-DvMUZASe.js";import"./InputUtils-8LhFcqKY.js";import"./useFocusWithin-ClOWbdUU.js";import"./useIsClient-veih0UT_.js";import"./useConfigDirection-BeEtg5OO.js";import"./online_mobile_12-C_FfJS6S.js";import"./SvgIconRootV2-DBhJzOEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-xxqNAETB.js";import"./Caption-BrB5DlXi.js";import"./Headline-Bb4b2JBA.js";import"./Paragraph-Cp7CvK2x.js";import"./Subhead-ppzL9p3g.js";import"./Title-BmBt_BL_.js";import"./Tappable-Bz7LtOMO.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BpRJPd7L.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-BPsGnfWv.js";import"./chevron_24-CGN54iI4.js";import"./chevron_16-CJFbNzh_.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
