export function getMedian(values: number[]) {
  const length = values.length;
  values.sort();
  if (length % 2 === 0) {
    return (values[length / 2] + values[length / 2 - 1]) / 2;
  }
  return values[parseInt(`${length / 2}`, 10)];
}

export function getMean(values: number[]) {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

export function getStdDev(values: number[]) {
  const mean = getMean(values);

  const squareDiffs = values.map((value) => {
    const diff = value - mean;
    return diff * diff;
  });

  return Math.sqrt(getMean(squareDiffs));
}

export function format(time: number) {
  const x = Number(`${time}e2`);
  const i = Number(Number(`${Math.round(x)}e-2`).toFixed(2));
  return 10 / i > 1 ? `0${i}` : i;
}

type Stats = {
  samples: number[];
  sampleCount: number;
  mean: number;
  median: number;
  min: number;
  max: number;
  stdDev: number;
};

export function printMeasure(title: string, stats: Stats, baseline?: Record<string, number>) {
  console.group(`${title}:`);

  if (baseline) {
    console.log(
      `  ${Math.round((stats.mean / baseline.mean) * 100)} ±${Math.round(
        (stats.stdDev / baseline.mean) * 100,
      )}%`,
    );
  } else {
    console.log(`  ${format(stats.mean)} ±${format(stats.stdDev)}ms`);

    console.log(JSON.stringify(stats, null, 2));
  }

  console.groupEnd();
}

export function getMeasures(samples: number[] = []) {
  const sortedSamples = [...samples.concat()].sort();

  const stats = {
    samples,
    sampleCount: samples.length,
    mean: getMean(samples),
    median: getMedian(samples),
    min: sortedSamples[0],
    max: sortedSamples[sortedSamples.length - 1],
    stdDev: getStdDev(samples),
  };

  return stats;
}
