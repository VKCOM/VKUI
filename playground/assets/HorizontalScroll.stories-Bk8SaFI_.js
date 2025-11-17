import{w as l,b as c,j as r,r as e}from"./iframe-DhuutAfC.js";import{w as d}from"./withCartesian-DlJDWAE1.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-CfoX7h1q.js";import{G as x}from"./Group-BZNrT2Zp.js";import{H as z}from"./Header-1NT9ycU6.js";import{H as F}from"./HorizontalCell-PyWN0afL.js";import{S as H}from"./Spinner-gmUVON3e.js";import{H as m}from"./HorizontalScroll-CpHR1ycc.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-DRHnsmF9.js";import"./Clickable-CuiuPnoa.js";import"./useState-DoK0IZwP.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CoMQAxvE.js";import"./ImageBaseBadge-C-TjMgFh.js";import"./useColorScheme-BGUvzePH.js";import"./InputUtils-BcFat9xH.js";import"./useFocusWithin-TQRavq7I.js";import"./useIsClient-C6EQizwd.js";import"./useConfigDirection-BKOpe2-3.js";import"./online_mobile_12-B0P5OQgy.js";import"./SvgIconRootV2-C4_Qm01j.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-BE0sRU6f.js";import"./Caption-BhiEFCof.js";import"./Headline-CY9tv16R.js";import"./Paragraph-DY0mKGfS.js";import"./Subhead-N3Y6Abab.js";import"./Title-BixyGD4w.js";import"./Tappable-tvWVp5xX.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BkhWnsJf.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-45T3qbjN.js";import"./chevron_24-XyzuJRpc.js";import"./chevron_16-B8RroCu2.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
