import { useCallback } from "react";

export const useEmailHandler = () => {
  const handleEmailClick = useCallback(
    (e, email = "pvasupply0@gmail.com", subject = "", body = "") => {
      // Enhanced email handling with consistent fallbacks
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      // Build mailto URL
      let mailtoUrl = `mailto:${email}`;
      if (subject) mailtoUrl += `?subject=${encodeURIComponent(subject)}`;
      if (body)
        mailtoUrl += `${subject ? "&" : "?"}body=${encodeURIComponent(body)}`;

      if (isMobile) {
        e.preventDefault();

        // For mobile devices, show contact options with better UX
        const message = `📧 Email: ${email}\n\n💬 For faster response, use:\n• WhatsApp: https://wa.me/message/LMBKKSKH7RLRG1?src=qr\n• Telegram: https://t.me/pvasupply\n\n📱 Copy email: ${email}`;

        // Try native sharing first (works better on mobile)
        if (navigator.share && !isIOS) {
          navigator
            .share({
              title: "PVA Supply Contact",
              text: `Contact PVA Supply for services. Email: ${email}`,
              url: mailtoUrl,
            })
            .catch(() => {
              // Fallback to alert if sharing fails
              showContactOptions(email, message);
            });
        } else {
          // For iOS or when sharing is not available
          showContactOptions(email, message);
        }
      } else {
        // For desktop, let the mailto link work normally
        // But add a fallback in case no email client is configured
        try {
          // Try to open the mailto link
          window.location.href = mailtoUrl;
        } catch (error) {
          // Fallback: copy email to clipboard
          copyEmailToClipboard(email);
        }
      }
    },
    [copyEmailToClipboard, showContactOptions]
  );

  const copyEmailToClipboard = useCallback(
    async (email = "pvasupply0@gmail.com") => {
      try {
        await navigator.clipboard.writeText(email);
        showNotification("Email copied to clipboard!", "success");
      } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showNotification("Email copied to clipboard!", "success");
      }
    },
    [showNotification]
  );

  const showContactOptions = useCallback(
    (email, message) => {
      // Create a custom modal for better UX
      const modal = document.createElement("div");
      modal.className =
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
      modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 max-w-md mx-4 text-center">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Contact PVA Supply</h3>
        <p class="text-gray-600 mb-4">Choose your preferred contact method:</p>
        
        <div class="space-y-3">
          <button id="copy-email" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
            📧 Copy Email (${email})
          </button>
          
          <a href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr" target="_blank" rel="noopener noreferrer" 
             class="block w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
            💬 WhatsApp Chat
          </a>
          
          <a href="https://t.me/pvasupply" target="_blank" rel="noopener noreferrer"
             class="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            📱 Telegram
          </a>
        </div>
        
        <button id="close-modal" class="mt-4 text-gray-500 hover:text-gray-700 underline">
          Close
        </button>
      </div>
    `;

      // Add event listeners
      modal.querySelector("#copy-email").addEventListener("click", () => {
        copyEmailToClipboard(email);
        modal.remove();
      });

      modal.querySelector("#close-modal").addEventListener("click", () => {
        modal.remove();
      });

      // Close on outside click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });

      document.body.appendChild(modal);
    },
    [copyEmailToClipboard]
  );

  const showNotification = useCallback((message, type = "info") => {
    // Create a toast notification
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 bg-${
      type === "success" ? "green" : "blue"
    }-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.remove("translate-x-full");
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add("translate-x-full");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }, []);

  return {
    handleEmailClick,
    copyEmailToClipboard,
    showContactOptions,
    showNotification,
  };
};
