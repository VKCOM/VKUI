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

const dragOverHandler = (event) => {
  event.preventDefault();
};

const dropHandler = (event) => {
  event.preventDefault();

  console.table(event.dataTransfer.files);
};

<Uploader.Grid>
  <Uploader onDragOver={dragOverHandler} onDrop={dropHandler}>
    {({ active }) => <Item active={active} />}
  </Uploader>
</Uploader.Grid>;
```

<br>

## Uploader.Grid

Компонент `Uploader.Grid` предназначен для расположения `Uploader` по сетке

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
