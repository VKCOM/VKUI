## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- Для обозначения того, за что отвечает ползунок, следует передать либо `aria-label`, либо `aria-labelledby`.
- По умолчанию скринридер будет читать значение, которое передаётся в `value`/`defaultValue`. Чтобы
  повлиять на это, используйте `aria-valuetext` или `getAriaValueText`. Первый параметр полезен для
  контролируемого компонента, а второй для неконтролируемого.

```jsx
const options = () => {
  let options = [];
  for (let i = 0; i <= 10; i += 2) {
    options.push({ value: `${i / 10}`, label: `${i / 10}` });
  }
  return options;
};

const Example = () => {
  const [valueBasic, setValueBasic] = useState(24.4234);
  const [valueDisabled, setValueDisabled] = useState(15);
  const [valueStep, setValueStep] = useState(0.2);

  return (
    <View activePanel="slider">
      <Panel id="slider">
        <PanelHeader>Slider</PanelHeader>
        <Group>
          <FormItem top={<span id="basic">Basic example</span>}>
            <Slider value={Number(valueBasic)} aria-labelledby="basic" onChange={setValueBasic} />
          </FormItem>
          <FormItem>
            <Input
              type="number"
              value={String(valueBasic)}
              onChange={(e) => setValueBasic(e.target.value)}
            />
          </FormItem>
          <FormItem top={<span id="disabled">Disabled</span>}>
            <Slider
              disabled
              defaultValue={valueDisabled}
              aria-labelledby="disabled"
              onChange={setValueDisabled}
            />
          </FormItem>
          <FormItem
            top={
              <span>
                <span id="with-step">With step prop</span> (step={0.2} min={0} max={1})
              </span>
            }
          >
            <Slider
              step={0.2}
              min={0}
              max={1}
              value={Number(valueStep)}
              aria-labelledby="with-step"
              onChange={setValueStep}
            />
          </FormItem>
          <FormItem>
            <Select
              value={String(valueStep)}
              options={options()}
              onChange={(e) => setValueStep(e.target.value)}
            />
          </FormItem>
          <FormItem top={<span id="uncontrolled">Uncontrolled</span>}>
            <Slider defaultValue={20} aria-labelledby="uncontrolled" />
          </FormItem>
          <FormItem top="Multiple">
            <Slider
              multiple
              step={1}
              defaultValue={[20, 80]}
              getAriaValueText={(value, index) =>
                index === 0 ? `Start thumb is ${value}` : `End thumb is ${value}`
              }
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

### FAQ

#### Как мне сделать обёртку над компонентом?

Параметры компонента описаны как Union тип. Конкретный тип определяется за счёт
параметра `multiple`. По умолчанию используется `SliderProps`, а при передаче `multiple={true}` тип
переключается на `SliderMultipleProps`.

Ниже приведен пример обёртки с сохранением Union типов:

```jsx static
import { type SliderProps, type SliderMultipleProps, Slider as VKUISlider } from './Slider';

// Допустим, нам нужно:
// - перебить значения по умолчанию у min/max
// - перебить значения по умолчанию у defaultValue
// - добавить другие метаданные
const Slider = ({ min = 10, max = 50, ...props }: SliderProps | SliderMultipleProps) => {
  // Чтобы Typescript правильно выкупил типы, нужно проверять multiple через контекст
  if (props.multiple) {
    const { defaultValue = [50, 50], ...restProps } = props;
    return <SliderBase defaultValue={defaultValue} min={min} max={max} {...restProps} />;
  }

  const { defaultValue = 50, ...restProps } = props;
  return <SliderBase defaultValue={defaultValue} min={min} max={max} {...restProps} />;
};
```

Тот же пример, что выше, но разделенный на два отдельных компонента:

```jsx static
import { type SliderProps, type SliderMultipleProps, Slider as VKUISlider } from './Slider';

const Slider = ({
  min = 10,
  max = 50,
  defaultValue = 50,
  ...restProps
}: Omit<SliderProps, 'multiple'>) => {
  return <SliderBase defaultValue={defaultValue} min={min} max={max} {...restProps} />;
};

const SliderWithMultipleThumbs = ({
  min = 10,
  max = 50,
  defaultValue = [50, 50],
  ...restProps
}: Omit<SliderMultipleProps, 'multiple'>) => {
  return <SliderBase defaultValue={defaultValue} min={min} max={max} {...restProps} multiple />;
};
```
