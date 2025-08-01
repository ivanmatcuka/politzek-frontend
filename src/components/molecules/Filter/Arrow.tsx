import { SVGProps } from 'react';

export const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 13.227 18.445 7.5 20 9.137 13 16.5 6 9.137l1.555-1.636L13 13.228v-.001Z"
      fill="currentColor"
    />
  </svg>
);
