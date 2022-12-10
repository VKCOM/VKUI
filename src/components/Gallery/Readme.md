```jsx
const [slideIndex, setSlideIndex] = useState(0);
const [isDraggable, setIsDraggable] = useState(true);
const [showArrows, setShowArrows] = useState(true);

<View activePanel="gallery">
  <Panel nav="gallery">
    <PanelHeader>Gallery</PanelHeader>
    <Group header={<Header mode="secondary">Sticks right</Header>}>
      <Gallery slideWidth="90%" bullets="dark">
        <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
        <img src="https://picsum.photos/1024/640" style={{ display: 'block' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
      </Gallery>
    </Group>
    <Group header={<Header mode="secondary">Sticks left</Header>}>
      <Gallery slideWidth="90%" align="right">
        <div
          style={{
            height: 150,
            backgroundColor: 'var(--vkui--color_background_negative)',
          }}
        />
        <div style={{ backgroundColor: 'var(--vkui--color_background_positive)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
      </Gallery>
    </Group>
    <Group header={<Header mode="secondary">Centered</Header>}>
      <Gallery slideWidth="90%" align="center">
        <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_positive)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
      </Gallery>
    </Group>
    <Group header={<Header mode="secondary">Custom width</Header>}>
      <Gallery slideWidth="custom" style={{ height: 150 }}>
        <div
          style={{
            width: 200,
            backgroundColor: 'var(--vkui--color_background_negative)',
          }}
        />
        <div
          style={{
            width: 120,
            backgroundColor: 'var(--vkui--color_background_positive)',
          }}
        />
        <div
          style={{
            width: 70,
            backgroundColor: 'var(--vkui--color_background_accent)',
          }}
        />
        <div
          style={{
            width: 220,
            backgroundColor: 'var(--vkui--color_icon_secondary)',
          }}
        />
      </Gallery>
    </Group>
    <Group header={<Header mode="secondary">Arrows</Header>}>
      <Gallery slideWidth="90%" style={{ height: 150 }} bullets="dark" showArrows>
        <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_positive)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
      </Gallery>
    </Group>
    <Group header={<Header mode="secondary">Controlled</Header>}>
      <Gallery
        slideWidth="90%"
        align="center"
        style={{ height: 150 }}
        slideIndex={slideIndex}
        onChange={setSlideIndex}
        isDraggable={isDraggable}
        showArrows={showArrows}
      >
        <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_positive)' }} />
        <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
      </Gallery>

      <FormItem>
        <Checkbox checked={isDraggable} onChange={(e) => setIsDraggable(e.target.checked)}>
          isDraggable
        </Checkbox>
        <Checkbox checked={showArrows} onChange={(e) => setShowArrows(e.target.checked)}>
          showArrows
        </Checkbox>
      </FormItem>
      <FormItem>
        <Button size="l" stretched onClick={() => setSlideIndex((slideIndex + 1) % 3)}>
          Next slide
        </Button>
      </FormItem>
    </Group>
  </Panel>
</View>;
```
