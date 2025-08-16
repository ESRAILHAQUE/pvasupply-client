// API Configuration
export const API_CONFIG = {
  // Backend API base URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",

  // API endpoints
  ENDPOINTS: {
    SOCIAL_ACCOUNTS: "/social-accounts",
    CRYPTO_ACCOUNTS: "/crypto-accounts",
    BANK_ACCOUNTS: "/bank-accounts",
  },

  // Request timeout (in milliseconds)
  TIMEOUT: 10000,

  // Default headers
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
  },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

