"use client";

import { useWallet } from "../hooks/useWallet";

export default function WalletConnect() {

  const { address, connectWallet } = useWallet();

  return (
    <div>
      {address ? (
        <p>{address}</p>
      ) : (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}