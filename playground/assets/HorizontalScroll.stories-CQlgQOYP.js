import{w as u,b as f,j as r,r as e}from"./iframe-D9ctG7Ns.js";import{w as g}from"./withCartesian-CYOLsPz-.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-DKm75c9w.js";import{G as H}from"./Group-BG1uXLvs.js";import{H as R}from"./Header-DSbXuSQf.js";import{H as S}from"./HorizontalCell-DSKfQSOt.js";import{S as C}from"./Spinner-CdhXnMLF.js";import{H as c}from"./HorizontalScroll-B9UZRner.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-qcCzGQe1.js";import"./Clickable-4xEXwBeB.js";import"./useFocusVisibleClassName-ub0vwT2G.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-C5xgoBYA.js";import"./useColorScheme-D5oaSQC0.js";import"./InputUtils-dk1yVFOH.js";import"./useFocusWithin-C5Vdk2dl.js";import"./useIsClient-C6WLQkbf.js";import"./useConfigDirection-BepSmh67.js";import"./online_mobile_12-Bfp1yxmz.js";import"./SvgIconRootV2-DlJGpm03.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BcHikxS0.js";import"./Caption-6ObnKwfL.js";import"./Headline-4n2ELzS2.js";import"./Paragraph-CL2gUbo0.js";import"./Subhead-DjvqikOr.js";import"./Title-BxTWQERW.js";import"./Tappable-DOmAnzcN.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XRinxkJw.js";import"./fx-BKsF0vYk.js";import"./ScrollArrow-DO7xq66D.js";import"./chevron_24-25kh6H2z.js";import"./chevron_16-BEyzHrJY.js";const ur={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
