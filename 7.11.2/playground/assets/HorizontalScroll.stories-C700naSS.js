import{w as l,b as c,j as r,r as e}from"./iframe-KtxhC7Vu.js";import{w as d}from"./withCartesian-Bzs9tFbL.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-a-fOL92F.js";import{G as x}from"./Group-DDfvL9p6.js";import{H as z}from"./Header-swIOT9Zr.js";import{H as F}from"./HorizontalCell-9f1_DsYh.js";import{S as H}from"./Spinner-kWF4Wnla.js";import{H as m}from"./HorizontalScroll-C9XsYr-M.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-C6sKJwa9.js";import"./Clickable-zoSQNYwS.js";import"./useState-D1V9wQJY.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-BIdmSzTY.js";import"./ImageBaseBadge-NjqN0m0-.js";import"./useColorScheme-Ujmv4Cvg.js";import"./InputUtils-BueJ8J_Y.js";import"./useFocusWithin-Do1ICwdO.js";import"./useIsClient-DCYzbawC.js";import"./useConfigDirection-CX53j0Ve.js";import"./online_mobile_12-BscMHVRq.js";import"./SvgIconRootV2-CXmEs5QK.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lwK0vUsu.js";import"./Caption-Yrm4oGty.js";import"./Headline-DXbYuoNY.js";import"./Paragraph-DwCH17iY.js";import"./Subhead-AWezZjK6.js";import"./Title-Cl0PGkVH.js";import"./Tappable-BHKu77gD.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-8TqRJKxj.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-Cur0Kkuf.js";import"./chevron_24-BQLKi_xQ.js";import"./chevron_16-DnFY0g9o.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
