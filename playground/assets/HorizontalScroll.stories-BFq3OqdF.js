import{w as l,b as c,j as r,r as e}from"./iframe-BdXaAE5r.js";import{w as d}from"./withCartesian-Ch2NlzK6.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BDL6DiG7.js";import{G as x}from"./Group-D1elF4gT.js";import{H as z}from"./Header-CyQOIg1V.js";import{H as F}from"./HorizontalCell-9IZteAZx.js";import{S as H}from"./Spinner-Dsao1b5l.js";import{H as m}from"./HorizontalScroll-DCDnVkns.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-B346ZL0P.js";import"./Clickable-0nFsuW3k.js";import"./useFocusVisible-Dn_DPkBY.js";import"./useFocusVisibleClassName-CvWQ-Qtc.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DkEJCKUw.js";import"./useColorScheme-CR-44NGe.js";import"./InputUtils--HRLtXJo.js";import"./useFocusWithin-BFFjMCCU.js";import"./useIsClient-CdGSC0Is.js";import"./useConfigDirection-B4zlYhYT.js";import"./online_mobile_12-BX9R8xcr.js";import"./SvgIconRootV2-K3I65lI2.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ByXPLsYQ.js";import"./Caption-B8hxH2dQ.js";import"./Headline-DW4C0RJJ.js";import"./Paragraph-ZazE2YSK.js";import"./Subhead-CM9E3HB6.js";import"./Title-CkdPFRXw.js";import"./Tappable-DfpzQKhB.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DcQJc2es.js";import"./fx-DC0vWq9f.js";import"./ScrollArrow-CEb8Mfjr.js";import"./chevron_24-BT9UqPJ5.js";import"./chevron_16-CxZx8l_q.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
