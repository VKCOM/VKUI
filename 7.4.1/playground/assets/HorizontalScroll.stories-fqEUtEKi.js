import{w as u,b as f,j as r,r as e}from"./iframe-BW2_2Sqh.js";import{w as g}from"./withCartesian-DYrU1P04.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as H}from"./Avatar-C504pHwc.js";import{G as F}from"./Group-CUaPdFZ2.js";import{H as S}from"./Header-BThxfgz-.js";import{H as R}from"./HorizontalCell-BGr36AFd.js";import{S as C}from"./Spinner-Ck410QJW.js";import{H as c}from"./HorizontalScroll-3iJUmia-.js";import"./ImageBase-CoAaMLqa.js";import"./Clickable-CSLKIgEW.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DZQOp4mD.js";import"./useColorScheme-DfFLwB8B.js";import"./InputUtils-DYuPlK4j.js";import"./useFocusWithin-Cv8cds6L.js";import"./useIsClient-fZBb-eaz.js";import"./useConfigDirection-DNUhHzMQ.js";import"./online_mobile_12-Dt81a55b.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CjRB6jtF.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DqSrPGSc.js";import"./Caption-B3YPJibB.js";import"./Headline-C7EO-C2p.js";import"./Paragraph-DwKlZasN.js";import"./Subhead-BlMIzlRi.js";import"./Title-BsNL9OHU.js";import"./Tappable-D_Pc41Ky.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-0_L4g8bM.js";import"./fx-BEF3hAOe.js";import"./ScrollArrow-CCmyJO3s.js";import"./chevron_24-Dt54eQZB.js";import"./chevron_16-DYHt4ET-.js";const cr={title:"Layout/HorizontalScroll/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(R,{title:i.first_name,children:r.jsx(H,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(F,{header:r.jsx(S,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
