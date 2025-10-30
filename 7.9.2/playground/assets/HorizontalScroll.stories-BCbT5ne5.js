import{w as l,b as c,j as r,r as e}from"./iframe-CjlHPZNU.js";import{w as d}from"./withCartesian-B8m5trzi.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-YfEV_zp7.js";import{G as x}from"./Group-Bb5VOzgg.js";import{H as z}from"./Header-CB_Ibpuf.js";import{H as F}from"./HorizontalCell-Dsgly2e-.js";import{S as H}from"./Spinner-BqL1JLHM.js";import{H as m}from"./HorizontalScroll-CqNH4i_-.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CwOR86Dk.js";import"./Clickable-CtpofEGa.js";import"./useFocusVisible-HzppoRHk.js";import"./useFocusVisibleClassName-Cac-cBWX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BRgNofzo.js";import"./useColorScheme-BIeu6EL3.js";import"./InputUtils-DGnaA_Jg.js";import"./useFocusWithin-CtqEkwtt.js";import"./useIsClient-DEeP5e_N.js";import"./useConfigDirection-CtCMtXRC.js";import"./online_mobile_12-BNtKxVLF.js";import"./SvgIconRootV2-BfpHNNsb.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-OilvUFbZ.js";import"./Caption-BGNxLEI7.js";import"./Headline-5QXk0_9F.js";import"./Paragraph-xO9VNyZg.js";import"./Subhead-LlQLYw53.js";import"./Title-GMDilNWH.js";import"./Tappable-B5zgJODm.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BhHQTREx.js";import"./fx-B3L81n1x.js";import"./ScrollArrow-DrPyosY7.js";import"./chevron_24-Bo5p7nmg.js";import"./chevron_16-CdgPvfwT.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
