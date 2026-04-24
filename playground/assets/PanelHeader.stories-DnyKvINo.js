import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-B7sYxePN.js";import{s as i,t as a}from"./lib-BRrbp21U.js";import{D as ee,S as o,k as s,lt as c,n as l,st as te,ut as u}from"./dist-JE-Gteso.js";import{c as d,l as f,n as p,t as m}from"./View-VcM79w8r.js";import{n as h,t as g}from"./usePlatform-BWVnZ007.js";import{n as ne,t as _}from"./PanelHeader-BqxNg2Wv.js";import{r as re,t as ie}from"./VKUIDecorators-BYQp_QSp.js";import{n as v,t as y}from"./VisuallyHidden-CMBkULmz.js";import{n as b,t as x}from"./AdaptiveIconRenderer-BCsO7g31.js";import{n as S,t as C}from"./PanelHeaderButton-DJuEJWlD.js";import{n as w,t as T}from"./Avatar-B-XgDXIW.js";import{n as E,t as D}from"./Search-BbP0eoLz.js";import{n as O,t as k}from"./Tabs-BuZfob8b.js";import{n as A,t as j}from"./TabsItem-7TNiQqAi.js";import{n as M,t as N}from"./Counter-By-PeeB4.js";import{n as P,t as F}from"./Div-DkSA0ZW5.js";import{n as I,t as L}from"./PanelHeaderClose-Duo206JY.js";import{n as R,t as z}from"./PanelHeaderBack-Bsrc_h4O.js";import{i as B,n as V,t as H}from"./constants-Dj6vOzIh.js";import{n as U,t as W}from"./createStoryParameters-pz1UrWMe.js";var G,K,q,J,Y,X,Z,Q,$;t((()=>{G=e(n(),1),l(),a(),g(),ie(),B(),U(),b(),w(),M(),P(),f(),R(),S(),I(),E(),O(),A(),p(),v(),ne(),K=r(),q={title:`Navigation/PanelHeader`,component:_,parameters:W(`PanelHeader`,H,V),decorators:[re],tags:[`Навигация`]},J={render:()=>(0,K.jsx)(m,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(d,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(L,{onClick:i}),after:(0,K.jsx)(T,{size:36}),children:`Стартовый экран`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderClose и after Avatar`})]})})},Y={render:function(){return(0,K.jsx)(m,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(d,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i,label:h()===`vkcom`?`Назад`:void 0}),after:(0,K.jsxs)(C,{label:(0,K.jsxs)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(y,{children:`Новых: `}),`21`]}),onClick:i,children:[(0,K.jsx)(y,{children:`Изображения`}),(0,K.jsx)(x,{IconCompact:te,IconRegular:ee})]}),children:`Вторая панель`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderBack и after PanelHeaderButton`})]})})}},X={render:()=>(0,K.jsx)(m,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(d,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i}),after:(0,K.jsxs)(G.Fragment,{children:[(0,K.jsxs)(C,{label:(0,K.jsxs)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(y,{children:`Новых: `}),`3`]}),onClick:i,children:[(0,K.jsx)(y,{children:`Настройки`}),(0,K.jsx)(x,{IconCompact:u,IconRegular:o})]}),(0,K.jsxs)(C,{label:(0,K.jsx)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`2`}),onClick:i,children:[(0,K.jsx)(y,{children:`Уведомления`}),(0,K.jsx)(x,{IconCompact:c,IconRegular:s})]})]}),children:`Две иконки`}),(0,K.jsx)(F,{children:`Несколько иконок`})]})})},Z={render:function(){return(0,K.jsx)(m,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(d,{id:`panel1`,children:[(0,K.jsx)(_,{before:h()!==`vkcom`&&(0,K.jsx)(z,{onClick:i}),children:(0,K.jsx)(D,{})}),(0,K.jsx)(F,{children:`Search`})]})})}},Q={render:()=>(0,K.jsx)(m,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(d,{id:`panel1`,children:[(0,K.jsx)(_,{before:(0,K.jsx)(z,{onClick:i}),children:(0,K.jsxs)(k,{children:[(0,K.jsx)(j,{selected:!0,children:`Новости`}),(0,K.jsx)(j,{children:`Интересное`})]})}),(0,K.jsx)(F,{children:`Tabs`})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
          Стартовый экран
        </PanelHeader>
        <Div>PanelHeader c before PanelHeaderClose и after Avatar</Div>
      </Panel>
    </View>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <View id="main" activePanel="panel1">
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
    </View>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const platform = usePlatform();
    return <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader before={platform !== 'vkcom' && <PanelHeaderBack onClick={noop} />}>
            <Search />
          </PanelHeader>
          <Div>Search</Div>
        </Panel>
      </View>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <View id="main" activePanel="panel1">
      <Panel id="panel1">
        <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
          <Tabs>
            <TabsItem selected>Новости</TabsItem>
            <TabsItem>Интересное</TabsItem>
          </Tabs>
        </PanelHeader>
        <Div>Tabs</Div>
      </Panel>
    </View>
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`PanelHeaderWithCounter`,`PanelHeaderWithMultipleIcons`,`PanelHeaderWithSearch`,`PanelHeaderWithTabs`]}))();export{Y as PanelHeaderWithCounter,X as PanelHeaderWithMultipleIcons,Z as PanelHeaderWithSearch,Q as PanelHeaderWithTabs,J as Playground,$ as __namedExportsOrder,q as default};