import type { ReactNode } from "react";

/** Bilingual text. Both languages are rendered; CSS shows the one matching <html data-lang>. */
export function T({ en, th }: { en: ReactNode; th: ReactNode }) {
  return (
    <>
      <span data-l="en">{en}</span>
      <span data-l="th">{th}</span>
    </>
  );
}

export type Bi = readonly [string, string];

export function B({ v }: { v: Bi }) {
  return <T en={v[0]} th={v[1]} />;
}
