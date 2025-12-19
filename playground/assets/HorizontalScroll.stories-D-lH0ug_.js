import{w as l,b as c,j as r,r as e}from"./iframe-CGSrC79H.js";import{w as d}from"./withCartesian-DoZze1nu.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-Dl6s_n2w.js";import{G as x}from"./Group-DH0PWTW1.js";import{H as z}from"./Header-Cfvop0aY.js";import{H as F}from"./HorizontalCell-nQTWQfvx.js";import{S as H}from"./Spinner-CLlWSgUI.js";import{H as m}from"./HorizontalScroll-CLG6ETB5.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dr0L0DbE.js";import"./Clickable-DvGk0QGJ.js";import"./useState-DzaGsmJ4.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-CgCqKIR9.js";import"./ImageBaseBadge-DwqbY7Wq.js";import"./useColorScheme-DM7MWYfE.js";import"./InputUtils-AL_dRhAR.js";import"./useFocusWithin-Bqhwx3UJ.js";import"./useIsClient-DIauWYrF.js";import"./useConfigDirection-BDt5-3HT.js";import"./online_mobile_12-i8dixzXS.js";import"./SvgIconRootV2-CIqAKT0Z.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-9-fttdTG.js";import"./Caption-BHHO6d1x.js";import"./Headline-DOU82LYx.js";import"./Paragraph-MD0IQtl5.js";import"./Subhead-BDUGOuQB.js";import"./Title-29M-U6si.js";import"./Tappable-HtqfSGDW.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-Cv__RMJJ.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-BvupeBe5.js";import"./chevron_24-DILgtZHa.js";import"./chevron_16-IEGQRb6X.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const cr=["Playground"];export{t as Playground,cr as __namedExportsOrder,lr as default};
