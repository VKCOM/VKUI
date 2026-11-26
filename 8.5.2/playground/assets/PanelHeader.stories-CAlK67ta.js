import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{d as i,t as a}from"./lib-C8oG2MKp.js";import{V as ee,Z as o,_n as s,dn as c,hn as l,n as u,tt as d}from"./dist-ffVrjb4g.js";import{f,n as p,p as m,t as h}from"./View-C3co4ox4.js";import{n as g,t as _}from"./usePlatform-y1UWuT6C.js";import{n as v,t as y}from"./PanelHeader-CkV9nDr2.js";import{At as te,Mt as ne}from"./iframe-kY6v1YfM.js";import{i as re,n as ie,t as b}from"./constants-BWBR8eWE.js";import{n as x,t as S}from"./createStoryParameters-D_aKMzVl.js";import{n as C,t as w}from"./VisuallyHidden-B8gDKlvD.js";import{n as T,t as E}from"./AdaptiveIconRenderer-CtHmJnNV.js";import{n as D,t as O}from"./Avatar-D5eC2z7e.js";import{n as k,t as A}from"./Div-ByfmwV1U.js";import{n as j,t as M}from"./Counter-QeQe1wgH.js";import{n as N,t as P}from"./PanelHeaderButton-CZzfWHSf.js";import{n as ae,t as F}from"./PanelHeaderBack-DVzCy1F2.js";import{n as I,t as L}from"./Search-Dq9WJNIf.js";import{n as R,t as z}from"./Tabs-C81MNPuX.js";import{n as B,t as V}from"./TabsItem-Dm575i02.js";import{n as H,t as U}from"./PanelHeaderClose-eh4vTRc3.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{W=e(n(),1),u(),a(),_(),te(),re(),x(),T(),D(),j(),k(),m(),ae(),N(),H(),I(),R(),B(),p(),C(),v(),G=r(),K={title:`Navigation/PanelHeader`,component:y,parameters:S(`PanelHeader`,b,ie),decorators:[ne],tags:[`Навигация`]},q=()=>(0,G.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(f,{id:`panel1`,children:[(0,G.jsx)(y,{before:(0,G.jsx)(U,{onClick:i}),after:(0,G.jsx)(O,{size:36}),children:`Стартовый экран`}),(0,G.jsx)(A,{children:`PanelHeader c before PanelHeaderClose и after Avatar`})]})}),J=()=>{let e=g();return(0,G.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(f,{id:`panel1`,children:[(0,G.jsx)(y,{before:(0,G.jsx)(F,{onClick:i,label:e===`vkcom`?`Назад`:void 0}),after:(0,G.jsxs)(P,{label:(0,G.jsxs)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,G.jsx)(w,{children:`Новых: `}),`21`]}),onClick:i,children:[(0,G.jsx)(w,{children:`Изображения`}),(0,G.jsx)(E,{IconCompact:c,IconRegular:o})]}),children:`Вторая панель`}),(0,G.jsx)(A,{children:`PanelHeader c before PanelHeaderBack и after PanelHeaderButton`})]})})},Y=()=>(0,G.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(f,{id:`panel1`,children:[(0,G.jsx)(y,{before:(0,G.jsx)(F,{onClick:i}),after:(0,G.jsxs)(W.Fragment,{children:[(0,G.jsxs)(P,{label:(0,G.jsxs)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,G.jsx)(w,{children:`Новых: `}),`3`]}),onClick:i,children:[(0,G.jsx)(w,{children:`Настройки`}),(0,G.jsx)(E,{IconCompact:s,IconRegular:ee})]}),(0,G.jsxs)(P,{label:(0,G.jsx)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`2`}),onClick:i,children:[(0,G.jsx)(w,{children:`Уведомления`}),(0,G.jsx)(E,{IconCompact:l,IconRegular:d})]})]}),children:`Две иконки`}),(0,G.jsx)(A,{children:`Несколько иконок`})]})}),X=()=>{let e=g();return(0,G.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(f,{id:`panel1`,children:[(0,G.jsx)(y,{before:e!==`vkcom`&&(0,G.jsx)(F,{onClick:i}),children:(0,G.jsx)(L,{})}),(0,G.jsx)(A,{children:`Search`})]})})},Z=()=>(0,G.jsx)(h,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(f,{id:`panel1`,children:[(0,G.jsx)(y,{before:(0,G.jsx)(F,{onClick:i}),children:(0,G.jsxs)(z,{children:[(0,G.jsx)(V,{selected:!0,children:`Новости`}),(0,G.jsx)(V,{children:`Интересное`})]})}),(0,G.jsx)(A,{children:`Tabs`})]})}),Q=[`Playground`,`PanelHeaderWithCounter`,`PanelHeaderWithMultipleIcons`,`PanelHeaderWithSearch`,`PanelHeaderWithTabs`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
        Стартовый экран
      </PanelHeader>
      <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
    </Panel>
  </View>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const platform = usePlatform();
  return <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderBack onClick={noop} label={platform === 'vkcom' ? 'Назад' : undefined} />} after={<PanelHeaderButton label={<Counter size="s" mode="primary" appearance="accent-red">
                  <VisuallyHidden>Новых: </VisuallyHidden>
                  21
                </Counter>} onClick={noop}>
              <VisuallyHidden>Изображения</VisuallyHidden>
              <AdaptiveIconRenderer IconCompact={Icon24PictureOutline} IconRegular={Icon28PictureOutline} />
            </PanelHeaderButton>}>
          Вторая панель
        </PanelHeader>
        <Div>PanelHeader c before PanelHeaderBack и after PanelHeaderButton</Div>
      </Panel>
    </View>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderBack onClick={noop} />} after={<React.Fragment>
            <PanelHeaderButton label={<Counter size="s" mode="primary" appearance="accent-red">
                  <VisuallyHidden>Новых: </VisuallyHidden>3
                </Counter>} onClick={noop}>
              <VisuallyHidden>Настройки</VisuallyHidden>
              <AdaptiveIconRenderer IconCompact={Icon24GearOutline} IconRegular={Icon28SettingsOutline} />
            </PanelHeaderButton>
            <PanelHeaderButton label={<Counter size="s" mode="primary" appearance="accent-red">
                  2
                </Counter>} onClick={noop}>
              <VisuallyHidden>Уведомления</VisuallyHidden>
              <AdaptiveIconRenderer IconCompact={Icon24NotificationOutline} IconRegular={Icon28Notifications} />
            </PanelHeaderButton>
          </React.Fragment>}>
        Две иконки
      </PanelHeader>
      <Div>Несколько иконок</Div>
    </Panel>
  </View>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const platform = usePlatform();
  return <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={platform !== 'vkcom' && <PanelHeaderBack onClick={noop} />}>
          <Search />
        </PanelHeader>
        <Div>Search</Div>
      </Panel>
    </View>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
        <Tabs>
          <TabsItem selected>Новости</TabsItem>
          <TabsItem>Интересное</TabsItem>
        </Tabs>
      </PanelHeader>
      <Div>Tabs</Div>
    </Panel>
  </View>`,...Z.parameters?.docs?.source}}}})))()}$();export{J as PanelHeaderWithCounter,Y as PanelHeaderWithMultipleIcons,X as PanelHeaderWithSearch,Z as PanelHeaderWithTabs,q as Playground,Q as __namedExportsOrder,K as default};