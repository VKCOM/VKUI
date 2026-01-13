import{w as l,b as c,j as r,r as e}from"./iframe-DP0c1f9Y.js";import{w as d}from"./withCartesian-Bm9Pi-tV.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-CijdxBeh.js";import{G as x}from"./Group-uVVNnULv.js";import{H as z}from"./Header-CYQqsFv0.js";import{H as F}from"./HorizontalCell-D9sNMBSe.js";import{S as H}from"./Spinner-Bk4bS91d.js";import{H as m}from"./HorizontalScroll-C2FY_jkb.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CQrk3-c4.js";import"./Clickable-D6186WJE.js";import"./useState-mnL2mQbk.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-B4iEhslY.js";import"./useFocusVisibleClassName-er2xSro4.js";import"./ImageBaseBadge-D4hwrB2F.js";import"./useColorScheme-DuZucal0.js";import"./InputUtils-DpvhaK12.js";import"./useFocusWithin-CvS6Su5o.js";import"./useIsClient-RcRRrgRO.js";import"./useConfigDirection-BNkwGAZM.js";import"./online_mobile_12-Qc0twRcH.js";import"./SvgIconRootV2-BkRGxSGf.js";import"./helpers-QklJbEbU.js";import"./Footnote-DJoQQEv9.js";import"./Caption-Bf2pK2j4.js";import"./Headline-D5yVS7YY.js";import"./Paragraph-o90iONah.js";import"./Subhead-CZ6CT0II.js";import"./Title-S_74tDbu.js";import"./Tappable-B2ZLiGfg.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CsBByQHJ.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-DnQMpyUU.js";import"./chevron_24-B2HJQcyW.js";import"./chevron_16-CM-SIi30.js";const pr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const lr=["Playground"];export{t as Playground,lr as __namedExportsOrder,pr as default};
