"use client";

import { useState } from "react";

export default function AirdropChecker() {

  const [eligible, setEligible] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  function checkEligibility() {
    setLoading(true);

    setTimeout(() => {
      setEligible(Math.random() > 0.5);
      setLoading(false);
    }, 1000);
  }

  return (
    <div>
      <button onClick={checkEligibility}>
        Check Airdrop
      </button>

      {loading && <p>Checking...</p>}

      {eligible !== null && (
        <p>{eligible ? "You are eligible!" : "Not eligible"}</p>
      )}
    </div>
  );
}