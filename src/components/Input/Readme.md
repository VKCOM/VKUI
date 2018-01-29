```jsx
  <View activePanel="panel" header>
    <ScrollView id="panel" header={{ title: 'Input' }}>
      <Group title="Simple inputs">
        <FormLayout allowSubmit={false}>
          <Input type="text" placeholder="Your login" />
          <Input type="password" placeholder="Your password" />
        </FormLayout>
      </Group>

      <Group title="Date and time">
        <FormLayout>
          <Input type="date" placeholder="1 янв. 2017 г." label="Date" />
          <Input type="datetime-local" placeholder="Very very long placeholder to test text-overflow: ellipsis" label="Local datetime" />
          <Input type="time" placeholder="Time" label="Time" />
          <Input type="month" placeholder="Month" label="Month" />
        </FormLayout>
      </Group>

      <Group title="Other">
        <FormLayout>
          <Input type="email" placeholder="E-mail" label="E-mail" />
          <Input type="url" placeholder="URL" label="URL" />
          <Input type="tel" placeholder="Phone" label="Phone" />
          <Input type="number" placeholder="Number" label="Number" />
        </FormLayout>
      </Group>
    </ScrollView>
  </View>
```
