"use client";

import { useState } from "react";
import { generateReferralCode } from "../utils/generateReferral";


export default function Referral() {

  const [referralLink, setReferralLink] = useState("");


 function generateReferral() {
  const link = window.location.origin + "?ref=" + generateReferralCode();
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