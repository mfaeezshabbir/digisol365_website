import React from "react";
import {
  FiSend,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-10 mt-4 border-t-gray-600 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <h3 className="text-foreground font-bold mb-4 flex items-center">
            <FiMapPin className="mr-2" /> Address
          </h3>
          <p>House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh</p>

          {/* Contact Section */}
          <h3 className="text-foreground font-bold mt-6 mb-4 flex items-center">
            <FiMail className="mr-2" /> Say Hello
          </h3>
          <p>info@example.com</p>
          <p>info@support.com</p>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-foreground font-bold mb-4">Our Solutions</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Cloud Services</li>
            <li>Network Connectivity</li>
            <li>Data Analytics</li>
            <li>Software Development</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-foreground font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Case Study</li>
            <li>News & Article</li>
            <li>Our Team</li>
            <li>All Portfolio</li>
            <li>Pricing Plan</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-foreground font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Support Area</li>
            <li>Support Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Career</li>
            <li>Pricing Plan</li>
          </ul>
        </div>
      </div>

      {/* Newsletter & Social Icons */}
      <div className="container mx-auto px-4 mt-10 text-center">
        <p className="text-foreground font-semibold mb-2">
          See Our New Updates
        </p>
        <div className="flex items-center justify-center max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Email here..."
            className="w-full px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 outline-none"
          />
          <button className="bg-buttoncolor text-foreground px-4 py-2 rounded-r-md">
            <FiSend />
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-10 text-center border-t border-gray-600 pt-6">
        <p className="text-sm text-foreground">
          &copy; Copyright 2023 <span className="text-white">Softconic</span> |
          Design By <span className="text-white">Egens Lab</span>
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-foreground">
          <FiFacebook className="hover:text-white" />
          <FiTwitter className="hover:text-white" />
          <FiInstagram className="hover:text-white" />
          <FiLinkedin className="hover:text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
