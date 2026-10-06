export function DoPixelGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="none">
      <path
        d="M10 0V240M20 0V240M30 0V240M40 0V240M50 0V240M60 0V240M70 0V240M80 0V240M90 0V240M100 0V240M110 0V240M120 0V240M130 0V240M140 0V240M150 0V240M160 0V240M170 0V240M180 0V240M190 0V240M200 0V240M210 0V240M220 0V240M230 0V240M0 10H240M0 20H240M0 30H240M0 40H240M0 50H240M0 60H240M0 70H240M0 80H240M0 90H240M0 100H240M0 110H240M0 120H240M0 130H240M0 140H240M0 150H240M0 160H240M0 170H240M0 180H240M0 190H240M0 200H240M0 210H240M0 220H240M0 230H240"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <rect x="0.5" y="0.5" width="239" height="239" stroke="currentColor" strokeOpacity="0.2" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23.27 56.38C20 62.8 20 71.2 20 88v64c0 16.8 0 25.2 3.27 31.62a30 30 0 0 0 13.11 13.11C42.8 200 51.2 200 68 200h104c16.8 0 25.2 0 31.62-3.27a30 30 0 0 0 13.11-13.11C220 177.2 220 168.8 220 152v-44c0-16.8 0-25.2-3.27-31.62a30 30 0 0 0-13.11-13.11C197.2 60 188.8 60 172 60h-52l-15.31-15.31c-1.73-1.73-2.6-2.6-3.6-3.22a10 10 0 0 0-2.9-1.2C97.04 40 95.82 40 93.37 40H68c-16.8 0-25.2 0-31.62 3.27a30 30 0 0 0-13.11 13.11M150 85a10 10 0 0 0-10 10v25h-25a10.001 10.001 0 0 0 0 20h25v25a10.001 10.001 0 0 0 20 0v-25h25a10.001 10.001 0 0 0 0-20h-25V95a10 10 0 0 0-10-10"
        clipRule="evenodd"
        opacity="0.9"
      />
    </svg>
  );
}
export function DontPixelGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="none">
      <defs>
        <mask id="dont-pixel-grid-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAABO0lEQVRYCe1VCw3CMBAdBAFImAPmgElAQnEACggOcEAlgANQQFAADsABvEd2pFvadaPll+wll7veXe+ur4UlSYeOgS8z0LP0H8KnICNLTFx7GFoWMXWGYhfIrYEsYjaWWqcGjc3hog6Rt2xuDuKzyeoBoiBO5Ij4CsWIz1wTqA8NQDb40B/oixFJL1GHUgc2T20JCs4QijdGUe2ppSQ3JgOktjViDtC6OTf89QBzHKBnyJQnKqCgzRhzrQhhQFsr2p0ruztJBq5AA/8aOVsj7wx7V6xz6LSwqcaG7TQVIiE/Qw4k0DDqailJDLkCqRGkf2qAa9BRync+8tQ6S9x8hE+nBFvqHPn85PIgGeQlnLCr7vHEiLGHE5z8nUPwe1Fih/9WVaRwTCC+e6zu862PSNCQqy+xi3cMfJSBO30I14JiyFktAAAAAElFTkSuQmCC"
            width="240"
            height="240"
            preserveAspectRatio="none"
            style={{ imageRendering: 'pixelated' }}
          />
        </mask>
        <pattern id="dont-pixel-grid" width="7.5" height="7.5" patternUnits="userSpaceOnUse">
          <path d="M7.5 0H0V7.5" stroke="currentColor" strokeOpacity="0.2" />
        </pattern>
      </defs>
      <rect
        width="240"
        height="240"
        fill="currentColor"
        mask="url(#dont-pixel-grid-mask)"
        opacity="0.9"
      />
      <rect x="1" y="1" width="238" height="238" fill="url(#dont-pixel-grid)" />
      <rect x="0.5" y="0.5" width="239" height="239" stroke="currentColor" strokeOpacity="0.1" />
    </svg>
  );
}
