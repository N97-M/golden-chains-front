import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the product type
type Product = {
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  video: string;
  video2?: string;
};

type ProductData = {
  [key: string]: Product;
};

// Product data with additional information and images
const productData: ProductData = {
  'hkt': {
    name: 'HKT',
    description: 'In Tank Fuel Pump',
    longDescription: `HKT specializes in manufacturing high-quality fuel system components.
    Our fuel pump solutions include:
    • Electric In-Tank Fuel Pumps
    • Fuel Pump Assemblies
    • Fuel Pump Modules
    • Fuel Pressure Regulators
    • Fuel Filters`,
    features: [
      'OE Quality Standards',
      'Precise Fuel Delivery',
      'Enhanced Fuel Efficiency',
      'Long Service Life',
      'Wide Vehicle Coverage'
    ],
    images: [
      '/products/HKT/hkt-main.jpg',
      '/products/HKT/HKT1.jpg',
      '/products/HKT/HKT2.jpg',
      '/products/HKT/HKT3.jpg',
      '/products/HKT/HKT4.jpg'
    ],
    video: '/products/HKT/hkt-video.mp4'
  },
  'kyb': {
    name: 'KYB',
    description: 'High-quality shock absorbers and suspension parts',
    longDescription: `KYB is a world-leading manufacturer of shock absorbers and suspension components. 
    Our KYB products include:
    • Shock absorbers
    • Strut assemblies
    • Suspension mounting kits
    • Coil springs
    • Protection kits`,
    features: [
      'OE quality standards',
      'Extensive vehicle coverage',
      'Superior ride comfort',
      'Enhanced vehicle stability',
      'Improved safety performance'
    ],
    images: [
      '/products/KYB/kyb-main.jpg',
      '/products/KYB/KYB-1.jpg',
      '/products/KYB/KYB-2.jpg',
      '/products/KYB/KYB-3.jpg',
      '/products/KYB/KYB-4.jpg'
    ],
    video: '/products/KYB/kyb-video.mp4'
  },
  'perfect-rubber-parts': {
    name: 'PERFECT RUBBER PARTS',
    description: 'Premium rubber components and suspension parts',
    longDescription: `Perfect Rubber Parts specializes in high-quality rubber components for automotive suspension systems.
    Our product range includes:
    • Engine mounting
    • Shock mounting
    • Suspension bushes
    • Stabilizer links
    • Drive shaft boots`,
    features: [
      'ISO 9001:2015 certified',
      'Premium quality materials',
      'Precise fitment',
      'Extended durability',
      'Noise reduction technology'
    ],
    images: [
      '/products/PERFECT-RUBBER/perfect-rubber-main.jpg',
      '/products/PERFECT-RUBBER/PERFECT-1.jpg',
      '/products/PERFECT-RUBBER/PERFECT-2.jpg',
      '/products/PERFECT-RUBBER/PERFECT-3.jpg',
      '/products/PERFECT-RUBBER/PERFECT-4.jpg'
    ],
    video: '/products/PERFECT-RUBBER/perfect-rubber-video.mp4'
  },
  'ibn': {
    name: 'IBN',
    description: 'Quality shock absorbers and suspension components',
    longDescription: `IBN produces reliable shock absorbers and suspension parts made in Korea.
    Our product line includes:
    • Shock absorbers
    • Strut assemblies
    • Ball joints
    • Tie rod ends
    • Control arms`,
    features: [
      'Korean manufacturing',
      'Competitive pricing',
      'Reliable performance',
      'Wide vehicle coverage',
      'Warranty backed'
    ],
    images: [
      '/products/IBN/ibn-main.jpg',
      '/products/IBN/IBN-1.jpg',
      '/products/IBN/IBN-2.jpg',
      '/products/IBN/IBN-3.jpg',
      '/products/IBN/IBN-4.jpg'
    ],
    video: '/products/IBN/ibn-video.mp4'
  },
  'next-auto': {
    name: 'NEXT AUTO',
    description: 'Superior quality gas shock absorbers and steering rack',
    longDescription: `Next Auto specializes in gas shock absorbers with superior quality standards.
    Product highlights:
    • Gas shock absorbers
    • MacPherson struts
    • Cartridges
    • Sport shock absorbers
    • Heavy-duty shocks`,
    features: [
      'Advanced gas technology',
      'Superior ride quality',
      'Enhanced stability',
      'Long service life',
      'Professional grade'
    ],
    images: [
      '/products/NEXT-AUTO/next-auto-main.jpg',
      '/products/NEXT-AUTO/NEXT-1.jpg',
      '/products/NEXT-AUTO/NEXT-2.jpg',
      '/products/NEXT-AUTO/NEXT-3.jpg',
      '/products/NEXT-AUTO/NEXT-5.jpg'
    ],
    video: '/products/NEXT-AUTO/next-auto-video.mp4',
    video2: '/products/NEXT-AUTO/next-auto-video-2.mp4'
  },
  'smart': {
    name: 'SMART',
    description: 'High-quality brake pads and components',
    longDescription: `Smart produces high-performance brake components made in Korea.
    Our brake solutions include:
    • Brake pads
    • Brake shoes`,
    features: [
      'Non-asbestos materials',
      'Low noise operation',
      'Minimal brake dust',
      'Extended pad life',
      'Perfect fit guarantee'
    ],
    images: [
      '/products/SMART/smart-main.jpg',
      '/products/SMART/SMART-1.jpg',
      '/products/SMART/SMART-2.jpg',
      '/products/SMART/SMART-3.jpg',
      '/products/SMART/SMART-4.jpg'
    ],
    video: '/products/SMART/smart-video.mp4'
  },
  'mikatakno': {
    name: 'MIKATAKNO',
    description: 'Engine tune-up and gasket products',
    longDescription: `Mikatakno provides essential engine maintenance and repair products.
    Our range includes:
    • Gasket makers
    • Engine cleaners
    • Carburetor cleaners
    • Foam cleaners
    • Engine tune-up kits`,
    features: [
      'Professional grade formulas',
      'Quick curing time',
      'Temperature resistant',
      'Easy application',
      'Long-lasting results'
    ],
    images: [
      '/products/MIKATAKNO/mikatakno-main.jpg',
      '/products/MIKATAKNO/MIKATAKNO-1.jpg',
      '/products/MIKATAKNO/MIKATAKNO-2.jpg',
      '/products/MIKATAKNO/MIKATAKNO-3.jpg',
      '/products/MIKATAKNO/MIKATAKNO-4.jpg'
    ],
    video: '/products/MIKATAKNO/mikatakno-video.mp4'
  },
  'reliable-choice': {
    name: 'RELIABLE CHOICE (RC)',
    description: 'Trusted automotive parts including shock absorbers, brake pads, and suspension components',
    longDescription: `Reliable Choice (RC) provides dependable automotive parts for various vehicle applications.
    Our product range includes:
    • Shock absorbers
    • Brake pads
    • Suspension components
    • Steering parts
    • Engine components`,
    features: [
      'High quality standards',
      'Competitive pricing',
      'Wide product range',
      'Reliable performance',
      'Excellent value'
    ],
    images: [
      '/products/RC/rc-main.jpg',
      '/products/RC/RC-1.jpg',
      '/products/RC/RC-2.jpg',
      '/products/RC/RC-3.jpg',
      '/products/RC/RC-4.jpg',
      '/products/RC/RC-5.jpg'
    ],
    video: '/products/RC/rc-video.mp4'
  }
};

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProductPage({ params, searchParams }: Props) {
  const product = productData[params.slug as keyof typeof productData];

  if (!product) {
    notFound();
  }

  // Filter out any undefined or empty image paths
  const validImages = product.images.filter(img => img && img.trim() !== '');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="flex items-center text-gray-700">
          <Link 
            href="/" 
            className="text-base text-black font-medium relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-500">
            {product.name}
          </span>
        </nav>

        {/* Product header */}
        <h1 className="text-4xl font-bold text-black mt-8 mb-4">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-8">{product.description}</p>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Main Video Section */}
          <div className="flex justify-center items-center col-span-full mb-8">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden w-full max-w-3xl">
              <video
                className="w-full h-full object-contain"
                controls
                poster={validImages[0]}
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* Images and Second Video */}
          {validImages.slice(0, 3).map((image, index) => (
            <div key={index} className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Second Video Section */}
          <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster={validImages[0]}
            >
              <source src={product.video2 || product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Remaining Images */}
          {validImages.slice(3).map((image, index) => (
            <div key={index + 3} className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`${product.name} - Image ${index + 4}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Interested in our products?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for more information, pricing, and availability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/971545032595"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Contact via WhatsApp
            </Link>
            <Link
              href="tel:+97142957412"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 