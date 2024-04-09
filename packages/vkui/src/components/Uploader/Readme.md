```jsx { "props": { "layout": false, "iframe": false } }
<Uploader.Grid>
  <Uploader>
    <Placeholder.Container>
      <Placeholder.Icon>
        <Icon56CameraOutline />
      </Placeholder.Icon>
      <Placeholder.Header>Быстрая отправка</Placeholder.Header>
      <Placeholder.Text>
        Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
      </Placeholder.Text>
    </Placeholder.Container>
  </Uploader>
</Uploader.Grid>
```

## Uploader.Grid

```jsx { "props": { "layout": false, "iframe": false } }
const Item = () => (
  <Placeholder.Container>
    <Placeholder.Icon>
      <Icon56CameraOutline />
    </Placeholder.Icon>
    <Placeholder.Header>Быстрая отправка</Placeholder.Header>
    <Placeholder.Text>
      Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
    </Placeholder.Text>
  </Placeholder.Container>
);

<Uploader.Grid direction="row">
  <Uploader>
    <Item />
  </Uploader>
  <Uploader>
    <Item />
  </Uploader>
  <Uploader>
    <Item />
  </Uploader>
  <Uploader>
    <Item />
  </Uploader>
</Uploader.Grid>;
```
