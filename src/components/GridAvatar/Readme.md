Отображение нескольких аватаров в сетке от 1 до 4 элементов.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [badged, setIsBadged] = React.useState(false);
  const badge = badged ? (
    <GridAvatar.Badge>
      <Icon20GiftCircleFillRed width={16} height={16} />
    </GridAvatar.Badge>
  ) : undefined;

  return (
    <div>
      <div style={{ display: 'flex', padding: 12, gap: 8, flexFlow: 'row wrap' }}>
        <GridAvatar>{badge}</GridAvatar>
        <GridAvatar src={[getAvatarUrl('user_ji')]}>{badge}</GridAvatar>
        <GridAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]}>
          {badge}
        </GridAvatar>
        <GridAvatar
          src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]}
        >
          {badge}
        </GridAvatar>
        <GridAvatar
          src={[
            getAvatarUrl('user_ilyagrshn'),
            getAvatarUrl('user_tc'),
            getAvatarUrl('user_lihachyov'),
            getAvatarUrl('user_va'),
          ]}
        >
          {badge}
        </GridAvatar>
      </div>
      <FormItem top="badge">
        <Checkbox checked={Boolean(badge)} onChange={(e) => setIsBadged(e.target.checked)}>
          badge (example, Icon20GiftCircleFillRed)
        </Checkbox>
      </FormItem>
    </div>
  );
};

<Example />;
```
