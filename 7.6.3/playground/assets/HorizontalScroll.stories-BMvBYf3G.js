import{w as u,b as f,j as r,r as e}from"./iframe-OJ1C6fMc.js";import{w as g}from"./withCartesian-IgutvX62.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-Cfzy4YhR.js";import{G as H}from"./Group-MuPGSLP-.js";import{H as R}from"./Header-DipN2L6z.js";import{H as S}from"./HorizontalCell-o5StK6fL.js";import{S as C}from"./Spinner-B_HHBggy.js";import{H as c}from"./HorizontalScroll-5WnXIJ4G.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DWGPM8p5.js";import"./Clickable-DKzQKlVj.js";import"./useFocusVisibleClassName-GOe5YbRI.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-pi5uVPWv.js";import"./useColorScheme-Bl13B3Wz.js";import"./InputUtils-CNd9WeYt.js";import"./useFocusWithin-a-EzjXb7.js";import"./useIsClient-p1vmZH8b.js";import"./useConfigDirection-jCjot1AW.js";import"./online_mobile_12-BbwS-DbI.js";import"./SvgIconRootV2-BNUX11r8.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-JF6_a0Sk.js";import"./Caption-eNcQJads.js";import"./Headline-BAyAnA5C.js";import"./Paragraph-BmysOZB8.js";import"./Subhead-DtXruDSo.js";import"./Title-DVdp6jeh.js";import"./Tappable-BvI9Mb-u.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BNf-15JI.js";import"./fx-C3mcJv-n.js";import"./ScrollArrow-CkUWwN7v.js";import"./chevron_24-uwXpkcAA.js";import"./chevron_16-Bphhpetu.js";const ur={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
