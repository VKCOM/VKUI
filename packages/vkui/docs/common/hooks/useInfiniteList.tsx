import { type ReactNode, type RefObject, useEffect, useMemo, useRef, useState } from 'react';
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

export const useInfiniteList = <Section extends { id: string }>(
  sections: Section[],
  sectionsRefs: Record<string, RefObject<HTMLDivElement | null>>,
  containerRef: RefObject<HTMLElement | null>,
): UseInfiniteListResult<Section> => {
  const { window, document } = useDOM();

  const [data, setData] = useState<{
    mountedSections: string[];
    sectionsVisibilityData: Record<string, RemappedSection<Section>>;
  }>({
    mountedSections: [],
    sectionsVisibilityData: {},
  });

  const sectionsDataRef = useRef<Record<string, SectionData<Section>>>({});

  const recalculateSectionsBounds = () => {
    const newSectionsData: Record<string, SectionData<Section>> = {};
    Object.entries(sectionsRefs).forEach(([sectionId, sectionRef]) => {
      if (sectionRef && sectionRef.current) {
        const sectionData = sections.find((section) => section.id === sectionId);
        if (sectionData) {
          newSectionsData[sectionId] = {
            data: sectionData,
            bounds: {
              height: sectionRef.current.offsetHeight,
              offsetTop: sectionRef.current.offsetTop,
            },
          };
        }
      }
    });
    sectionsDataRef.current = newSectionsData;
  };

  const showMoreVisible = () => {
    if (!window || !document) {
      return;
    }
    const pageYOffset = window.pageYOffset;

    setData((oldData) => {
      const { mountedSections, sectionsVisibilityData } = oldData;
      if (mountedSections.length < sections.length) {
        const maxScrollTop =
          document.documentElement.scrollHeight -
          window.innerHeight -
          SPINNER_HEIGHT -
          WINDOW_PADDING_BOTTOM;
        const isLoaderVisible = pageYOffset >= maxScrollTop;
        if (isLoaderVisible) {
          const section = sections[mountedSections.length];

          return {
            mountedSections: [...mountedSections, section.id],
            sectionsVisibilityData: {
              ...sectionsVisibilityData,
              [section.id]: section,
            },
          };
        }
      }
      return oldData;
    });
  };

  const recalculateVisibleSections = () => {
    const sectionsData = sectionsDataRef.current;

    if (!window || !document) {
      return;
    }
    const pageYOffset = window.pageYOffset;

    setData((oldData) => {
      const { mountedSections } = oldData;
      const newSectionsVisibilityData: Record<string, RemappedSection<Section>> = {};

      mountedSections.forEach((sectionId) => {
        const sectionData = sectionsData[sectionId];
        if (!sectionData) {
          return;
        }
        const { bounds, data } = sectionData;
        if (
          bounds.offsetTop + bounds.height <= pageYOffset ||
          bounds.offsetTop >= pageYOffset + window.innerHeight
        ) {
          newSectionsVisibilityData[sectionId] = {
            ...data,
            minHeight: bounds.height,
            hidden: true,
          };
          return;
        }
        newSectionsVisibilityData[sectionId] = data;
      });

      return {
        mountedSections,
        sectionsVisibilityData: newSectionsVisibilityData,
      };
    });

    showMoreVisible();
  };

  useEffect(() => setData({ mountedSections: [], sectionsVisibilityData: {} }), [sections]);

  useEffect(recalculateSectionsBounds, [sectionsRefs]);

  useResizeObserver(containerRef, () => requestAnimationFrame(showMoreVisible));

  useGlobalEventListener(window, 'scroll', recalculateVisibleSections);

  const remappedSections: Array<RemappedSection<Section>> = useMemo(() => {
    return data.mountedSections
      .map((sectionId) => data.sectionsVisibilityData[sectionId])
      .filter(Boolean);
  }, [data.mountedSections, data.sectionsVisibilityData]);

  return {
    remappedSections,
    showMoreElement: data.mountedSections.length < sections.length && <Spinner />,
  };
};
