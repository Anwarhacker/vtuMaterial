import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-16 rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Section */}
          <div className="group relative transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 h-full">
              <h3 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Engineering Notes
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                Empowering students with premium engineering resources, detailed
                notes, and curated academic materials for success.
              </p>
              <div className="mt-6">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-blue-200 hover:text-white text-sm font-semibold transition-colors duration-300"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="group transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 h-full">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-white/30 pb-3 text-center">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-4">
                {[
                  { to: "/", label: "Home" },

                  { to: "/about", label: "About" },
                  { to: "/results", label: "Result" },
                  { to: "/syllabus", label: "Syllabus" },
                  { to: "/projects", label: "Projects" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center justify-center gap-2 text-sm hover:text-blue-300 hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-blue-300">→</span> {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Study Years Section */}
          <div className="group transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 h-full">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-white/30 pb-3 text-center">
                Study Years
              </h3>
              <p className="text-sm mb-6 text-center opacity-90">
                Comprehensive notes for all engineering years
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(
                  (year) => (
                    <Link
                      key={year}
                      to={`/notes/${year.toLowerCase().replace(" ", "-")}`}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 rounded-lg text-center text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {year}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="group transform transition-all duration-500 hover:scale-105">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 h-full">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-white/30 pb-3 text-center">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-center">Follow Us</h4>
                  <div className="flex justify-center gap-4">
                    {[
                      { Icon: FaFacebook, href: "#" },
                      { Icon: FaTwitter, href: "#" },
                      { Icon: FaInstagram, href: "#" },
                      { Icon: FaLinkedin, href: "#" },
                    ].map(({ Icon, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-125"
                      >
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-center">Contact Us</h4>
                  <div className="flex flex-col gap-2 text-center">
                    <a
                      href="mailto:patelanwar@gmail.com"
                      className="text-sm hover:text-blue-300 transition-colors duration-300 whitespace-pre-wrap break-words"
                    >
                      patelanwar@gmail.com
                    </a>
                    <a
                      href="mailto:patilsiddu144@gmail.com"
                      className="text-sm hover:text-blue-300 transition-colors duration-300 whitespace-pre-wrap break-words"
                    >
                      patilsiddu144@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-sm mb-6 opacity-90">
              Subscribe to our newsletter for the latest resources and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex p-1 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 px-3 py-2 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} VTU MATERIAL. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
