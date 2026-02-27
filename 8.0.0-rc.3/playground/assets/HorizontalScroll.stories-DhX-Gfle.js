import{b as l,w as c,j as r,r as e}from"./iframe-Cn0klKvz.js";import{w as d}from"./withCartesian-pzStfd1W.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{a as g}from"./mock-KFM_xxXO.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-CT-zlOwi.js";import{G as x}from"./Group-CNhzxREQ.js";import{H as z}from"./Header-BbTcm4ob.js";import{H as F}from"./HorizontalCell-B7cu1S5x.js";import{S as H}from"./Spinner-Dez3qxwZ.js";import{H as m}from"./HorizontalScroll-DqI3zpKD.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BDlDuAlq.js";import"./Clickable-D6ksQ4g4.js";import"./useState-C_fQQS3-.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-p3iQy_Hp.js";import"./ImageBaseBadge-CMNLexKF.js";import"./useColorScheme-C7zCwRzY.js";import"./InputUtils-B6qCikuW.js";import"./useFocusWithin-GdWsk7hi.js";import"./useIsClient-CY4E_kP3.js";import"./useConfigDirection-DuEYXWS_.js";import"./online_mobile_12-BKRTJpWf.js";import"./SvgIconRootV2-CXwMOlb0.js";import"./helpers-QklJbEbU.js";import"./Footnote-BwZkqEqY.js";import"./Caption-Bj6KpxiH.js";import"./Headline-DgEMhIVy.js";import"./Paragraph-DlmN_8kL.js";import"./Subhead-BQyoBjlR.js";import"./Title-C-xuvkmu.js";import"./Tappable-CVh4vgq8.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-C9tNf48m.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-86LIicVN.js";import"./chevron_24-D9aYLatK.js";import"./chevron_16-5H5JBddQ.js";const pr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const lr=["Playground"];export{t as Playground,lr as __namedExportsOrder,pr as default};
