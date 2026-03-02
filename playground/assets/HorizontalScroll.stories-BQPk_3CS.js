import{w as l,b as c,j as r,r as e}from"./iframe-DxxZLxeI.js";import{w as d}from"./withCartesian-B2JUeux9.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BCXODrAO.js";import{G as x}from"./Group-DDJytldN.js";import{H as z}from"./Header-BVZbejrx.js";import{H as F}from"./HorizontalCell-B6l7uQe5.js";import{S as H}from"./Spinner-BmfPEekg.js";import{H as m}from"./HorizontalScroll-DnMclgQu.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-QHQPYay9.js";import"./Clickable-iBjUcv74.js";import"./useState-CSsh5GFH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-D9wP8DLA.js";import"./ImageBaseBadge-CFYaWPus.js";import"./useColorScheme-CToT-7qP.js";import"./InputUtils-CuOtTanw.js";import"./useFocusWithin-CCKxCh5m.js";import"./useIsClient-CPE3VRxF.js";import"./useConfigDirection-Cl-SHqVT.js";import"./online_mobile_12-V1JPLwWn.js";import"./SvgIconRootV2-BBTF5ye2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-C3-8h3B5.js";import"./Caption-BaO_eCgt.js";import"./Headline-WANZoqA8.js";import"./Paragraph-DoYA-tO3.js";import"./Subhead-BP7ZzX_Z.js";import"./Title-BaiQADO8.js";import"./Tappable-C82LyDNp.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DujZCwJ6.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-DCN65GTj.js";import"./chevron_24-BrDROg8o.js";import"./chevron_16-CGve78DZ.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
