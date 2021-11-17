Компонент для отображения текстовых аватаров на фоне градиента (например, когда у пользователя нет установленного изображения). Для лучшего отображения, рекомендуется использовать длину текста <b>не более 2 символов</b>. Внутри использует компонент [Avatar](#!/Avatar).<br />
ВКонтакте использует формулу `user_id % 6 + 1` для определения градиента пользователя. Например, у пользователя 106 будет 5 цвет градиента.

```jsx { "props": { "layout": false, "iframe": false } }
<>
  <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexFlow: 'row wrap' }}>
    {getRandomUsers(6).map((user) => (
      <InitialsAvatar gradientColor={user.id % 6 + 1}>{user.initials}</InitialsAvatar>
    ))}
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexFlow: 'column wrap' }}>
    {new Array(5).fill(null).map((_, i) => (
      <InitialsAvatar size={32 * i}>АБ</InitialsAvatar>
    ))}
  </div>
</>
```
