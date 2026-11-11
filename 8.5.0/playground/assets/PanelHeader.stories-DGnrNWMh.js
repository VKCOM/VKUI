import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as ee}from"./jsx-runtime-MKhVqBIO.js";import{d as r,t as i}from"./lib-B_SeZ_qx.js";import{V as te,Z as ne,_n as a,dn as o,hn as s,n as c,tt as re}from"./dist-BnR0TT6p.js";import{f as l,n as ie,p as u,t as d}from"./View-DA1psdlr.js";import{n as f,t as p}from"./usePlatform-D1eZ4BET.js";import{n as m,t as h}from"./PanelHeader-CNdbHMTc.js";import{At as g,Mt as _}from"./iframe-A_Ww4uh-.js";import{n as ae,t as v}from"./VisuallyHidden-f9c5LJze.js";import{n as y,t as b}from"./AdaptiveIconRenderer-B4NtBX_7.js";import{n as x,t as S}from"./PanelHeaderButton-D2kMlNsp.js";import{n as C,t as w}from"./Avatar-DFFcusfM.js";import{n as T,t as E}from"./Search-CtYZWifu.js";import{n as D,t as O}from"./Tabs-DB94tDLb.js";import{n as k,t as A}from"./TabsItem-CQR4tLsq.js";import{n as j,t as M}from"./Counter-BhWPYAJC.js";import{n as N,t as P}from"./Div-BDOOj8VK.js";import{n as F,t as I}from"./PanelHeaderClose-BhNHnIuJ.js";import{n as L,t as R}from"./PanelHeaderBack-t5Kdra1Z.js";import{i as z,n as B,t as V}from"./constants-BWBR8eWE.js";import{n as H,t as U}from"./createStoryParameters-D_aKMzVl.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{W=e(n(),1),c(),i(),p(),g(),z(),H(),y(),C(),j(),N(),u(),L(),x(),F(),T(),D(),k(),ie(),ae(),m(),G=ee(),K={title:`Navigation/PanelHeader`,component:h,parameters:U(`PanelHeader`,V,B),decorators:[_],tags:[`Навигация`]},q=()=>(0,G.jsx)(d,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(l,{id:`panel1`,children:[(0,G.jsx)(h,{before:(0,G.jsx)(I,{onClick:r}),after:(0,G.jsx)(w,{size:36}),children:`Стартовый экран`}),(0,G.jsx)(P,{children:`PanelHeader c before PanelHeaderClose и after Avatar`})]})}),J=()=>{let e=f();return(0,G.jsx)(d,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(l,{id:`panel1`,children:[(0,G.jsx)(h,{before:(0,G.jsx)(R,{onClick:r,label:e===`vkcom`?`Назад`:void 0}),after:(0,G.jsxs)(S,{label:(0,G.jsxs)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,G.jsx)(v,{children:`Новых: `}),`21`]}),onClick:r,children:[(0,G.jsx)(v,{children:`Изображения`}),(0,G.jsx)(b,{IconCompact:o,IconRegular:ne})]}),children:`Вторая панель`}),(0,G.jsx)(P,{children:`PanelHeader c before PanelHeaderBack и after PanelHeaderButton`})]})})},Y=()=>(0,G.jsx)(d,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(l,{id:`panel1`,children:[(0,G.jsx)(h,{before:(0,G.jsx)(R,{onClick:r}),after:(0,G.jsxs)(W.Fragment,{children:[(0,G.jsxs)(S,{label:(0,G.jsxs)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,G.jsx)(v,{children:`Новых: `}),`3`]}),onClick:r,children:[(0,G.jsx)(v,{children:`Настройки`}),(0,G.jsx)(b,{IconCompact:a,IconRegular:te})]}),(0,G.jsxs)(S,{label:(0,G.jsx)(M,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`2`}),onClick:r,children:[(0,G.jsx)(v,{children:`Уведомления`}),(0,G.jsx)(b,{IconCompact:s,IconRegular:re})]})]}),children:`Две иконки`}),(0,G.jsx)(P,{children:`Несколько иконок`})]})}),X=()=>{let e=f();return(0,G.jsx)(d,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(l,{id:`panel1`,children:[(0,G.jsx)(h,{before:e!==`vkcom`&&(0,G.jsx)(R,{onClick:r}),children:(0,G.jsx)(E,{})}),(0,G.jsx)(P,{children:`Search`})]})})},Z=()=>(0,G.jsx)(d,{id:`main`,activePanel:`panel1`,children:(0,G.jsxs)(l,{id:`panel1`,children:[(0,G.jsx)(h,{before:(0,G.jsx)(R,{onClick:r}),children:(0,G.jsxs)(O,{children:[(0,G.jsx)(A,{selected:!0,children:`Новости`}),(0,G.jsx)(A,{children:`Интересное`})]})}),(0,G.jsx)(P,{children:`Tabs`})]})}),Q=[`Playground`,`PanelHeaderWithCounter`,`PanelHeaderWithMultipleIcons`,`PanelHeaderWithSearch`,`PanelHeaderWithTabs`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <View id="main" activePanel="panel1">
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