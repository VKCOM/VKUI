Отображение нескольких аватаров в сетке от 1 до 4 элементов.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: "flex", padding: 12, gap: 8, flexFlow: "row wrap" }}>
  <GridAvatar />
  <GridAvatar src={[getAvatarUrl("user_ji")]} />
  <GridAvatar src={[getAvatarUrl("user_wayshev"), getAvatarUrl("user_mm")]} />
  <GridAvatar
    src={[
      getAvatarUrl("user_arthurstam"),
      getAvatarUrl("user_xyz"),
      getAvatarUrl("user_ox"),
    ]}
  />
  <GridAvatar
    src={[
      getAvatarUrl("user_ilyagrshn"),
      getAvatarUrl("user_tc"),
      getAvatarUrl("user_lihachyov"),
      getAvatarUrl("user_va"),
    ]}
  />
</div>
```
