import { noop } from '@vkontakte/vkjs';
import { useContext, useEffect, useState } from 'react';
import { AdaptivityContext } from '../components/AdaptivityProvider/AdaptivityContext';
import { defAdaptivity } from '../components/AdaptivityProvider/AdaptivityProvider';
import { AdaptivityProps } from '../hoc/withAdaptivity';

export const useAdaptivity = (): AdaptivityProps => {
  const context = useContext(AdaptivityContext);
  const [globalState, setState] = useState(defAdaptivity.state);
  useEffect(() => context.isFallback ? defAdaptivity.observe(setState) : noop, []);
  return context.isFallback ? globalState : context;
};
