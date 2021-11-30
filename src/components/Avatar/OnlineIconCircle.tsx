import * as React from 'react';

const OnlineIconCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" {...props}>
    <path d="M8 17.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" vkuiClass="Avatar__online_background" />
    <path d="M8 15A5 5 0 1 0 8 5a5 5 0 0 0 0 10Z" fill="#4BB34B" />
  </svg>
);

export default OnlineIconCircle;
