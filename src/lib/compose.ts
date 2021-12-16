export const compose = (...fns: any[]) =>
  fns
    .filter((f) => Boolean(f))
    .reduceRight(
      (f, g) =>
        (...args: any[]) =>
          g(f(...args))
    );
