'use client';

/* eslint-disable no-console, import/no-default-export */

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Flex } from '../../components/Flex/Flex';
import { FormItem } from '../../components/FormItem/FormItem';
import { Input } from '../../components/Input/Input';
import { Spinner } from '../../components/Spinner/Spinner';
import { Caption } from '../../components/Typography/Caption/Caption';
import { Headline } from '../../components/Typography/Headline/Headline';
import { Text } from '../../components/Typography/Text/Text';
import { type ResizePayload, useResizeObserver } from './useResizeObserver';

const story: Meta = {
  title: 'Hooks/useResizeObserver',
  component: () => <div />,
};

export default story;

type Story = StoryObj;

const ResizeBox = ({
  id,
  box,
  onResize,
  elementRef,
}: {
  id: number;
  box?: ResizeObserverBoxOptions;
  onResize?: () => void;
  elementRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  const [resizeCount, setResizeCount] = React.useState(0);

  useResizeObserver({
    ref: elementRef || ref,
    box,
    onResize: (payload: ResizePayload<HTMLDivElement>) => {
      setSize({ width: payload.width, height: payload.height });
      setResizeCount((c) => c + 1);
      onResize?.();
    },
  });

  return (
    <Card
      getRootRef={elementRef || ref}
      style={{
        minWidth: 100,
        minHeight: 80,
        padding: 8,
        resize: 'both',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        background: '#f5f5f5',
      }}
    >
      <Caption weight="1">#{id}</Caption>
      <Caption>
        {Math.round(size.width)}x{Math.round(size.height)}
      </Caption>
      <Caption>resizes: {resizeCount}</Caption>
    </Card>
  );
};

// Box WITHOUT pooling - creates individual ResizeObserver for each element
const ResizeBoxNoPool = ({
  id,
  elementRef,
  onResize,
}: {
  id: number;
  elementRef?: React.RefObject<HTMLDivElement | null>;
  onResize?: () => void;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  const [resizeCount, setResizeCount] = React.useState(0);

  // NON-OPTIMIZED: Each component creates its own ResizeObserver
  React.useEffect(() => {
    const node = (elementRef || ref).current;
    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
        setResizeCount((c) => c + 1);
        onResize?.();
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, onResize, ref]);

  return (
    <Card
      getRootRef={elementRef || ref}
      style={{
        minWidth: 100,
        minHeight: 80,
        padding: 8,
        resize: 'both',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        background: '#f5f5f5',
      }}
    >
      <Caption weight="1">#{id}</Caption>
      <Caption>
        {Math.round(size.width)}x{Math.round(size.height)}
      </Caption>
      <Caption>resizes: {resizeCount}</Caption>
    </Card>
  );
};

export const Playground: Story = {
  render: function Render() {
    const [count, setCount] = React.useState(100);
    const [box, setBox] = React.useState<ResizeObserverBoxOptions>('content-box');
    const [totalResizes, setTotalResizes] = React.useState(0);
    const [benchmarkRunning, setBenchmarkRunning] = React.useState(false);
    const [benchmarkResults, setBenchmarkResults] = React.useState<{
      totalTime: number;
      avgTime: number;
    } | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const resizeCounterRef = React.useRef(0);

    const handleResize = React.useCallback(() => {
      resizeCounterRef.current += 1;
      setTotalResizes((prev) => prev + 1);
    }, []);

    const runBenchmark = async () => {
      setBenchmarkRunning(true);
      setBenchmarkResults(null);
      resizeCounterRef.current = 0;
      setTotalResizes(0);

      const iterations = 30;
      const startTime = performance.now();

      for (let i = 0; i < iterations; i++) {
        if (containerRef.current) {
          containerRef.current.style.width = `${800 + i * 5}px`;
        }
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      setBenchmarkResults({
        totalTime,
        avgTime: totalTime / iterations,
      });
      setBenchmarkRunning(false);

      if (containerRef.current) {
        containerRef.current.style.width = '';
      }
    };

    return (
      <Flex direction="column" gap="xl" style={{ padding: 16 }}>
        <Headline weight="1">useResizeObserver — Pooled ResizeObserver</Headline>

        <Flex gap="m">
          <FormItem top="Elements">
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ width: 100 }}
            />
          </FormItem>
          <FormItem top="Box">
            <select
              value={box}
              onChange={(e) => setBox(e.target.value as ResizeObserverBoxOptions)}
              style={{ padding: '8px 12px', borderRadius: 8 }}
            >
              <option value="content-box">content-box</option>
              <option value="border-box">border-box</option>
              <option value="device-pixel-content-box">device-pixel-content-box</option>
            </select>
          </FormItem>
        </Flex>

        <Flex gap="m">
          <Button appearance="neutral" onClick={() => setCount(100)}>
            100
          </Button>
          <Button appearance="neutral" onClick={() => setCount(500)}>
            500
          </Button>
          <Button appearance="neutral" onClick={() => setCount(1000)}>
            1000
          </Button>
          <Button
            appearance="accent"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              runBenchmark();
            }}
            disabled={benchmarkRunning}
          >
            {benchmarkRunning ? <Spinner size="s" /> : 'Benchmark'}
          </Button>
        </Flex>

        {benchmarkResults && (
          <Card style={{ padding: 12 }}>
            <Text>
              Total: {benchmarkResults.totalTime.toFixed(2)}ms | Avg:{' '}
              {benchmarkResults.avgTime.toFixed(2)}ms | Resizes: {totalResizes}
            </Text>
          </Card>
        )}

        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 8,
            maxHeight: '50vh',
            overflow: 'auto',
            padding: 8,
            background: '#fafafa',
            borderRadius: 8,
          }}
        >
          {Array.from({ length: count }, (_, i) => (
            <ResizeBox key={i} id={i + 1} box={box} onResize={handleResize} />
          ))}
        </div>
      </Flex>
    );
  },
};

export const NoPoolBenchmark: Story = {
  render: function Render() {
    const [count, setCount] = React.useState(100);
    const [totalResizes, setTotalResizes] = React.useState(0);
    const [benchmarkRunning, setBenchmarkRunning] = React.useState(false);
    const [benchmarkResults, setBenchmarkResults] = React.useState<{
      totalTime: number;
      avgTime: number;
    } | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const resizeCounterRef = React.useRef(0);

    const handleResize = React.useCallback(() => {
      resizeCounterRef.current += 1;
      setTotalResizes((prev) => prev + 1);
    }, []);

    const runBenchmark = async () => {
      setBenchmarkRunning(true);
      setBenchmarkResults(null);
      resizeCounterRef.current = 0;
      setTotalResizes(0);

      const iterations = 30;
      const startTime = performance.now();

      for (let i = 0; i < iterations; i++) {
        if (containerRef.current) {
          containerRef.current.style.width = `${800 + i * 5}px`;
        }
        await new Promise((resolve) => requestAnimationFrame(resolve));
      }

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      setBenchmarkResults({
        totalTime,
        avgTime: totalTime / iterations,
      });
      setBenchmarkRunning(false);

      if (containerRef.current) {
        containerRef.current.style.width = '';
      }
    };

    return (
      <Flex direction="column" gap="xl" style={{ padding: 16 }}>
        <Headline weight="1">
          useResizeObserver — NO Pooling (each element has own ResizeObserver)
        </Headline>

        <Card style={{ padding: 16, background: '#ffebee' }}>
          <Flex direction="column" gap="s">
            <Text weight="1" style={{ color: '#c62828' }}>
              NON-OPTIMIZED: {count} separate ResizeObserver instances
            </Text>
            <Text>Each element creates its own ResizeObserver</Text>
          </Flex>
        </Card>

        <Flex gap="m">
          <FormItem top="Elements">
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ width: 100 }}
            />
          </FormItem>
        </Flex>

        <Flex gap="m">
          <Button appearance="neutral" onClick={() => setCount(100)}>
            100
          </Button>
          <Button appearance="neutral" onClick={() => setCount(500)}>
            500
          </Button>
          <Button appearance="neutral" onClick={() => setCount(1000)}>
            1000
          </Button>
          <Button
            appearance="accent"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              runBenchmark();
            }}
            disabled={benchmarkRunning}
          >
            {benchmarkRunning ? <Spinner size="s" /> : 'Benchmark'}
          </Button>
        </Flex>

        {benchmarkResults && (
          <Card style={{ padding: 12 }}>
            <Text>
              Total: {benchmarkResults.totalTime.toFixed(2)}ms | Avg:{' '}
              {benchmarkResults.avgTime.toFixed(2)}ms | Resizes: {totalResizes}
            </Text>
          </Card>
        )}

        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 8,
            maxHeight: '50vh',
            overflow: 'auto',
            padding: 8,
            background: '#fafafa',
            borderRadius: 8,
          }}
        >
          {Array.from({ length: count }, (_, i) => (
            <ResizeBoxNoPool key={i} id={i + 1} onResize={handleResize} />
          ))}
        </div>
      </Flex>
    );
  },
};

export const PoolingComparison: Story = {
  render: function Render() {
    const [count, setCount] = React.useState(100);
    const [usePooling, setUsePooling] = React.useState(true);

    const ResizeBoxComponent = usePooling ? ResizeBox : ResizeBoxNoPool;

    return (
      <Flex direction="column" gap="xl" style={{ padding: 16 }}>
        <Headline weight="1">Pooling Comparison</Headline>

        <Card style={{ padding: 16, background: usePooling ? '#e8f5e9' : '#ffebee' }}>
          <Flex direction="column" gap="s">
            <Text weight="1" style={{ color: usePooling ? '#2e7d32' : '#c62828' }}>
              {usePooling
                ? 'POOLED (1 ResizeObserver for all)'
                : 'NO POOL (N ResizeObserver instances)'}
            </Text>
            <Text>ResizeObserver instances: {usePooling ? 1 : count}</Text>
          </Flex>
        </Card>

        <Flex gap="m">
          <FormItem top="Elements">
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ width: 100 }}
            />
          </FormItem>
          <Checkbox checked={usePooling} onChange={(e) => setUsePooling(e.target.checked)}>
            Use pooling
          </Checkbox>
        </Flex>

        <Flex gap="m">
          <Button appearance="neutral" onClick={() => setCount(100)}>
            100
          </Button>
          <Button appearance="neutral" onClick={() => setCount(500)}>
            500
          </Button>
          <Button appearance="neutral" onClick={() => setCount(1000)}>
            1000
          </Button>
        </Flex>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 8,
            maxHeight: '50vh',
            overflow: 'auto',
            padding: 8,
            background: '#fafafa',
            borderRadius: 8,
          }}
        >
          {Array.from({ length: count }, (_, i) => (
            <ResizeBoxComponent key={i} id={i + 1} />
          ))}
        </div>

        <Card style={{ padding: 16 }}>
          <Headline weight="2" style={{ marginBottom: 8 }}>
            Verify in DevTools
          </Headline>
          <ol style={{ paddingLeft: 20 }}>
            <li>
              <Text>DevTools → Memory → Heap snapshot</Text>
            </li>
            <li>
              <Text>Search for ResizeObserver</Text>
            </li>
            <li>
              <Text>Pooled: 1 instance | No pool: {count} instances</Text>
            </li>
          </ol>
        </Card>
      </Flex>
    );
  },
};

export const SingleElement: Story = {
  render: function Render() {
    const ref = React.useRef<HTMLDivElement>(null);
    const [size, setSize] = React.useState({ width: 0, height: 0 });
    const [box, setBox] = React.useState<ResizeObserverBoxOptions>('content-box');

    useResizeObserver({
      ref,
      box,
      onResize: (payload) => {
        setSize({ width: payload.width, height: payload.height });
      },
    });

    return (
      <Flex direction="column" gap="m" style={{ padding: 16 }}>
        <FormItem top="Box">
          <select
            value={box}
            onChange={(e) => setBox(e.target.value as ResizeObserverBoxOptions)}
            style={{ padding: '8px 12px', borderRadius: 8 }}
          >
            <option value="content-box">content-box</option>
            <option value="border-box">border-box</option>
            <option value="device-pixel-content-box">device-pixel-content-box</option>
          </select>
        </FormItem>

        <div
          ref={ref}
          style={{
            width: 300,
            height: 200,
            padding: 16,
            resize: 'both',
            overflow: 'hidden',
            background: '#f0f0f0',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Flex direction="column" align="center" gap="s">
            <Headline weight="1">Resize me!</Headline>
            <Text>
              {Math.round(size.width)} × {Math.round(size.height)}
            </Text>
            <Caption>box: {box}</Caption>
          </Flex>
        </div>
      </Flex>
    );
  },
};
