// FAQ Schema for Homepage
// Add this to your homepage to earn FAQ rich snippets in Google Search

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are verified accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verified accounts are digital accounts that have been authenticated through phone verification, email verification, or identity verification (KYC). These accounts have higher trust levels and fewer restrictions compared to unverified accounts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does delivery take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most orders are delivered within 0-1 business days. After your payment is confirmed, we process your order immediately. You'll receive your account details via email or your preferred delivery method.",
      },
    },
    {
      "@type": "Question",
      name: "Are the accounts safe to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our accounts are created legitimately, fully verified, and comply with platform terms of service. We use secure methods to create and verify accounts, ensuring they are safe for your business operations.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept various payment methods including cryptocurrency (Bitcoin, Ethereum, USDT), PayPal, and other secure payment options. Contact us for specific payment method availability for your order.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer refunds or replacements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a 7-day guarantee on all accounts. If you experience any issues with your account within 7 days of purchase, we'll provide a free replacement or full refund according to our return policy.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact customer support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer 24/7 customer support via WhatsApp, email, and live chat. You can reach us through the contact information on our website or use the floating contact icons on any page for instant assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy accounts in bulk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer bulk purchase options for all account types. Bulk orders often qualify for discounted pricing. Contact our sales team via WhatsApp or email to discuss your requirements and get a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are the accounts created with real information?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all accounts are created with legitimate information and proper verification. We ensure each account meets the platform's requirements and has been properly verified with real phone numbers and email addresses.",
      },
    },
  ],
};

// Breadcrumb Schema for Product Pages
// Add this to each product page for better navigation in search results

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Example usage for Breadcrumb:
// const breadcrumb = breadcrumbSchema([
//   { name: "Home", url: "https://pvasupply.com" },
//   { name: "Crypto Accounts", url: "https://pvasupply.com/crypto" },
//   { name: "Buy Verified Binance Accounts", url: "https://pvasupply.com/product/buy-verified-binance-accounts" },
// ]);

// Review Schema (Optional - Use only with real customer reviews)
export const reviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Product",
    name: reviews.productName,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: reviews.rating,
    bestRating: "5",
  },
  author: {
    "@type": "Person",
    name: reviews.authorName,
  },
  reviewBody: reviews.reviewText,
  datePublished: reviews.date,
});

// How To Schema (For guides and tutorials)
export const howToSchema = (title, description, steps) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description: description,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    image: step.image || undefined,
  })),
});
