import{w as u,b as f,j as r,r as e}from"./iframe-dTlwAXGa.js";import{w as g}from"./withCartesian-D0EUO-_7.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-D1LFFtlD.js";import{G as H}from"./Group-CrremWw-.js";import{H as R}from"./Header-DOWTzT-t.js";import{H as S}from"./HorizontalCell-C1Aw0h8-.js";import{S as C}from"./Spinner-Ct1kmwhu.js";import{H as c}from"./HorizontalScroll-BC1VaOvw.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-AJ3e9bE9.js";import"./Clickable-Dl5F7aV_.js";import"./useFocusVisible-8SFeJi_q.js";import"./useFocusVisibleClassName-YQKPigFR.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-Gqd0lug3.js";import"./useColorScheme-BL3jX5yR.js";import"./InputUtils-CtGJ0DI4.js";import"./useFocusWithin-kuId0kJs.js";import"./useIsClient-BVOBl7-A.js";import"./useConfigDirection-BIk700TM.js";import"./online_mobile_12-CBAdE4s5.js";import"./SvgIconRootV2-ob9v3OIY.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DJb5ZlwN.js";import"./Caption-BzXaktSd.js";import"./Headline-nnEuybdp.js";import"./Paragraph-wFT21Q39.js";import"./Subhead-BlOKXAAl.js";import"./Title-ShBYOT9p.js";import"./Tappable-qMfTC7Pz.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-JumwXwcS.js";import"./fx-Coz6Cy_1.js";import"./ScrollArrow-RGrjZN9s.js";import"./chevron_24-D2C7zIMP.js";import"./chevron_16-DHR9v_Z1.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const gr=["Playground"];export{t as Playground,gr as __namedExportsOrder,fr as default};
