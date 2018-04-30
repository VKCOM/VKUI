```
  <View header activePanel="entity">
    <Panel
      id="entity"
      header={{ title: 'Entity' }}
    >
      <Group title="Title and description">
        <Pane>
          <Entity 
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" 
            size={48} 
            title="Karl Heinrich Marx" 
            description="London" 
          />
        </Pane>  
      </Group>
      
      <Group title="Extra content">   
        <Pane>     
          <Entity 
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" 
            size={64}
            title="Karl Heinrich Marx" 
            description="London" 
          >
            <Flex>
              <Button appearance="vk-primary" wide={false}>Добавить</Button>
              <Button appearance="vk-secondary" wide={false}>Скрыть</Button>
            </Flex>
          </Entity>
        </Pane>  
      </Group>
      
       <Group title="No photo">
          <Pane>
            <Entity
              size={72}
              title="Karl Heinrich Marx" 
              description="London" 
            />
          </Pane>  
        </Group>
    </Panel>
  </View>
```
