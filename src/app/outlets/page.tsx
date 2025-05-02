'use client';
import Link from 'next/link';
import Image from 'next/image';

const uaeOutlets = [
  {
    type: 'warehouse',
    title: 'Golden Chains - Warehouse',
    address: '',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    image: '/outlets/warehouse-golden-chains/main.jpg',
    description: 'Our main warehouse facility in Dubai, ensuring efficient distribution and storage of our extensive range of auto parts.',
    slug: 'warehouse-golden-chains'
  },
  {
    type: 'showroom',
    title: 'Golden Chains - Showroom',
    address: 'Shop No. 7, Al Habtoor Building,\nNaif Deira Dubai, UAE',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    image: '/outlets/golden-chains/main.jpg',
    description: 'Our main showroom in Dubai, showcasing our extensive range of auto parts and accessories.',
    slug: 'golden-chains'
  }
];

const sudanOutlets = [
  {
    type: 'showroom',
    title: 'Showroom (Hanco - Bahri)',
    address: 'KHARTOUM NORTH\nIndustrial Area\nBuilding No. 32/3\nBlock 1',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    image: '/outlets/hanco-bahri/main.jpg',
    description: 'Our showroom in Khartoum North Industrial Area, offering a wide selection of automotive products.',
    slug: 'hanco-bahri'
  },
  {
    type: 'showroom',
    title: 'Showroom (Hanco - Hilat Koko)',
    address: 'East Nile Branch\nBuilding No. 11\nBlock 5',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    image: '/outlets/hanco-hilat-koko/main.jpg',
    description: 'Our showroom in East Nile area, providing comprehensive automotive solutions.',
    slug: 'hanco-hilat-koko'
  },
  {
    type: 'warehouse',
    title: 'Warehouse (Hanco - Sudan)',
    address: 'Khartoum North\nIndustrial Area\nBuilding No. 20\nBlock 1',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    image: '/outlets/warehouse-hanco/main.jpg',
    description: 'Our warehouse facility in Khartoum North Industrial Area, supporting our operations in Sudan.',
    slug: 'warehouse-hanco'
  }
];

export default function OutletsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-16" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-900 hover:text-black relative group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">›</span>
                <span className="text-gray-900">Outlets</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-center text-black mb-16">Our Outlets</h1>
        
        {/* UAE Outlets */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">United Arab Emirates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uaeOutlets.map((outlet, index) => (
              <Link key={index} href={`/outlets/${outlet.slug}`}>
                <div className="bg-[#1a1f2e] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-[300px]">
                    <Image
                      src={outlet.image}
                      alt={outlet.title}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-white mb-2">{outlet.title}</h2>
                    <p className="text-gray-300 text-sm mb-3">{outlet.description}</p>
                    <div className="space-y-1">
                      <p className="text-gray-300 text-sm">
                        {outlet.type === 'warehouse' && outlet.slug === 'warehouse-golden-chains' ? (
                          outlet.address
                        ) : (
                          <>
                            <span className="font-semibold text-white">Address:</span> {outlet.address}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sudan Outlets */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">Sudan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sudanOutlets.map((outlet, index) => (
              <Link key={index} href={`/outlets/${outlet.slug}`}>
                <div className="bg-[#1a1f2e] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-[300px]">
                    <Image
                      src={outlet.image}
                      alt={outlet.title}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-white mb-2">{outlet.title}</h2>
                    <p className="text-gray-300 text-sm mb-3">{outlet.description}</p>
                    <div className="space-y-1">
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold text-white">Address:</span> {outlet.address}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 