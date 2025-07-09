'use client';

import React from 'react';
import { Icon16CopyOutline, Icon16DropdownOutline } from '@vkontakte/icons';
import {
  ActionSheet,
  ActionSheetItem,
  AdaptivityProvider,
  Button,
  Caption,
  Card,
  DisplayTitle,
  Flex,
  Footnote,
  Headline,
  Paragraph,
  SimpleGrid,
  type SizeType,
  Subhead,
  Text,
  Title,
  type TypographyProps,
} from '@vkontakte/vkui';
import { HeadingLink } from '@vkontakte/vkui-docs-theme';
import styles from './Typography.module.css';

type SizeYType = (typeof SizeType)[keyof typeof SizeType] | '';

const TypographyArray = [
  {
    title: 'DisplayTitle',
    Component: DisplayTitle,
    description: 'Используется для крупных заголовков.',
    level: ['1', '2', '3', '4'],
    caps: false,
  },
  {
    title: 'Title',
    Component: Title,
    description: 'Используется для заголовков.',
    level: ['1', '2', '3'],
    caps: false,
  },
  {
    title: 'Headline',
    Component: Headline,
    description: 'Используется для подзаголовков.',
    level: ['1', '2'],
    caps: false,
  },
  {
    title: 'Text',
    Component: Text,
    description: 'Используется для основного наборного текста.',
    level: undefined,
    caps: false,
  },
  {
    title: 'Paragraph',
    Component: Paragraph,
    description: 'Используется для основного текста.',
    level: undefined,
    caps: false,
  },
  {
    title: 'Subhead',
    Component: Subhead,
    description: 'Используется для подзаголовков второго уровня.',
    level: undefined,
    caps: false,
  },
  {
    title: 'Footnote',
    Component: Footnote,
    description: 'Используется для основных подписей.',
    level: undefined,
    caps: true,
  },
  {
    title: 'Caption',
    Component: Caption,
    description: 'Используется для мелких подписей.',
    level: ['1', '2', '3'],
    caps: true,
  },
] as const;

function toKebabCase(componentName: string) {
  return componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function TypographyCard({
  title,
  description,
  children,
  sizeY,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  sizeY: SizeYType;
}) {
  return (
    <Card className={styles.card} mode="shadow">
      <HeadingLink Tag="h3" noMargin id={toKebabCase(title)}>
        {title}
      </HeadingLink>
      <Headline level="2" weight="3">
        {description}
      </Headline>
      <AdaptivityProvider sizeY={sizeY || undefined}>
        <div className={styles.example}>{children}</div>
      </AdaptivityProvider>
    </Card>
  );
}

export function Typography() {
  const [weight, setWeight] = React.useState<TypographyProps['weight'] | undefined>(undefined);
  const [sizeY, setSizeY] = React.useState<SizeYType>('');
  const [popout, setPopout] = React.useState<React.ReactNode>(undefined);
  const weightTargetRef = React.useRef(null);
  const adaptivityTargetRef = React.useRef(null);

  function openWeightPopout() {
    setPopout(
      <ActionSheet onClose={() => setPopout(null)} toggleRef={weightTargetRef}>
        {['', '1', '2', '3'].map((item) => (
          <ActionSheetItem
            key={item}
            checked={weight === item}
            selectable
            value={item}
            // @ts-expect-error: TS234 Typings wrong
            onChange={(e) => setWeight(e.target.value)}
          >
            {item || 'Не выбрано'}
          </ActionSheetItem>
        ))}
      </ActionSheet>,
    );
  }

  function openAdaptivityPopout() {
    setPopout(
      <ActionSheet onClose={() => setPopout(null)} toggleRef={adaptivityTargetRef}>
        {['', 'regular', 'compact'].map((item) => (
          <ActionSheetItem
            key={item}
            checked={sizeY === item}
            selectable
            value={item}
            // @ts-expect-error: TS234 Lol
            onChange={(e) => setSizeY(e.target.value)}
          >
            {item || 'Не выбрано'}
          </ActionSheetItem>
        ))}
      </ActionSheet>,
    );
  }

  return (
    <>
      <Flex margin="auto" justify="center" gap="m">
        <Button
          after={<Icon16DropdownOutline />}
          appearance="neutral"
          mode="outline"
          getRootRef={weightTargetRef}
          onClick={openWeightPopout}
        >
          {`weight${weight ? ': ' + weight : ''}`}
        </Button>
        <Button
          after={<Icon16DropdownOutline />}
          appearance="neutral"
          mode="outline"
          getRootRef={adaptivityTargetRef}
          onClick={openAdaptivityPopout}
        >
          {`adaptivity${sizeY ? ': ' + sizeY : ''}`}
        </Button>
        {popout}
      </Flex>
      <SimpleGrid minColWidth={300} className={styles.root} gap="2xl">
        {TypographyArray.map(({ description, Component, title, level, caps }) => (
          <TypographyCard title={title} description={description} key={title} sizeY={sizeY}>
            {level ? (
              level.map((level) => (
                <React.Fragment key={level}>
                  {/* @ts-expect-error: TS234 Level typings */}
                  <Component level={level} weight={weight}>
                    {title} {level}
                  </Component>
                  {caps && (
                    // @ts-expect-error: TS234 Level typings
                    <Component level={level} weight={weight} caps>
                      {title} {level} caps{' '}
                      <Icon16CopyOutline
                        style={{
                          display: 'inline-block',
                          color: 'var(--vkui--color_icon_secondary)',
                        }}
                      />
                    </Component>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <Component weight={weight}>{title}</Component>
                {caps && (
                  <Component weight={weight} caps>
                    {title} caps{' '}
                    <Icon16CopyOutline
                      style={{
                        display: 'inline-block',
                        color: 'var(--vkui--color_icon_secondary)',
                      }}
                    />
                  </Component>
                )}
              </>
            )}
          </TypographyCard>
        ))}
      </SimpleGrid>
    </>
  );
}
