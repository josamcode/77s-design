import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How It Works - Design Platform",
  description: "Learn how our design platform works",
};

export default function HowItWorks() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h1>
        <h2 className="text-2xl font-bold mb-12 text-center text-red-500">How it works & Experience</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-medium mb-6 text-indigo-700">Contest Steps</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Submit a creative brief</li>
              <li>Select a package and features</li>
              <li>Invite more designers</li>
              <li>Receive feedback & rate</li>
              <li>Pick up the finalists for the final round</li>
              <li>Select the winner design</li>
              <li>Pay the winner</li>
              <li>Download the source files (if needed)</li>
            </ol>
            <div className="mt-8">
              <Image src="/illustration1.svg" alt="Contest illustration" width={300} height={200} />
            </div>
            <div className="mt-6">
              <Link href="/contest" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 inline-block">Start a Contest</Link>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-medium mb-6 text-cyan-500">Hiring Steps</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Submit a creative brief</li>
              <li>Invite a specific designer to your design set</li>
              <li>Discuss project details if needed & budget</li>
              <li>Review invoice</li>
              <li>Choose the 1-Day or 3-Day feedback</li>
              <li>Receive the 1st design preview</li>
            </ol>
            <div className="mt-8">
              <Image src="/illustration2.svg" alt="Hiring illustration" width={300} height={200} />
            </div>
            <div className="mt-6">
              <Link href="/hiring" className="bg-cyan-500 text-white px-6 py-3 rounded-md hover:bg-cyan-600 inline-block">Hire a Designer</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-medium mb-6 text-gray-800">Why Choose Our Platform?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">Quality Designs</h4>
              <p className="text-gray-600">Access to thousands of professional designers worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">Money-Back Guarantee</h4>
              <p className="text-gray-600">Not satisfied? Get your money back, no questions asked</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">IP Protection</h4>
              <p className="text-gray-600">Full copyright and intellectual property protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
