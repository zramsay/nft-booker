import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitMainImg from "../../public/img/benefitMain.png";
import benefitOneImg from "../../public/img/benefitOne.png";
import benefitTwoImg from "../../public/img/benefitTwo.png";

const benefitMain = {
  title: "Driving Viral Growth Through Gamified Learn-to-Earn",
  desc: "CryptoLawyer.net’s viral marketing strategy leverages gamification and token rewards to increase user engagement and expand the platform’s reach.",
  image: benefitMainImg,
  bullets: [
    {
      title: "Gamified Growth",
      desc: "The Play-to-Learn-and-Earn model incentivizes users to invite others, creating a self-sustaining, viral growth loop fueled by token rewards.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Increased User Engagement",
      desc: "Educational tasks and game-like mechanics keep users engaged, driving continuous platform interaction and loyalty through token-based incentives.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Incentivized Referrals for Exponential Expansion",
      desc: "Users are rewarded for referring others, expanding the user base exponentially as every participant becomes a growth agent.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitOne = {
  title: "Enhancing Crypto-Asset Integrity via Participatory Rewards",
  desc: "Utilizes New European crypto regulations, promotes investor education, and trains & recruits evidentiary validators.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Utilizes New European Crypto Regulations",
      desc: "Leverages the latest European regulatory frameworks to strengthen crypto-asset integrity.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Promotes Investor Education",
      desc: "Encourages and enhances investor education to foster a more transparent ecosystem.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Trains & Recruits Evidentiary Validators",
      desc: "Actively trains and recruits validators who provide evidence-backed assurances.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Reducing Crypto-Asset Fraud by Gamifying Private Enforcement",
  desc: "Competitive litigation finance marketplace that increases ecosystem profitability and provides alpha for investors.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Competitive Litigation Finance Marketplace",
      desc: "Introduces a new competitive marketplace for litigation finance that enforces crypto-asset integrity.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Increases Services Ecosystem Profitability",
      desc: "Contributes to overall ecosystem profitability by aligning services and litigation finance strategies.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Intelligence & Service for a New Asset Class",
      desc: "Offers opportunity to investors in a newly emerging and rapidly evolving asset class.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitMain };
