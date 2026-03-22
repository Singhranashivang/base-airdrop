"use client";

import { useState } from "react";

export default function AirdropChecker() {

  const [eligible, setEligible] = useState<boolean | null>(null);

  async function checkEligibility() {

    const res = await fetch("/api/airdrop");
    const data = await res.json();

    setEligible(data.eligible);
  }

  return (
    <div>
<button onClick={checkEligibility}>
  Check Again
</button>
<p>Click check eligibility</p>

      {eligible !== null && (
<p>{eligible ? "You are eligible 🎉" : "You are not eligible ❌"}</p>      )}

    </div>
  );
}