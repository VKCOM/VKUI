import {
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Spinner } from '../../../src';
import { useGlobalEventListener } from '../../../src/hooks/useGlobalEventListener';
import { useResizeObserver } from '../../../src/hooks/useResizeObserver';
import { useDOM } from '../../../src/lib/dom';

const SPINNER_HEIGHT = 24;
const WINDOW_PADDING_BOTTOM = 64;

type SectionBounds = {
  height: number;
  offsetTop: number;
};

type SectionData<Section extends { id: string }> = {
  data: Section;
  bounds: SectionBounds;
};

type RemappedSection<Section extends { id: string }> = Section & {
  minHeight?: number;
  hidden?: boolean;
};

type UseInfiniteListResult<Section extends { id: string }> = {
  showMoreElement: ReactNode;
  remappedSections: Array<RemappedSection<Section>>;
};

const updateWithCheckEqual = <T,>(array: T[], setter: Dispatch<SetStateAction<T[]>>) => {
  setter((oldArray) => (JSON.stringify(oldArray) !== JSON.stringify(array) ? array : oldArray));
};

export const useInfiniteList = <Section extends { id: string }>(
  sections: Section[],
  sectionsRefs: Record<string, RefObject<HTMLDivElement | null>>,
  containerRef: RefObject<HTMLElement | null>,
): UseInfiniteListResult<Section> => {
  const [remappedSections, setRemappedSections] = useState<Array<RemappedSection<Section>>>(
    sections.slice(0, 1),
  );
  const sectionsDataRef = useRef<Record<string, SectionData<Section>>>({});
  const sectionsRef = useRef(sections);

  const { window, document } = useDOM();

  const recalculateSectionsBounds = useCallback(() => {
    sectionsDataRef.current = {};
    Object.entries(sectionsRefs).forEach(([sectionId, sectionRef]) => {
      if (sectionRef && sectionRef.current) {
        const sectionData = sections.find((section) => section.id === sectionId);
        if (sectionData) {
          sectionsDataRef.current[sectionId] = {
            data: sectionData,
            bounds: {
              height: sectionRef.current.offsetHeight,
              offsetTop: sectionRef.current.offsetTop,
            },
          };
        }
      }
    });
  }, [sections, sectionsRefs]);

  useEffect(
    function resetShowedConfig() {
      sectionsRef.current = sections;
      setRemappedSections(sections.slice(0, 1));
    },
    [sections],
  );

  const recalculateVisibleSections = useCallback(() => {
    if (!window || !document) {
      return;
    }
    const pageYOffset = window.pageYOffset;

    const newRemappedSections: Array<RemappedSection<Section>> = [];

    Object.values(sectionsDataRef.current).forEach(({ bounds, data }) => {
      if (
        bounds.offsetTop + bounds.height <= pageYOffset ||
        bounds.offsetTop >= pageYOffset + window.innerHeight
      ) {
        newRemappedSections.push({
          ...data,
          minHeight: bounds.height,
          hidden: true,
        });
        return;
      }
      newRemappedSections.push(data);
    });

    if (newRemappedSections.length < sectionsRef.current.length) {
      const maxScrollTop =
        document.documentElement.scrollHeight -
        window.innerHeight -
        SPINNER_HEIGHT -
        WINDOW_PADDING_BOTTOM;
      const isLoaderVisible = pageYOffset >= maxScrollTop;

      if (isLoaderVisible) {
        newRemappedSections.push(sectionsRef.current[newRemappedSections.length]);
      }
    }

    updateWithCheckEqual(newRemappedSections, setRemappedSections);
  }, [document, window]);

  useGlobalEventListener(window, 'scroll', recalculateVisibleSections);

  const onResize = useCallback(() => {
    recalculateSectionsBounds();
    recalculateVisibleSections();
  }, [recalculateSectionsBounds, recalculateVisibleSections]);

  useResizeObserver(window, onResize);
  useResizeObserver(containerRef, onResize);
  useEffect(onResize, [onResize]);

  return {
    remappedSections,
    showMoreElement: remappedSections.length < sectionsRef.current.length && <Spinner />,
  };
};
