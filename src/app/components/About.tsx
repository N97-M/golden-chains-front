import Link from 'next/link';

export default function About() {
  return (
    <section className="py-16 bg-[#722F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-3 text-white">
              WELCOME TO
            </h2>
            <h1 className="text-5xl font-bold mb-10 text-white">
              GOLDEN CHAINS TRADING LLC
            </h1>
          </div>
          
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              We are a Dubai based company, specializing in auto spare parts and components trading. 
              As a key player in the automotive industry, we deal with the supply and distribution 
              of various parts and accessories required for vehicle maintenance, repair, and upgrade.
            </p>
            
            <p>
              Our sector includes a wide range of products, from basic mechanical components like brakes, 
              engines, and suspensions to electrical parts, filters, and lighting. We pride ourselves on 
              offering only the highest quality products from trusted brands.
            </p>
          </div>

          <div className="text-right mt-12">
            <Link 
              href="/about"
              className="inline-block bg-white text-[#722F37] px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors text-lg font-medium"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 