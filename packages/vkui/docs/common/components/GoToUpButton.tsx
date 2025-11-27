'use client';

import { useMemo, useState, useEffect } from 'react';
import { Icon24ArrowUpOutline } from '@vkontakte/icons';
import { classNames, throttle } from '@vkontakte/vkjs';
import { Button } from '../../../src';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';
import { useDOM } from '../../../src/lib/dom';
import styles from './OverviewLayout.module.css';

export const GoToUpButton = () => {
  const [visible, setVisible] = useState(false);
  const { scrollTo, getScroll } = useManualScroll();
  const { window } = useDOM();

  const updateVisibility = useMemo(
    () => throttle(() => setVisible(getScroll().y >= (window?.innerHeight || 0)), 1000),
    [getScroll, window],
  );

  useEffect(() => {
    window?.addEventListener('scroll', updateVisibility);

    return () => window?.addEventListener('scroll', updateVisibility);
  }, [updateVisibility]);

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
