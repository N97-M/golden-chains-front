import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-[#722F37]">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <nav className="flex items-center text-gray-700">
          <Link 
            href="/" 
            className="text-base text-white font-medium relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-300">
            About us
          </span>
        </nav>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">
            ABOUT GOLDEN CHAINS TRADING LLC
          </h1>

          <div className="prose max-w-none text-gray-300 mb-12">
            <p className="mb-6 text-lg">
              Golden Chains TRADING LLC, a Dubai-based company, operates in the dynamic sector of auto spare parts and components trading. This industry plays a crucial role in the automotive ecosystem, focusing on the supply and distribution of a diverse range of parts and accessories needed for vehicle maintenance, repairs, and enhancements. The product range spans from essential mechanical components like engines, brakes, and suspensions to electrical items, filters, and lighting solutions. With a global reach, this sector sources parts from manufacturers worldwide and involves both wholesale and retail transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#722F37] mb-4">Mission Statement</h2>
              <p className="text-[#722F37] text-lg">
                Our mission is to deliver exceptional services in the spare parts domain, ensuring unparalleled customer satisfaction through high-quality products and outstanding service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#722F37] mb-4">Vision Statement</h2>
              <p className="text-[#722F37] text-lg">
                Our vision is to emerge as a leading provider of spare parts, renowned for our dedication to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#722F37] mb-4">Contact Us</h2>
            <p className="text-[#722F37] mb-6">
              Get in touch with us for more information about our products and services.
            </p>
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#722F37] text-xl" />
                <span className="text-gray-700">Pho: +971 4 295 7412</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMobileAlt className="text-[#722F37] text-xl" />
                <span className="text-gray-700">Mob: +971 54 503 2595</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-[#722F37] text-xl" />
                <span className="text-gray-700">WApp: +971 54 503 2595</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#722F37] text-xl" />
                <span className="text-gray-700">Email: info@goldenchainstrd.com</span>
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-[#722F37] text-white rounded-md hover:bg-[#8B3746] transition-colors w-full justify-center"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>View Location</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 