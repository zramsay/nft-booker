import Image from "next/image";
import React from "react";
import { Container } from "@/components/nextly-components/Container";

import userOneImg from "../../public/img/user1.png";
import userTwoImg from "../../public/img/user2.png";
import userThreeImg from "../../public/img/user3.png";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              New Crypto <Mark>Regulations</Mark> Create Opportunity
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

            <div>Europe</div>


            <Avatar
              image={userOneImg}
              name="Markets in Crypto-Assets (MiCA)"
              title="2024 "
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Token <Mark>Trials</Mark>
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

            <div>Crypto-native learn to earn game</div>

            <Avatar
              image={userTwoImg}
              name="Earn rewards for completing investment & technical education tasks"
          
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-800 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              <Mark>CryptoLawyer</Mark>.net
            </p>
            <div className="h-8"></div> {/* 8 is for the spacing, can be adjusted to your needs */}

Global Litigation Finance Network

<div></div>
            <Avatar
              image={userThreeImg}
              name="Smart Contract Management + MultiChain DAO Governance"
            
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-yellow-500 bg-yellow-100 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-900 dark:bg-yellow-900 dark:text-yellow-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
