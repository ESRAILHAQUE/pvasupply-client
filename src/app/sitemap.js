import fs from "fs";
import path from "path";

export default function sitemap() {
  const baseUrl = "https://pvasupply.com";

  const staticRoutes = ["", "about", "contact-us", "cart"];

  const productDir = path.join(process.cwd(), "src", "app", "product");
  let productRoutes = [];
  try {
    productRoutes = fs
      .readdirSync(productDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => `product/${d.name}`);
  } catch (e) {
    productRoutes = [];
  }

  const allRoutes = [...staticRoutes, ...productRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/+$/, "/"),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
