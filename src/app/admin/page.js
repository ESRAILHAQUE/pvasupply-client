"use client";

import React, { useState } from "react";
import { useGmailAccounts } from "../../hooks/useGmailAccounts";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    shortDescription: "",
    features: "",
    pricing: "",
  });

  const {
    currentAccount,
    loading,
    error,
    initializeData,
    createAccount,
    updateAccount,
    deleteAccount,
    clearError,
  } = useGmailAccounts();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInitializeData = async () => {
    try {
      await initializeData();
      alert("Sample data initialized successfully!");
    } catch (err) {
      alert("Failed to initialize data: " + err.message);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      // Parse features and pricing from form
      const features = formData.features.split("\n").filter((f) => f.trim());
      const pricing = formData.pricing
        .split("\n")
        .filter((p) => p.trim())
        .map((p) => {
          const [name, price, ...featureList] = p.split("|");
          return {
            name: name.trim(),
            price: parseFloat(price.trim()),
            features: featureList.map((f) => f.trim()),
          };
        });

      const accountData = {
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
        description: formData.description,
        shortDescription: formData.shortDescription,
        features,
        pricing,
        isActive: true,
        category: "social-accounts",
        tags: ["gmail", "accounts", "social"],
      };

      await createAccount(accountData);
      alert("Account created successfully!");

      // Reset form
      setFormData({
        title: "",
        description: "",
        shortDescription: "",
        features: "",
        pricing: "",
      });
    } catch (err) {
      alert("Failed to create account: " + err.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (!currentAccount) return;

    if (confirm("Are you sure you want to delete this account?")) {
      try {
        await deleteAccount(currentAccount.slug);
        alert("Account deleted successfully!");
      } catch (err) {
        alert("Failed to delete account: " + err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        {/* Initialize Data Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Initialize Sample Data
          </h2>
          <button
            onClick={handleInitializeData}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50">
            {loading ? "Initializing..." : "Initialize Sample Data"}
          </button>
        </div>

        {/* Current Account Display */}
        {currentAccount && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Current Account
            </h2>
            <div className="space-y-3">
              <div>
                <strong>Title:</strong> {currentAccount.title}
              </div>
              <div>
                <strong>Slug:</strong> {currentAccount.slug}
              </div>
              <div>
                <strong>Description:</strong> {currentAccount.description}
              </div>
              <div>
                <strong>Features:</strong>
                <ul className="list-disc list-inside ml-4">
                  {currentAccount.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Pricing:</strong>
                <ul className="list-disc list-inside ml-4">
                  {currentAccount.pricing?.map((pkg, index) => (
                    <li key={index}>
                      {pkg.name}: ${pkg.price} - {pkg.features.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}

        {/* Create Account Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Create New Account
          </h2>
          <form onSubmit={handleCreateAccount} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Features (one per line)
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pricing (format: Name|Price|Feature1, Feature2)
              </label>
              <textarea
                name="pricing"
                value={formData.pricing}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Basic|6.00|Basic verification, Email access&#10;Premium|50.00|Full verification, All access&#10;Enterprise|200.00|Business account, Full documentation"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4">
            <strong>Error:</strong> {error}
            <button
              onClick={clearError}
              className="ml-4 text-red-700 hover:text-red-900">
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


