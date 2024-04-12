"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import localFont from "next/font/local";
import UploadButton from "./uploadButton";
import Web3 from "web3";

const features = [
  {
    name: "Proof of Contribution",
    description: "We store proof of contribution on chain.",
  },
  {
    name: "Data Storage",
    description:
      "The data itself is stored on Lighthouse, powered by Filecoin and IPSJ.",
  },
  {
    name: "Data Validation",
    description:
      "To prevent bad actors and ensure data quality, contributors stake a small amount of eth, which will be returned upon data validation",
  },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
export default function Home() {
  const [account, setAccount] = useState("");
  let accounts;
  let userAddress;

  const fetchAccount = async () => {
    try {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async () => {
          const web3 = new Web3(window.ethereum);
          accounts = await web3.eth.getAccounts();
          console.log(accounts);
          userAddress = accounts[0];
          setAccount(userAddress);

          window.ethereum.on("accountsChanged", async (accounts: any[]) => {
            // handle account change
            accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];
            setAccount(userAddress);
          });

          window.ethereum.on("disconnect", () => {
            // handle metamask logout
            console.log("disconnect");
            setAccount("");
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = () => {
    setAccount("");
  };

  useEffect(() => {
    // call the function
    fetchAccount()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="video-overlay">
        <video
          width="100%"
          height="50vh"
          autoPlay
          loop
          muted
          src="/video.mp4"

          // className="transform rotate-180"
        />
        <div className="p-4 absolute top-10 right-6 z-50">
          {!account ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              onClick={fetchAccount}
            >
              Connect to MetaMask
            </button>
          ) : null}
          {account ? (
            <>
              <p className="text-gray-700">Your account address: {account}</p>
              <button onClick={handleDisconnect}>disconnect</button>
            </>
          ) : null}
        </div>
        <div
          style={{
            position: "absolute",
            top: "30rem",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
        >
          <h1 className={`shiny-silver-text text-5xl sm:text-8xl`}>
            Decentralize AI training
          </h1>
          <p
            className={` text-md sm:text-xl mt-12 font-light`}
            style={{ color: "#c0c0c0" }}
          >
            Imagenet is a platform dedicated to decentralizing AI training data.
            Contributors are compensated through smart contracts, guaranteeing
            fair and prompt payment. All of our data is stored in peer to peer
            decentralized storage.
          </p>

          <div className="justify-center flex -top-40 w-full">
            <UploadButton />
          </div>
        </div>
      </div>

      <div
        style={{
          background: "rgba(17, 13, 17, 1)",
          position: "relative",
        }}
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#c0c0c0] sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-400">
              Imagenet is a platform dedicated to decentralizing AI training
              data. Contributors are compensated through smart contracts,
              guaranteeing fair and prompt payment. All of our data is stored in
              peer to peer decentralized storage.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-300 pt-4"
                >
                  <dt className="font-medium text-gray-300">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
