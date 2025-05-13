import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Designers - Design Platform",
  description: "Find talented designers for your project",
};

export default function Designers() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Designers</h1>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">All Designers</button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">Logo Specialists</button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">Web Designers</button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">Illustrators</button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">UI/UX Designers</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* These would be actual designers from a database in a real app */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Photo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Designer Name {item}</h3>
                <p className="text-gray-600 text-sm mb-3">Specializes in Logo Design, Branding</p>
                <div className="flex mb-3">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">(120 reviews)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Starting at $299</span>
                  <Link href={`/designer/${item}`} className="text-red-500 hover:underline">View Profile</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md">Previous</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
