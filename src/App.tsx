import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { ExternalLink } from "lucide-react";

// Use environment variables with fallbacks for development/testing
const NFT_CONTRACT_ADDRESS =
  import.meta.env.VITE_NFT_CONTRACT_ADDRESS ||
  "0x9340184741D938453bF66D77d551Cc04Ab2F4925"; // Fallback address for development
const SUPPORT_EMAIL =
  import.meta.env.VITE_SUPPORT_EMAIL || "support@aboutcircles.com"; // Fallback support email
const PURCHASE_URL =
  "https://app.metri.xyz/transfer/0x9a0953E46e8034E9dE02f632d8c2f5A75377cd53/crc/10000";

// Interface for NFT details
interface NFTDetails {
  contractName: string;
  eventName: string;
  keyExpiration?: string;
  price: string;
}

function App() {
  const [showContractInfo, setShowContractInfo] = useState(false);
  const [nftDetails] = useState<NFTDetails>({
    contractName: "DappCon25 Ticket",
    eventName: "DappCon 2025",
    keyExpiration: "16th-18th June, 2025",
    price: "10,000 CRC",
  });

  // Function to handle purchase button click
  const handlePurchase = () => {
    window.open(PURCHASE_URL, "_blank");
  };

  // Function to toggle contract info
  const toggleContractInfo = () => {
    setShowContractInfo(!showContractInfo);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large black blob - top left */}
        <div className="absolute -top-60 -left-32 w-96 h-96 bg-black rounded-full opacity-80"></div>

        {/* Medium black blob - bottom right */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black rounded-full opacity-60"></div>

        {/* Small accent blob - top right */}
        <div className="absolute -top-4 -right-28 w-64 h-64 bg-[#FFB800] rounded-full opacity-40"></div>

        {/* Geometric lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="dappcon-25-logo.png"
                alt="DappCon25 Logo"
                className="w-20 h-20 object-contain"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 w-20 h-20 bg-[#FFB800] rounded-lg opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              DappCon25
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
              Buy your DappCon 25 ticket with CRC. Click the button below to buy
              your ticket with Metri wallet
            </h2>
          </div>

          {/* Input Section */}
          <div className="space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-2xl">
            <div className="space-y-6">
              {/* Event Details */}
              <div className="space-y-3 text-left bg-white/60 rounded-2xl p-6 mb-6">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Event:</span>
                    <span className="text-gray-900">
                      {nftDetails.eventName}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Date:</span>
                    <span className="text-gray-900">
                      {nftDetails.keyExpiration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Venue:</span>
                    <span className="text-gray-900">Radialsystem, Berlin</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Price:</span>
                    <span className="text-gray-900">{nftDetails.price}</span>
                  </div>
                </div>
              </div>

              {/* Purchase Button */}
              <div className="flex flex-col justify-center">
                <Button
                  onClick={handlePurchase}
                  className="h-14 px-8 bg-[#FFB800] hover:bg-[#E6A600] text-black font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Purchase Ticket
                </Button>
              </div>
            </div>
          </div>

          {/* Support Link */}
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Need help?{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[#FFB800] hover:text-[#E6A600] font-semibold underline transition-colors duration-300"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* View Contract Link */}
        {/* <div className="absolute bottom-8 right-8">
          <button
            onClick={toggleContractInfo}
            className="text-gray-500 hover:text-[#FFB800] text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
          >
            <span>{showContractInfo ? "Hide contract" : "View contract"}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div> */}

        {/* Contract Info Overlay */}
        {showContractInfo && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[80vh] overflow-auto shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Contract Information</h3>
                <button
                  onClick={toggleContractInfo}
                  className="text-gray-500 hover:text-black"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold mb-1">NFT Contract Address:</p>
                  <p className="text-sm break-all font-mono">
                    {NFT_CONTRACT_ADDRESS}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold mb-1">Network:</p>
                  <p>Gnosis Chain</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-semibold mb-1">Contract Name:</p>
                  <p>{nftDetails.contractName}</p>
                  <p className="font-semibold mb-1 mt-3">Event:</p>
                  <p>{nftDetails.eventName}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
