"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const Home = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  const handlePickMyBrainClick = () => {
    if (connectedAddress) {
      // If wallet is connected, redirect to Calendly
      router.push("https://calendly.com/ngk26200/30min");
    } else {
      // Otherwise, alert user to connect their wallet
      alert("Please connect your wallet to schedule a call.");
    }
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Nina Kilbride</span>
            <span className="block text-4xl font-bold">Law Meets Code</span>
          </h1>
          <p className="text-center text-lg">A decade of crypto-law experience</p>
          <p className="text-center text-lg">Dedicated to the success of Web3 founders</p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            {/* First CTA: Redirect to CryptoLawyer.net */}
            <a href="https://www.cryptolawyer.net" className="flex flex-col bg-base-300 px-10 py-10 text-center text-bold text-lg text-base-100 items-center max-w-xs rounded-3xl cursor-pointer">
              <h2>Visit CryptoLawyer.net</h2>
              <p>Web3 litigation finance platform</p>
            </a>

            {/* Second CTA: Check wallet connection and redirect to Calendly */}
            <div
              onClick={handlePickMyBrainClick}
              className="flex flex-col bg-base-300 px-10 py-10 text-center text-bold text-lg text-base-100 items-center max-w-xs rounded-3xl cursor-pointer"
            >
              <h2>Pick My Brain</h2>
              <p>Free 30-minute chat for Web3 founders</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
