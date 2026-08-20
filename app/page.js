export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            আপনার ওয়েবসাইটকে AI Search Engines এ ভিজিবল করুন
          </h1>
          <p className="text-xl mb-8">
            Accountants, Lawyers, এবং Local Services Businesses এর জন্য specialized AEO, GEO, এবং SEO strategies
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Schedule Free Audit
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">আমাদের সেবা</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AEO Premium</h3>
              <p className="text-gray-600 mb-4">
                AI Search Engines এ আপনার ওয়েবসাইট র‍্যাঙ্ক করান (ChatGPT, Perplexity, Claude এ)
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-4">$2,500-4,500/month</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                আরো জানুন
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Local SEO</h3>
              <p className="text-gray-600 mb-4">
                Google Maps এবং Local Search এ #1 র‍্যাঙ্কিং
              </p>
              <p className="text-3xl font-bold text-green-600 mb-4">$1,500-2,500/month</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                আরো জানুন
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">SEO Audit</h3>
              <p className="text-gray-600 mb-4">
                আপনার ওয়েবসাইটের SEO পারফরম্যান্স সম্পূর্ণ audit
              </p>
              <p className="text-3xl font-bold text-purple-600 mb-4">$500-800</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                অর্ডার করুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">কেস স্টাডি</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Chatswood Accountants</h3>
              <p className="text-gray-600 mb-4">
                ৬ মাসে অনলাইন ট্রাফিক ১৮০% বৃদ্ধি। মাসিক ৪০+ qualified leads।
              </p>
              <p className="text-sm text-gray-500">Service: Local SEO + AEO</p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Sydney Travel Agency</h3>
              <p className="text-gray-600 mb-4">
                Google Maps এ #1 র‍্যাঙ্কিং। ৩০০+ monthly bookings through website।
              </p>
              <p className="text-sm text-gray-500">Service: GEO + Local SEO</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold mb-2">Family Law Firm</h3>
              <p className="text-gray-600 mb-4">
                AI search visibility স্থাপন করা। প্রতি মাসে ৫০+ qualified leads।
              </p>
              <p className="text-sm text-gray-500">Service: AEO Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">আজই শুরু করুন</h2>
          <p className="text-xl mb-8">
            আপনার প্রথম ফ্রি audit এর জন্য আজই যোগাযোগ করুন
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            আপনার তথ্য দিন
          </button>
        </div>
      </section>
    </main>
  )
}
