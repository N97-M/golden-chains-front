import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';

export default function QuickInfo() {
  return (
    <section className="relative py-16 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden hidden md:block"
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundPosition: 'center',
          backgroundSize: '50% auto',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#6E1423] bg-opacity-90"></div>
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 z-0 bg-[#6E1423] md:hidden"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Content Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-8 md:pr-4">
            {/* Quick Info with Logo */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-[60px] h-[60px] flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Golden Chains Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold">Quick Info</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We are your trusted partner for high-quality auto parts and components. With years of experience and a commitment to excellence
              </p>
            </div>

            {/* Brands */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Brands</h3>
              <div className="space-y-2">
                <p className="text-gray-300">KYB</p>
                <p className="text-gray-300">Perfect Rubber Parts</p>
                <p className="text-gray-300">IBN</p>
                <p className="text-gray-300">Next Auto</p>
                <p className="text-gray-300">Smart</p>
                <p className="text-gray-300">Mikatakno</p>
                <p className="text-gray-300">Reliable Choice (RC)</p>
                <p className="text-gray-300">HKT</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="flex flex-col space-y-3">
                <p className="text-gray-300">P.O.Box: 378150</p>
                <p className="text-gray-300">Shop No. 7, Al Habtoor Building,</p>
                <p className="text-gray-300">Naif Deira Dubai, UAE</p>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-gray-300 text-xl" />
                  <p className="text-gray-300">Pho: +971 4 295 7412</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMobileAlt className="text-gray-300 text-xl" />
                  <p className="text-gray-300">Mob: +971 54 503 2595</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-gray-300 text-xl" />
                  <p className="text-gray-300 text-sm">WApp: +971 54 503 2595</p>
                </div>
              </div>
            </div>

            {/* Location Image */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0241397780046!2d55.30641197414009!3d25.2697733776643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43003eb15571%3A0x712da1f0cd802ffd!2sGolden%20Chains%20Trading%20llc!5e0!3m2!1sen!2sae!4v1744301312318!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 