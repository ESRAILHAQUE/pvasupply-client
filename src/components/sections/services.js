import { Clock, ShieldCheck, BadgePercent, RotateCw } from 'lucide-react';

function Services() {
  return (
    <div className='w-full bg-[#f0f8f8]'>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-16  ">
      {/* Instant Delivery */}
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-blue-100 p-3 rounded-full mb-3">
          <Clock className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-black">Instant Delivery</h3>
        <p className="text-gray-600 text-sm">Instant delivery within 5 min</p>
      </div>

      {/* Quality Service */}
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-green-100 p-3 rounded-full mb-3">
          <ShieldCheck className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-black">Quality Service</h3>
        <p className="text-gray-600 text-sm">100% Guarantee</p>
      </div>

      {/* Huge Savings */}
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-yellow-100 p-3 rounded-full mb-3">
          <BadgePercent className="w-6 h-6 text-yellow-600" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-black">Huge Savings</h3>
        <p className="text-gray-600 text-sm">At Lowest Price</p>
      </div>

      {/* Easy Returns */}
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-purple-100 p-3 rounded-full mb-3">
          <RotateCw className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-black">Easy Returns</h3>
        <p className="text-gray-600 text-sm">No Questions Asked</p>
      </div>
    </div>


    </div>
  );
}

export default Services;