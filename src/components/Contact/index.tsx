import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-body-color">
            We are here to assist you. Reach out to us through any of the following methods.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-primary text-2xl mr-4" />
            <a href="mailto:info@inerpulse.com" className="text-lg text-body-color">
              info@inerpulse.com
            </a>
          </div>
          <div className="flex items-center mb-6">
            <FaPhone className="text-primary text-2xl mr-4" />
            <a href="tel:+917418303615" className="text-lg text-body-color">
              +91 74183 03615
            </a>
          </div>
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-primary text-2xl mr-4 mt-1" />
            <address className="not-italic text-lg text-body-color">
              99/1A, Perumal Kovil Pathy, Alandurai<br />
              Coimbatore, 641101
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
