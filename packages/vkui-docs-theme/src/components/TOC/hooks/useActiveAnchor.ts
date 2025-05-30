import React from 'react';

let observer: IntersectionObserver;

export function useActiveAnchor(anchorIds: string[]): string | null {
  const [activeAnchorId, setActiveAnchorId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!observer) {
      const navbarHeight =
        getComputedStyle(document.body).getPropertyValue('--vkui_docs--navbar-height') || '0%';

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveAnchorId(entry.target.id);
            }
          });
        },
        {
          rootMargin: `-${navbarHeight} 0% -70%`,
          threshold: 0.5,
        },
      );
    }

    anchorIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      anchorIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [anchorIds]);

  return activeAnchorId;
}
