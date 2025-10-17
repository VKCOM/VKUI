import{w as l,b as c,j as r,r as e}from"./iframe-DdZr-4mP.js";import{w as d}from"./withCartesian-f4SrTWZy.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-410xp239.js";import{G as x}from"./Group-DlK5kh75.js";import{H as z}from"./Header-Ley-sfuQ.js";import{H as F}from"./HorizontalCell-GLnYsJBc.js";import{S as H}from"./Spinner-BjrDa5Np.js";import{H as m}from"./HorizontalScroll-B4iaVhEi.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dd-xxUc3.js";import"./Clickable-J2yyQqq6.js";import"./useFocusVisible-CsJI4LS4.js";import"./useFocusVisibleClassName-DD68rAjX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-B_lQou7R.js";import"./useColorScheme-DV5aetKH.js";import"./InputUtils-CcKtkKuI.js";import"./useFocusWithin-Bj820Lyk.js";import"./useIsClient-q3rRlZlM.js";import"./useConfigDirection-BdfXEpUn.js";import"./online_mobile_12-nNQkdum-.js";import"./SvgIconRootV2-BEs6hlg2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-1KqsUf4m.js";import"./Caption-DtU_BWrV.js";import"./Headline-BSoQthvj.js";import"./Paragraph-x1XJ9xj3.js";import"./Subhead-xzDyxoRX.js";import"./Title-D3itgTrb.js";import"./Tappable-CovdKVQt.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CSRm7Yw_.js";import"./fx-nICPG9Wo.js";import"./ScrollArrow-DVrUjEkR.js";import"./chevron_24-CZhvaAmE.js";import"./chevron_16-qALKhhss.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
