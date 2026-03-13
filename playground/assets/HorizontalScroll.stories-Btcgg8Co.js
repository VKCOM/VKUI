import{b as l,w as c,j as r,r as e}from"./iframe-CEhhJuIi.js";import{w as d}from"./withCartesian-BKc4HSOc.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{a as g}from"./mock-KFM_xxXO.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BXbZ9iu_.js";import{G as x}from"./Group-B7hVT_g-.js";import{H as z}from"./Header-BCPMdOin.js";import{H as F}from"./HorizontalCell-Coe9-_eI.js";import{S as H}from"./Spinner-C8mKPATK.js";import{H as m}from"./HorizontalScroll-D0PrA7uG.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CQrAJ7MZ.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./ImageBaseBadge-DJqxK3o9.js";import"./useColorScheme-C52TR78y.js";import"./InputUtils-CN8Bpeve.js";import"./useFocusWithin-D7grZ9Rv.js";import"./useIsClient-BaeDlb2D.js";import"./useConfigDirection-K0H5l3FT.js";import"./online_mobile_12-ByVNEgc4.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-wldoNL-p.js";import"./Caption-DB-0jBpG.js";import"./Headline-C97-pQ4K.js";import"./Paragraph-DZv5gWne.js";import"./Subhead-4zP8hIFm.js";import"./Title-gWx-KNT-.js";import"./Tappable-CTSOdpDd.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BYulTkKK.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-CyU4THCa.js";import"./chevron_24-DfAwRUfu.js";import"./chevron_16-CMhnb1X0.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
