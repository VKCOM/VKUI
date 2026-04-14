import{a as e,n as t}from"./chunk-BneVvdWh.js";import{$n as n,Ct as r,Fr as i,Ir as ee,J as te,Jn as a,Nr as o,On as s,St as c,_t as ne,a as l,co as u,i as d,n as f,no as p,o as m,ps as h,q as g,tr as re,vt as _,yo as ie}from"./iframe-lhb8_BzR.js";import{n as v,t as y}from"./VisuallyHidden-P7w-2R1F.js";import{n as b,t as x}from"./AdaptiveIconRenderer-8yBA3vpy.js";import{n as S,t as C}from"./PanelHeaderButton-CUKXwUO4.js";import{n as w,t as T}from"./Avatar--LLTvRd4.js";import{n as E,t as D}from"./Search-D68E6DZn.js";import{n as O,t as k}from"./Tabs-DG6loNvp.js";import{n as A,t as j}from"./TabsItem-S9vYR5uS.js";import{n as M,t as N}from"./Counter-bWdhXSyV.js";import{n as P,t as F}from"./Div-Cc9R1fc6.js";import{n as I,t as L}from"./PanelHeaderClose-C168DvAj.js";import{n as R,t as z}from"./PanelHeaderBack-1Tbr6x47.js";import{i as B,n as V,t as H}from"./constants-CXYaXe_q.js";import{n as U,t as W}from"./createStoryParameters-CbXzS3a6.js";var G,K,q,J,Y,X,Z,Q,$;t((()=>{G=e(h(),1),s(),p(),ne(),f(),B(),U(),b(),w(),M(),P(),r(),R(),S(),I(),E(),O(),A(),m(),v(),te(),K=ie(),q={title:`Navigation/PanelHeader`,component:g,parameters:W(`PanelHeader`,H,V),decorators:[d],tags:[`Навигация`]},J={render:()=>(0,K.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(c,{id:`panel1`,children:[(0,K.jsx)(g,{before:(0,K.jsx)(L,{onClick:u}),after:(0,K.jsx)(T,{size:36}),children:`Стартовый экран`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderClose и after Avatar`})]})})},Y={render:function(){return(0,K.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(c,{id:`panel1`,children:[(0,K.jsx)(g,{before:(0,K.jsx)(z,{onClick:u,label:_()===`vkcom`?`Назад`:void 0}),after:(0,K.jsxs)(C,{label:(0,K.jsxs)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(y,{children:`Новых: `}),`21`]}),onClick:u,children:[(0,K.jsx)(y,{children:`Изображения`}),(0,K.jsx)(x,{IconCompact:o,IconRegular:n})]}),children:`Вторая панель`}),(0,K.jsx)(F,{children:`PanelHeader c before PanelHeaderBack и after PanelHeaderButton`})]})})}},X={render:()=>(0,K.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(c,{id:`panel1`,children:[(0,K.jsx)(g,{before:(0,K.jsx)(z,{onClick:u}),after:(0,K.jsxs)(G.Fragment,{children:[(0,K.jsxs)(C,{label:(0,K.jsxs)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:[(0,K.jsx)(y,{children:`Новых: `}),`3`]}),onClick:u,children:[(0,K.jsx)(y,{children:`Настройки`}),(0,K.jsx)(x,{IconCompact:ee,IconRegular:a})]}),(0,K.jsxs)(C,{label:(0,K.jsx)(N,{size:`s`,mode:`primary`,appearance:`accent-red`,children:`2`}),onClick:u,children:[(0,K.jsx)(y,{children:`Уведомления`}),(0,K.jsx)(x,{IconCompact:i,IconRegular:re})]})]}),children:`Две иконки`}),(0,K.jsx)(F,{children:`Несколько иконок`})]})})},Z={render:function(){return(0,K.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(c,{id:`panel1`,children:[(0,K.jsx)(g,{before:_()!==`vkcom`&&(0,K.jsx)(z,{onClick:u}),children:(0,K.jsx)(D,{})}),(0,K.jsx)(F,{children:`Search`})]})})}},Q={render:()=>(0,K.jsx)(l,{id:`main`,activePanel:`panel1`,children:(0,K.jsxs)(c,{id:`panel1`,children:[(0,K.jsx)(g,{before:(0,K.jsx)(z,{onClick:u}),children:(0,K.jsxs)(k,{children:[(0,K.jsx)(j,{selected:!0,children:`Новости`}),(0,K.jsx)(j,{children:`Интересное`})]})}),(0,K.jsx)(F,{children:`Tabs`})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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