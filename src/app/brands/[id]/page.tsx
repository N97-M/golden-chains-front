'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Brand {
  id: number;
  name: string;
  video: string;
}

const brands: Brand[] = [
  { id: 1, name: 'KYB', video: '/brands/kyb-video.mp4' },
  { id: 2, name: 'Perfect Rubber Parts', video: '/brands/perfect-rubber-video.mp4' },
  { id: 3, name: 'IBN', video: '/brands/ibn-video.mp4' },
  { id: 4, name: 'Next Auto', video: '/brands/next-auto-video.mp4' },
  { id: 5, name: 'Smart', video: '/brands/smart-video.mp4' },
  { id: 6, name: 'Mikatakno', video: '/brands/mikatakno-video.mp4' },
  { id: 7, name: 'Reliable Choice (RC)', video: '/brands/rc-video.mp4' },
  { id: 8, name: 'HKT', video: '/brands/hkt-video.mp4' }
];

export default function BrandVideo({ params }: { params: { id: string } }) {
  const router = useRouter();
  const brandId = parseInt(params.id);
  const brand = brands.find(b => b.id === brandId);

  if (!brand) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black">
      {/* Close Button (X) - Now in top left corner */}
      <button
        onClick={() => router.push('/brands')}
        className="absolute top-4 left-4 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Brand Name - Centered at top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-white text-2xl font-bold">{brand.name}</h1>
      </div>

      {/* Video Container - Centered with padding and responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="relative w-full h-full max-w-[90%] max-h-[80%] rounded-lg overflow-hidden bg-black/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              className="max-w-full max-h-full w-auto h-auto object-contain"
              autoPlay
              controls
              loop
              playsInline
            >
              <source src={brand.video} type="video/mp4" />
              عذراً، متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
} 