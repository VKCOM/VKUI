import { deriveAppearance } from './appearance';

describe('deriveAppearance', () => {
  it("Returns 'light' if scheme is undefined", () => {
    expect(deriveAppearance(undefined)).toEqual('light');
  });
  it("Returns 'light' if scheme is 'bright_light'", () => {
    expect(deriveAppearance('bright_light')).toEqual('light');
  });
  it("Returns 'light' if scheme is 'vkcom_light'", () => {
    expect(deriveAppearance('vkcom_light')).toEqual('light');
  });
  it("Returns 'dark' if scheme is 'space_gray'", () => {
    expect(deriveAppearance('space_gray')).toEqual('dark');
  });
  it("Returns 'dark' if scheme is 'vkcom_dark'", () => {
    expect(deriveAppearance('vkcom_dark')).toEqual('dark');
  });
});
