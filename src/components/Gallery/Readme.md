```
  <View header activePanel="gallery">
    <ScrollView
      id="gallery"
      header={{ title: 'Gallery' }}
    >
      <Group title="Sticks right">
        <Gallery
          slideWidth="90%"
          style={{ height: 150 }}
        >
          <div style={{ height: 150, backgroundColor: colors.red }} />
          <div style={{ height: 150, backgroundColor: colors.green }} />
          <div style={{ height: 150, backgroundColor: colors.blue }} />
        </Gallery>
      </Group>
      <Group title="Sticks left">
        <Gallery
          slideWidth="90%"
          align="right"
          style={{ height: 150 }}
        >
          <div style={{ height: 150, backgroundColor: colors.green }} />
          <div style={{ height: 150, backgroundColor: colors.blue }} />
          <div style={{ height: 150, backgroundColor: colors.red }} />
        </Gallery>
      </Group>
      <Group title="Centered">
        <Gallery
          slideWidth="90%"
          align="center"
          style={{ height: 150 }}
        >
          <div style={{ height: 150, backgroundColor: colors.blue }} />
          <div style={{ height: 150, backgroundColor: colors.red }} />
          <div style={{ height: 150, backgroundColor: colors.green }} />
        </Gallery>
      </Group>
    </ScrollView>
  </View>
```
