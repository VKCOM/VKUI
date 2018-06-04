```
  <View activePanel="entity">
    <Panel id="entity">
      <PanelHeader>
        Entity
      </PanelHeader>
      <Group title="Title and description">
        <Div>
          <Entity 
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" 
            size={48} 
            title="Karl Heinrich Marx" 
            description="London" 
          />
        </Div>  
      </Group>
      
      <Group title="Extra content">   
        <Div>     
          <Entity 
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" 
            size={64}
            title="Karl Heinrich Marx" 
            description="London" 
          >
            <Button appearance="vk-primary" wide={false} style={{ marginRight: 8 }}>Добавить</Button>
            <Button appearance="vk-secondary" wide={false}>Скрыть</Button>
          </Entity>
        </Div>  
      </Group>
      
       <Group title="No photo">
          <Div>
            <Entity
              size={72}
              title="Karl Heinrich Marx" 
              description="London" 
            />
          </Div>  
        </Group>
    </Panel>
  </View>
```
