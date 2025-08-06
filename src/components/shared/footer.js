export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              PVASupply
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Professional video ads and social media marketing services to grow
              your business exponentially.
            </p>
            <div className="flex space-x-4 pt-2">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social}>
                    <span className="sr-only">{social}</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`}
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Facebook Ads",
                "Video Production",
                "Social Media",
                "Web Development",
                "SEO Optimization",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <address className="text-gray-300 not-italic space-y-3">
              <div className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p>123 Marketing St.</p>
                  <p>Digital City, DC 10001</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:pvasupply@gmail.com"
                  className="hover:text-white transition-colors duration-300">
                  pvasupply@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-300">
                  (123) 456-7890
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PVA Supply. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
