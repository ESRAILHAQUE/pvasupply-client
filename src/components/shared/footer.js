export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PVASMMPRO</h3>
            <p className="text-gray-400">
              Professional video ads and social media marketing services to grow
              your business.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook Ads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Video Production
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Marketing St.</p>
              <p>Digital City, DC 10001</p>
              <p>Email: info@pvasmmpro.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PVASMMPRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
