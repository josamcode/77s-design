import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Categories - Design Platform",
  description: "Browse design categories for your project",
};

export default function Categories() {
  return (
    <>
      <section className="py-12 pt-24 px-6 bg-[#F5F7FA]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-[#545457]">
            All Categories
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/" className="block">
              <Image
                src="/categories/1.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/categories/2.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/categories/3.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/categories/4.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/categories/5.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/categories/6.png"
                alt="Logo icon"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-20 pt-16 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-1/3 w-full text-center lg:text-left">
          <ul>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo design
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & brand identity pack
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & Brand guide
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & Stationery
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & product packaging
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & social media pack
            </li>
            <li className="border-b-2 border-[#545457] text[#545457] text-xl pb-6 mb-6">
              Logo & website Design
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full mt-24 mb-10 lg:mb-0">
          <Image
            src="/categories/7.png"
            alt="Hero Illustration"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto py-20 pt-16 px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-4xl font-bold text-[#F95E5A] mb-4">
            Logo design
          </h2>
          <p className="text-[#545457] text-lg mb-8 text-[20px]">
            Start and see your project transform into reality in ways that
            exceed your imagination, With multiple designs created just for you
          </p>
          <ul className="text-left mb-10 space-y-4 text-[#545457] text-[20px]">
            <li className="flex items-start gap-2">
              <span className="text-[#00C7C7] font-bold">✓</span>
              Dozens of unique, editable designs in digital, print, and web file
              formats
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C7C7] font-bold">✓</span>
              Customer support to assist you throughout the process
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C7C7] font-bold">✓</span>
              Full-copyright ownership of designs and ready-to-use files
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C7C7] font-bold">✓</span>
              All designers have undergone screening and review processes for
              top-quality work
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C7C7] font-bold">✓</span>
              Money-back guarantee*
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-16 justify-center">
            <button className="bg-[#4747C7] hover:bg-[#4735c7] text-white py-3 px-20 rounded font-semibold transition">
              START CONTEST
            </button>
            <button className="bg-[#00C7C7] hover:bg-[#00a395] text-white py-3 px-20 rounded font-semibold transition">
              HIRING 1 to 1
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
