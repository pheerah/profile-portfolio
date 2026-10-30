"use client";

import { useEffect, useState } from "react";

/** Profile photo with a text fallback. Put the photo at public/img/profile.jpg. */
export default function Avatar() {
  const [ok, setOk] = useState(false);

  // Only render the <img> once the file is known to load, so a missing file never shows alt text.
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setOk(true);
    im.src = "/img/profile.jpg";
  }, []);

  return (
    <div className="avatar">
      {!ok && "PP"}
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/img/profile.jpg" alt="Pheerah Praditthaphong" />
      )}
    </div>
  );
}
