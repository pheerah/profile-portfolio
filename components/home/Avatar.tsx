"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/** Profile photo with a text fallback. Put the photo at public/img/profile.jpg (see SITE.profilePhoto). */
export default function Avatar() {
  const [ok, setOk] = useState(false);

  // Only render the <img> once the file is known to load, so a missing file never shows alt text.
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setOk(true);
    im.src = SITE.profilePhoto;
  }, []);

  return (
    <div className="avatar">
      {!ok && "PP"}
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={SITE.profilePhoto} alt={SITE.name} />
      )}
    </div>
  );
}
