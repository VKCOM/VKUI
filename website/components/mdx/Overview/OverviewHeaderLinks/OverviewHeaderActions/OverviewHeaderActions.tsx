import { Icon12Check, Icon12Stars, Icon20CopyOutline } from '@vkontakte/icons';
import { Box, ButtonGroup, Link, Popover } from '@vkontakte/vkui';
import { ActionLink } from './ActionLink/ActionLink';
import { CopyAction } from './CopyAction/CopyAction';
import {
  Icon20ChatGPT,
  Icon20Claude,
  Icon20ClaudeCode,
  Icon20Codex,
  Icon20Markdown,
  Icon20OpenCode,
} from './icons/AssistantIcons';
import { useCopyFeedback } from './useCopyFeedback';
import styles from './CopyFeedback.module.css';

const prefixQuestion = 'Используй эту страницу для моих вопросов:';

function createAssistantUrl(baseUrl: string, question: string) {
  const url = new URL(baseUrl);
  url.searchParams.set('q', question);
  return url.toString();
}

export function OverviewHeaderActions({ pageUrl, mdxUrl }: { pageUrl: string; mdxUrl: string }) {
  const question = `${prefixQuestion} ${pageUrl}`;
  const { copied, animationKey, copy } = useCopyFeedback();

  return (
    <Popover
      placement="bottom-end"
      trigger={['hover', 'focus']}
      content={
        <Box padding="s">
          <ButtonGroup mode="vertical" gap="none">
            <CopyAction label="Скопировать ссылку" text={pageUrl} Icon={Icon20CopyOutline} />
            <ActionLink label="Открыть как markdown" href={mdxUrl} Icon={Icon20Markdown} />
            <ActionLink
              label="Открыть в ChatGPT ↗"
              href={createAssistantUrl('https://chatgpt.com/', question)}
              Icon={Icon20ChatGPT}
              external
            />
            <ActionLink
              label="Открыть в Claude ↗"
              href={createAssistantUrl('https://claude.ai/new', question)}
              Icon={Icon20Claude}
              external
            />
            <CopyAction
              label="Скопировать Claude Code команду"
              text={`claude "${question}"`}
              Icon={Icon20ClaudeCode}
            />
            <CopyAction
              label="Скопировать Codex команду"
              text={`codex "${question}"`}
              Icon={Icon20Codex}
            />
            <CopyAction
              label="Скопировать OpenCode команду"
              text={`opencode run "${question}"`}
              Icon={Icon20OpenCode}
            />
          </ButtonGroup>
        </Box>
      }
    >
      <Link onClick={() => void copy(pageUrl)}>
        Скопировать ссылку&nbsp;
        <span
          key={animationKey}
          className={`${styles.icon} ${styles.smallIcon} ${copied ? styles.copied : ''}`}
        >
          <Icon12Stars className={styles.copyIcon} />
          <Icon12Check className={styles.doneIcon} />
        </span>
      </Link>
    </Popover>
  );
}
