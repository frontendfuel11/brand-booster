import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../asset/logo/logo 2.png";
import { Link } from "react-router-dom";
import socialIcon1 from "../../asset/icons/twitter.png"
import socialIcon2 from "../../asset/icons/link.png"
import socialIcon3 from "../../asset/icons/face.png"
import socialIcon4 from "../../asset/icons/insta.png"


const footerLinks = [
  {
    heading: "get started",
    links: [
      { to: "", name: "Account Login" },
      { to: "", name: "Affiliate Program" },
      { to: "", name: "Pricing & Packages" },
      { to: "", name: "Reviews" },
      { to: "", name: "Accepted Topics" },
    ],
  },
  {
    heading: "free resources",
    links: [
      { to: "", name: "PR Template" },
      { to: "", name: "Headline Ideas" },
      { to: "", name: "Writing Guidelines" },
      { to: "", name: "PR Newsletter" },
      { to: "", name: "Marketing Blog" },
      { to: "", name: "Help Center" },
    ],
  },
  {
    heading: "policies",
    links: [
      { to: "", name: "Terms of Services" },
      { to: "", name: "Privacy Policy" },
      { to: "", name: "Refund Policy" },
      { to: "", name: "Cookie Policy" },
      { to: "", name: "Disclaimer" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#0C0E12] w-full mt-30 pt-20 text-white">
      <div className="flex flex-col lg:flex-row  gap-10 lg:gap-20 px-5 md:px-20 lg:px-40">
        {/* Company Info Section */}
        <div className="w-full lg:w-[25%]">
          <img src={logo} alt="Brand Logo" className="mb-6 h-16 md:h-20 lg:h-24 w-auto" />
          <p className="text-sm md:text-base lg:text-[1rem] tracking-wide font-[400] text-[#94979C] leading-relaxed">
            Liplyn Information Group <br />
            Marathon 9a, 1213 PE Hilversum <br />
            The Netherlands
          </p>
        </div>

        {/* Links and Contact Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 w-full lg:w-auto">
          {/* Links Sections - Stack on mobile, row on tablet/desktop */}
          <div className="flex flex-col lg:flex-row   gap-10 md:gap-15 lg:gap-30">
            {footerLinks.map((section, index) => (
              <div key={index} className="w-full md:w-auto">
                <h3 className="mb-4 text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
                  {section.heading}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.to}
                        className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-[#AED8E1] transition capitalize"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-auto">
            <h3 className="mb-4 text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="text-sm md:text-base lg:text-lg text-gray-400 hover:text-[#AED8E1] transition capitalize">
                <Link to="/contact">contact us</Link>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FaPhoneAlt className="text-[#AED8E1] text-sm md:text-base" />
                <span className="text-sm md:text-base lg:text-lg">+020 308 6934</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FaEnvelope className="text-[#AED8E1] text-sm md:text-base" />
                <span className="text-sm md:text-base lg:text-lg">hello@brandboosterhq.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Social Icons */}
      <div className="flex flex-col md:flex-row items-center justify-between py-5 px-5 md:px-20 mt-8 lg:mt-5">
        <span className="text-[#94979C] text-xs md:text-base text-center md:text-left mb-4 md:mb-0">
          Copyright © 2020-2025 Liplyn Information Group.
        </span>
        
        {/* Social icons - Hidden on mobile, shown on tablet/desktop */}
        <div className="hidden md:flex list-none gap-10">
          <li>
            <img src={socialIcon1} alt="Twitter" className="h-5 w-auto" />
          </li>
          <li>
            <img src={socialIcon2} alt="LinkedIn" className="h-5 w-auto" />
          </li>
          <li>
            <img src={socialIcon3} alt="Facebook" className="h-5 w-auto" />
          </li>
          <li>
            <img src={socialIcon4} alt="Instagram" className="h-5 w-auto" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
