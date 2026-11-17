import { Icon20CopyOutline } from '@vkontakte/icons';
import { Box, ButtonGroup } from '@vkontakte/vkui';
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

const prefixQuestion = 'Используй эту страницу для моих вопросов:';

function createAssistantUrl(baseUrl: string, question: string) {
  const url = new URL(baseUrl);
  url.searchParams.set('q', question);
  return url.toString();
}

export function AssistantMenu({ pageUrl, mdxUrl }: { pageUrl: string; mdxUrl: string }) {
  const question = `${prefixQuestion} ${pageUrl}`;
  return (
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
  );
}
