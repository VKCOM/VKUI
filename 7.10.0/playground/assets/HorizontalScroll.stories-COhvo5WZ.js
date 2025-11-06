import{w as l,b as c,j as r,r as e}from"./iframe-CdM-7Hfu.js";import{w as d}from"./withCartesian-BhVv3VNh.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-DUoUH2IJ.js";import{G as x}from"./Group-c52jERCh.js";import{H as z}from"./Header-GV80iV0D.js";import{H as F}from"./HorizontalCell-7U_YnQSa.js";import{S as H}from"./Spinner-CsDvRUz2.js";import{H as m}from"./HorizontalScroll-C7nWcRA6.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Bi1QdrTS.js";import"./Clickable-B55EaeOQ.js";import"./useFocusVisible-DVe26rtb.js";import"./useFocusVisibleClassName-FPVKyUEe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DED5NeG1.js";import"./useColorScheme-Bgl1tdyG.js";import"./InputUtils-BMsEEBIJ.js";import"./useFocusWithin-2TkfLAdf.js";import"./useIsClient-CBFXtO1_.js";import"./useConfigDirection-BPbTAtL3.js";import"./online_mobile_12-DEl3ibRG.js";import"./SvgIconRootV2-uNBcUV_S.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-NEMh_4A6.js";import"./Caption-DWx61OOh.js";import"./Headline-CJlcsWlt.js";import"./Paragraph-cSyBj7WU.js";import"./Subhead-BqjD9mjg.js";import"./Title-CJmHdlPE.js";import"./Tappable-DK6ahodC.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DydpD7lG.js";import"./fx-Cz6Hdhb6.js";import"./ScrollArrow-BRg4ORiB.js";import"./chevron_24-qT7GlJd5.js";import"./chevron_16-DFcNvUVK.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
