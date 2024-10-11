'use client';

import * as React from 'react';
import { AppRootContext } from './AppRootContext';
import { AppRootPortal, type AppRootPortalProps } from './AppRootPortal';

/* Специальный компонент для рендеринга ModalRoot и
 * popout компонентов внутри SplitLayout после контента
 * Как было раньше в v6 при передаче модалок и popout компонентов
 * в свойства SplitLayout modal/popout в режиме full */
export function ModalPopoutPortal(props: AppRootPortalProps) {
  const { mode } = React.useContext(AppRootContext);
  const usePortalProp = props.usePortal;

  let usePortal: AppRootPortalProps['usePortal'] = usePortalProp;

  const shouldRenderInAppAfterContent = usePortalProp === undefined && mode === 'full';
  if (shouldRenderInAppAfterContent) {
    usePortal = 'in-app-after-content';
  }

  return <AppRootPortal {...props} usePortal={usePortal} />;
}
