import{w as u,b as f,j as r,r as e}from"./iframe-qoTtUH8h.js";import{w as g}from"./withCartesian-CgmRx60J.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-CkZgodeV.js";import{G as H}from"./Group-jWXxgMZf.js";import{H as R}from"./Header-wIRQLJX0.js";import{H as S}from"./HorizontalCell-kiCaXVle.js";import{S as C}from"./Spinner-C8UkQVmM.js";import{H as c}from"./HorizontalScroll-B4sPAPY3.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DjQ3psw2.js";import"./Clickable-0SfVv815.js";import"./useFocusVisible-3VTd4LAB.js";import"./useFocusVisibleClassName-BbvWLli2.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-taKiFPaz.js";import"./useColorScheme-xLZC0aKi.js";import"./InputUtils-DCqC4s6H.js";import"./useFocusWithin-E39X-WYV.js";import"./useIsClient-BcbdMWH_.js";import"./useConfigDirection-DgRc04K6.js";import"./online_mobile_12-ucwY04eZ.js";import"./SvgIconRootV2-Dgfs3ogP.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DrM4b0WC.js";import"./Caption-bIdYMpTC.js";import"./Headline-BOHGExn8.js";import"./Paragraph-Dx2jmIL9.js";import"./Subhead-B5MAyB6Q.js";import"./Title-ksxyfi6H.js";import"./Tappable-D-SlRlKJ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BqFtMTWb.js";import"./fx-DxBmE9UA.js";import"./ScrollArrow-DSf-gZAM.js";import"./chevron_24-Bbrz8tmk.js";import"./chevron_16-BxL5QhO0.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
