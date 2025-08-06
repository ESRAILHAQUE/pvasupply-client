// import React from 'react';

// const RealDocuments = () => {
//   return (
//     <div className="max-w-3xl mx-auto pt-10  pb-10 text-center font-sans">
//       {/* Main Heading */}
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 leading-tight">
//         Specialists For All Phone & Real Documents Verified Accounts
//       </h1>
      
//       {/* Services Section */}
//       <div className="space-y-4 mb-8">
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
//           All Types of Regular, Elite & Verified Reviews
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-700">
//           We are Provider All Types PVA 7 Real<br className="hidden sm:block" />
//           Documents Verified Accounts
//         </p>
//       </div>
      
//       {/* Discount Banner */}
//       <div className="bg-gray-100 p-4 mb-8 rounded-lg">
//         <p className="text-xl font-bold text-red-600">
//           Get $10% Less on Your Every Order
//         </p>
//       </div>
      
//       {/* Shop Button */}
//       <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg uppercase transition-colors duration-200 shadow-md">
//         VISIT OUR SHOP
//       </button>
//     </div>
//   );
// };

// export default RealDocuments;




export default function RealDocuments() {
    return (
      <div className="flex items-center justify-center py-16 bg-[#FFFFFF]  text-center">
        <div>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
            Specialists For All Phone & Real Documents Verified Accounts
          </p>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mt-2">
            All Types of Regular, Elite & Verified Reviews
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
            We are Provider All Types PVA 7 Real <br className="hidden sm:block" />
            Documents Verified Accounts
          </h1>
          <p className="mt-4 text-base sm:text-lg font-semibold text-gray-700">
            Get $10% Less on Your Every Order
          </p>
  
          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 cursor-pointer">
            VISIT OUR SHOP
          </button>
        </div>
      </div>
    );
  }
  