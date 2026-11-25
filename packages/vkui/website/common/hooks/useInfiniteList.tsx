import { type RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useResizeObserver } from '../../../src/hooks/useResizeObserver';
import { useStableCallback } from '../../../src/hooks/useStableCallback';
import { useDOM } from '../../../src/lib/dom';
import { useIsomorphicLayoutEffect } from '../../../src/lib/useIsomorphicLayoutEffect';

const LOAD_MORE_TRIGGER_HEIGHT = 24;
const VIEWPORT_PADDING_BOTTOM = 64;

type SectionBounds = {
  height: number;
  offsetTop: number;
};

type SectionData<Section extends { id: string }> = {
  data: Section;
  bounds: SectionBounds;
};

type RemappedSection<Section extends { id: string }> = Section & {
  minHeight?: number | undefined;
  hidden?: boolean | undefined;
};

type UseInfiniteListResult<Section extends { id: string }> = {
  hasMoreSections: boolean;
  remappedSections: Array<RemappedSection<Section>>;
};

const getInitialData = <Section extends { id: string }>(
  sections: Section[],
  initialSectionsCount: number,
) => {
  const initialSections = sections.slice(0, initialSectionsCount);
  return {
    mountedSections: initialSections.map(({ id }) => id),
    sectionsVisibilityData: Object.fromEntries(
      initialSections.map((section) => [section.id, section]),
    ),
  };
};

export const useInfiniteList = <Section extends { id: string }>(
  sections: Section[],
  sectionsRefs: Record<string, RefObject<HTMLDivElement | null>>,
  contentRef: RefObject<HTMLElement | null>,
  scrollContainerRef?: RefObject<HTMLElement | null>,
  initialSectionsCount = 1,
): UseInfiniteListResult<Section> => {
  const { window, document } = useDOM();
  const getScrollContainer = () => scrollContainerRef?.current ?? document?.documentElement;

  const [data, setData] = useState(() => getInitialData(sections, initialSectionsCount));

  const sectionsDataRef = useRef<Record<string, SectionData<Section>>>({});

  const recalculateSectionsBounds = useStableCallback(() => {
    const scrollContainer = getScrollContainer();
    if (!scrollContainer) {
      return;
    }
    const containerTop = scrollContainerRef ? scrollContainer.getBoundingClientRect().top : 0;
    const sectionsById = new Map(sections.map((section) => [section.id, section]));
    const newSectionsData: Record<string, SectionData<Section>> = {};
    Object.entries(sectionsRefs).forEach(([sectionId, sectionRef]) => {
      if (sectionRef && sectionRef.current) {
        const sectionData = sectionsById.get(sectionId);
        if (sectionData) {
          const sectionBounds = sectionRef.current.getBoundingClientRect();
          newSectionsData[sectionId] = {
            data: sectionData,
            bounds: {
              height: sectionBounds.height,
              offsetTop: sectionBounds.top - containerTop + scrollContainer.scrollTop,
            },
          };
        }
      }
    });
    sectionsDataRef.current = newSectionsData;
  });

  const showMoreVisible = () => {
    const scrollContainer = getScrollContainer();
    if (!scrollContainer) {
      return;
    }

    setData((oldData) => {
      const { mountedSections, sectionsVisibilityData } = oldData;
      if (mountedSections.length < sections.length) {
        const isLoaderVisible =
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight - LOAD_MORE_TRIGGER_HEIGHT - VIEWPORT_PADDING_BOTTOM;
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

  const recalculateVisibleSections = useStableCallback(() => {
    const sectionsData = sectionsDataRef.current;

    const scrollContainer = getScrollContainer();
    if (!scrollContainer) {
      return;
    }
    setData((oldData) => {
      const { mountedSections, sectionsVisibilityData } = oldData;
      const newSectionsVisibilityData: Record<string, RemappedSection<Section>> = {};

      mountedSections.forEach((sectionId) => {
        const sectionData = sectionsData[sectionId];
        if (!sectionData) {
          newSectionsVisibilityData[sectionId] = sectionsVisibilityData[sectionId];
          return;
        }
        const { bounds, data } = sectionData;
        if (
          bounds.offsetTop + bounds.height <= scrollContainer.scrollTop ||
          bounds.offsetTop >= scrollContainer.scrollTop + scrollContainer.clientHeight
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
  });

  useIsomorphicLayoutEffect(() => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    setData(getInitialData(sections, initialSectionsCount));
  }, [sections, scrollContainerRef, initialSectionsCount]);

  useEffect(recalculateSectionsBounds, [sections, sectionsRefs, recalculateSectionsBounds]);

  const onResize = () => {
    recalculateSectionsBounds();
    showMoreVisible();
  };
  useResizeObserver(contentRef, onResize);
  useResizeObserver(scrollContainerRef ?? window, onResize);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current ?? window;
    scrollContainer?.addEventListener('scroll', recalculateVisibleSections);

    return () => scrollContainer?.removeEventListener('scroll', recalculateVisibleSections);
  }, [scrollContainerRef, window, recalculateVisibleSections]);

  const remappedSections: Array<RemappedSection<Section>> = useMemo(() => {
    return data.mountedSections
      .map((sectionId) => data.sectionsVisibilityData[sectionId])
      .filter(Boolean);
  }, [data.mountedSections, data.sectionsVisibilityData]);

  return {
    remappedSections,
    hasMoreSections: data.mountedSections.length < sections.length,
  };
};
