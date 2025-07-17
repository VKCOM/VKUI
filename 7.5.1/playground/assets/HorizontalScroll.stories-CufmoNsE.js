import{w as u,b as f,j as r,r as e}from"./iframe-DSAhScPT.js";import{w as g}from"./withCartesian-DYTwxWqf.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-BPQQA8cc.js";import{G as H}from"./Group-B7gcv2RN.js";import{H as R}from"./Header-CsNoOb5G.js";import{H as S}from"./HorizontalCell-BjvAagoe.js";import{S as C}from"./Spinner-KyMn6wQY.js";import{H as c}from"./HorizontalScroll-CFzdlSqN.js";import"./ImageBase-CmtPvhF-.js";import"./Clickable-6oth1gD7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-rAm5hXMS.js";import"./useColorScheme-Cus1gWwQ.js";import"./InputUtils-CLCgtllv.js";import"./useFocusWithin-BI_v5t1h.js";import"./useIsClient-_KK5KAr3.js";import"./useConfigDirection-Dm4173QE.js";import"./online_mobile_12-DSh9l_YU.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CIYgEGRf.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BKhvF0_1.js";import"./Caption-Cgr-BZCX.js";import"./Headline-CdViHbNM.js";import"./Paragraph-Dffse9lF.js";import"./Subhead-CkgCAX-J.js";import"./Title-CtXU7qo4.js";import"./Tappable-41du4Si_.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DIyQgeho.js";import"./fx-DMvEPu-H.js";import"./ScrollArrow-u5Ze_HCK.js";import"./chevron_24-DqwX_mj1.js";import"./chevron_16-NGFInKyj.js";const cr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(s=>r.jsx(S,{title:s.first_name,children:r.jsx(F,{size:56,src:s.photo_200})},s.id))})]})},decorators:[(i,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(i,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
