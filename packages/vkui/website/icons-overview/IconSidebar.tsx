import { useRef } from 'react';
import { Icon24DownloadOutline } from '@vkontakte/icons';
import { CopyFeedbackIcon } from './CopyFeedbackIcon';
import { useCopyFeedback } from './useCopyFeedback';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormItem,
  IconButton,
  Input,
  Separator,
  Spacing,
  Tappable,
  VisuallyHidden,
} from '../../src';
import { type IconData, getIconDisplayName, getIconSize } from './config';
import styles from './IconsOverview.module.css';

const getSVGString = (container: HTMLElement | null): string => {
  const svg = container?.querySelector('svg');
  if (!svg) {
    return '';
  }

  const cleanSVG = svg.cloneNode(true) as SVGElement;
  for (const element of [cleanSVG, ...cleanSVG.querySelectorAll('*')]) {
    for (const attribute of ['aria-hidden', 'display', 'class', 'style']) {
      element.removeAttribute(attribute);
    }
  }
  cleanSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  return cleanSVG.outerHTML;
};

export const IconSidebar = ({ icon }: { icon: IconData | undefined }) => {
  const previewRef = useRef<HTMLSpanElement>(null);
  const displayNameCopyFeedback = useCopyFeedback();
  const nameCopyFeedback = useCopyFeedback();
  const svgCopyFeedback = useCopyFeedback();
  const displayName = icon && getIconDisplayName(icon.name);
  const iconSize = icon && getIconSize(icon.name);
  const gridStep = iconSize && Number(iconSize) <= 40 ? `${100 / Number(iconSize)}%` : null;

  const copySVG = () => {
    const svg = getSVGString(previewRef.current);
    if (svg) {
      void svgCopyFeedback.copy(svg);
    }
  };

  const downloadSVG = () => {
    const svg = getSVGString(previewRef.current);
    if (!svg || !icon) {
      return;
    }

    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${icon.name}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside className={styles.sidebar}>
      <Box padding="system" className={styles.preview}>
        <span
          ref={previewRef}
          className={styles.previewIcon}
          style={{
            backgroundImage: gridStep ? undefined : 'none',
            backgroundSize: gridStep ? `${gridStep} ${gridStep}` : undefined,
          }}
        >
          {icon?.node}
        </span>
        {displayName && (
          <Flex align="center" gap="2xs" noWrap>
            <strong>{displayName}</strong>
            <Tappable
              Component="button"
              type="button"
              aria-label="Скопировать имя иконки"
              className={styles.copyNameButton}
              hoverMode="opacity"
              onClick={() => void displayNameCopyFeedback.copy(displayName)}
            >
              <CopyFeedbackIcon size={16} {...displayNameCopyFeedback} />
            </Tappable>
            <VisuallyHidden role="status">
              {displayNameCopyFeedback.copied && 'Имя иконки скопировано'}
            </VisuallyHidden>
          </Flex>
        )}
      </Box>
      <Separator />
      <Spacing size={4} />
      <FormItem top="Название компонента в React">
        <Input
          readOnly
          value={icon?.name}
          after={
            <IconButton
              label="Скопировать"
              hoverMode="opacity"
              onClick={() => icon && void nameCopyFeedback.copy(icon.name)}
            >
              <CopyFeedbackIcon size={16} {...nameCopyFeedback} />
            </IconButton>
          }
        />
      </FormItem>
      <div className={styles.flexStretch} />
      <Box padding="system">
        <ButtonGroup mode="vertical" stretched>
          <Button
            size="l"
            mode="secondary"
            before={<Icon24DownloadOutline />}
            stretched
            onClick={downloadSVG}
          >
            Скачать SVG
          </Button>
          <Button
            size="l"
            mode="secondary"
            before={<CopyFeedbackIcon size={24} {...svgCopyFeedback} />}
            stretched
            onClick={copySVG}
          >
            Скопировать SVG
          </Button>
        </ButtonGroup>
      </Box>
    </aside>
  );
};
