import React from "react";
import PropTypes from "prop-types";
import { Appearance } from "@vkui";
import { DOMContext } from "@vkui/lib/dom";
import ReactFrame from "react-frame-component";
import "./Frame.css";

class FrameDomProvider extends React.Component {
  static contextTypes = {
    document: PropTypes.any,
    window: PropTypes.any,
  };

  static propTypes = {
    appearance: PropTypes.oneOf(Object.values(Appearance)),
  };

  state = { ready: false };

  setAppearance = (appearance) => {
    this.context.document.documentElement.style.setProperty(
      "color-scheme",
      appearance
    );
  };

  componentDidMount() {
    // Пихаем в iFrame с примером спрайты для иконок
    const sprite = document.getElementById("__SVG_SPRITE_NODE__");
    const masks = document.getElementById("__SVG_MASKS_NODE__");

    if (sprite) {
      this.context.document.body.appendChild(sprite.cloneNode(true));
    }

    if (masks) {
      this.context.document.body.appendChild(masks.cloneNode(true));
    }

    this.context.document
      .querySelector(".frame-content")
      .setAttribute("id", "root");

    // Пихаем в iFrame vkui стили
    const frameAssets = document.createDocumentFragment();
    this.hotObservers = [];
    Array.from(document.getElementsByClassName("vkui-style")).map((style) => {
      const frameStyle = style.cloneNode(true);
      frameAssets.appendChild(frameStyle);

      if (process.env.NODE_ENV === "development") {
        const hotStyleChange = new MutationObserver(() => {
          frameStyle.firstChild.nodeValue = style.firstChild.nodeValue;
        });
        hotStyleChange.observe(style, { characterData: true, childList: true });
        this.hotObservers.push(hotStyleChange);
      }
    });
    this.context.document.head.appendChild(frameAssets);
    this.setState({ ready: true });
    this.setAppearance(this.props.appearance);
  }

  componentWillUnmount() {
    this.hotObservers.forEach((o) => o.disconnect());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.appearance !== this.props.appearance) {
      this.setAppearance(this.props.appearance);
    }
  }

  render() {
    return this.state.ready ? (
      <DOMContext.Provider value={this.context}>
        {this.props.children}
      </DOMContext.Provider>
    ) : null;
  }
}

const initialFrameContent = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      #root {
        height: 100%;
      }
    </style>
  </head>
  <body>
  </body>
</html>
`;

export const Frame = ({ children, width, height, appearance }) => {
  return (
    <ReactFrame
      mountTarget="body"
      className="Frame"
      style={{ height, width }}
      initialContent={initialFrameContent}
    >
      <FrameDomProvider appearance={appearance}>{children}</FrameDomProvider>
    </ReactFrame>
  );
};

Frame.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  appearance: PropTypes.oneOf(Object.values(Appearance)).isRequired,
};
