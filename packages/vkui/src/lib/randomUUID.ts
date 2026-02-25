function hex(byte: number): string {
  return byte.toString(16).padStart(2, '0');
}

function fallbackRandomUUID(): string {
  const bytes = new Uint8Array(16);

  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }

  let result = hex(bytes[0]) + hex(bytes[1]) + hex(bytes[2]) + hex(bytes[3]);
  result += '-' + hex(bytes[4]) + hex(bytes[5]);
  result += '-' + hex((bytes[6] & 0x0f) | 0x40) + hex(bytes[7]);
  result += '-' + hex((bytes[8] & 0x3f) | 0x80) + hex(bytes[9]);
  result +=
    '-' +
    hex(bytes[10]) +
    hex(bytes[11]) +
    hex(bytes[12]) +
    hex(bytes[13]) +
    hex(bytes[14]) +
    hex(bytes[15]);

  return result;
}

export function randomUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return fallbackRandomUUID();
}
