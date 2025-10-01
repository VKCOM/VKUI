import{w as l,b as c,j as r,r as e}from"./iframe-DJZLDe2v.js";import{w as d}from"./withCartesian-BpwZZplL.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-I0JIbCuY.js";import{G as x}from"./Group-ZTDDYGb3.js";import{H as z}from"./Header-DjOnrGei.js";import{H as F}from"./HorizontalCell-DyxzLTXl.js";import{S as H}from"./Spinner-BnPfDhY3.js";import{H as m}from"./HorizontalScroll-Rn_o9Hsp.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-_jMBtqEX.js";import"./Clickable-DJi6sM1Y.js";import"./useFocusVisible-B_h8gO-N.js";import"./useFocusVisibleClassName-CRC2ipiX.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-BKNEasHi.js";import"./useColorScheme-DOPlqjNA.js";import"./InputUtils-CYWMeBJ6.js";import"./useFocusWithin-BwFTxwKW.js";import"./useIsClient-BfxQDn7W.js";import"./useConfigDirection-Codxpgcm.js";import"./online_mobile_12-CAXQdLdL.js";import"./SvgIconRootV2-DyTPJ3EC.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-D8Ch1fTG.js";import"./Caption-B1NS-klr.js";import"./Headline-BcxcoLKm.js";import"./Paragraph-G8d9aizT.js";import"./Subhead-DeeiPlYW.js";import"./Title-a8EH9Ft1.js";import"./Tappable-CY0nsltg.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-D0jMNSCO.js";import"./fx-CfL2LSu1.js";import"./ScrollArrow-BAjCFB8s.js";import"./chevron_24-6kv9nE44.js";import"./chevron_16-Dn3k9T89.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
