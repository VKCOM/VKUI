import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./react-a45N5K9M.js";import{t as r}from"./jsx-runtime-BqsN2jGA.js";import{p as i,t as ee}from"./lib-DJkKow_A.js";import{V as te,Z as a,_n as o,dn as s,hn as c,n as l,tt as u}from"./dist-Ddx9HyIL.js";import{n as d,t as f}from"./usePlatform-BjjJ-ijZ.js";import{Ft as p,In as m,Ln as h,Nt as g,On as _,Pt as v,jt as ne,kn as re}from"./iframe-C58xLoyU.js";import{n as y,t as b}from"./VisuallyHidden-GaCP6QeD.js";import{n as x,t as S}from"./AdaptiveIconRenderer-D2j1-MBA.js";import{n as C,t as w}from"./PanelHeaderButton-BmpoxQSy.js";import{n as T,t as E}from"./Avatar-DXrci_k9.js";import{n as D,t as O}from"./Search-Gu-14LIW.js";import{n as k,t as A}from"./Tabs-DGwSr2YM.js";import{n as j,t as M}from"./TabsItem-BrOZnWMq.js";import{n as N,t as P}from"./Counter-kIq69qM_.js";import{n as ie,t as F}from"./Div-Cd0q8MDi.js";import{n as I,t as L}from"./PanelHeaderClose-CF355Izl.js";import{n as R,t as z}from"./PanelHeaderBack-Ccyfkavj.js";import{i as B,n as V,t as H}from"./constants-cjed6ZWB.js";import{n as U,t as W}from"./createStoryParameters-CMHckkzt.js";var G,K,q,J,Y,X,Z,Q,$;e((()=>{G=t(n(),1),l(),ee(),f(),ne(),B(),U(),x(),T(),N(),ie(),h(),R(),C(),I(),D(),k(),j(),p(),y(),re(),K=t(r(),1),q={title:`Navigation/PanelHeader`,component:_,parameters:W(`PanelHeader`,H,V),decorators:[g],tags:[`Навигация`]},J=()=>(0,K.jsx)(v,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(m,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(L,{onClick:i}),after:(0,K.jsx)(E,{size:36}),children:`Стартовый экран`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderClose и after Avatar`})]})}),Y=()=>(0,K.jsx)(v,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(m,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i,label:d()===`vkcom`?`Назад`:void 0}),after:(0,K.jsxs)(w,{label:(0,K.jsxs)(P,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(b,{children:`Новых: `}),`21`]}),onClick:i,children:[(0,K.jsx)(b,{children:`Изображения`}),(0,K.jsx)(S,{IconCompact:s,IconRegular:a})]}),children:`Вторая панель`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderBack и after PanelHeaderButton`})]})}),X=()=>(0,K.jsx)(v,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(m,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i}),after:(0,K.jsxs)(G.Fragment,{children:[(0,K.jsxs)(w,{label:(0,K.jsxs)(P,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(b,{children:`Новых: `}),`3`]}),onClick:i,children:[(0,K.jsx)(b,{children:`Настройки`}),(0,K.jsx)(S,{IconCompact:o,IconRegular:te})]}),(0,K.jsxs)(w,{label:(0,K.jsx)(P,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`2`}),onClick:i,children:[(0,K.jsx)(b,{children:`Уведомления`}),(0,K.jsx)(S,{IconCompact:c,IconRegular:u})]})]}),children:`Две иконки`}),(0,K.jsx)(F,{children:`Несколько иконок`})]})}),Z=()=>(0,K.jsx)(v,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(m,{id:`panel1`,children:[(0,K.jsx)(_,{before:d()!==`vkcom`&&(0,K.jsx)(z,{onClick:i}),children:(0,K.jsx)(O,{})}),(0,K.jsx)(F,{children:`Search`})]})}),Q=()=>(0,K.jsx)(v,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(m,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i}),children:(0,K.jsxs)(A,{children:[(0,K.jsx)(M,{selected:!0,children:`Новости`}),(0,K.jsx)(M,{children:`Интересное`})]})}),(0,K.jsx)(F,{children:`Tabs`})]})}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
        Стартовый экран
      </PanelHeader>
      <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
    </Panel>
  </View>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
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
  </View>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const platform = usePlatform();
  return <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={platform !== 'vkcom' && <PanelHeaderBack onClick={noop} />}>
          <Search />
        </PanelHeader>
        <Div>Search</Div>
      </Panel>
    </View>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
    <Panel id="panel1">
      <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
        <Tabs>
          <TabsItem selected>Новости</TabsItem>
          <TabsItem>Интересное</TabsItem>
        </Tabs>
      </PanelHeader>
      <Div>Tabs</Div>
    </Panel>
  </View>`,...Q.parameters?.docs?.source}}},$=[`Playground`,`PanelHeaderWithCounter`,`PanelHeaderWithMultipleIcons`,`PanelHeaderWithSearch`,`PanelHeaderWithTabs`]}))();export{Y as PanelHeaderWithCounter,X as PanelHeaderWithMultipleIcons,Z as PanelHeaderWithSearch,Q as PanelHeaderWithTabs,J as Playground,$ as __namedExportsOrder,q as default};