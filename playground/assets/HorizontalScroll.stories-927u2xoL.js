import{w as l,b as c,j as r,r as e}from"./iframe-C4ttrVUJ.js";import{w as d}from"./withCartesian-Bk85aL_K.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-DLLE7n5t.js";import{G as x}from"./Group-CRpAXhsk.js";import{H as z}from"./Header-C9_ttFWk.js";import{H as F}from"./HorizontalCell-Bkr4Vz54.js";import{S as H}from"./Spinner-CeIULbGb.js";import{H as m}from"./HorizontalScroll-QFMQsry7.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-Cq87jgCn.js";import"./Clickable-B80alsah.js";import"./useState-DqLBjAbD.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-Cjb5EKPf.js";import"./ImageBaseBadge-Cjn2Y5VK.js";import"./useColorScheme-CRY_65bE.js";import"./InputUtils-CD1Rp_t7.js";import"./useFocusWithin-BAJNppfT.js";import"./useIsClient-CcDyD4m-.js";import"./useConfigDirection-DvmYVNBa.js";import"./online_mobile_12-CiSPADre.js";import"./SvgIconRootV2-nKtIp9pI.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D7DVMFfP.js";import"./Caption-Den-IMPb.js";import"./Headline-B3vZWFvi.js";import"./Paragraph-C9fVSqiB.js";import"./Subhead-ChzeQqTJ.js";import"./Title-DTItDJJC.js";import"./Tappable-CL0fK4DO.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-XgvirjGY.js";import"./fx-D-5xmdri.js";import"./ScrollArrow-DR5r8_HC.js";import"./chevron_24-C04J8X2C.js";import"./chevron_16-CHg4wDrn.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
