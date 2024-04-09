```jsx { "props": { "layout": false, "iframe": false } }
const Item = ({ active }) => (
  <Placeholder.Container>
    <Placeholder.Icon>
      <Icon56CameraOutline fill={active ? 'var(--vkui--color_icon_accent)' : undefined} />
    </Placeholder.Icon>
    <Placeholder.Header>Быстрая отправка</Placeholder.Header>
    <Placeholder.Text>
      Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
    </Placeholder.Text>
  </Placeholder.Container>
);

<Uploader.Grid>
  <Uploader>{({ active }) => <Item active={active} />}</Uploader>
</Uploader.Grid>;
```

## Uploader.Grid

```jsx { "props": { "layout": false, "iframe": false } }
const Item = ({ active }) => (
  <Placeholder.Container>
    <Placeholder.Icon>
      <Icon56CameraOutline fill={active ? 'var(--vkui--color_icon_accent)' : undefined} />
    </Placeholder.Icon>
    <Placeholder.Header>Быстрая отправка</Placeholder.Header>
    <Placeholder.Text>
      Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
    </Placeholder.Text>
  </Placeholder.Container>
);

<Uploader.Grid direction="row">
  <Uploader>{({ active }) => <Item active={active} />}</Uploader>
  <Uploader>{({ active }) => <Item active={active} />}</Uploader>
  <Uploader>{({ active }) => <Item active={active} />}</Uploader>
  <Uploader>{({ active }) => <Item active={active} />}</Uploader>
</Uploader.Grid>;
```
