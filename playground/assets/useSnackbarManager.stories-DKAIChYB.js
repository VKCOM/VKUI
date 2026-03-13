import{r as s,j as t}from"./iframe-CEhhJuIi.js";import{B as i}from"./Button-VHcOoYjV.js";import{C as f}from"./Checkbox-DjyBJ_D8.js";import{F as p}from"./Flex-DGSr3jA3.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{u as j}from"./useSnackbarManager-BBEmKmBU.js";import{I as A}from"./thumbs_up_outline_24-BzoVcGqj.js";import"./preload-helper-PPVm8Dsz.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-C8mKPATK.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BYulTkKK.js";import"./Tappable-CTSOdpDd.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CSDkuBjh.js";import"./useState-BlpMLPZb.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-DXX9BFk4.js";import"./InputUtils-CN8Bpeve.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-C2Z5oeVH.js";import"./Footnote-wldoNL-p.js";import"./check_box_on_24-tz3ud1kS.js";import"./SvgIconRootV2-D6PU7F2k.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-DjLpdvdR.js";import"./gaps-TC-23xBl.js";import"./useCSSKeyframesAnimationController-DHvojNoR.js";import"./Snackbar-BVyWR4kQ.js";import"./useConfigDirection-K0H5l3FT.js";import"./useFocusWithin-D7grZ9Rv.js";import"./useGlobalEscKeyDown-CE7TqF1-.js";import"./Paragraph-DZv5gWne.js";import"./Subhead-4zP8hIFm.js";import"./rubberbandIfOutOfBounds-D-LdOANG.js";import"./randomUUID-CV8jBseQ.js";const pt={title:"Utils/useSnackbarManager",component:()=>t.jsx("div",{}),parameters:{...C,...g},argTypes:{limit:{control:"number"},queueStrategy:{control:"radio",options:["queue","shift"]},offsetYStart:{control:"number"},offsetYEnd:{control:"number"}}},l=["top-start","bottom-start","top","bottom","top-end","bottom-end"],F=[l.slice(0,2),l.slice(2,4),l.slice(4)],a={render:function(d){const[c,b]=j(d),[x,u]=s.useState(new Set),[m,k]=s.useState(!0),n=s.useRef(0),h=e=>{const{id:o}=c.open({duration:m?void 0:null,before:t.jsx(A,{}),placement:e,children:`Уведомление показано! ${n.current}`,onClose:()=>{u(r=>(r.delete(o),new Set([...r])))}});n.current=n.current>100?0:n.current+1,u(r=>new Set([...r,o]))},S=()=>{[...x].forEach(e=>{c.update(e,{action:"Обновлен",children:"Текст и всякое другое"})})};return t.jsxs(t.Fragment,{children:[t.jsxs(p,{direction:"column",gap:"2xl",children:[t.jsx(p,{gap:3,children:F.map(e=>t.jsx(p,{direction:"column",gap:"xl",children:e.map(o=>t.jsx(i,{onClick:()=>h(o),children:o},o))},e.join("_")))}),t.jsx(f,{checked:m,onChange:()=>k(e=>!e),children:"Автоскрытие"}),t.jsx(i,{appearance:"negative",stretched:!0,onClick:c.closeAll,children:"Закрыть все"}),t.jsx(i,{appearance:"negative",stretched:!0,onClick:S,children:"Обновить все"})]}),b]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(props) {
    const [snackbarApi, contextHolder] = useSnackbarManager(props);
    const [snackbars, setSnackbars] = React.useState<Set<string>>(new Set());
    const [autoHide, setAutoHide] = React.useState(true);
    const count = React.useRef(0);
    const _onOpen = (placement: SnackbarPlacement) => {
      const {
        id
      } = snackbarApi.open({
        duration: autoHide ? undefined : null,
        before: <Icon24ThumbsUpOutline />,
        placement,
        children: \`Уведомление показано! \${count.current}\`,
        onClose: () => {
          setSnackbars(oldState => {
            oldState.delete(id);
            return new Set([...oldState]);
          });
        }
      });
      count.current = count.current > 100 ? 0 : count.current + 1;
      setSnackbars(oldState => new Set([...oldState, id]));
    };
    const _onUpdate = () => {
      [...snackbars].forEach(snackbarId => {
        snackbarApi.update(snackbarId, {
          action: 'Обновлен',
          children: 'Текст и всякое другое'
        });
      });
    };
    return <>
        <Flex direction="column" gap="2xl">
          <Flex gap={3}>
            {COLUMNS.map(placements => <Flex direction="column" gap="xl" key={placements.join('_')}>
                {placements.map(placement => <Button key={placement} onClick={() => _onOpen(placement)}>
                    {placement}
                  </Button>)}
              </Flex>)}
          </Flex>
          <Checkbox checked={autoHide} onChange={() => setAutoHide(v => !v)}>
            Автоскрытие
          </Checkbox>
          <Button appearance="negative" stretched onClick={snackbarApi.closeAll}>
            Закрыть все
          </Button>
          <Button appearance="negative" stretched onClick={_onUpdate}>
            Обновить все
          </Button>
        </Flex>
        {contextHolder}
      </>;
  }
}`,...a.parameters?.docs?.source}}};const lt=["Playground"];export{a as Playground,lt as __namedExportsOrder,pt as default};
