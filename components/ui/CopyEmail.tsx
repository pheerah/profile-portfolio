"use client";

import { useState } from "react";
import { btnClass } from "./Button";
import { T } from "./T";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      className={btnClass("g")}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
    >
      {done ? <T en="Copied ✓" th="คัดลอกแล้ว ✓" /> : <T en="Copy email" th="คัดลอกอีเมล" />}
    </button>
  );
}
