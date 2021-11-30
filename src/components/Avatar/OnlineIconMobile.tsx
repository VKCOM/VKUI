import * as React from 'react';

const OnlineIconMobile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" {...props}>
    <path
      d="M8 0H4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
      vkuiClass="Avatar__online_background"
    />
    <path
      d="M8 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4Zm0 3H4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 8 5Z"
      fill="#4BB34B"
    />
  </svg>
);

export default OnlineIconMobile;
