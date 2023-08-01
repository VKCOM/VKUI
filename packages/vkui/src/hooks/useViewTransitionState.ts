import { useRootContext } from '../components/Root/RootContext';

export function useViewTransitionState() {
  const { transitionDirection, activeView, prevView } = useRootContext();

  return { transitionDirection, activeView, prevView };
}
