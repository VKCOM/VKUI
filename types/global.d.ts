import "react";
import { Scheme } from "../src/helpers/scheme";

declare module "react" {
  interface Attributes {
    vkuiClass?: string | string[];
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    scheme?: Scheme | "inherit";
  }
}
