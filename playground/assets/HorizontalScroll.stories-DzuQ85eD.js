import{w as l,b as c,j as r,r as e}from"./iframe-ChnjXsIu.js";import{w as d}from"./withCartesian-Dj7W7GjQ.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-B8H01YlN.js";import{G as x}from"./Group-CYWOltlY.js";import{H as z}from"./Header-jV21ZItT.js";import{H as F}from"./HorizontalCell-fXM44Hc_.js";import{S as H}from"./Spinner-D882qXq5.js";import{H as m}from"./HorizontalScroll-6vessPgB.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-ChHyQ-r1.js";import"./Clickable-zj2UWImj.js";import"./useState-ZDhvxYGh.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-n-WG2EJN.js";import"./ImageBaseBadge-BSSTEquI.js";import"./useColorScheme-BoHVEH1Y.js";import"./InputUtils-D67zZ2HF.js";import"./useFocusWithin-DfM9Gs3P.js";import"./useIsClient-BOV8xFs-.js";import"./useConfigDirection-Cu4tNejP.js";import"./online_mobile_12-BUTWIhFy.js";import"./SvgIconRootV2-DXKzfcIX.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-a8vRHGoF.js";import"./Caption-DTswF5wb.js";import"./Headline-jnvlDnhz.js";import"./Paragraph-CrOm9mYb.js";import"./Subhead-4jBJxz3c.js";import"./Title-ufKZcuLl.js";import"./Tappable-BDf7UE95.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-C0GQz0ke.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-BQmhqKUS.js";import"./chevron_24-Bwx5A4iR.js";import"./chevron_16-BBzBgMAq.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
