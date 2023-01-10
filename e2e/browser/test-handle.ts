import { ReactElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

class ComponentHandle {
  constructor(private readonly mountNode: Element) {}
  private components: Record<string, { node: ReactElement }> = {};

  register(name: string, node: ReactElement) {
    if (name in this.components) {
      throw new Error(
        `Test ${name} already exists. make sure path is unique and mount() is called once.`,
      );
    }
    this.components[name] = { node };
  }

  mount(name: string) {
    if (!(name in this.components)) {
      throw new Error(
        `Test "${name}" does not exist, ${JSON.stringify(Object.keys(this.components))}`,
      );
    }
    return new Promise<void>((ok) =>
      render(this.components[name].node, this.mountNode, () => ok()),
    );
  }

  unmount() {
    unmountComponentAtNode(this.mountNode);
  }
}

export const testHandle = new ComponentHandle(document.getElementById('mount') as Element);
window.testHandle = testHandle;
