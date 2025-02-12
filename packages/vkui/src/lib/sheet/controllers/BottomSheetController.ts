import { noop } from '@vkontakte/vkjs';
import { clamp } from '../../../helpers/math';
import { rubberbandIfOutOfBounds } from '../../animation';
import { getNearestOverflowAncestor, hasSelectionWithRangeType } from '../../dom';
import { UIPanGestureRecognizer } from '../../touch/UIPanGestureRecognizer';
import {
  BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY,
  DRAG_THRESHOLDS,
  DYNAMIC_SNAP_POINT_DATA,
  SNAP_POINT_DETENTS,
} from '../constants';
import type { CSSTransitionController } from './CSSTransitionController';

export type SnapPointDetents = [number, number] | [number, number, number];

export type SnapPoint = 'auto' | { initial: number; detents: SnapPointDetents };

export type SnapPointChange = (snapPoint: number) => void;

export type BottomSheetControllerOptions = {
  sheetScrollEl: HTMLElement | null;
  sheetTransitionController: CSSTransitionController<string>;
  backdropTransitionController: CSSTransitionController | null;
  onSnapPointChange: SnapPointChange;
  onDismiss: VoidFunction;
};

export class BottomSheetController {
  private readonly sheetEl: HTMLElement;

  constructor(
    sheetEl: HTMLElement,
    {
      sheetScrollEl,
      sheetTransitionController,
      backdropTransitionController,
      onSnapPointChange,
      onDismiss,
    }: BottomSheetControllerOptions,
  ) {
    this.sheetEl = sheetEl;
    this.onSnapPointChange = onSnapPointChange;
    this.onDismiss = onDismiss;
    this.panGestureRecognizer = new UIPanGestureRecognizer();
    this.sheetScrollEl = sheetScrollEl;
    this.sheetTransitionController = sheetTransitionController;
    this.backdropTransitionController = backdropTransitionController;
  }

  init(snapPoint: SnapPoint) {
    this.isInitialized = true;

    if (snapPoint === 'auto') {
      this.unit = 'px';
      this.currentSnapPoint = DYNAMIC_SNAP_POINT_DATA.IDLE_POINT_VALUE;
      this.snapPointDetents = [SNAP_POINT_DETENTS.MIN, DYNAMIC_SNAP_POINT_DATA.IDLE_POINT_VALUE];
    } else {
      this.unit = '%';
      this.currentSnapPoint = snapPoint.initial;
      this.snapPointDetents = snapPoint.detents;
    }
  }

  destroy() {
    this.isInitialized = false;
    this.pannedEl = null;
    this.sheetTransitionController.cleanup();
    this.backdropTransitionController?.cleanup();

    this.disableVerticalScrollBouncingDispose();
    this.disableVerticalScrollBouncingDispose = noop;
  }

  panStart(event: UIEvent) {
    if (
      !this.isInitialized ||
      this.panState !== 'idle' ||
      hasSelectionWithRangeType(event.target)
    ) {
      return;
    }

    this.panState = 'start';
    this.pannedEl = event.target as HTMLElement;
    this.panGestureRecognizer.setStartCoords(event);
  }

  panMove(event: UIEvent) {
    switch (this.panState) {
      case 'start':
        this.panGestureRecognizer.setInitialTimeOnce();
        this.panGestureRecognizer.setEndCoords(event);

        if (this.preventUntilPanGestureBecomesExpected()) {
          return;
        }

        if (this.preventImmediatelyIfPannedElIsNotValid()) {
          this.panState = 'idle';
          return;
        }

        if (this.preventUntilVerticalScrollingOnSheetScrollElBecomesExpected()) {
          return;
        }

        if (this.preventImmediatelyIfVerticalScrollingOnPannedElIsScrolled()) {
          this.panState = 'idle';
          return;
        }

        this.panState = 'moving';
        this.panGestureRecognizer.setStartCoords(event);

        this.sheetHeight = this.sheetEl.offsetHeight;

        this.disableVerticalScrollBouncingDispose =
          BottomSheetController.disableVerticalScrollBouncingIfNeeded(
            this.sheetScrollEl,
            this.pannedEl,
          );

        if (this.isDynamicSnapPoint) {
          this.currentSnapPoint = this.sheetHeight;
          this.snapPointDetents[DYNAMIC_SNAP_POINT_DATA.COMPUTED_INDEX] = this.sheetHeight;
        }
        break;
      case 'moving':
        this.panGestureRecognizer.setEndCoords(event);

        const { y1, y2 } = this.panGestureRecognizer;

        this.nextSnapPoint = rubberbandIfOutOfBounds(
          this.currentSnapPoint - ((y2 - y1) / this.sheetHeight) * this.currentSnapPoint,
          SNAP_POINT_DETENTS.MIN,
          this.isDynamicSnapPoint ? this.sheetHeight : SNAP_POINT_DETENTS.LARGE,
        );

        this.calculateSnapPoint(this.nextSnapPoint, true);
        break;
    }
  }

  panEnd() {
    switch (this.panState) {
      case 'moving':
        const prevCurrentSnapPoint = this.currentSnapPoint;
        this.currentSnapPoint = this.getSnapPointTo(this.nextSnapPoint);

        if (
          prevCurrentSnapPoint !== this.currentSnapPoint &&
          this.currentSnapPoint > SNAP_POINT_DETENTS.MIN
        ) {
          this.onSnapPointChange(this.currentSnapPoint);
        }

        this.calculateSnapPoint(this.currentSnapPoint);
        break;
    }

    this.panState = 'idle';
    this.panGestureRecognizer.reset();

    this.disableVerticalScrollBouncingDispose();
    this.disableVerticalScrollBouncingDispose = noop;
  }

  private isInitialized = false;
  private panState: 'idle' | 'start' | 'moving' = 'idle';
  private pannedEl: HTMLElement | null = null;
  private sheetHeight = 0;
  private rafId: number | null = null;
  private currentSnapPoint = 0;
  private nextSnapPoint = 0;
  private snapPointDetents: SnapPointDetents = [0, 0];
  private unit: 'px' | '%' = '%';
  private get isDynamicSnapPoint() {
    return this.unit === 'px';
  }
  private disableVerticalScrollBouncingDispose = noop;
  private readonly sheetScrollEl: HTMLElement | null;
  private readonly sheetTransitionController: CSSTransitionController<string>;
  private readonly backdropTransitionController: CSSTransitionController | null;
  private readonly panGestureRecognizer: UIPanGestureRecognizer;
  private readonly onSnapPointChange: SnapPointChange;
  private readonly onDismiss: VoidFunction;

  private calculateSnapPoint(nextSnapPoint: number, immediately = false) {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }

    if (nextSnapPoint <= SNAP_POINT_DETENTS.MIN) {
      this.sheetTransitionController.enableTransition();
      this.backdropTransitionController?.enableTransition();
      this.panState = 'idle';
      this.onDismiss();
      return;
    }

    const backdropOpacity = clamp(
      this.isDynamicSnapPoint
        ? nextSnapPoint / this.sheetHeight
        : (nextSnapPoint * 2) / SNAP_POINT_DETENTS.LARGE,
      0,
      1,
    );

    this.rafId = requestAnimationFrame(() => {
      if (immediately) {
        this.backdropTransitionController?.disableTransition().set(backdropOpacity);
        this.sheetTransitionController.disableTransition().set(`${nextSnapPoint}${this.unit}`);
        return;
      }

      if (this.isDynamicSnapPoint) {
        this.sheetTransitionController.cleanupOnTransitionEnd();
      }

      this.backdropTransitionController?.unset();
      this.sheetTransitionController.enableTransition().set(`${this.currentSnapPoint}${this.unit}`);
    });
  }

  private getSnapPointTo(nextSnapPoint: number) {
    const closestSnapPoint = BottomSheetController.getClosestSnapPoint(
      this.snapPointDetents,
      nextSnapPoint,
    );
    if (closestSnapPoint !== this.currentSnapPoint) {
      return closestSnapPoint;
    }

    const panDirection = this.panGestureRecognizer.direction();
    if (panDirection.axis !== 'y' || panDirection.direction === null) {
      return this.currentSnapPoint;
    }

    const velocity = this.panGestureRecognizer.velocity();
    if (Math.abs(velocity.y) < DRAG_THRESHOLDS.VELOCITY) {
      return this.currentSnapPoint;
    }

    const closestSnapPointByDirection = BottomSheetController.getClosestSnapPointByDirection(
      this.snapPointDetents,
      closestSnapPoint,
      panDirection.direction,
    );

    return closestSnapPointByDirection;
  }

  private preventUntilPanGestureBecomesExpected() {
    return (
      this.panGestureRecognizer.direction().axis === 'x' ||
      this.panGestureRecognizer.distance() < DRAG_THRESHOLDS.DISTANCE_FOR_MOVING_START
    );
  }

  private preventImmediatelyIfPannedElIsNotValid() {
    return (
      this.pannedEl === null ||
      // Элемент со специальным атрибутом
      this.pannedEl.closest(`[${BLOCK_SHEET_BEHAVIOR_DATA_ATTRIBUTE_KEY}=true]`) !== null || // eslint-disable-line no-restricted-properties
      // Элемент за пределами панели.
      !this.sheetEl.contains(this.pannedEl)
    );
  }

  private preventUntilVerticalScrollingOnSheetScrollElBecomesExpected() {
    if (
      this.sheetScrollEl === null ||
      !this.sheetScrollEl.contains(this.pannedEl) ||
      this.sheetScrollEl.scrollHeight <= this.sheetScrollEl.clientHeight
    ) {
      return false;
    }

    if (this.sheetScrollEl.scrollTop === 0) {
      return (
        this.panGestureRecognizer.direction().direction === -1 &&
        BottomSheetController.isLastSnapPointDetents(this.snapPointDetents, this.currentSnapPoint)
      );
    }

    return true;
  }

  private preventImmediatelyIfVerticalScrollingOnPannedElIsScrolled() {
    if (
      /* istanbul ignore next: покрываем TypeScript */
      this.pannedEl === null ||
      this.pannedEl === this.sheetEl ||
      this.pannedEl === this.sheetScrollEl
    ) {
      return false;
    }

    const overflowAncestor = getNearestOverflowAncestor(this.pannedEl, this.sheetEl);

    if (
      overflowAncestor === null ||
      this.sheetScrollEl === overflowAncestor ||
      overflowAncestor.scrollHeight <= overflowAncestor.clientHeight
    ) {
      return false;
    }

    return (
      overflowAncestor.scrollTop !== 0 || this.panGestureRecognizer.direction().direction === -1
    );
  }

  private static disableVerticalScrollBouncingIfNeeded(
    sheetScrollEl: HTMLElement | null,
    targetEl: HTMLElement | null,
  ) {
    if (
      sheetScrollEl !== null &&
      sheetScrollEl.scrollTop <= 0 &&
      sheetScrollEl.contains(targetEl) &&
      sheetScrollEl.scrollHeight > sheetScrollEl.clientHeight
    ) {
      sheetScrollEl.style.setProperty('overflow-y', 'hidden');
      return function dispose() {
        sheetScrollEl.style.removeProperty('overflow-y');
      };
    }
    return noop;
  }

  private static isLastSnapPointDetents(
    snapPointDetents: SnapPointDetents,
    currentY: number,
  ): boolean {
    return currentY === snapPointDetents[snapPointDetents.length - 1];
  }

  private static getClosestSnapPointByDirection(
    snapPointDetents: SnapPointDetents,
    currentY: number,
    direction: -1 | 1,
  ): number {
    const foundIndex = snapPointDetents.findIndex((i) => i === currentY);
    switch (direction) {
      case -1:
        return snapPointDetents[foundIndex + 1] ?? snapPointDetents[snapPointDetents.length - 1];
      case 1:
        return snapPointDetents[foundIndex - 1] ?? snapPointDetents[0];
    }
  }

  private static getClosestSnapPoint(snapPointDetents: SnapPointDetents, currentY: number) {
    let closest = snapPointDetents[0];
    let minDifference = Math.abs(snapPointDetents[0] - currentY);

    for (let i = 1; i < snapPointDetents.length; i += 1) {
      const difference = Math.abs(snapPointDetents[i] - currentY);
      if (difference < minDifference) {
        closest = snapPointDetents[i];
        minDifference = difference;
      }
    }

    return closest;
  }
}
