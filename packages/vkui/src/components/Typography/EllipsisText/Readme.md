```jsx { "props": { "layout": false, "iframe": false } }
<Div style={{ width: 200 }}>
  <EllipsisText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </EllipsisText>
</Div>
```

## Известные ограничения

Для работоспособности компонента необходимо, чтобы у ближайшего родителя была ограничена ширина. Если это не так, то необходимо ограничить ширину вручную.

Рассмотрим на примере [HorizontalCell](#/HorizontalCell), который при `size="auto"` перестаёт ограничивать ширину:

```jsx { "props": { "layout": false, "iframe": false } }
<HorizontalCell
  size="auto"
  title={
    <EllipsisText maxWidth={100} maxLines={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </EllipsisText>
  }
>
  <Image
    size={100}
    borderRadius="l"
    src="https://sun9-24.userapi.com/c639120/v639120173/3fe6f/tgPr7lecAY4.jpg"
  />
</HorizontalCell>
```

Здесь мы ориентируемся на ширину изображения.
