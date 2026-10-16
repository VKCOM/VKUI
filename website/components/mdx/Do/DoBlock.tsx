'use client';

import type * as React from 'react';
import { Icon12Cancel, Icon12Check, Icon12ErrorCircle } from '@vkontakte/icons';
import { Box, classNames, Flex, Paragraph } from '@vkontakte/vkui';
import styles from './DoBlock.module.css';

const modes = {
  positive: { Icon: Icon12Check, label: 'Рекомендуется', className: styles.positiveFooter },
  warning: { Icon: Icon12ErrorCircle, label: 'С осторожностью', className: styles.warningFooter },
  negative: { Icon: Icon12Cancel, label: 'Не рекомендуется', className: styles.negativeFooter },
};

type DoBlockProps = {
  children?: React.ReactNode | undefined;
  caption?: React.ReactNode | undefined;
  mode?: keyof typeof modes | undefined;
};

export function DoBlock({ children, caption, mode }: DoBlockProps) {
  const status = mode && modes[mode];

  return (
    <Box Component="figure" flexGrow={1} flexShrink={1} flexBasis={0}>
      <div className={styles.block}>
        <Flex align="center" justify="center" padding="m">
          {children}
        </Flex>
        {status && (
          <Flex
            gap="m"
            padding="m"
            align="center"
            className={classNames(styles.footer, status.className)}
          >
            <status.Icon />
            <Paragraph>{status.label}</Paragraph>
          </Flex>
        )}
      </div>
      {caption && (
        <Box Component="figcaption" margin="m">
          {caption}
        </Box>
      )}
    </Box>
  );
}
