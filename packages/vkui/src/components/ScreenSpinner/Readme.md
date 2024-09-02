Компонент-обертка над [`Spinner`](#/Spinner). Используется в случаях, когда требуется заблокировать интерфейс до завершения асинхронного процесса.

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

<br/>
## Цифровая доступность (a11y)

Чтобы уведомить о выполнении асинхронного процесса пользователей скринридеров, проставьте на [`SplitLayout`](#/SplitLayout), в котором выполняется процесс, метки [`aria-busy`](https://doka.guide/a11y/aria-busy/) и [`aria-live`](https://doka.guide/a11y/aria-live/).

Чтобы заменить текст, который прочитает скринридер, передайте его в `children`. Он будет скрыт визуально, но останется доступным для ассистивных технологий. Если вы используете свойство `subtitle`, то передавать `children` не нужно, будет зачитан текст, переданный в `subtitle`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const [popout, setPopout] = useState(null);

const clearPopout = () => setPopout(null);

const setLoadingScreenSpinner = () => {
  setPopout(<ScreenSpinner state="loading" />);
  setTimeout(clearPopout, 3000);
};

const setDoneScreenSpinner = () => {
  setPopout(<ScreenSpinner state="loading" />);

  setTimeout(() => {
    setPopout(<ScreenSpinner state="done" subtitle="Вы подписались на сообщество" />);

    setTimeout(clearPopout, 1000);
  }, 2000);
};

const setDoneSubScreenSpinner = () => {
  setPopout(<ScreenSpinner state="loading" />);

  setTimeout(() => {
    setPopout(<ScreenSpinner state="done">Успешно</ScreenSpinner>);

    setTimeout(clearPopout, 1000);
  }, 2000);
};

const setErrorScreenSpinner = () => {
  setPopout(<ScreenSpinner state="loading" />);

  setTimeout(() => {
    setPopout(
      <ScreenSpinner state="error" subtitle="Очень большая ошибка">
        Произошла ошибка
      </ScreenSpinner>,
    );

    setTimeout(clearPopout, 1000);
  }, 2000);
};

const setCancelableScreenSpinner = () => {
  setPopout(<ScreenSpinner state="cancelable" mode="overlay" onClick={clearPopout} />);
};

<SplitLayout popout={popout} aria-live="polite" aria-busy={!!popout}>
  <SplitCol>
    <View activePanel="spinner">
      <Panel id="spinner">
        <PanelHeader>ScreenSpinner</PanelHeader>
        <Group>
          <CellButton onClick={setLoadingScreenSpinner}>Запустить долгий процесс</CellButton>
          <CellButton onClick={setDoneScreenSpinner}>Запустить успешный процесс</CellButton>
          <CellButton onClick={setDoneSubScreenSpinner}>Запустить успешный процесс sub</CellButton>
          <CellButton onClick={setErrorScreenSpinner}>Запустить процесс с ошибкой</CellButton>
          <CellButton onClick={setCancelableScreenSpinner}>Запустить отменяемый процесс</CellButton>
        </Group>
      </Panel>
    </View>
  </SplitCol>
</SplitLayout>;
```

## Подкомпоненты

```jsx { "props": { "layout": false, "iframe": false } }
<Flex margin="auto" gap="m" align="start">
  <ScreenSpinner.Container>
    <ScreenSpinner.Loader />
    <ScreenSpinner.SwapIcon />
  </ScreenSpinner.Container>
  <ScreenSpinner.Container state="cancelable">
    <ScreenSpinner.Loader />
    <ScreenSpinner.SwapIcon />
  </ScreenSpinner.Container>
</Flex>
```
