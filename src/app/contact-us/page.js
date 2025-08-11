export default function Contact() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how we can help you achieve your
            marketing goals. 
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <select className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white">
              <option value="">Select a Service</option>
              <option value="facebook-ads">Facebook Ads</option>
              <option value="video-production">Video Production</option>
              <option value="social-media">Social Media Management</option>
              <option value="website">Website Development</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white md:col-span-2"></textarea>
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition duration-300 md:col-span-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
