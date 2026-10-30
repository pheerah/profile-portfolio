import type { ReactNode } from "react";

/**
 * Bilingual text. Both languages are rendered; CSS shows the one matching <html data-lang>.
 * Each span declares its language, and the Thai one is kept out of search snippets so a result
 * for the English page never shows Thai text.
 */
export function T({ en, th }: { en: ReactNode; th: ReactNode }) {
  return (
    <>
      <span data-l="en" lang="en">{en}</span>
      <span data-l="th" lang="th" data-nosnippet>{th}</span>
    </>
  );
}

export type Bi = readonly [string, string];

export function B({ v }: { v: Bi }) {
  return <T en={v[0]} th={v[1]} />;
}
