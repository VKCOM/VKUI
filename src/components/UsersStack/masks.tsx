import { canUseDOM, onDOMLoaded } from '../../lib/dom';

let masksCreated = false;

export function createMasks(): void {
  if (!canUseDOM || masksCreated) {
    return;
  }

  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttributeNS(null, 'id', '__SVG_MASKS_NODE__');
  svgElement.setAttributeNS(null, 'width', '0');
  svgElement.setAttributeNS(null, 'height', '0');
  svgElement.style.position = 'absolute';
  svgElement.style.width = '0px';
  svgElement.style.height = '0px';

  svgElement.innerHTML = `<defs>
  <clipPath id="users_stack_mask_24_left">
    <path d="M3.9971785,12 C3.9971785,9.49005736 3.33667467,7.13438366 2.18,5.09731189 C4.35181237,2.01417617 7.93927741,0 11.9971785,0 C18.6245955,0 23.9971785,5.372583 23.9971785,12 C23.9971785,18.627417 18.6245955,24 11.9971785,24 C7.93927741,24 4.35181237,21.9858238 2.18,18.9026881 C3.33667467,16.8656163 3.9971785,14.5099426 3.9971785,12 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_24_right">
    <path d="M21.8171785,5.09731189 C20.6605038,7.13438366 20,9.49005736 20,12 C20,14.5099426 20.6605038,16.8656163 21.8171785,18.9026881 C19.6453661,21.9858238 16.0579011,24 12,24 C5.372583,24 3.90798505e-14,18.627417 3.90798505e-14,12 C3.90798505e-14,5.372583 5.372583,0 12,0 C16.0579011,0 19.6453661,2.01417617 21.8171785,5.09731189 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_left">
    <path d="M2.13430019,23.9892466 C3.32858917,21.5820026 4,18.8694095 4,16 C4,13.1305905 3.32858917,10.4179974 2.13430019,8.0107534 C4.89924175,3.22241289 10.0733034,-2.30926389e-14 16,-2.30926389e-14 C24.836556,-2.30926389e-14 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C10.0733034,32 4.89924175,28.7775871 2.13430019,23.9892466 L2.13430019,23.9892466 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_right">
    <path d="M29.8656998,8.0107534 C28.6714108,10.4179974 28,13.1305905 28,16 C28,18.8694095 28.6714108,21.5820026 29.8656998,23.9892466 C27.1007583,28.7775871 21.9266966,32 16,32 C7.163444,32 3.90798505e-14,24.836556 3.90798505e-14,16 C3.90798505e-14,7.163444 7.163444,0 16,0 C21.9266966,0 27.1007583,3.22241289 29.8656998,8.0107534 Z"></path>
  </clipPath>
</defs>`;

  onDOMLoaded(() => {
    document.body.appendChild(svgElement);
  });
  masksCreated = true;
}
