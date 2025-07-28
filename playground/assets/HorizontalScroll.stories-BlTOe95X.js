import{w as u,b as f,j as r,r as e}from"./iframe-CGpIZMk8.js";import{w as g}from"./withCartesian-DWT7RyrR.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-C-0ggE1O.js";import{G as H}from"./Group-CoQ5RzN5.js";import{H as R}from"./Header-CptAtBUq.js";import{H as S}from"./HorizontalCell-BVW9PhL9.js";import{S as C}from"./Spinner-DVykHsGf.js";import{H as c}from"./HorizontalScroll-Cktdm_az.js";import"./ImageBase-Dgt2gvRv.js";import"./Clickable-D9pe1RI2.js";import"./useFocusVisibleClassName-Cont0rus.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Bmifrsur.js";import"./useColorScheme-B2GHpbyp.js";import"./InputUtils-Z7In03iI.js";import"./useFocusWithin-mFqouh7d.js";import"./useIsClient-CR0g9cri.js";import"./useConfigDirection-Dz_AGVHb.js";import"./online_mobile_12-BfJB-Idm.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-DG1XrJyw.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DPd01TxJ.js";import"./Caption-J3zu-s3t.js";import"./Headline-ZBoX0yvc.js";import"./Paragraph-R2LFXqIt.js";import"./Subhead-D_tBif6E.js";import"./Title-Bh0cFv1G.js";import"./Tappable-BEdABn7b.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CdBh7Iry.js";import"./fx-COm1Tbx7.js";import"./ScrollArrow-B2rjeMBm.js";import"./chevron_24-DxaNHOrp.js";import"./chevron_16-C7AVBXEj.js";const dr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ur=["Playground"];export{t as Playground,ur as __namedExportsOrder,dr as default};
