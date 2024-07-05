import * as React from "react";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";

export const useTransformProp = (trackerRef: React.RefObject<HTMLDivElement>) => {
    const transformProp = React.useRef('');
    useIsomorphicLayoutEffect(() => {
        let style = trackerRef.current?.style;
        let prop = '';
        if (style !== undefined) {
            if ('transform' in style) {
            prop = 'transform';
            } else if ('webkitTransform' in style) {
            prop = 'webkitTransform';
            }
        }
        transformProp.current = prop;
    }, []);

    return transformProp
}
