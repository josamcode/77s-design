import Image from "next/image";

export const metadata = {
  title: "Referral Program - Design Platform",
  description: "Refer friends and earn rewards",
};

export default function Referral() {
  return (
    <section className="py-12 px-6 bg-red-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Referral Program</h1>
        
        <div className="max-w-2xl mx-auto bg-red-200 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-4 text-red-600">Refer new Clients and you both get a cashback code $50 promotion free</h3>
          <div className="space-y-4">
            <div className="flex">
              <input type="text" placeholder="Client Email Address" className="flex-1 p-2 rounded-l-md border-0" />
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-md">Copy Link</button>
            </div>
            <div className="flex">
              <input type="text" placeholder="Your Email Address" className="flex-1 p-2 rounded-l-md border-0" />
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-md">Copy Code</button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">How Our Referral Program Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-3">1</div>
              <h3 className="font-medium mb-2">Invite Friends</h3>
              <p className="text-gray-600">Share your unique referral link with friends and colleagues</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-3">2</div>
              <h3 className="font-medium mb-2">They Join</h3>
              <p className="text-gray-600">When they sign up and make their first purchase</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-500 mb-3">3</div>
              <h3 className="font-medium mb-2">You Both Earn</h3>
              <p className="text-gray-600">You both receive $50 credit toward your next design project</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Terms & Conditions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Referral credits are applied after the referred friend completes their first project</li>
              <li>Credits expire 12 months after issuance</li>
              <li>Maximum of 10 referral bonuses per calendar year</li>
              <li>We reserve the right to modify or terminate the referral program at any time</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Image src="/illustration3.svg" alt="Referral illustration" width={300} height={200} className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
