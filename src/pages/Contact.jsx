import { Mail, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meelqjjv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setShowPopup(true);
        form.reset();
      }
    } catch (err) {
      console.error("Form submit error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-14">

        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Contact<span className="text-violet-600">.</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
            I’m open to internships, freelance work, and collaborations.
            If you have an idea or opportunity, feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-violet-600" />
              <span>tripathiansh1760@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-violet-600" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-3xl
          shadow-sm p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-violet-500/30
              focus:border-violet-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-violet-500/30
              focus:border-violet-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-violet-500/30
              focus:border-violet-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-violet-600 to-indigo-600
            hover:from-violet-700 hover:to-indigo-700
            shadow-md hover:shadow-lg transition
            disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-xl">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Message Sent
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. I’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-xl bg-violet-600 text-white
              hover:bg-violet-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
