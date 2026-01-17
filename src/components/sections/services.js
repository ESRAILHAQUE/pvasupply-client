"use client";
import { Clock, ShieldCheck, BadgePercent, RotateCw } from "lucide-react";

function Services() {
  const serviceItems = [
    {
      icon: Clock,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Instant Delivery",
      description: "Instant delivery within 5 min",
    },
    {
      icon: ShieldCheck,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Quality Service",
      description: "100% Guarantee",
    },
    {
      icon: BadgePercent,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Huge Savings",
      description: "At Lowest Price",
    },
    {
      icon: RotateCw,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Easy Returns",
      description: "No Questions Asked",
    },
  ];

  return (
    <div className="w-full bg-[#f0f8f8] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-16">
        {serviceItems.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 group relative transition-transform duration-300 hover:-translate-y-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-xl">
            <div
              className={`${service.bgColor} p-3 rounded-full mb-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-110`}>
              <service.icon
                className={`w-6 h-6 ${service.iconColor} relative z-10`}
                aria-hidden="true"
              />
            </div>

            <h3 className="font-semibold text-lg mb-1 text-black transition-colors duration-300 group-hover:text-[#8B2C2B]">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>

            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl -z-10 opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
