import{w as l,b as c,j as r,r as e}from"./iframe-Db0SwwYs.js";import{w as d}from"./withCartesian-De4XxxrF.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-CWFchgG9.js";import{G as x}from"./Group-DSFCK6DA.js";import{H as z}from"./Header-DmedDDpw.js";import{H as F}from"./HorizontalCell-iIg7CJgG.js";import{S as H}from"./Spinner-Dy7IzRwA.js";import{H as m}from"./HorizontalScroll-BSbo5fHa.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-BKEGahLF.js";import"./Clickable-QJYjPwzV.js";import"./useState-_pDIeHd1.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-1u6W-zIq.js";import"./ImageBaseBadge-C9gdXUUv.js";import"./useColorScheme-BTSYlb-o.js";import"./InputUtils-DU65P5CC.js";import"./useFocusWithin-CRR7Gu3h.js";import"./useIsClient-CvbikZ8J.js";import"./useConfigDirection-BSBBgTCk.js";import"./online_mobile_12-70oY16eZ.js";import"./SvgIconRootV2-Cb9l57Fj.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CJOdhFdd.js";import"./Caption-02ZtUboh.js";import"./Headline-BS3jMLtX.js";import"./Paragraph-Bv0EtTo4.js";import"./Subhead-C2LPCYB7.js";import"./Title-DrCXdOfJ.js";import"./Tappable-DPDNr6uV.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CZDmCAU7.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-CYWft9k3.js";import"./chevron_24-dshfyEIO.js";import"./chevron_16-DFxn-1ZI.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
