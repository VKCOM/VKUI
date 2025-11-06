import{w as u,b as f,j as r,r as e}from"./iframe-VQuwIBim.js";import{w as g}from"./withCartesian-C2mj4ghH.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-C7wjORe_.js";import{G as H}from"./Group-CM6wWYyu.js";import{H as R}from"./Header-zgqnSMeZ.js";import{H as S}from"./HorizontalCell-BKeiMzUW.js";import{S as C}from"./Spinner-D45v6N1-.js";import{H as c}from"./HorizontalScroll-f2oHEOp7.js";import"./ImageBase-BsyA3SxR.js";import"./Clickable-GKvDpg7c.js";import"./useFocusVisibleClassName--V0F3pwv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-lUb35v5x.js";import"./useColorScheme-3PoJfbUB.js";import"./InputUtils-esLGIMz7.js";import"./useFocusWithin-C9W7nehx.js";import"./useIsClient--20LXL4m.js";import"./useConfigDirection-BhKWnP92.js";import"./online_mobile_12-22TycoA2.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CQoq0Nal.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CFr_RCRn.js";import"./Caption-C4GZRvva.js";import"./Headline-DlMci9v_.js";import"./Paragraph-DFDWF4fB.js";import"./Subhead-BovRsuwk.js";import"./Title-kPzeN8_R.js";import"./Tappable-DJKRXU4j.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Bn9barOE.js";import"./fx-DFVEh5RD.js";import"./ScrollArrow-DBh2ZJvB.js";import"./chevron_24-Imo4hgKT.js";import"./chevron_16-CrLMruU6.js";const dr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
