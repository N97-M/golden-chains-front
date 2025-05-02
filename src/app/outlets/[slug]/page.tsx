'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface OutletDetail {
  title: string;
  address: string;
  location: string;
  mainImage: string;
  subImages: string[];
  description: string;
}

const outletDetails: Record<string, OutletDetail> = {
  'golden-chains': {
    title: 'Showroom (golden-chains)',
    address: 'Shop No. 7, Al Habtoor Building,\nNaif Deira Dubai, UAE',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    mainImage: '/outlets/golden-chains/main.jpg',
    subImages: [
      '/outlets/golden-chains/View1.jpg',
      '/outlets/golden-chains/View2.jpg',
      '/outlets/golden-chains/View3.jpg'
    ],
    description: 'Our main showroom in Dubai, showcasing our extensive range of auto parts and accessories.'
  },
  'hanco-bahri': {
    title: 'Showroom (Hanco - Bahri)',
    address: 'KHARTOUM NORTH\nIndustrial Area\nBuilding No. 32/3\nBlock 1',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    mainImage: '/outlets/hanco-bahri/main.jpg',
    subImages: [
      '/outlets/hanco-bahri/view1.jpg',
      '/outlets/hanco-bahri/view2.jpg'
    ],
    description: 'Our showroom in Khartoum North Industrial Area, offering a wide selection of automotive products and excellent customer service.'
  },
  'hanco-hilat-koko': {
    title: 'Showroom (Hanco - Hilat Koko)',
    address: 'East Nile Branch\nBuilding No. 11\nBlock 5',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    mainImage: '/outlets/hanco-hilat-koko/main.jpg',
    subImages: [
      '/outlets/hanco-hilat-koko/view1.jpg',
      '/outlets/hanco-hilat-koko/view2.jpg'
    ],
    description: 'Our showroom in East Nile area, providing comprehensive automotive solutions with a focus on customer satisfaction.'
  },
  'warehouse-golden-chains': {
    title: 'Warehouse (golden-chains)',
    address: '',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    mainImage: '/outlets/warehouse-golden-chains/main.jpg',
    subImages: [
      '/outlets/warehouse-golden-chains/view1.jpg',
      '/outlets/warehouse-golden-chains/view2.jpg',
      '/outlets/warehouse-golden-chains/view3.jpg'
    ],
    description: 'Our main warehouse facility in Dubai, ensuring efficient distribution and storage of our extensive range of auto parts.'
  },
  'warehouse-hanco': {
    title: 'Warehouse (Hanco - Sudan)',
    address: 'Khartoum North\nIndustrial Area\nBuilding No. 20\nBlock 1',
    location: 'https://maps.app.goo.gl/iDz9HpjFd4ZDx5Mj8',
    mainImage: '/outlets/warehouse-hanco/main.jpg',
    subImages: [
      '/outlets/warehouse-hanco/view1.jpg',
      '/outlets/warehouse-hanco/view2.jpg',
      '/outlets/warehouse-hanco/view3.jpg'
    ],
    description: 'Our warehouse facility in Khartoum North Industrial Area, supporting our operations in Sudan.'
  }
};

export default function OutletDetailPage({ params }: { params: { slug: string } }) {
  const outlet = outletDetails[params.slug];
  const [selectedImage, setSelectedImage] = useState(outlet?.mainImage);

  if (!outlet) {
    return <div>Outlet not found</div>;
  }

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
                <Link href="/outlets" className="text-gray-900 hover:text-black relative group">
                  Outlets
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400 mx-2">›</span>
                <span className="text-gray-900">{outlet.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold text-black mb-12">{outlet.title}</h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Image */}
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="relative h-[500px] w-full">
              <Image
                src={selectedImage}
                alt={outlet.title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>

          {/* Sub Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outlet.subImages.map((image, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-[300px]">
                  <Image
                    src={image}
                    alt={`${outlet.title} - View ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Description and Details */}
          <div className="bg-[#1a1f2e] rounded-lg p-8 text-white">
            <p className="text-lg mb-6">{outlet.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="flex flex-col">
                  <span className="font-semibold text-lg mb-1">Address:</span>
                  <span className="text-gray-300 whitespace-pre-line">{outlet.address}</span>
                </p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Phone:</span> +971 4 295 7412</p>
                <p><span className="font-semibold">Mobile:</span> +971 54 503 2595</p>
                <p><span className="font-semibold">Email:</span> info@goldenchainstrd.com</p>
                <p><span className="font-semibold">WhatsApp:</span> +971 54 503 2595</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 