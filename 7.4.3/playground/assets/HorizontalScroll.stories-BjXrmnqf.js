import{w as u,b as f,j as r,r as e}from"./iframe-C2_PECK0.js";import{w as g}from"./withCartesian-DAKMWDCJ.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as H}from"./Avatar-Dqq0a0dv.js";import{G as F}from"./Group-lIrBg-Y8.js";import{H as S}from"./Header--CUqFnHO.js";import{H as R}from"./HorizontalCell-XLG0f5av.js";import{S as C}from"./Spinner-DOBIwFGK.js";import{H as c}from"./HorizontalScroll-y6HxAIkS.js";import"./ImageBase-sxzcezpW.js";import"./Clickable-Ctz6ZMd9.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DnS8sQyr.js";import"./useColorScheme-5WrknPov.js";import"./InputUtils-BDpjj3t6.js";import"./useFocusWithin-gjFI-5hQ.js";import"./useIsClient-BIt4BhuW.js";import"./useConfigDirection-CkTav0j8.js";import"./online_mobile_12-CwOv5Leh.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-JE-dYnvZ.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_H7tDpo.js";import"./Caption-D3QJC-zO.js";import"./Headline-DKR4TEkK.js";import"./Paragraph-BJiuCRl2.js";import"./Subhead-tEP5dl-0.js";import"./Title-DA9pXnZ8.js";import"./Tappable-DLQDSygG.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DSMrBIlo.js";import"./fx-oG50EwDv.js";import"./ScrollArrow-BTooiCCv.js";import"./chevron_24-DO4JAey0.js";import"./chevron_16-Da1nGRlC.js";const cr={title:"Layout/HorizontalScroll/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(R,{title:i.first_name,children:r.jsx(H,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(F,{header:r.jsx(S,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
