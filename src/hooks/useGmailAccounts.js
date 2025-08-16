import { useState, useEffect } from "react";
import apiService from "../services/api";

export const useGmailAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all social accounts (including Gmail)
  const fetchAccounts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getSocialAccounts();
      setAccounts(response.data || []);
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch accounts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch specific Gmail account by slug
  const fetchGmailAccount = async (slug = "buy-old-gmail-accounts") => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.getSocialAccountBySlug(slug);
      setCurrentAccount(response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch Gmail account:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Initialize sample data
  const initializeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.initializeSocialAccountData();
      if (response.data) {
        setCurrentAccount(response.data);
        // Refresh the accounts list
        await fetchAccounts();
      }
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Failed to initialize data:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Create new account
  const createAccount = async (accountData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.createSocialAccount(accountData);
      // Refresh the accounts list
      await fetchAccounts();
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Failed to create account:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update account
  const updateAccount = async (slug, accountData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiService.updateSocialAccount(slug, accountData);
      // Refresh the accounts list and current account
      await fetchAccounts();
      if (currentAccount?.slug === slug) {
        setCurrentAccount(response.data);
      }
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Failed to update account:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete account
  const deleteAccount = async (slug) => {
    try {
      setLoading(true);
      setError(null);
      await apiService.deleteSocialAccount(slug);
      // Refresh the accounts list
      await fetchAccounts();
      // Clear current account if it was deleted
      if (currentAccount?.slug === slug) {
        setCurrentAccount(null);
      }
    } catch (err) {
      setError(err.message);
      console.error("Failed to delete account:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Get Gmail account features
  const getGmailFeatures = () => {
    if (!currentAccount) return [];
    return currentAccount.features || [];
  };

  // Get Gmail account pricing
  const getGmailPricing = () => {
    if (!currentAccount) return [];
    return currentAccount.pricing || [];
  };

  // Get Gmail account images
  const getGmailImages = () => {
    if (!currentAccount) return [];
    return currentAccount.images || [];
  };

  // Get Gmail account description
  const getGmailDescription = () => {
    if (!currentAccount) return "";
    return currentAccount.description || "";
  };

  // Get Gmail account short description
  const getGmailShortDescription = () => {
    if (!currentAccount) return "";
    return currentAccount.shortDescription || "";
  };

  // Get Gmail account title
  const getGmailTitle = () => {
    if (!currentAccount) return "Buy Old Gmail Accounts";
    return currentAccount.title || "Buy Old Gmail Accounts";
  };

  // Get Gmail account price range
  const getGmailPriceRange = () => {
    if (!currentAccount?.pricing?.length) return "$6.00 - $200.00";

    const prices = currentAccount.pricing.map((p) => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  // Load initial data
  useEffect(() => {
    fetchGmailAccount();
  }, []);

  return {
    // State
    accounts,
    currentAccount,
    loading,
    error,

    // Actions
    fetchAccounts,
    fetchGmailAccount,
    initializeData,
    createAccount,
    updateAccount,
    deleteAccount,
    clearError,

    // Getters
    getGmailFeatures,
    getGmailPricing,
    getGmailImages,
    getGmailDescription,
    getGmailShortDescription,
    getGmailTitle,
    getGmailPriceRange,
  };
};

