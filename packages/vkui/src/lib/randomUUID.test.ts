import { describe, expect, test, vi } from 'vitest';
import { randomUUID } from './randomUUID';

describe('generateUUID', () => {
  test('generates a valid UUID v4 format', () => {
    const uuid = randomUUID();

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(uuid).toMatch(uuidRegex);
  });

  test('generates unique UUIDs', () => {
    const uuids = new Set();
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const uuid = randomUUID();
      uuids.add(uuid);
    }

    expect(uuids.size).toBe(iterations);
  });

  test('generates UUIDs of correct length', () => {
    const uuid = randomUUID();

    expect(uuid.length).toBe(36);
  });

  test('has correct version and variant bits', () => {
    const uuid = randomUUID();
    const parts = uuid.split('-');

    expect(parts[0].length).toBe(8);
    expect(parts[1].length).toBe(4);
    expect(parts[2].length).toBe(4);
    expect(parts[3].length).toBe(4);
    expect(parts[4].length).toBe(12);

    const versionNibble = parseInt(parts[2][0], 16);
    expect(versionNibble).toBe(4);

    const variantNibble = parseInt(parts[3][0], 16);
    expect(variantNibble).toBeGreaterThanOrEqual(8);
    expect(variantNibble).toBeLessThanOrEqual(11);
  });

  test('crypto.randomUUID is available by default', () => {
    expect(typeof crypto).not.toBe('undefined');
    expect(typeof crypto.randomUUID).toBe('function');
  });

  test('uses crypto.randomUUID when available', () => {
    vi.spyOn(crypto, 'randomUUID').mockReturnValue('12345678-1234-4123-8123-123456789abc');

    const uuid = randomUUID();

    expect(uuid).toBe('12345678-1234-4123-8123-123456789abc');
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(crypto.randomUUID).toHaveBeenCalled();

    vi.restoreAllMocks();
  });

  test('generates lowercase hexadecimal characters', () => {
    const uuid = randomUUID();

    expect(uuid).toBe(uuid.toLowerCase());
  });

  describe('fallback when crypto.randomUUID is not available', () => {
    const originalCrypto = global.crypto;

    beforeEach(() => {
      vi.stubGlobal('crypto', {
        ...originalCrypto,
        randomUUID: undefined,
        getRandomValues: (arr: Uint8Array) => {
          for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(Math.random() * 256);
          }
        },
      });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    test('uses crypto.getRandomValues when available', () => {
      const uuid = randomUUID();

      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuid).toMatch(uuidRegex);
      expect(uuid.length).toBe(36);
    });

    test('generates unique UUIDs without crypto.randomUUID', () => {
      const uuids = new Set();
      const iterations = 100;

      for (let i = 0; i < iterations; i++) {
        const uuid = randomUUID();
        uuids.add(uuid);
      }

      expect(uuids.size).toBe(iterations);
    });

    test('calls crypto.getRandomValues', () => {
      const spy = vi.spyOn(crypto, 'getRandomValues');
      randomUUID();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('fallback when crypto.randomUUID and crypto.getRandomValues are not available', () => {
    beforeEach(() => {
      const originalCrypto = globalThis.crypto;
      vi.stubGlobal('crypto', {
        ...originalCrypto,
        randomUUID: undefined,
        getRandomValues: undefined,
      });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    test('uses Math.random as fallback', () => {
      const uuid = randomUUID();

      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuid).toMatch(uuidRegex);
      expect(uuid.length).toBe(36);
    });

    test('generates unique UUIDs using Math.random fallback', () => {
      const uuids = new Set();
      const iterations = 50;

      for (let i = 0; i < iterations; i++) {
        const uuid = randomUUID();
        uuids.add(uuid);
      }

      expect(uuids.size).toBe(iterations);
    });

    test('has correct version and variant bits with Math.random fallback', () => {
      const uuid = randomUUID();
      const parts = uuid.split('-');

      expect(parts[0].length).toBe(8);
      expect(parts[1].length).toBe(4);
      expect(parts[2].length).toBe(4);
      expect(parts[3].length).toBe(4);
      expect(parts[4].length).toBe(12);

      const versionNibble = parseInt(parts[2][0], 16);
      expect(versionNibble).toBe(4);

      const variantNibble = parseInt(parts[3][0], 16);
      expect(variantNibble).toBeGreaterThanOrEqual(8);
      expect(variantNibble).toBeLessThanOrEqual(11);
    });
  });

  describe('fallback when neither crypto.randomUUID nor crypto.getRandomValues are available', () => {
    beforeEach(() => {
      vi.stubGlobal('crypto', undefined);
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    test('uses Math.random as fallback', () => {
      const uuid = randomUUID();

      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      expect(uuid).toMatch(uuidRegex);
      expect(uuid.length).toBe(36);
    });

    test('generates unique UUIDs using Math.random fallback', () => {
      const uuids = new Set();
      const iterations = 50;

      for (let i = 0; i < iterations; i++) {
        const uuid = randomUUID();
        uuids.add(uuid);
      }

      expect(uuids.size).toBe(iterations);
    });

    test('has correct version and variant bits with Math.random fallback', () => {
      const uuid = randomUUID();
      const parts = uuid.split('-');

      expect(parts[0].length).toBe(8);
      expect(parts[1].length).toBe(4);
      expect(parts[2].length).toBe(4);
      expect(parts[3].length).toBe(4);
      expect(parts[4].length).toBe(12);

      const versionNibble = parseInt(parts[2][0], 16);
      expect(versionNibble).toBe(4);

      const variantNibble = parseInt(parts[3][0], 16);
      expect(variantNibble).toBeGreaterThanOrEqual(8);
      expect(variantNibble).toBeLessThanOrEqual(11);
    });
  });
});
