import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Twitter,
  Instagram,
  Globe,
  Code
} from "lucide-react";
import profileImg from "../assets/home.jpeg";

function Contact() {

  const whatsappNumber = "919696901760"; // ⚠ remove + sign
  const whatsappMessage = encodeURIComponent(
    "Hi Ashwini, I visited your portfolio and would like to connect regarding an opportunity."
  );

  const emailSubject = encodeURIComponent("Opportunity Discussion");
  const emailBody = encodeURIComponent(
    "Hi Ashwini,\n\nI came across your portfolio and would like to discuss a potential opportunity.\n\nBest regards,"
  );

  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

         

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Let’s Connect<span className="text-violet-600">.</span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            I’m open to internships, freelance projects, and full-time roles.
            If you have an opportunity or collaboration idea, feel free to reach out directly.
          </p>

          {/* Profile Card */}
          <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <img
              src={profileImg}
              alt="Ashwini"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Ashwini Tripathi</p>
              <p className="text-sm text-gray-600">Full Stack Developer</p>
              <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-violet-600" />
                Lucknow, India
              </div>
            </div>
          </div>

          {/* Direct Contact Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
              px-5 py-3 rounded-xl font-semibold text-white
              bg-green-500 hover:bg-green-600
              shadow-md hover:shadow-lg transition"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </a>

            <a
              href={`mailto:tripathiansh1760@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="inline-flex items-center gap-2
              px-5 py-3 rounded-xl font-semibold text-white
              bg-violet-600 hover:bg-violet-700
              shadow-md hover:shadow-lg transition"
            >
              <Mail size={18} />
              Send Email
            </a>

          </div>

          {/* 🔥 Extended Social Links */}
          <div className="flex flex-wrap gap-4 pt-8">

            <a
              href="https://github.com/Ansh1760"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="icon" />
            </a>

            <a
              href="https://linkedin.com/in/infoashwini"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="icon" />
            </a>

            <a
              href="https://twitter.com/AnshTripathi60"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter className="icon" />
            </a>

            <a
              href="https://instagram.com/ansh.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram className="icon" />
            </a>

            <a
              href="https://leetcode.com/u/HmeWhwAXEd/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Code className="icon" />
            </a>

    

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 
          text-white rounded-3xl p-10 shadow-xl">

          <h3 className="text-2xl font-bold mb-4">
            Ready to build something impactful?
          </h3>

          <p className="text-violet-100 leading-relaxed mb-6">
            Whether it's a web application, AI project, or collaboration —
            I’m excited to work on meaningful ideas and scalable solutions.
          </p>

          <div className="text-sm text-violet-200">
            Typically responds within 24 hours.
          </div>
        </div>

      </div>

      {/* Tailwind Utility Classes */}
      <style jsx>{`
        .social-icon {
          padding: 0.75rem;
          border-radius: 0.75rem;
          background: #f3f4f6;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #ede9fe;
          transform: translateY(-3px);
        }
        .icon {
          width: 20px;
          height: 20px;
          color: #374151;
        }
      `}</style>
    </section>
  );
}

export default Contact;