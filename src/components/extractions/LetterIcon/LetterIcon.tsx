import { SVGProps } from 'react';

export const LetterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="#151515" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path d="m15.6.826-13.99.528A1 1 0 0 0 .65 2.39l.415 10.992a1 1 0 0 0 1.037.962l13.99-.528a1 1 0 0 0 .961-1.037l-.414-10.992A1 1 0 0 0 15.6.826ZM3.026 12.308l-.34-8.993 11.992-.452.339 8.993-11.992.452Z" />
      <path d="M16.315 2.562 9.5 8.822a1 1 0 0 1-1.3.046L1.024 3.134c-.724-.578-.34-1.745.587-1.78L15.6.826c.929-.035 1.398 1.106.714 1.736Zm-11.94.689 4.405 3.52 4.18-3.844-8.586.324Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.611 1.392 16.6.789l.528 13.99-15.989.603z" />
      </clipPath>
    </defs>
  </svg>
);
