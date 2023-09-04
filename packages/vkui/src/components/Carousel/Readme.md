Компонент по функционалу схож с [Gallery](#!/Gallery), но дает возможность зацикливать прокрутку слайдов.

```jsx
const slideStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '72px',
};

const Slide = ({ children, width, backgroundColor }) => (
  <div style={{ ...slideStyle, width, backgroundColor }}>{children}</div>
);

const Example = () => {
  return (
    <View activePanel="gallery">
      <Panel nav="gallery">
        <PanelHeader>Примеры</PanelHeader>

        <Group header={<Header mode="secondary">Default</Header>}>
          <Carousel slideWidth="90%" style={{ height: 150 }} bullets="dark" showArrows>
            <Slide backgroundColor="var(--vkui--color_background_negative)">1</Slide>
            <Slide backgroundColor="var(--vkui--color_background_positive)">2</Slide>
            <Slide backgroundColor="var(--vkui--color_background_accent)">3</Slide>
            <Slide backgroundColor="var(--vkui--color_background_negative)">4</Slide>
            <Slide backgroundColor="var(--vkui--color_background_positive)">5</Slide>
          </Carousel>
        </Group>
        <Group header={<Header mode="secondary">Center mode</Header>}>
          <Carousel
            align="center"
            initialSlideIndex={1}
            slideWidth="60%"
            style={{ height: 150 }}
            bullets="dark"
            showArrows
          >
            <Slide backgroundColor="var(--vkui--color_background_negative)">1</Slide>
            <Slide backgroundColor="var(--vkui--color_background_positive)">2</Slide>
            <Slide backgroundColor="var(--vkui--color_background_accent)">3</Slide>
            <Slide backgroundColor="var(--vkui--color_icon_secondary)">4</Slide>
            <Slide backgroundColor="var(--vkui--color_background_positive)">5</Slide>
          </Carousel>
        </Group>
        <Group header={<Header mode="secondary">Custom width</Header>}>
          <Carousel bullets="dark" slideWidth="custom" style={{ height: 150 }} showArrows>
            <Slide width={320} backgroundColor="var(--vkui--color_background_negative)">
              1
            </Slide>
            <Slide width={300} backgroundColor="var(--vkui--color_background_positive)">
              2
            </Slide>
            <Slide width={220} backgroundColor="var(--vkui--color_background_accent)">
              3
            </Slide>
            <Slide width={500} backgroundColor="var(--vkui--color_icon_secondary)">
              4
            </Slide>
          </Carousel>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
