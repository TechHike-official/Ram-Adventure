"use client"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT: INFO */}
        <div className="bg-gray-900 text-white p-10 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
          <p className="text-gray-300 leading-relaxed">
            Have questions about our trips, pricing, or custom packages?
            Reach out and our team will get back to you shortly.
          </p>

          <div className="space-y-3 text-sm">
            <p><span className="font-semibold">Email:</span> info@ramadventure.com</p>
            <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p><span className="font-semibold">Location:</span> Himachal Pradesh, India</p>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div className="p-10">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your trip or questions"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
