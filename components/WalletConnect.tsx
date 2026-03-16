"use client";

import { useWallet } from "../hooks/useWallet";
import { formatAddress } from "../utils/formatAddress";


export default function WalletConnect() {

  const { address, connectWallet } = useWallet();

  return (
    <div>
      {address ? (
       <p>{formatAddress(address)}</p>
      ) : (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}