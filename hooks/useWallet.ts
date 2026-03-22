import { useState } from "react";

export function useWallet() {

    
  const [address, setAddress] = useState<string | null>(null);

  function connectWallet() {
    setAddress("0x123...abc");
    console.log("Wallet connected:", address);
  }

  return { address, connectWallet };
}