import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Twitter,
  Instagram,
  Code
} from "lucide-react";
import profileImg from "../assets/home.jpeg";

function Contact() {
  const whatsappNumber = "919696901760";

  const whatsappMessage = encodeURIComponent(
    "Hi Ashwini, I visited your portfolio and would like to connect regarding an opportunity."
  );

  const emailSubject = encodeURIComponent("Opportunity Discussion");
  const emailBody = encodeURIComponent(
    "Hi Ashwini,\n\nI came across your portfolio and would like to discuss a potential opportunity.\n\nBest regards,"
  );

  return (
    <section id="contact" className="bg-[#fafafa] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
            GET IN TOUCH
          </p>

          <h2 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900">
            Let’s Connect<span className="text-violet-600">.</span>
          </h2>

          <div className="w-10 h-[2px] bg-gray-300 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="space-y-10">

            {/* Profile Card */}
            <div className="flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
              <img
                src={profileImg}
                alt="Ashwini"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  Ashwini Tripathi
                </p>
                <p className="text-sm text-gray-600">
                  Full Stack Developer
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  Lucknow, India
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4">

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 
                py-3 rounded-xl font-medium text-white 
                bg-green-500 hover:bg-green-600 transition shadow-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={`mailto:tripathiansh1760@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                className="flex items-center justify-center gap-2 
                py-3 rounded-xl font-medium text-white 
                bg-violet-600 hover:bg-violet-700 transition shadow-sm"
              >
                <Mail size={18} />
                Email
              </a>

            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-4">

              <Social link="https://github.com/Ansh1760" color="bg-black text-white hover:bg-gray-800">
                <Github />
              </Social>

              <Social link="https://linkedin.com/in/infoashwini" color="bg-[#0077B5] text-white hover:bg-[#005f8e]">
                <Linkedin />
              </Social>

              <Social link="https://twitter.com/AnshTripathi60" color="bg-[#1DA1F2] text-white hover:bg-[#0d8ddb]">
                <Twitter />
              </Social>

              <Social link="https://instagram.com/ansh.jsx" color="bg-gradient-to-br from-pink-500 to-yellow-500 text-white">
                <Instagram />
              </Social>

              <Social link="https://leetcode.com/u/HmeWhwAXEd/" color="bg-[#f97316] text-white hover:bg-[#ea580c]">
                <Code />
              </Social>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to build something impactful?
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Whether it's a web application, AI project, or collaboration —
                I’m excited to work on meaningful ideas and scalable solutions.
              </p>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              Typically responds within 24 hours
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔥 Social Component (UPDATED) */
function Social({ link, children, color }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center 
      h-14 rounded-xl transition shadow-sm hover:shadow-md ${color}`}
    >
      {children}
    </a>
  );
}

export default Contact;