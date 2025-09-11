import{w as u,b as f,j as r,r as e}from"./iframe-DfeTZ_Fw.js";import{w as g}from"./withCartesian-C_E5fs2d.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-BtGg7nD-.js";import{G as H}from"./Group-ChVeS0N8.js";import{H as R}from"./Header-Bn3EvT51.js";import{H as S}from"./HorizontalCell-Dc340nWk.js";import{S as C}from"./Spinner-Crblzylq.js";import{H as c}from"./HorizontalScroll-CanoaL7R.js";import"./preload-helper-Dp1pzeXC.js";import"./ImageBase-DEZsD6YW.js";import"./Clickable-Bpx6dgEO.js";import"./useFocusVisible-BkjzJxRk.js";import"./useFocusVisibleClassName-BT3I2X7t.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CFGlxEKL.js";import"./useColorScheme-BGgcYhBu.js";import"./InputUtils-C-I8ensD.js";import"./useFocusWithin-UgE2lzew.js";import"./useIsClient-D3QWm6mk.js";import"./useConfigDirection-CwjKsiym.js";import"./online_mobile_12-B0vcMB8K.js";import"./SvgIconRootV2-Dobq3NOw.js";import"./_object_spread_props-DRD4qu7p.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-ivEbNXOe.js";import"./Caption-hDjGO988.js";import"./Headline-BbT30PkZ.js";import"./Paragraph-B0joEyCz.js";import"./Subhead-BkL8qoJh.js";import"./Title-BA2sPfYi.js";import"./Tappable-BBWke1IE.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-BuJles22.js";import"./fx-6NXl3I1U.js";import"./ScrollArrow-DLZN2wVh.js";import"./chevron_24-k76nBf5R.js";import"./chevron_16-w2grljdX.js";const fr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const gr=["Playground"];export{t as Playground,gr as __namedExportsOrder,fr as default};
