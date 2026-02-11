import{w as l,b as c,j as r,r as e}from"./iframe-DIYy3-CH.js";import{w as d}from"./withCartesian-CImVCZF5.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-Cr48lPZ5.js";import{G as x}from"./Group-DWQl9gu3.js";import{H as z}from"./Header-BBTGBE61.js";import{H as F}from"./HorizontalCell-BIwlN7f8.js";import{S as H}from"./Spinner-D5ck6QgF.js";import{H as m}from"./HorizontalScroll-DhV4LLEB.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CGi9okat.js";import"./Clickable-BAIHKsz8.js";import"./useState-p4Iaaoae.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DBCai8uF.js";import"./ImageBaseBadge-CkiqzLhV.js";import"./useColorScheme-BPR6ME_0.js";import"./InputUtils-MuCAFNzU.js";import"./useFocusWithin-De2BOk53.js";import"./useIsClient-C2239VAm.js";import"./useConfigDirection-5JvPOI0y.js";import"./online_mobile_12-DSFgnyH8.js";import"./SvgIconRootV2-DBT-DabK.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CRCyeFbn.js";import"./Caption-CaOppkeD.js";import"./Headline-BoZGv-xv.js";import"./Paragraph-C-gjngMm.js";import"./Subhead-CZ6Imw4B.js";import"./Title-DDAtng5G.js";import"./Tappable-sYAEqFlc.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-B6N7VZPM.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-iY84oPhH.js";import"./chevron_24-NuKerS3x.js";import"./chevron_16-CyTHsyh4.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
