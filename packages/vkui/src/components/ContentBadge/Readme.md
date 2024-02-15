```jsx { "props": { "layout": false, "adaptivity": true } }
const appearance = 'accent'; // 'accent' | 'neutral' | 'accent-green' | 'accent-red' | 'overlay'
const mode = 'primary'; // 'primary' | 'secondary' | 'outline'
const capsule = false;

const Stand = ({ size }) =>
  size === 's' ? (
    <ContentBadge size={size} appearance={appearance} mode={mode} capsule={capsule}>
      Badge
    </ContentBadge>
  ) : (
    <>
      <ContentBadge size={size} appearance={appearance} mode={mode} capsule={capsule}>
        Badge
      </ContentBadge>

      <ContentBadge size={size} appearance={appearance} mode={mode} capsule={capsule}>
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon16Services /> : <Icon12Services />}
        </ContentBadge.SlotIcon>
        Badge
      </ContentBadge>

      <ContentBadge size={size} appearance={appearance} mode={mode} capsule={capsule}>
        Badge
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon16Services /> : <Icon12Services />}
        </ContentBadge.SlotIcon>
      </ContentBadge>

      <ContentBadge size={size} appearance={appearance} mode={mode} capsule={capsule}>
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon16Services /> : <Icon12Services />}
        </ContentBadge.SlotIcon>
        Badge
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon16Services /> : <Icon12Services />}
        </ContentBadge.SlotIcon>
      </ContentBadge>

      <ContentBadge size={size} appearance={appearance} mode={mode} capsule>
        <ContentBadge.SlotIcon>
          {size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.SlotIcon>
      </ContentBadge>
    </>
  );

const Container = ({ children }) => (
  <Group
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      outline: '1px dashed',
      padding: 24,
    }}
  >
    {children}
  </Group>
);

const Playground = () => {
  return (
    <div style={{ padding: 16 }}>
      <Container>
        <Stand size="s" />
      </Container>

      <Container>
        <Stand size="m" />
      </Container>

      <Container>
        <Stand size="l" />
      </Container>
    </div>
  );
};

<Playground />;
```
