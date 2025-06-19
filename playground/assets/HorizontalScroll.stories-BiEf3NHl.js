import{w as u,b as f,j as r,r as e}from"./iframe-k6odcVfq.js";import{w as g}from"./withCartesian-BIV5f8J0.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as H}from"./Avatar-BhZm66jC.js";import{G as F}from"./Group-O3l4QVPu.js";import{H as S}from"./Header-D6vKwvW0.js";import{H as R}from"./HorizontalCell-C2AZpTyv.js";import{S as C}from"./Spinner-COoI1Hcx.js";import{H as c}from"./HorizontalScroll-C5wOjsO3.js";import"./ImageBase-BDH625NM.js";import"./Clickable-D_pv1CFG.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DRsh_8l_.js";import"./useColorScheme-DOgN8xDN.js";import"./InputUtils-C1ugcw4m.js";import"./useFocusWithin-Bs7KV-km.js";import"./useIsClient-C3_XghNw.js";import"./useConfigDirection-CxnUW9rE.js";import"./online_mobile_12-DaP3HP9x.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-Dvsw40tX.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DHnfr3c7.js";import"./Caption-CAbXIvPt.js";import"./Headline-BdgiMIb0.js";import"./Paragraph-DvqjBQ5B.js";import"./Subhead-CfBOCg31.js";import"./Title-DF65glat.js";import"./Tappable-CLnVjIR_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D-1P4bzL.js";import"./fx-CpkSQu6p.js";import"./ScrollArrow-CQdXBPdy.js";import"./chevron_24-C1n-aqzu.js";import"./chevron_16-C9RD0OpX.js";const cr={title:"Layout/HorizontalScroll/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(R,{title:i.first_name,children:r.jsx(H,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(F,{header:r.jsx(S,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
