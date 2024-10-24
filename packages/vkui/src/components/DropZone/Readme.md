```jsx { "props": { "layout": false, "iframe": false } }
const Item = ({ active }) => (
  <Placeholder.Container>
    <Placeholder.Icon>
      <Icon56CameraOutline fill={active ? 'var(--vkui--color_icon_accent)' : undefined} />
    </Placeholder.Icon>
    <Placeholder.Title>Быстрая отправка</Placeholder.Title>
    <Placeholder.Description>
      Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
    </Placeholder.Description>
  </Placeholder.Container>
);

const dragOverHandler = (event) => {
  event.preventDefault();
};

const dropHandler = (event) => {
  event.preventDefault();

  console.table(event.dataTransfer.files);
};

<DropZone.Grid>
  <DropZone onDragOver={dragOverHandler} onDrop={dropHandler}>
    {({ active }) => <Item active={active} />}
  </DropZone>
</DropZone.Grid>;
```

<br>

## DropZone.Grid

Компонент `DropZone.Grid` предназначен для расположения `DropZone` по сетке

```jsx { "props": { "layout": false, "iframe": false } }
const Item = ({ active }) => (
  <Placeholder.Container>
    <Placeholder.Icon>
      <Icon56CameraOutline fill={active ? 'var(--vkui--color_icon_accent)' : undefined} />
    </Placeholder.Icon>
    <Placeholder.Title>Быстрая отправка</Placeholder.Title>
    <Placeholder.Description>
      Перенесите файл сюда для быстрой отправки. В таком случае изображения будут сжаты.
    </Placeholder.Description>
  </Placeholder.Container>
);

<DropZone.Grid direction="row">
  <DropZone>{({ active }) => <Item active={active} />}</DropZone>
  <DropZone>{({ active }) => <Item active={active} />}</DropZone>
  <DropZone>{({ active }) => <Item active={active} />}</DropZone>
  <DropZone>{({ active }) => <Item active={active} />}</DropZone>
</DropZone.Grid>;
```
