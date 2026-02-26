import{b as l,w as c,j as r,r as e}from"./iframe-C4bTyPBQ.js";import{w as d}from"./withCartesian-BQ6gkXm4.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{a as g}from"./mock-KFM_xxXO.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-Bsyc_Tpa.js";import{G as x}from"./Group-B0qSQvWx.js";import{H as z}from"./Header-ikevTY5q.js";import{H as F}from"./HorizontalCell-BnnwsX7F.js";import{S as H}from"./Spinner-CnNDPfa2.js";import{H as m}from"./HorizontalScroll-C_Lfba6L.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DM5ndQnB.js";import"./Clickable-BhDfuptR.js";import"./useState-CmJkrVlf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-D8pFgTbd.js";import"./ImageBaseBadge-oFfOfujq.js";import"./useColorScheme-B5qdSLTx.js";import"./InputUtils-Ns7QNyDT.js";import"./useFocusWithin-CWJCpHmP.js";import"./useIsClient-B8qKshG4.js";import"./useConfigDirection-OBrCdmzr.js";import"./online_mobile_12-CQS8ULfi.js";import"./SvgIconRootV2-DbftVVP5.js";import"./helpers-QklJbEbU.js";import"./Footnote-wW_hecXF.js";import"./Caption-D_3C1Hvb.js";import"./Headline-B4T2ew9V.js";import"./Paragraph-DjR0IJ5A.js";import"./Subhead-CGMBr7DJ.js";import"./Title-CK3YofNd.js";import"./Tappable-BZW__-HP.js";import"./animationVisibilityDelay.module-D0fTgH-m.js";import"./VisuallyHidden-BEfP1Q2n.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-R-x82-Ne.js";import"./chevron_24-DAtZ7tdt.js";import"./chevron_16-D1zTg27u.js";const pr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
