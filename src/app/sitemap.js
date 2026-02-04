import fs from "fs";
import path from "path";

export default function sitemap() {
  const baseUrl = "https://pvasupply.com";
  const now = new Date();

  // Homepage with highest priority
  const homepage = {
    url: baseUrl,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // Category pages with high priority
  const categoryPages = [
    { route: "crypto", priority: 0.9 },
    { route: "social", priority: 0.9 },
    { route: "product/bank-accounts", priority: 0.9 },
    { route: "special-accounts", priority: 0.9 },
  ].map((page) => ({
    url: `${baseUrl}/${page.route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: page.priority,
  }));

  // Static pages with medium priority
  const staticPages = [
    { route: "contact-us", priority: 0.7 },
    { route: "cart", priority: 0.5 },
  ].map((page) => ({
    url: `${baseUrl}/${page.route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: page.priority,
  }));

  // Product pages with medium-high priority
  const productDir = path.join(process.cwd(), "src", "app", "product");
  let productPages = [];
  try {
    productPages = fs
      .readdirSync(productDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .filter((d) => d.name !== "bank-accounts") // Already added as category
      .filter((d) => d.name !== "buy-verified-stripe-accounts") // Temporarily disabled - remove filter to re-enable
      .map((d) => ({
        url: `${baseUrl}/product/${d.name}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      }));
  } catch (e) {
    productPages = [];
  }

  return [homepage, ...categoryPages, ...productPages, ...staticPages];
}
