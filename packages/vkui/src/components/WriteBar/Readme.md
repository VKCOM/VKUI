Компонент для отрисовки поля ввода сообщения или комментария.

Для `before`, `inlineAfter` и `after` необходимо использовать одну или несколько `WriteBarIcon`.

Все остальные свойства кроме `className` прокидываются элементу `<textarea />`.

```jsx
const WriteBarExample = (props) => {
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('Завтра в 7?');
  const [text4, setText4] = React.useState('Да.');

  const attachmentsCount = 5;
  const fixedLayoutInnerElRef = React.useRef();
  const [bottomPadding, setBottomPadding] = React.useState(0);
  const [isAttachmentsShown, setIsAttachmentsShown] = React.useState(false);
  const [text, setText] = React.useState('');
  const platform = usePlatform();

  const SmileOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28SmileOutline : Icon24SmileOutline}
      IconRegular={Icon28SmileOutline}
    />
  );

  const CameraOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28CameraOutline : Icon24CameraOutline}
      IconRegular={Icon28CameraOutline}
    />
  );

  const VoiceOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28VoiceOutline : Icon24VoiceOutline}
      IconRegular={Icon28VoiceOutline}
    />
  );

  const KeyboardBotsOutlineIcon = (
    <AdaptiveIconRenderer
      IconCompact={platform === 'ios' ? Icon28KeyboardBotsOutline : Icon24KeyboardBotsOutline}
      IconRegular={Icon28KeyboardBotsOutline}
    />
  );

  const updateBottomPadding = () => {
    const el = fixedLayoutInnerElRef.current;
    if (el) {
      const height = el.offsetHeight;
      if (height !== bottomPadding) {
        setBottomPadding(height);
      }
    }
  };

  React.useEffect(() => {
    updateBottomPadding();
  }, [isAttachmentsShown]);

  return (
    <View activePanel="writebar">
      <Panel id="writebar">
        <PanelHeader>WriteBar</PanelHeader>

        <Group>
          <WriteBar
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            before={<WriteBarIcon onClick={noop} mode="attach" />}
            after={
              <>
                <WriteBarIcon onClick={noop} label="Эмоджи и стикеры">
                  {SmileOutlineIcon}
                </WriteBarIcon>

                <WriteBarIcon onClick={noop} label="Записать видео-сообщение">
                  {CameraOutlineIcon}
                </WriteBarIcon>

                <WriteBarIcon onClick={noop} label="Записать голосовое сообщение">
                  {VoiceOutlineIcon}
                </WriteBarIcon>
              </>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            before={<WriteBarIcon onClick={noop} mode="attach" />}
            inlineAfter={
              <>
                {text2.length === 0 && (
                  <WriteBarIcon onClick={noop} label="Открыть меню бота">
                    {KeyboardBotsOutlineIcon}
                  </WriteBarIcon>
                )}
                {text2.length > 0 && (
                  <WriteBarIcon onClick={noop} label="Эмоджи и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )}
              </>
            }
            after={
              <>
                {text2.length === 0 && (
                  <WriteBarIcon onClick={noop} label="Эмоджи и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )}
                {text2.length === 0 && (
                  <WriteBarIcon onClick={noop} label="Записать голосовое сообщение">
                    {VoiceOutlineIcon}
                  </WriteBarIcon>
                )}
                {text2.length > 0 && <WriteBarIcon onClick={noop} mode="send" />}
              </>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text3}
            onChange={(e) => setText3(e.target.value)}
            before={<WriteBarIcon onClick={noop} mode="attach" />}
            inlineAfter={
              text3.length > 0 && (
                <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                  {SmileOutlineIcon}
                </WriteBarIcon>
              )
            }
            after={
              <>
                {text3.length === 0 && (
                  <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )}
                <WriteBarIcon onClick={noop} mode="send" disabled={text3.length === 0} />
              </>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text4}
            onChange={(e) => setText4(e.target.value)}
            before={<WriteBarIcon onClick={noop} mode="attach" />}
            inlineAfter={
              text4.length > 0 && (
                <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                  {SmileOutlineIcon}
                </WriteBarIcon>
              )
            }
            after={
              <>
                {text4.length === 0 && (
                  <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )}
                <WriteBarIcon onClick={noop} mode="done" disabled={text4.length === 0} />
              </>
            }
            placeholder="Сообщение"
          />
        </Group>

        <div style={{ height: bottomPadding }} />

        <FixedLayout vertical="bottom" filled>
          <div ref={fixedLayoutInnerElRef}>
            <Separator wide />

            {isAttachmentsShown && (
              <div>
                <Div>Интерфейс прикрепления</Div>
                <Separator wide />
              </div>
            )}

            <WriteBar
              before={
                <WriteBarIcon
                  mode="attach"
                  onClick={() => setIsAttachmentsShown(!isAttachmentsShown)}
                  count={isAttachmentsShown ? null : attachmentsCount}
                />
              }
              inlineAfter={
                text.length > 0 && (
                  <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                    {SmileOutlineIcon}
                  </WriteBarIcon>
                )
              }
              after={
                <>
                  {text.length === 0 && (
                    <WriteBarIcon onClick={noop} label="Смайлы и стикеры">
                      {SmileOutlineIcon}
                    </WriteBarIcon>
                  )}
                  {text.length === 0 && (
                    <WriteBarIcon onClick={noop} label="Записать голосовое сообщение">
                      {VoiceOutlineIcon}
                    </WriteBarIcon>
                  )}
                  {text.length > 0 && <WriteBarIcon onClick={noop} mode="send" />}
                </>
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              onHeightChange={() => updateBottomPadding()}
              placeholder="Сообщение"
            />
          </div>
        </FixedLayout>
      </Panel>
    </View>
  );
};

<WriteBarExample />;
```
