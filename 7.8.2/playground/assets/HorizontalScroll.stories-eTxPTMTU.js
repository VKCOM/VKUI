import{w as l,b as c,j as r,r as e}from"./iframe-DvQ0hW0I.js";import{w as d}from"./withCartesian-DeAETc2e.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{b as g}from"./mock-CiudtyON.js";import{c as h}from"./createStoryParameters-CcwS40kl.js";import{A as y}from"./Avatar-BTwGZh-N.js";import{G as x}from"./Group-DlJj6tsg.js";import{H as z}from"./Header-DUu1WtL_.js";import{H as F}from"./HorizontalCell-MR4JPiIF.js";import{S as H}from"./Spinner-CAlwHhMu.js";import{H as m}from"./HorizontalScroll-C5Z6sTbD.js";import"./preload-helper-PPVm8Dsz.js";import"./ImageBase-w-7-HB2A.js";import"./Clickable-CBovrC6X.js";import"./useFocusVisible-B22Xi0Zg.js";import"./useFocusVisibleClassName-DuyMNLO7.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DWb_Z3tD.js";import"./useColorScheme-Du5ZuGtY.js";import"./InputUtils-BSmatczf.js";import"./useFocusWithin-C0XX_iqt.js";import"./useIsClient-DWoS3R9Q.js";import"./useConfigDirection-DmTY1Se6.js";import"./online_mobile_12-C81mBZXT.js";import"./SvgIconRootV2-L_sEShSp.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DYSqrBFj.js";import"./Caption-hh3k8-HK.js";import"./Headline-U_eDzwn1.js";import"./Paragraph-R3cad3zP.js";import"./Subhead-DE0FovKO.js";import"./Title-CHQ24GsB.js";import"./Tappable-CzBKs2NQ.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-CGlAvVNH.js";import"./fx-SyZDdfTZ.js";import"./ScrollArrow-xW1rSDlZ.js";import"./chevron_24-fKzT9kSW.js";import"./chevron_16-m8pRWD8o.js";const cr={title:"Data Display/HorizontalScroll",component:m,parameters:h("HorizontalScroll",f,u),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[d,l,c],tags:["Отображение данных"]},t={render:function(o){const[n,p]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{p(g(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(m,{...o,children:[n.length===0&&r.jsx(H,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(F,{title:i.first_name,children:r.jsx(y,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(x,{header:r.jsx(z,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
