import React from 'react';
import PropTypes from 'prop-types';
import { DOMContext } from '@vkui/lib/dom';
import ReactFrame, { useFrame } from 'react-frame-component';
import './Frame.css';

const FrameDomProvider = ({ children }) => {
  const [ready, setReady] = React.useState(false);
  const frame = useFrame();

  React.useEffect(() => {
    // Пихаем в iFrame с примером спрайты для иконок
    const sprite = document.getElementById('__SVG_SPRITE_NODE__');
    const masks = document.getElementById('__SVG_MASKS_NODE__');

    if (sprite) {
      frame.document.body.appendChild(sprite.cloneNode(true));
    }

    if (masks) {
      frame.document.body.appendChild(masks.cloneNode(true));
    }

    frame.document.querySelector('.frame-content').setAttribute('id', 'root');

    // Пихаем в iFrame vkui стили
    const frameAssets = document.createDocumentFragment();
    const hotObservers = [];
    Array.from(document.getElementsByClassName('vkui-style')).map((style) => {
      const frameStyle = style.cloneNode(true);
      frameAssets.appendChild(frameStyle);

      if (process.env.NODE_ENV === 'development') {
        const hotStyleChange = new MutationObserver(() => {
          frameStyle.firstChild.nodeValue = style.firstChild.nodeValue;
        });
        hotStyleChange.observe(style, { characterData: true, childList: true });
        hotObservers.push(hotStyleChange);
      }
    });
    frame.document.head.appendChild(frameAssets);
    setReady(true);

    return () => {
      hotObservers.forEach((o) => o.disconnect());
    };
  }, []);

  return ready ? <DOMContext.Provider value={frame}>{children}</DOMContext.Provider> : null;
};

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

export const Frame = ({ children, style, appearance }) => {
  return (
    <ReactFrame
      mountTarget="body"
      className="Frame"
      style={style}
      initialContent={initialFrameContent}
    >
      <FrameDomProvider>{children}</FrameDomProvider>
    </ReactFrame>
  );
};

Frame.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};
