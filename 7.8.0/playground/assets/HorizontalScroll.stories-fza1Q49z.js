import{w as l,b as c,j as r,r as e}from"./iframe-F_0bvJrc.js";import{w as d}from"./withCartesian-DmH2k9Od.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-Bsv1rUL7.js";import{G as x}from"./Group-DWRY0NV1.js";import{H as z}from"./Header-sBoK2CfE.js";import{H as F}from"./HorizontalCell-MLUZT0V4.js";import{S as H}from"./Spinner-D7kEFt-1.js";import{H as m}from"./HorizontalScroll-lefGwdwW.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-NzuhIIti.js";import"./Clickable-B4aTO_qb.js";import"./useFocusVisible-B9UG_RNv.js";import"./useFocusVisibleClassName-CkUjL7ix.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Dx1ll0L6.js";import"./useColorScheme-CMuS3Rce.js";import"./InputUtils-CneTbOko.js";import"./useFocusWithin-CDt5X1od.js";import"./useIsClient-CSY1-Ql9.js";import"./useConfigDirection-poWhsvcV.js";import"./online_mobile_12-DoUW3apm.js";import"./SvgIconRootV2-BCSN9SpV.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DfPFidfa.js";import"./Caption-DLbzsWHi.js";import"./Headline-B-xJiW6B.js";import"./Paragraph-DpqDuxuA.js";import"./Subhead-CtWFTcAD.js";import"./Title-BNzhyC_D.js";import"./Tappable-DJ3rCQkY.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CRrL_L2y.js";import"./fx-BGp5lg0h.js";import"./ScrollArrow-BisCq_QF.js";import"./chevron_24-B5BZQg8T.js";import"./chevron_16--5zekb9K.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
