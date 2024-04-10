import * as React from 'react';
// import MarkedCorrect from '@site/static/img/components/input/marked-correct.png';
// import MarkedWrong from '@site/static/img/components/input/marked-wrong.png';
// import ThemedImage from '@theme/ThemedImage';
import { Icon24CancelCircleFillRed, Icon24CheckCircleFillGreen } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import styles from './UseCases.module.css';

export interface UseCasesProps {
  children: React.ReactNode;
  sources: {
    correctLightUrl: string;
    correctDarkUrl: string;
    wrongLightUrl: string;
    wrongDarkUrl: string;
  };
}

function UseCasesCorrect({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.item}>
      <span className={classNames(styles.heading, styles.good)}>
        <Icon24CheckCircleFillGreen /> Правильно
      </span>
      {/* <ThemedImage
        sources={{
          light: MarkedCorrect,
          dark: MarkedCorrect,
        }}
      />
      Текстовое поле чётко выделено */}
      {children}
    </div>
  );
}

function UseCasesWrong({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.item}>
      <span className={classNames(styles.heading, styles.bad)}>
        <Icon24CancelCircleFillRed /> Неправильно
      </span>
      {/* <ThemedImage
        sources={{
          light: MarkedWrong,
          dark: MarkedWrong,
        }}
      />
      Текстовое поле слишком ярко выделено */}
      {children}
    </div>
  );
}

export function UseCases({ children }: UseCasesProps) {
  return <div className={styles.host}>{children}</div>;
}

UseCases.Correct = UseCasesCorrect;
UseCases.Wrong = UseCasesWrong;
