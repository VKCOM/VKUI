'use client';

import { useState } from 'react';
import { Icon24ArrowUpOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { Button } from '../../../src';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';
import { useGlobalEventListener } from '../../../src/hooks/useGlobalEventListener';
import { useDOM } from '../../../src/lib/dom';
import styles from './OverviewLayout.module.css';

export const GoToUpButton = () => {
  const [visible, setVisible] = useState(false);
  const { scrollTo, getScroll } = useManualScroll();
  const { window } = useDOM();

  useGlobalEventListener(window, 'scroll', () => {
    setVisible(getScroll().y >= (window?.innerHeight || 0));
  });

  return (
    <div className={classNames(styles.upButton, !visible && styles.hidden)}>
      <Button
        borderRadiusMode="inherit"
        size="l"
        after={<Icon24ArrowUpOutline />}
        onMouseDown={() => scrollTo(0, 0)}
      />
    </div>
  );
};
