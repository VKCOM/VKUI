/**
 * https://github.com/alexreardon/raf-schd
 *
 * Copyright (c) 2021 Alex Reardon
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type AnyFn = (...args: any[]) => void;

export interface RafSchedule<T extends AnyFn> {
  (...args: Parameters<T>): void;
  cancel(): void;
}

export const rafSchd = <T extends AnyFn>(fn: T): RafSchedule<T> => {
  let lastArgs: any = [];
  let frameId: number | null = null;

  const wrapperFn = <T extends AnyFn>(...args: Parameters<T>) => {
    // Always capture the latest value
    lastArgs = args;

    // There is already a frame queued
    if (frameId) {
      return;
    }

    // Schedule a new frame
    frameId = requestAnimationFrame(() => {
      frameId = null;
      fn(...lastArgs);
    });
  };

  // Adding cancel property to result function
  wrapperFn.cancel = () => {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};
