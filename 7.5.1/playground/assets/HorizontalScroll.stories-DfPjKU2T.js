import{w as u,b as f,j as r,r as e}from"./iframe-DZFG_ML5.js";import{w as g}from"./withCartesian-D_ODXolC.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-Bncgf6u6.js";import{G as H}from"./Group-DczfUVmx.js";import{H as R}from"./Header-a6ok8Q03.js";import{H as S}from"./HorizontalCell-JbHQYBDZ.js";import{S as C}from"./Spinner-Ds0i1YsX.js";import{H as c}from"./HorizontalScroll-KzwpVGHF.js";import"./ImageBase-B4zbJdM-.js";import"./Clickable-O0RRum4C.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-CL1M-Dxe.js";import"./useColorScheme-u4Oy3KJr.js";import"./InputUtils-rnqmQ_3Q.js";import"./useFocusWithin-DEb1HL1x.js";import"./useIsClient-CJjj9dyk.js";import"./useConfigDirection-BbxI4kck.js";import"./online_mobile_12-BHmKeFNg.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-CKNjcJVv.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-CYznJAmV.js";import"./Caption-B5AzA_Bj.js";import"./Headline-DDLNTO9r.js";import"./Paragraph-B9EciRKy.js";import"./Subhead-D8223A8i.js";import"./Title-Yt5D65iS.js";import"./Tappable-DivmMzZn.js";import"./animationVisibilityDelay.module-DjZYURHD.js";import"./VisuallyHidden-DUSQwRyI.js";import"./fx-6r2gRpIk.js";import"./ScrollArrow-BUe2H3n2.js";import"./chevron_24-DosOPE9o.js";import"./chevron_16-d4AUnQXG.js";const cr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f],tags:["Отображение данных"]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(s=>r.jsx(S,{title:s.first_name,children:r.jsx(F,{size:56,src:s.photo_200})},s.id))})]})},decorators:[(i,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(i,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
