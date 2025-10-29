import{w as l,b as c,j as r,r as e}from"./iframe-DC59t_7s.js";import{w as d}from"./withCartesian-D1Dw12re.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-2FNTHIuZ.js";import{G as x}from"./Group-BjjfSX7O.js";import{H as z}from"./Header-BDK1xHcM.js";import{H as F}from"./HorizontalCell-BSHPVthz.js";import{S as H}from"./Spinner-BHxVDILF.js";import{H as m}from"./HorizontalScroll-DiYo4r2g.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Dh1youlf.js";import"./Clickable-k0omQ8uW.js";import"./useFocusVisible-0NkNV9Nj.js";import"./useFocusVisibleClassName-DmFOR7KZ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CdzA4sjH.js";import"./useColorScheme-Cf0PiwGW.js";import"./InputUtils-C5RWily7.js";import"./useFocusWithin-9CYA-Xql.js";import"./useIsClient-DeI2OSMJ.js";import"./useConfigDirection-6hDi4KID.js";import"./online_mobile_12-DWpmN_kZ.js";import"./SvgIconRootV2-AN48yvx-.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-B_mvNSI1.js";import"./Caption-k9jgJVgg.js";import"./Headline-bNrKkYhC.js";import"./Paragraph-CNGX9Ncs.js";import"./Subhead-CcQWHNvG.js";import"./Title-DbXaHY-Y.js";import"./Tappable-CRrpYa-n.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-dUOLTySp.js";import"./fx-CJRBS1eZ.js";import"./ScrollArrow-DPR8cpvb.js";import"./chevron_24-FdnyQ-I8.js";import"./chevron_16-DtWL8gcK.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
