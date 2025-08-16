import { API_CONFIG } from "../config/api";

const API_BASE_URL = API_CONFIG.BASE_URL;

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Social Accounts API
  async getSocialAccounts() {
    return this.request("/social-accounts");
  }

  async getSocialAccountBySlug(slug) {
    return this.request(`/social-accounts/${slug}`);
  }

  async createSocialAccount(accountData) {
    return this.request("/social-accounts", {
      method: "POST",
      body: JSON.stringify(accountData),
    });
  }

  async updateSocialAccount(slug, accountData) {
    return this.request(`/social-accounts/${slug}`, {
      method: "PUT",
      body: JSON.stringify(accountData),
    });
  }

  async deleteSocialAccount(slug) {
    return this.request(`/social-accounts/${slug}`, {
      method: "DELETE",
    });
  }

  async initializeSocialAccountData() {
    return this.request("/social-accounts/init", {
      method: "POST",
    });
  }

  // Crypto Accounts API
  async getCryptoAccounts() {
    return this.request("/crypto-accounts");
  }

  async getCryptoAccountBySlug(slug) {
    return this.request(`/crypto-accounts/${slug}`);
  }

  async createCryptoAccount(accountData) {
    return this.request("/crypto-accounts", {
      method: "POST",
      body: JSON.stringify(accountData),
    });
  }

  async updateCryptoAccount(slug, accountData) {
    return this.request(`/crypto-accounts/${slug}`, {
      method: "PUT",
      body: JSON.stringify(accountData),
    });
  }

  async deleteCryptoAccount(slug) {
    return this.request(`/crypto-accounts/${slug}`, {
      method: "DELETE",
    });
  }

  async initializeCryptoAccountData() {
    return this.request("/crypto-accounts/init", {
      method: "POST",
    });
  }

  // Bank Accounts API
  async getBankAccounts() {
    return this.request("/bank-accounts");
  }

  async getBankAccountBySlug(slug) {
    return this.request(`/bank-accounts/${slug}`);
  }

  async createBankAccount(accountData) {
    return this.request("/bank-accounts", {
      method: "POST",
      body: JSON.stringify(accountData),
    });
  }

  async updateBankAccount(slug, accountData) {
    return this.request(`/bank-accounts/${slug}`, {
      method: "PUT",
      body: JSON.stringify(accountData),
    });
  }

  async deleteBankAccount(slug) {
    return this.request(`/bank-accounts/${slug}`, {
      method: "DELETE",
    });
  }

  async initializeBankAccountData() {
    return this.request("/bank-accounts/init", {
      method: "POST",
    });
  }
}

export const apiService = new ApiService();
export default apiService;
