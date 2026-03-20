import{w as l,b as c,j as r,r as e}from"./iframe-CmkY54f5.js";import{w as d}from"./withCartesian-D8vYpj6V.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BFe2Ipz7.js";import{G as x}from"./Group-6J2U7NrK.js";import{H as z}from"./Header-lTkn-U-E.js";import{H as F}from"./HorizontalCell-DQjc4N4I.js";import{S as H}from"./Spinner-C6TWv4c6.js";import{H as m}from"./HorizontalScroll-BKAWN1OV.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CuKHTYYu.js";import"./Clickable-BrVjzu4L.js";import"./useState-D-QVJqbH.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C4Qi6R0K.js";import"./ImageBaseBadge-qpJE4NP2.js";import"./useColorScheme-BCWY6G93.js";import"./InputUtils-UNO81DKX.js";import"./useFocusWithin-BymUKlkD.js";import"./useIsClient-B2WktGOw.js";import"./useConfigDirection-Duqs0EiT.js";import"./online_mobile_12-C2QZUa5e.js";import"./SvgIconRootV2-D5kdU-yX.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dh1koNQe.js";import"./Caption-CsrSECTC.js";import"./Headline-DsYeFntm.js";import"./Paragraph-DRaKBji1.js";import"./Subhead-BS8ES9bw.js";import"./Title-DSkwAgcq.js";import"./Tappable-DW-ilhli.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Da3ud9kw.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-C3WUb0SW.js";import"./chevron_24-BlOtmXlj.js";import"./chevron_16-CCLojpkC.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
