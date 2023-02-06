Компонент для отрисовки поля ввода сообщения или комментария.

Для `before`, `inlineAfter` и `after` необходимо использовать одну или несколько `WriteBarIcon`.

Все остальные свойства кроме `className` прокидываются элементу `<textarea />`.

```jsx
import { useState, useEffect, useRef, Fragment } from 'react';
import { Icon28CameraOutline } from '@vkontakte/icons';

const IconRenderer = ({ IconCompact, IconRegular }) => {
  const { sizeY } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeY.compact && <IconCompact className={sizeY.compact.className} />}
      {sizeY.regular && <IconRegular className={sizeY.regular.className} />}
    </React.Fragment>
  );
};

const WriteBarExample = (props) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('Завтра в 7?');
  const [text4, setText4] = useState('Да.');

  const attachmentsCount = 5;
  const fixedLayoutInnerElRef = useRef();
  const [bottomPadding, setBottomPadding] = useState(0);
  const [isAttachmentsShown, setIsAttachmentsShown] = useState(false);
  const [text, setText] = useState('');
  const platform = usePlatform();

  const SmileOutlineIcon = (
    <IconRenderer
      IconCompact={platform === Platform.IOS ? Icon28SmileOutline : Icon24SmileOutline}
      IconRegular={Icon28SmileOutline}
    />
  );

  const CameraOutlineIcon = (
    <IconRenderer
      IconCompact={platform === Platform.IOS ? Icon28CameraOutline : Icon24CameraOutline}
      IconRegular={Icon28CameraOutline}
    />
  );

  const VoiceOutlineIcon = (
    <IconRenderer
      IconCompact={platform === Platform.IOS ? Icon28VoiceOutline : Icon24VoiceOutline}
      IconRegular={Icon28VoiceOutline}
    />
  );

  const KeyboardBotsOutlineIcon = (
    <IconRenderer
      IconCompact={
        platform === Platform.IOS ? Icon28KeyboardBotsOutline : Icon24KeyboardBotsOutline
      }
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
                <WriteBarIcon aria-label="Эмоджи и стикеры">{SmileOutlineIcon}</WriteBarIcon>

                <WriteBarIcon aria-label="Записать видео-сообщение">
                  {CameraOutlineIcon}
                </WriteBarIcon>

                <WriteBarIcon aria-label="Записать голосовое сообщение">
                  {VoiceOutlineIcon}
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
                    {KeyboardBotsOutlineIcon}
                  </WriteBarIcon>
                )}

                {text2.length > 0 && (
                  <WriteBarIcon aria-label="Эмоджи и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text2.length === 0 && (
                  <WriteBarIcon aria-label="Эмоджи и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                )}

                {text2.length === 0 && (
                  <WriteBarIcon aria-label="Записать голосовое сообщение">
                    {VoiceOutlineIcon}
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
                  <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text3.length === 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
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
                  <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                )}
              </Fragment>
            }
            after={
              <Fragment>
                {text4.length === 0 && (
                  <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
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
                    <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                  )}
                </Fragment>
              }
              after={
                <Fragment>
                  {text.length === 0 && (
                    <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
                  )}

                  {text.length === 0 && (
                    <WriteBarIcon aria-label="Записать голосовое сообщение">
                      {VoiceOutlineIcon}
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
