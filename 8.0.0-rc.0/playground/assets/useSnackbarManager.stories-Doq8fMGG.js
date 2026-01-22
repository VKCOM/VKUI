import{j as e,r as s}from"./iframe-CJSxyW9U.js";import{B as i}from"./Button-BC2c2Xtj.js";import{C as f}from"./Checkbox-BRHZjX-B.js";import{F as p}from"./Flex-CGIDb59w.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{u as j}from"./useSnackbarManager-YtZ18exI.js";import{I as A}from"./thumbs_up_outline_24-C2l7tqtd.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-BlbUmBeW.js";import"./animationVisibilityDelay.module-BVDh3Yvf.js";import"./VisuallyHidden-BRZ1JlNp.js";import"./Tappable-B_lgqKnQ.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-C7Hv1Vzv.js";import"./useState-Cf9zElDT.js";import"./type_checkers-CVMjkZjG.js";import"./useFocusVisibleClassName-bZuS6K4d.js";import"./InputUtils-CQXgm4mM.js";import"./withLabelClickWrapper-BK2Yb5pM.js";import"./SelectionControl-BQ0Ovxq_.js";import"./Footnote-PeEhUyBm.js";import"./check_box_on_24-DgOwFitz.js";import"./SvgIconRootV2-Rdo9WxEa.js";import"./_object_spread_props-DRD4qu7p.js";import"./check_box_indetermanate_20-Dlp035xl.js";import"./gaps-DqOl4b8v.js";import"./useCSSKeyframesAnimationController-MRE4Ku0E.js";import"./Snackbar-K_1scHBD.js";import"./useConfigDirection-C3cHGESc.js";import"./useFocusWithin-B6ZQto83.js";import"./useGlobalEscKeyDown-Ctvb27ds.js";import"./Paragraph-Drw97mgp.js";import"./Subhead-B39S2HHi.js";import"./rubberbandIfOutOfBounds-CGRhXfJX.js";import"./v4-EwEgHOG0.js";const ie={title:"Utils/useSnackbarManager",component:()=>e.jsx("div",{}),parameters:{...C,...g},argTypes:{limit:{control:"number"},queueStrategy:{control:"radio",options:["queue","shift"]},offsetYStart:{control:"number"},offsetYEnd:{control:"number"}}},l=["top-start","bottom-start","top","bottom","top-end","bottom-end"],F=[l.slice(0,2),l.slice(2,4),l.slice(4)],a={render:function(d){const[c,b]=j(d),[x,u]=s.useState(new Set),[m,k]=s.useState(!0),n=s.useRef(0),h=t=>{const{id:o}=c.open({duration:m?void 0:null,before:e.jsx(A,{}),placement:t,children:`Уведомление показано! ${n.current}`,onClose:()=>{u(r=>(r.delete(o),new Set([...r])))}});n.current=n.current>100?0:n.current+1,u(r=>new Set([...r,o]))},S=()=>{[...x].forEach(t=>{c.update(t,{action:"Обновлен",children:"Текст и всякое другое"})})};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{direction:"column",gap:"2xl",children:[e.jsx(p,{gap:3,children:F.map(t=>e.jsx(p,{direction:"column",gap:"xl",children:t.map(o=>e.jsx(i,{onClick:()=>h(o),children:o},o))},t.join("_")))}),e.jsx(f,{checked:m,onChange:()=>k(t=>!t),children:"Автоскрытие"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:c.closeAll,children:"Закрыть все"}),e.jsx(i,{appearance:"negative",stretched:!0,onClick:S,children:"Обновить все"})]}),b]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const pe=["Playground"];export{a as Playground,pe as __namedExportsOrder,ie as default};
