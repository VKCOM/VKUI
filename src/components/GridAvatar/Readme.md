Отображение нескольких аватаров в сетке от 1 до 4 элементов. Внутри использует компонент [Avatar](#!/Avatar).


```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexFlow: 'row wrap' }}>
  <GridAvatar />
  <GridAvatar src={[getAvatarUrl('user_ji')]} />
  <GridAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]} />
  <GridAvatar src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]} />
  <GridAvatar src={[getAvatarUrl('user_ilyagrshn'), getAvatarUrl('user_tc'), getAvatarUrl('user_lihachyov'), getAvatarUrl('user_va')]} />
</div>
```
