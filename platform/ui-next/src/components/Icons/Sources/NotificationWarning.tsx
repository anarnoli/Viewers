import React from 'react';
import type { IconProps } from '../types';

export const NotificationInfo = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 13 13"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        fill="#F3DC43"
        stroke="#F3DC43"
        d="M1.217 5.076L5.54.751c.391-.39 1.024-.39 1.415 0l4.324 4.325c.391.39.391 1.024 0 1.414l-4.324 4.325c-.39.39-1.024.39-1.415 0L1.217 6.49c-.39-.39-.39-1.023 0-1.414z"
        transform="translate(0 1)"
      />
      <g stroke="#000">
        <path
          strokeWidth="1.5"
          d="M0.5 3L0.5 0"
          transform="translate(0 1) translate(6 3)"
        />
        <path
          d="M0.5 4.5L0.5 4.5"
          transform="translate(0 1) translate(6 3)"
        />
        <path
          strokeWidth="1.5"
          d="M.489 5.25c-.065.002-.127.03-.172.078-.044.048-.068.112-.065.177.005.135.115.243.25.245h.009c.065-.002.127-.03.171-.078.045-.048.068-.112.066-.177-.004-.134-.112-.241-.246-.245"
          transform="translate(0 1) translate(6 3)"
        />
      </g>
    </g>
  </svg>
);

export default NotificationInfo;
