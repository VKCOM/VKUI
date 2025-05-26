'use client';

import * as React from 'react';
import { useAnimationFrame } from '../../../hooks/useAnimationFrame';
import { useReducedMotion } from '../../../lib/animation';
import * as shapes from '../../../lib/material/shapes/shapes';
import { interpolate } from '../../../lib/svg/path/interpolate';
import { svgPathToString } from '../../../lib/svg/path/path';
import * as operation from '../../../lib/svg/path/transform';
import { SvgIcon } from '../SvgIcon';

interface IconMaterialProps {
  /**
   * Список форм.
   */
  polygons: readonly shapes.ShapeParameters[];
  /**
   * Размер иконки.
   */
  size: number;
  /**
   * Отключение анимации.
   */
  disableAnimation: boolean;
}

export function IconMaterial(props: IconMaterialProps) {
  return (
    <SvgIcon size={props.size}>
      <IconMaterialPath {...props} />
    </SvgIcon>
  );
}

const globalRotationDuration = 4666;
const morphDuration = 200;
const morphInterval = 650;
const fullRotation = 360;
const quarterRotation = fullRotation / 4;

function calcProgress(startTime: number, time: number, duration: number, delay = 0) {
  const fullDuration = duration + delay;

  const timeProgress = fullDuration * (((time - startTime) % fullDuration) / fullDuration);

  if (timeProgress < delay) {
    return 0;
  }

  return (timeProgress - delay) / duration;
}

function IconMaterialPath({ size, polygons, disableAnimation }: IconMaterialProps) {
  const ref = React.useRef<SVGPathElement>(null);

  const morphSequence = React.useMemo(() => {
    function getShape(index: number, size: number) {
      return shapes.shapeWithRotate(polygons[index], size);
    }

    return new Array(polygons.length).fill(0).map((_, index) => {
      return interpolate(getShape(index, size), getShape((index + 1) % polygons.length, size), {
        maxSegmentLength: 2,
      });
    });
  }, [size, polygons]);

  const initialPath = React.useMemo(() => svgPathToString(morphSequence[0](0)), [morphSequence]);

  const callback = React.useCallback(
    (time: number) => {
      const rotationAnimationProgress = calcProgress(0, time, globalRotationDuration);
      const globalRotation = rotationAnimationProgress * fullRotation;

      // TODO: spring({
      //   dampingRatio: 0.6,
      //   stiffness: 200,
      //   visibilityThreshold: 0.1,
      // })
      const morphProgress = calcProgress(0, time, morphDuration, morphInterval);

      const roundMorphIndex = Math.floor(time / (morphDuration + morphInterval));

      const currentMorphIndex = roundMorphIndex % morphSequence.length;

      const morphRotationTargetAngle = (roundMorphIndex * quarterRotation) % fullRotation;
      const rotation = morphProgress * quarterRotation + morphRotationTargetAngle + globalRotation;

      const morphFn = morphSequence[currentMorphIndex];
      const morph = morphFn(morphProgress);

      ref.current!.setAttribute(
        'd',
        svgPathToString(operation.rotate(morph, size / 2, size / 2, rotation)),
      );
    },
    [morphSequence, size],
  );

  const isReducedMotion = useReducedMotion();
  useAnimationFrame(callback, disableAnimation && isReducedMotion);

  return <path ref={ref} fill="currentColor" d={initialPath}></path>;
}
