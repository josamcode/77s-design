import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Categories - Design Platform",
  description: "Browse design categories for your project",
};

export default function Categories() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Categories</h1>
        <h2 className="text-xl font-medium mb-6 text-gray-700">Browse by design type:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link href="/categories/logo" className="block">
            <div className="bg-red-100 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-logo.svg" alt="Logo icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium">Logo & Brand Identity</p>
            </div>
          </Link>
          <Link href="/categories/animation" className="block">
            <div className="bg-indigo-100 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-animation.svg" alt="Animation icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium">Animation & Graphics</p>
            </div>
          </Link>
          <Link href="/categories/illustration" className="block">
            <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-illustration.svg" alt="Illustration icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium text-white">Illustration & Graphics</p>
            </div>
          </Link>
          <Link href="/categories/ui" className="block">
            <div className="bg-green-100 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-ui.svg" alt="UI icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium">UI/UX design</p>
            </div>
          </Link>
          <Link href="/categories/clothing" className="block">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-clothing.svg" alt="Clothing icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium text-white">Clothing & Merchandise</p>
            </div>
          </Link>
          <Link href="/categories/more" className="block">
            <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center h-full">
              <Image src="/icon-plus.svg" alt="Plus icon" width={40} height={40} />
              <p className="mt-2 text-center font-medium">More Categories</p>
            </div>
          </Link>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6 text-gray-700">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-medium mb-3">Logo Design</h3>
              <p className="text-gray-600 mb-4">Professional logo design services for your brand identity</p>
              <Link href="/categories/logo" className="text-red-500 hover:underline">Explore →</Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-medium mb-3">Website Design</h3>
              <p className="text-gray-600 mb-4">Modern and responsive website designs for your business</p>
              <Link href="/categories/web" className="text-red-500 hover:underline">Explore →</Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-medium mb-3">Packaging Design</h3>
              <p className="text-gray-600 mb-4">Eye-catching packaging designs that stand out on shelves</p>
              <Link href="/categories/packaging" className="text-red-500 hover:underline">Explore →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
