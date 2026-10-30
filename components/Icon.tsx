import type { ReactNode } from "react";

export function Svg({ children, w = 2 }: { children: ReactNode; w?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <Svg w={2.2}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
    </Svg>
  );
}

export const icons = {
  pm: (
    <Svg>
      <path d="M4 6h16M4 12h10M4 18h6" />
      <circle cx="18" cy="16" r="3" />
    </Svg>
  ),
  po: (
    <Svg>
      <path d="M9 11l3 3 8-8M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h9" />
    </Svg>
  ),
  tech: (
    <Svg>
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </Svg>
  ),
  table: (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 10h18M9 10v10" />
    </Svg>
  ),
  check: (
    <Svg>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </Svg>
  ),
  chart: (
    <Svg>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
    </Svg>
  ),
  screen: (
    <Svg>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
    </Svg>
  ),
  user: (
    <Svg>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </Svg>
  ),
  phone: (
    <Svg>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </Svg>
  ),
};
