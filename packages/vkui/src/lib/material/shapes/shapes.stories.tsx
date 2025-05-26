'use client';

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type SelectProps } from '../../../components/CustomSelect/CustomSelect';
import { CustomSelectOption } from '../../../components/CustomSelectOption/CustomSelectOption';
import { Flex } from '../../../components/Flex/Flex';
import { FormItem } from '../../../components/FormItem/FormItem';
import { Group } from '../../../components/Group/Group';
import { Input } from '../../../components/Input/Input';
import { Select } from '../../../components/Select/Select';
import { Slider } from '../../../components/Slider/Slider';
import { CanvasFullLayout, DisableCartesianParam } from '../../../storybook/constants';
import { interpolate } from '../../svg/path/interpolate';
import { svgPathToString } from '../../svg/path/path';
import * as transform from '../../svg/path/transform';
import { Shape } from './Shape';
import * as shapes from './shapes';

const story: Meta<object> = {
  title: 'DevTools/lib/material/shapes',
  tags: ['test'], // скрываем из публичной документации
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

// eslint-disable-next-line import/no-default-export
export default story;

function SelectShape(props: { onChange: SelectProps['onChange']; value: string }) {
  return (
    <Select
      {...props}
      before={<Shape params={shapes.shapeList[Number(props.value)]} size={20} />}
      placeholder="Не выбран"
      options={[...Array(shapes.shapeList.length).keys()].map((i) => ({
        label: shapes.shapeNameMap.get(shapes.shapeList[i]) || 'Unknown',
        value: i,
      }))}
      renderOption={({ option, ...restProps }) => (
        <CustomSelectOption
          {...restProps}
          key={String(option.value)}
          before={<Shape params={shapes.shapeList[Number(option.value)]} />}
        />
      )}
    />
  );
}

function MorphPlayground() {
  const [size, setSize] = React.useState(38 * 4);
  const [progress, setProgress] = React.useState(0);
  const [shape1, setShape1] = React.useState(5);
  const [shape2, setShape2] = React.useState(2);
  const [maxSegmentLength, setMaxSegmentLength] = React.useState(1);
  const [angle, setAngle] = React.useState(0);

  const morph = React.useMemo(() => {
    return interpolate(
      shapes.shapeWithRotate(shapes.shapeList[shape1], size),
      shapes.shapeWithRotate(shapes.shapeList[shape2], size),
      { maxSegmentLength: Math.min(10, Math.max(maxSegmentLength, 0.01)) || 1 },
    );
  }, [maxSegmentLength, shape1, shape2, size]);

  return (
    <Group>
      <Flex>
        <div style={{ width: 224 }}>
          <FormItem top="From">
            <SelectShape
              value={shape1.toString()}
              onChange={(_, value) => setShape1(Number(value))}
            />
          </FormItem>
          <FormItem top="To">
            <SelectShape
              value={shape2.toString()}
              onChange={(_, value) => setShape2(Number(value))}
            />
          </FormItem>
          <FormItem top="size">
            <Input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value) || 38)}
              step={1}
              min={0}
            />
          </FormItem>
          <FormItem top="maxSegmentLength">
            <Input
              type="number"
              value={maxSegmentLength}
              onChange={(e) => setMaxSegmentLength(Number(e.target.value) || 1)}
              min={0.01}
              max={10}
            />
          </FormItem>
          <FormItem top="Angle" bottom={angle}>
            <Slider
              step={1}
              min={0}
              max={359}
              value={angle}
              onChange={(value) => setAngle(value)}
            />
          </FormItem>
        </div>
        <Flex
          direction="column"
          justify="space-around"
          gap={32}
          align="center"
          style={{
            flex: 1,
          }}
        >
          <svg width={size} height={size}>
            <path
              d={svgPathToString(transform.rotate(morph(progress), size / 2, size / 2, angle))}
              fill="currentColor"
            />
          </svg>
          <div style={{ width: 38 * 8 }}>
            <FormItem top="Progress" bottom={progress}>
              <Slider
                step={0.05}
                min={0}
                max={1}
                value={progress}
                onChange={(value) => setProgress(value)}
              />
            </FormItem>
          </div>
        </Flex>
      </Flex>
    </Group>
  );
}

export const Morph: StoryObj<object> = {
  render: MorphPlayground,
};
