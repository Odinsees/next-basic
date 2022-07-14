import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={20}
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.09091C0 0.488417 0.467181 0 1.04348 0H22.9565C23.5328 0 24 0.488417 24 1.09091C24 1.6934 23.5328 2.18182 22.9565 2.18182H1.04348C0.467181 2.18182 0 1.6934 0 1.09091ZM0 10C0 9.39751 0.467181 8.90909 1.04348 8.90909H22.9565C23.5328 8.90909 24 9.39751 24 10C24 10.6025 23.5328 11.0909 22.9565 11.0909H1.04348C0.467181 11.0909 0 10.6025 0 10ZM0 18.9091C0 18.3066 0.467181 17.8182 1.04348 17.8182H22.9565C23.5328 17.8182 24 18.3066 24 18.9091C24 19.5116 23.5328 20 22.9565 20H1.04348C0.467181 20 0 19.5116 0 18.9091Z"
      fill="#161616"
    />
  </svg>
);

export default SvgComponent;
