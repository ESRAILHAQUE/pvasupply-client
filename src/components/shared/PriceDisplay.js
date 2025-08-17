"use client";

import React from "react";

export default function PriceDisplay({ price, className = "" }) {
  // Ensure price is always displayed with consistent height
  const displayPrice = typeof price === "string" ? price : `$${price}`;

  return (
    <div className={`min-h-[2.5rem] flex items-center ${className}`}>
      <span className="text-2xl font-bold text-green-600">{displayPrice}</span>
    </div>
  );
}
