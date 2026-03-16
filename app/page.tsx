import WalletConnect from "../components/WalletConnect";
import AirdropChecker from "../components/AirdropChecker";
import ClaimButton from "../components/ClaimButton";



export default function Home() {
  return (
    <main>
      <h1>Base Airdrop Dashboard</h1>
      <WalletConnect />
      <AirdropChecker />
      <ClaimButton />
    </main>
  );
}