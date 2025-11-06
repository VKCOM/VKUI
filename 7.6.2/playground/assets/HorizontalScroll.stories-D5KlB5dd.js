import{w as u,b as f,j as r,r as e}from"./iframe-DdjuqQRP.js";import{w as g}from"./withCartesian-DAATo9U1.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-jq-jNAjW.js";import{G as H}from"./Group-En8sMpzv.js";import{H as R}from"./Header-Bv9wLu9Z.js";import{H as S}from"./HorizontalCell-Bm6_kt2X.js";import{S as C}from"./Spinner-CywFefQr.js";import{H as c}from"./HorizontalScroll-D_xEEbUd.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DW1D2uag.js";import"./Clickable-CMjmakJq.js";import"./useFocusVisibleClassName-DIZrWJUe.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DbSUYPlc.js";import"./useColorScheme-CYrptSaC.js";import"./InputUtils-DQHFk4OZ.js";import"./useFocusWithin-BBPiXwue.js";import"./useIsClient-D4GCM_VE.js";import"./useConfigDirection-DvOEXyz7.js";import"./online_mobile_12-CcEC3FB8.js";import"./SvgIconRootV2-BHNoZcvi.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BRLGHUUX.js";import"./Caption-CY-tJQn6.js";import"./Headline-nhn3N_7L.js";import"./Paragraph-MmTEWjmH.js";import"./Subhead-BeRrVUPj.js";import"./Title-SR3J6img.js";import"./Tappable-BrYIPFio.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DYNTcNls.js";import"./fx-CnGeuHGD.js";import"./ScrollArrow-Cg-f-JP3.js";import"./chevron_24-DkuIz07A.js";import"./chevron_16-XmJ4kBUZ.js";const ur={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const fr=["Playground"];export{t as Playground,fr as __namedExportsOrder,ur as default};
