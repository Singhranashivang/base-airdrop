"use client";

import { useState } from "react";

export default function AirdropChecker() {

  const [eligible, setEligible] = useState(false);

  function checkEligibility() {
    setEligible(true);
  }

  return (
    <div>
      <button onClick={checkEligibility}>
        Check Airdrop
      </button>

      {eligible && <p>You are eligible!</p>}
    </div>
  );
}