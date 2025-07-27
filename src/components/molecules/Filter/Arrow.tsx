import { SVGProps } from 'react';

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fill="currentColor"
      d="M13 13.227 18.445 7.5 20 9.137 13 16.5 6 9.137l1.555-1.636L13 13.228v-.001Z"
    />
  </svg>
);
