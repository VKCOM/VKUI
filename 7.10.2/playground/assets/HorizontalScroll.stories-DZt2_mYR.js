import{w as l,b as c,j as r,r as e}from"./iframe-BnACcuaj.js";import{w as d}from"./withCartesian-Dw98jfVn.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BDDoFCjB.js";import{G as x}from"./Group-D4VE5Gz7.js";import{H as z}from"./Header-CFa9OJhx.js";import{H as F}from"./HorizontalCell-CmHyE3VT.js";import{S as H}from"./Spinner-gYU1puQq.js";import{H as m}from"./HorizontalScroll-CZgMOcFE.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-C2NNu-UP.js";import"./Clickable-BArC-ALh.js";import"./useState-Bfn4OdDS.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-l1LH_CPg.js";import"./ImageBaseBadge-ddiV_2PS.js";import"./useColorScheme-DVykw0fJ.js";import"./InputUtils-Bef-cQxi.js";import"./useFocusWithin-BXXGciuN.js";import"./useIsClient-BI688Wuj.js";import"./useConfigDirection-BP7XHPEm.js";import"./online_mobile_12-BJe7c2HV.js";import"./SvgIconRootV2-jVzBhEqh.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DxEsaF8U.js";import"./Caption-BCwlm_4N.js";import"./Headline-B8WUXhnw.js";import"./Paragraph-D3a0j1Hf.js";import"./Subhead-ctfJxtXj.js";import"./Title-DyuwQvN-.js";import"./Tappable-Bp0BqfGQ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-UrXKAcy6.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-CeJJTV_P.js";import"./chevron_24-DE_SBVcH.js";import"./chevron_16-Cx4QM-qk.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
