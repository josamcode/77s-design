import Categories from "@/components/HomePage/categories";
import Hero from "@/components/HomePage/HeroSection";
import HowItWorks from "@/components/HomePage/HowItWorks";
import ReferralBox from "@/components/HomePage/ReferralBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <ReferralBox />
    </>
  );
}
