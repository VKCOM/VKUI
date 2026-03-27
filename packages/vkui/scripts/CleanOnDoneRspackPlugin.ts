import * as fs from 'node:fs/promises';
import type * as rspack from '@rspack/core';

export class CleanOnDoneRspackPlugin implements rspack.RspackPluginInstance {
  readonly #patterns: string[];

  constructor(patterns: string[]) {
    this.#patterns = patterns;
  }

  readonly #name = 'CleanOnDoneRspackPlugin';
  apply(compiler: rspack.Compiler) {
    compiler.hooks.done.tapPromise(this.#name, this.#clean.bind(this));
  }

  async #clean() {
    await Promise.all(this.#patterns.map(this.#rm.bind(this)));
  }

  async #rm(pattern: string) {
    const entries: string[] = [];
    for await (const entry of fs.glob(pattern)) {
      entries.push(entry);
    }

    await Promise.all(entries.map((entry) => fs.rm(entry)));
  }
}
