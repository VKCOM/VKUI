import { baselineComponent } from '../../testing/utils';
import { PopoutRoot, PopoutRootModal, PopoutRootPopout } from './PopoutRoot';

describe(PopoutRoot, () => {
  baselineComponent(PopoutRoot);
});

describe(PopoutRootModal, () => {
  baselineComponent(PopoutRootModal, { getRootRef: false });
});

describe(PopoutRootPopout, () => {
  baselineComponent(PopoutRootPopout, { getRootRef: false });
});
