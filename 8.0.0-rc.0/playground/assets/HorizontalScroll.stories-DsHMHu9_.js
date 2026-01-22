import{w as l,b as c,j as r,r as e}from"./iframe-CWLi0Dwx.js";import{w as d}from"./withCartesian-t29HthLC.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-DeL1blhr.js";import{G as x}from"./Group-vgwGhKNH.js";import{H as z}from"./Header-bGYlkA7K.js";import{H as F}from"./HorizontalCell-DeiLRNRG.js";import{S as H}from"./Spinner-ClXGWKNH.js";import{H as m}from"./HorizontalScroll-B5WoSiUW.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-CuMyBcnL.js";import"./Clickable-qvNFYhPA.js";import"./useState-B6GpLt4z.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-C_mTcJQY.js";import"./ImageBaseBadge-CO-iwG6X.js";import"./useColorScheme-BJrTZoRu.js";import"./InputUtils-y46vV6Lq.js";import"./useFocusWithin-CGwmDWCX.js";import"./useIsClient-e26nd6xF.js";import"./useConfigDirection-EPKxpKX2.js";import"./online_mobile_12-zVNMIc5b.js";import"./SvgIconRootV2-BTF9teUl.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./Footnote-uuGEAWzo.js";import"./Caption-7-fMsdYi.js";import"./Headline-BBfhp0Vp.js";import"./Paragraph-BILZ1ORB.js";import"./Subhead-BNTLgiWX.js";import"./Title-B966ALEh.js";import"./Tappable-BfbUNvge.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-DcnlEFVn.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-yW0Ov8Oz.js";import"./chevron_24-BcYixQIX.js";import"./chevron_16-SZNMdhZS.js";const lr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
