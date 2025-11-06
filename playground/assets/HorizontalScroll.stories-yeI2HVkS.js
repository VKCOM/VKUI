import{w as l,b as c,j as r,r as e}from"./iframe-DcUCz3Gq.js";import{w as d}from"./withCartesian-CwEevyGb.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-CQC0Jca3.js";import{G as x}from"./Group-qWIgZiP3.js";import{H as z}from"./Header-CyjLOXrC.js";import{H as F}from"./HorizontalCell-zsjThw_G.js";import{S as H}from"./Spinner-DB1TcyOv.js";import{H as m}from"./HorizontalScroll-DT90z3ay.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DaoVSz36.js";import"./Clickable-8ToLJd_t.js";import"./useFocusVisible-wT17JwXD.js";import"./useFocusVisibleClassName-CIfEo8ba.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-FhxxxNM2.js";import"./useColorScheme-DrgIsgMO.js";import"./InputUtils-Dt7ctke5.js";import"./useFocusWithin-4tbXXtmK.js";import"./useIsClient-blsjwI61.js";import"./useConfigDirection-BglQDqbm.js";import"./online_mobile_12-DF9nx8OV.js";import"./SvgIconRootV2-CiN65TpX.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-lAEBSvha.js";import"./Caption-CDwF9hKw.js";import"./Headline-_bBT78y6.js";import"./Paragraph-DEZu3Vgm.js";import"./Subhead-CcORohtB.js";import"./Title-Cb6EL7Un.js";import"./Tappable-CGnYgxpx.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-IsgabQ9w.js";import"./fx-rqoYlJcV.js";import"./ScrollArrow-nRkgntFA.js";import"./chevron_24-DorGB4Sq.js";import"./chevron_16-BE6lGA5Q.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
