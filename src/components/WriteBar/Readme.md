Компонент для отрисовки поля ввода сообщения или комментария.

Для `before`, `inlineAfter` и `after` необходимо использовать одну или несколько `WriteBarIcon`.

Все остальные свойства кроме `className` прокидываются элементу `<textarea />`.

```jsx
import { useState, useEffect, useRef, Fragment } from "react";

const WriteBarExample = (props) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("Завтра в 7?");
  const [text4, setText4] = useState("Да.");

  const attachmentsCount = 5;
  const fixedLayoutInnerElRef = useRef();
  const [bottomPadding, setBottomPadding] = useState(0);
  const [isAttachmentsShown, setIsAttachmentsShown] = useState(false);
  const [text, setText] = useState("");

  const updateBottomPadding = () => {
    const el = fixedLayoutInnerElRef.current;
    if (el) {
      const height = el.offsetHeight;
      if (height !== bottomPadding) {
        setBottomPadding(height);
      }
    }
  };

  useEffect(() => {
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
            before={<WriteBarIcon mode="attach" />}
            after={
              <Fragment>
                <WriteBarIcon aria-label="Эмоджи и стикеры">
                  <Icon28SmileOutline />
                </WriteBarIcon>

                <WriteBarIcon aria-label="Записать видео-сообщение">
                  <Icon28CameraOutline />
                </WriteBarIcon>

                <WriteBarIcon aria-label="Записать голосовое сообщение">
                  <Icon28VoiceOutline />
                </WriteBarIcon>
              </Fragment>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            before={<WriteBarIcon mode="attach" />}
            inlineAfter={
              <Fragment>
                {text2.length === 0 && (
                  <WriteBarIcon aria-label="Открыть меню бота">
                    <Icon28KeyboardBotsOutline />
                  </WriteBarIcon>
                )}

                {text2.length > 0 && (
                  <WriteBarIcon aria-label="Эмоджи и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text2.length === 0 && (
                  <WriteBarIcon aria-label="Эмоджи и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}

                {text2.length === 0 && (
                  <WriteBarIcon aria-label="Записать голосовое сообщение">
                    <Icon28VoiceOutline />
                  </WriteBarIcon>
                )}

                {text2.length > 0 && <WriteBarIcon mode="send" />}
              </Fragment>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text3}
            onChange={(e) => setText3(e.target.value)}
            before={<WriteBarIcon mode="attach" />}
            inlineAfter={
              <Fragment>
                {text3.length > 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text3.length === 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}

                <WriteBarIcon mode="send" disabled={text3.length === 0} />
              </Fragment>
            }
            placeholder="Сообщение"
          />
        </Group>

        <Group>
          <WriteBar
            value={text4}
            onChange={(e) => setText4(e.target.value)}
            before={<WriteBarIcon mode="attach" />}
            inlineAfter={
              <Fragment>
                {text4.length > 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text4.length === 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">
                    <Icon28SmileOutline />
                  </WriteBarIcon>
                )}

                <WriteBarIcon mode="done" disabled={text4.length === 0} />
              </Fragment>
            }
            placeholder="Сообщение"
          />
        </Group>

        <div style={{ height: bottomPadding }} />

        <FixedLayout vertical="bottom">
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
                <Fragment>
                  {text.length > 0 && (
                    <WriteBarIcon aria-label="Смайлы и стикеры">
                      <Icon28SmileOutline />
                    </WriteBarIcon>
                  )}
                </Fragment>
              }
              after={
                <Fragment>
                  {text.length === 0 && (
                    <WriteBarIcon aria-label="Смайлы и стикеры">
                      <Icon28SmileOutline />
                    </WriteBarIcon>
                  )}

                  {text.length === 0 && (
                    <WriteBarIcon aria-label="Записать голосовое сообщение">
                      <Icon28VoiceOutline />
                    </WriteBarIcon>
                  )}

                  {text.length > 0 && <WriteBarIcon mode="send" />}
                </Fragment>
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
