"use client";

import { useState } from "react";

export default function Referral() {

  const [referralLink, setReferralLink] = useState("");

  function generateReferral() {
    const link = window.location.origin + "?ref=" + Math.random().toString(36).substring(7);
    setReferralLink(link);
  }

  return (
    <div>

      <button onClick={generateReferral}>
        Generate Referral Link
      </button>

      {referralLink && (
        <p>{referralLink}</p>
      )}

    </div>
  );
}