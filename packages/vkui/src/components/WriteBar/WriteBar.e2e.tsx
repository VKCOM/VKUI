import * as React from 'react';
import {
  Icon24SmileOutline,
  Icon24VoiceOutline,
  Icon28SmileOutline,
  Icon28VoiceOutline,
} from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { WriteBarIcon } from '../WriteBarIcon/WriteBarIcon';
import { WriteBar, WriteBarProps } from './WriteBar';

const WriteBarTestComponent = ({ value, ...restProps }: WriteBarProps) => {
  const platform = usePlatform();

  const SmileOutlineIcon = (
    <AdaptiveIconRenderer
      key="smile-icon"
      IconCompact={platform === Platform.IOS ? Icon28SmileOutline : Icon24SmileOutline}
      IconRegular={Icon28SmileOutline}
    />
  );

  const VoiceOutlineIcon = (
    <AdaptiveIconRenderer
      key="smile-icon"
      IconCompact={platform === Platform.IOS ? Icon28VoiceOutline : Icon24VoiceOutline}
      IconRegular={Icon28VoiceOutline}
    />
  );

  const stringValue = String(value);

  return (
    <WriteBar
      before={<WriteBarIcon mode="attach" count={5} />}
      inlineAfter={
        stringValue.length > 0 && (
          <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
        )
      }
      after={
        <>
          {stringValue.length === 0 && (
            <WriteBarIcon aria-label="Смайлы и стикеры">{SmileOutlineIcon}</WriteBarIcon>
          )}
          {stringValue.length === 0 && (
            <WriteBarIcon aria-label="Записать голосовое сообщение">
              {VoiceOutlineIcon}
            </WriteBarIcon>
          )}
          {stringValue.length > 0 && <WriteBarIcon mode="send" />}
        </>
      }
      value={value}
      placeholder="Сообщение"
      {...restProps}
    />
  );
};

describe('WriteBar', () => {
  describeScreenshotFuzz(WriteBarTestComponent, [
    {
      value: ['', 'Сообщение'],
      shadow: [undefined, true],
    },
  ]);
});
