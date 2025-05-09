import React from 'react';
import type { IconProps } from '../types';

export const StatusError = (props: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
    >
      <path d="M0 0h16v16H0z" />
      <rect
        stroke="#7BB2CE"
        fill="#0D0E24"
        x=".5"
        y=".5"
        width="15"
        height="15"
        rx="7.5"
      />
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.002 8.5v-5M7.989 11.5a.245.245 0 0 0-.237.255.254.254 0 0 0 .25.245h.009a.246.246 0 0 0 .237-.255.253.253 0 0 0-.246-.245"
      />
    </g>
  </svg>
);

export default StatusError;
