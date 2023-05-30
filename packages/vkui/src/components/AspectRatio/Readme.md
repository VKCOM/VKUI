```jsx { "props": { "layout": false, "iframe": false } }
const ASPECT_RATIO_LIST = [
  {
    title: '16/9',
    ratio: 16 / 9,
  },
  {
    title: '1/1',
    ratio: 1 / 1,
  },
  {
    title: '3/4',
    ratio: 3 / 4,
  },
];

const IMG_URL =
  'https://sun9-35.userapi.com/TH0O6TfKR2O5W8hjgSdzQzHvV_2TGRAXhLHuog/Js_f2L5EMYM.jpg';

const Example = () => {
  return (
    <Div>
      {ASPECT_RATIO_LIST.map((item) => (
        <>
          <Title level="2">Соотношение {item.title}</Title>
          <Spacing size={12} />
          <AspectRatio ratio={item.ratio}>
            <img loading="lazy" alt="Лаунж зона в розовом неоне" src={IMG_URL} />
          </AspectRatio>
          <Spacing size={20} />
        </>
      ))}
      <Spacing size={20} />
      <Title level="2">Соотношение 16/9 и mode=none</Title>
      <Spacing size={12} />
      <AspectRatio ratio={16 / 9} mode="none">
        <img height={'100%'} alt="Лаунж зона в розовом неоне" src={IMG_URL} />
      </AspectRatio>
    </Div>
  );
};

<Example />;
```
